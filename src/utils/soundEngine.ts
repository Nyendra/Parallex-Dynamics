"use client";

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private isMuted: boolean = true;
  private listeners: Set<(muted: boolean) => void> = new Set();

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggleMute(): boolean {
    this.initCtx();

    if (!this.ctx) return true;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbience();
      this.playBeep(880, 0.08, "sine");
    } else {
      this.stopAmbience();
    }

    this.notify();
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public subscribe(listener: (muted: boolean) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => l(this.isMuted));
  }

  private startAmbience() {
    if (!this.ctx) return;
    if (this.masterGain) return; // already playing

    try {
      const now = this.ctx.currentTime;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, now + 3);

      // Low pass filter for deep hum
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(140, now);
      this.filter.Q.setValueAtTime(4, now);

      // Sub-bass oscillator
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = "sine";
      this.osc1.frequency.setValueAtTime(55, now); // A1 note

      // Detuned second oscillator for space warmth
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = "triangle";
      this.osc2.frequency.setValueAtTime(110.5, now);

      // Slow ambient LFO pulse
      this.lfo = this.ctx.createOscillator();
      this.lfo.type = "sine";
      this.lfo.frequency.setValueAtTime(0.15, now);

      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(30, now);
      this.lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.osc1.start(now);
      this.osc2.start(now);
      this.lfo.start(now);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  private stopAmbience() {
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1);

      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.lfo?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
          this.lfo?.disconnect();
          this.filter?.disconnect();
          this.masterGain?.disconnect();
          this.osc1 = null;
          this.osc2 = null;
          this.lfo = null;
          this.filter = null;
          this.masterGain = null;
        } catch {
          // ignore cleanup errors
        }
      }, 1050);
    } catch {
      this.masterGain = null;
    }
  }

  public playClick() {
    if (this.isMuted) return;
    this.playBeep(1200, 0.03, "sine", 0.04);
  }

  public playHover() {
    if (this.isMuted) return;
    this.playBeep(600, 0.02, "triangle", 0.02);
  }

  private playBeep(freq: number, duration: number, type: OscillatorType = "sine", gainVal: number = 0.05) {
    this.initCtx();
    if (!this.ctx || this.isMuted) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // ignore
    }
  }
}

export const soundEngine = typeof window !== "undefined" ? new SoundEngine() : null;
