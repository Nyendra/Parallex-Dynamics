export interface MVPPersonnel {
  id: string;
  name: string;
  position: string;
  designation: string;
  recognitionStatus: string;
  division: string;
  biography: string;
  image: string;
  personnelId: string;
  activeStatus: string;
}

export interface MVPProgramData {
  eyebrow?: string;
  heading: string;
  description: string;
  disclaimer: string;
  personnel: MVPPersonnel[];
}

export const MVP_PROGRAM_DATA: MVPProgramData = {
  heading: "MISSION-VALUED PERSONNEL",
  description:
    "Paradallax Initiative recognizes exceptional personnel whose contributions have demonstrably advanced mission objectives, operational readiness, and the continued pursuit of human progress beyond established boundaries.",
  disclaimer:
    "Recognition does not constitute promotion, compensation adjustment, or modification of existing employment conditions.",
  personnel: [
    {
      id: "PD-PSN-84920147",
      name: "Gabriel Vale",
      position: "Senior Medical & Humanitarian Specialist",
      designation: "Mission-Valued Personnel",
      recognitionStatus: "CURRENT M.V.P.",
      division: "Medical Operations & Personnel Welfare",
      biography:
        "Gabriel Vale provides frontline trauma care, personnel recovery, and operational welfare support across Paradallax deployments. Distinguished by his calm demeanor and commitment to life preservation, Vale has earned leadership's trust by stabilizing volatile situations and restoring injured personnel under extraordinary circumstances. Combining advanced restorative technologies with a conviction that even unconventional personnel deserve care, his ethical recommendations remain a valuable contribution to organizational stability.",
      image: "/media/founders/gabriel-vale.png",
      personnelId: "PD-PSN-84920147",
      activeStatus: "ACTIVE",
    },
  ],
};
