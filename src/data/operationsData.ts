export interface PersonnelEntry {
  name: string;
  role: string;
  duty: string;
}

export interface TimelineEntry {
  time: string;
  title?: string;
  event: string;
}

export interface IncidentEntry {
  title: string;
  severity?: string;
  details: string | string[];
}

export interface NotableFinding {
  title: string;
  description?: string;
  bullets?: string[];
}

export interface OperationalRecord {
  id: string;
  slug: string;
  title: string;
  status: "PARTIAL SUCCESS" | "CONCLUDED" | "RESTRICTED" | "UNDER REVIEW" | "ACTIVE" | "MISSION SUCCESSFUL";
  location: string;
  detailedLocation?: string;
  type: "EXPLORATION" | "SCIENCE" | "SECURITY" | "DIPLOMATIC" | "LOGISTICS" | "CLASSIFIED";
  classification: string;
  classificationFootnote?: string;
  summary: string;
  fullMissionSummary: string[];
  personnelList: PersonnelEntry[];
  timeline: TimelineEntry[];
  notableFindings: NotableFinding[];
  incidents: IncidentEntry[];
  personnelNotes: { name: string; note: string }[];
  complianceNotes: string[];
  anomalousFindings: string[];
  captainsLog: {
    author: string;
    text: string[];
  };
  finalAssessment: {
    verdict: string;
    description: string;
    conclusion: string;
  };
}

export const CANONICAL_OPERATIONAL_RECORDS: OperationalRecord[] = [
  {
    id: "PD-0101",
    slug: "pd-0101",
    title: "A City Without Dawn",
    status: "PARTIAL SUCCESS",
    location: "Sharren Ruins",
    detailedLocation: "Sharren Ruins — Subterranean Archive Complex and Unregistered Urban Stratum",
    type: "EXPLORATION",
    classification: "LEVEL 4 RESTRICTED // PARTIAL SUCCESS",
    classificationFootnote: "* Investigation continues. Entry into lower urban strata suspended pending review.",
    summary:
      "A concealed passage beneath the Sharren archives exposes an immaculate subterranean city, an interactive record of an ancient massacre, and a boundary that appears designed to keep something inside.",
    fullMissionSummary: [
      "Parallax personnel were conducting an extended survey of the buried Sharren archival complex when operational priorities temporarily diverged.",
      "Chief Operations Officer Flint Duskbourne remained within the recovered library to examine surviving Charon historical and theological records, while Chief Science Officer Quill Varon concentrated on documents concerning divine and mortal lineages. Director Onix maintained observation from an elevated structural position near the excavation. Elsewhere, Fenn, Reggie, and Kant returned to the original descent zone to recover usable material from the wreckage of the Hammer & Cog, a previous expedition asset lost during access to the site.",
      "The salvage operation produced one item of immediate scientific interest: Chief Engineering Officer Kant Vixit isolated a minute residual grain from a shattered Starshard. Although the fragment no longer possessed the structural integrity of the original material, instrumentation continued to register an energetic residue inconsistent with ordinary mineral or reactor products. The sample was secured for controlled analysis.",
      "During the same interval, Director of Special Acquisitions Cass extended reconnaissance beyond the known library perimeter. A faint but persistent air current led him down a sloping natural passage and toward what appeared to be a deliberately constructed terminal wall. Inspection revealed that the barrier's visible surface did not correspond to its physical boundary. Cass proceeded through the occlusion layer and emerged onto an elevated stone platform overlooking a previously undocumented subterranean city.",
      "The urban complex extended well beyond the illumination range of available equipment. Its streets, towers, and public structures appeared substantially intact and were composed in part from a dark material exhibiting a subdued green luminescence. No active population was visible.",
      "Cass's initial survey was interrupted by an unidentified gaunt humanoid entity with gray skin and a flowing garment. The entity appeared without a detectable approach vector, physically seized Cass, and drove him backward against a mineral formation before disappearing with comparable abruptness. Cass sustained a moderate penetrating injury and conducted an immediate independent withdrawal to the archival complex.",
      "Following his report, Fenn and Chief Security Marshal Reggie entered the concealed passage to verify the discovery and determine whether the newly identified area represented an active threat to the excavation. They crossed the same occlusion boundary and descended into the abandoned city by way of an extensive spiral stair.",
      "The city showed little evidence of conventional decay. Streets remained clear, structures retained unusually precise surfaces, and the green-shimmering construction medium appeared largely untouched by the passage of time. The absence of occupants was therefore considered more significant than simple abandonment.",
      "Fenn and Reggie proceeded to a prominent ceremonial structure dominated by a marble figure of a robed woman. A large decorative panel above the chamber displayed a pair of eyes surrounded by seven stars. An anomalous-spectrum scan conducted by Fenn detected active energetic behavior within what had previously appeared to be an inert site.",
      "Immediately afterward, architectural features absent moments earlier began to manifest inside the chamber.",
      "Translucent doors formed across the temple entrances. Silver-robed figures entered and assembled as if participating in a historical service. A priest followed and delivered an address in an archaic Primordial dialect praising Selûne and warning the congregation of an approaching eclipse.",
      "The manifestation initially behaved like an environmental reconstruction or preserved event. That interpretation became untenable when an initiate identified as Shanara Nayalara approached the podium.",
      "Nayalara's eyes developed a pronounced red luminescence. She openly declared allegiance to Shar, generated two large violet crescent-shaped energy structures, and used them to kill the presiding priest and the assembled congregation.",
      "The historical sequence then acknowledged the presence of Parallax personnel.",
      "Nayalara and additional violet manifestations redirected their attention toward Fenn and Reggie and began producing repeated high-velocity crescent attacks with measurable physical effects. Both personnel sustained significant laceration injuries during the initial contact.",
      "Fenn initiated an emergency short-range displacement procedure, relocating himself and Reggie to a neighboring rooftop. The maneuver created temporary distance but did not terminate pursuit. Multiple spectral entities emerged throughout the surrounding district, while additional armed figures carrying curved blades began occupying likely escape routes.",
      "Reggie assumed primary responsibility for physical extraction. While shielding Fenn from incoming attacks, he carried him across one of the city's larger structural gaps using high-impulse mobility equipment, then continued the withdrawal through elevated streets and stair systems as manifested personnel climbed surrounding structures in pursuit.",
      "At the upper access level, Fenn and Reggie crossed the original occlusion boundary under a final concentrated attack.",
      "All pursuing manifestations and emitted crescent structures terminated immediately upon reaching the boundary.",
      "The two personnel returned to the Sharren archive with moderate-to-severe injuries and substantial new information regarding the site's lower strata.",
      "Their arrival coincided with an escalating dispute between Captain Dark Eye and Flint Duskbourne. The Sharren security commander attributed recently observed disturbances within the ruins to unauthorized Parallax activity and asserted that Fenn and Reggie had, in practical terms, 'awakened the dead.' Proposed disciplinary measures included execution under local heresy provisions.",
      "Flint stabilized Reggie's condition using available field medical equipment before addressing the jurisdictional issue. He invoked Parallax diplomatic standing, the expedition's existing authorization, and the authority of Nightseer Vauthry to prevent immediate punitive action.",
      "Local security ultimately accepted de-escalation.",
      "Parallax personnel were escorted from the subterranean complex using the excavation's manually operated lift system. Sharren medical personnel treated and cleaned the injured staff at the surface installation.",
      "Further entry into the concealed city was suspended pending review.",
      "The expedition relocated to the Broken Blade Lodge for recovery and analysis of the findings.",
      "During departure, Chief Science Officer Quill Varon also secured a satchel containing several Sharren archival volumes for off-site examination. Available documentation indicates that the transfer was performed discreetly and without introducing unnecessary administrative dependencies.",
      "Parallax Dynamics continues to classify this as an exploration success with unresolved environmental complications."
    ],
    personnelList: [
      {
        name: "Flint Duskbourne",
        role: "Chief Operations Officer",
        duty: "Field command, historical review, medical stabilization, diplomatic intervention.",
      },
      {
        name: "Quill Varon",
        role: "Chief Science Officer",
        duty: "Historical and theological lineage research; archival material acquisition.",
      },
      {
        name: "Fenn",
        role: "Vice President of Corporate Relations",
        duty: "Secondary reconnaissance; anomalous-spectrum analysis; emergency extraction.",
      },
      {
        name: "Cass",
        role: "Director of Special Acquisitions",
        duty: "Forward reconnaissance; initial discovery of concealed urban complex.",
      },
      {
        name: "Kant Vixit",
        role: "Chief Engineering Officer",
        duty: "Salvage operations at the Hammer & Cog wreckage; Starshard residue recovery.",
      },
      {
        name: "Onix",
        role: "Director of Xenobiology & Medical Research",
        duty: "Perimeter observation and expedition support.",
      },
      {
        name: "Reggie",
        role: "Chief Security Marshal",
        duty: "Secondary reconnaissance, protective response, and emergency withdrawal.",
      },
      {
        name: "Captain Dark Eye",
        role: "Sharren Excavation Security",
        duty: "Excavation security commander.",
      },
      {
        name: "Nightseer Vauthry",
        role: "Senior Sharren Authority",
        duty: "Senior authority whose standing was subsequently invoked during the incident review.",
      },
      {
        name: "Shanara Nayalara",
        role: "Historical Entity / Initiate",
        duty: "Individual observed within an anomalous historical event beneath the ruins; apparent covert adherent of Shar.",
      },
    ],
    timeline: [
      {
        time: "01",
        title: "Archival Survey",
        event: "Flint and Quill continue research within the lost Sharren library while Onix maintains elevated observation of the excavation zone.",
      },
      {
        time: "02",
        title: "Hammer & Cog Recovery",
        event: "Fenn, Reggie, and Kant salvage usable materials from the expedition wreckage. Kant isolates a residual energetic grain from a destroyed Starshard.",
      },
      {
        time: "03",
        title: "Concealed Access Located",
        event: "Cass traces an anomalous air current through a false structural barrier and discovers an undocumented subterranean city exhibiting widespread green luminescence.",
      },
      {
        time: "04",
        title: "First Contact",
        event: "An unidentified gray-skinned humanoid entity attacks Cass and disappears. Cass withdraws to the library with moderate injuries.",
      },
      {
        time: "05",
        title: "Urban Reconnaissance",
        event: "Fenn and Reggie enter the newly discovered city and identify an intact temple containing Selûnite imagery and unusual energetic activity.",
      },
      {
        time: "06",
        title: "Historical Manifestation",
        event: "The temple generates an apparent reconstruction of a Selûnite congregation. Shanara Nayalara reveals allegiance to Shar and massacres the manifested priest and congregation.",
      },
      {
        time: "07",
        title: "Manifestation Breach",
        event: "The reconstruction reacts directly to Fenn and Reggie. Hostile spectral entities pursue them across the city until both personnel escape through the original occlusion boundary.",
      },
      {
        time: "08",
        title: "Diplomatic Extraction",
        event: "Captain Dark Eye threatens punitive action over the disturbance. Flint invokes Nightseer Vauthry's authority and expedition standing, preventing escalation. Parallax withdraws to the Broken Blade Lodge.",
      },
    ],
    notableFindings: [
      {
        title: "Subterranean Sharren City",
        description: "A major urban complex exists beneath the known Sharren ruins and appears to have remained sealed from conventional access.",
        bullets: [
          "exceptionally well-preserved roads and structures",
          "dark construction material with persistent green luminescence",
          "no visible living population",
          "artificial concealment of the primary access route",
          "an apparent containment effect preventing certain manifested entities from crossing the access boundary",
          "ceremonial architecture connected to Selûne",
          "evidence of an ancient ideological conflict involving Shar",
          "the extent of the settlement remains unknown",
        ],
      },
      {
        title: "Starshard Residue",
        description:
          "Kant Vixit recovered a microscopic energetic residue from the remains of a shattered Starshard at the Hammer & Cog wreckage. The sample is to be treated as scientifically active until demonstrated otherwise.",
      },
      {
        title: "Temple Event",
        description:
          "The temple manifestation reproduced a historical gathering with a degree of sensory fidelity beyond conventional holographic or archival technology. Of particular concern, the event transitioned from passive reconstruction to direct interaction with contemporary observers. This raises several unresolved possibilities:",
        bullets: [
          "the manifestation is an autonomous defense system using historical material",
          "the city preserves high-fidelity psychometric or chronological impressions",
          "the observed event represents a repeatable temporal phenomenon rather than a recording",
          "the original participants persist in some non-biological state",
          "the distinction between those explanations may be operationally unimportant",
          "further controlled observation is required",
        ],
      },
    ],
    incidents: [
      {
        title: "Cass — Unidentified Entity Contact",
        severity: "Moderate",
        details: [
          "Cass sustained a penetrating injury after physical contact with an unidentified gray humanoid entity near the newly discovered city overlook.",
          "The entity demonstrated an unexplained ability to appear and disappear without detectable transit through the intervening space.",
          "No pursuit beyond the immediate contact zone was observed.",
        ],
      },
      {
        title: "Fenn / Reggie — Temple Manifestation",
        severity: "Severe operational exposure; non-fatal",
        details: [
          "Both personnel sustained multiple laceration injuries caused by manifested crescent-shaped projectiles during withdrawal from the temple district.",
          "Reggie received additional injuries while physically shielding Fenn and conducting the final extraction.",
          "No hostile manifestation successfully crossed the concealed city boundary.",
        ],
      },
      {
        title: "Jurisdictional Dispute",
        details: [
          "Captain Dark Eye attributed the site's anomalous activity to Parallax personnel and threatened execution under Sharren religious law.",
          "Chief Operations Officer Duskbourne resolved the matter without additional casualties, detentions, or changes in local leadership.",
          "Corporate Relations has categorized the exchange as a successful clarification of operational jurisdiction.",
        ],
      },
    ],
    personnelNotes: [
      {
        name: "Cass",
        note: "demonstrated appropriate initiative in identifying the concealed access route. Solo entry into unknown underground metropolitan environments remains outside preferred reconnaissance methodology, despite its repeated historical effectiveness.",
      },
      {
        name: "Fenn",
        note: "successfully identified energetic activity inside the temple and executed the displacement maneuver that prevented immediate incapacitation.",
      },
      {
        name: "Reggie",
        note: "maintained protective responsibility during sustained pursuit and enabled both personnel to reach the containment boundary despite significant injuries.",
      },
      {
        name: "Flint",
        note: "prevented a security incident from becoming a diplomatic or capital-punishment incident while simultaneously stabilizing injured personnel.",
      },
      {
        name: "Kant",
        note: "recovered the only confirmed Starshard material from the Hammer & Cog debris field.",
      },
      {
        name: "Onix",
        note: "maintained expedition overwatch and subsequently regrouped with the extraction team.",
      },
      {
        name: "Quill",
        note: "obtained several historically valuable texts whose removal from Sharren custody was not included in the original archival access agreement. Science Division has requested that the phrase 'removal from Sharren custody' be replaced in future documentation with 'continuity-preserving off-site conservation.' Request approved.",
      },
    ],
    complianceNotes: [
      "Entry into the concealed urban complex was not part of the original excavation plan.",
      "No Parallax employee was authorized to intentionally activate ancient religious infrastructure.",
      "Current evidence does not establish that intentional activation occurred.",
      "The site's apparent dead population should not be considered harmless solely on the basis of being dead.",
      "Local theological prohibitions remain in force for subsequent visits.",
      "Future teams should notify Sharren security before entering undocumented subterranean cities whenever operationally practical.",
      "Archival materials currently undergoing off-site examination are not considered stolen property while chain-of-custody terminology remains under review.",
    ],
    anomalousFindings: [
      "The most significant discovery is not the presence of holographic imagery but the manifestation's ability to become causally responsive.",
      "The temple sequence contained identifiable people, consistent ceremonial behavior, spoken language, ideological context, and a discrete violent event involving Shanara Nayalara. After completing or partially completing that sequence, the phenomenon recognized Fenn and Reggie as external participants and produced attacks capable of damaging contemporary biological tissue.",
      "Equally important is the behavior of the city's access boundary. Hostile manifestations pursued Parallax personnel to the precise point at which they crossed the concealed wall. Emitted projectiles dissipated at or immediately beyond that interface.",
      "The simplest working conclusion is that the barrier serves more than a concealment function. Whether it is a containment boundary, jurisdictional limit within a larger anomalous system, or physical edge of the phenomenon remains unresolved.",
      "Science Division recommends future instrumentation on both sides of the boundary before additional inhabited testing is approved.",
      "Axiom IV remains applicable: 'Progress requires uncertainty.' For clarity, this is not authorization to manufacture additional uncertainty."
    ],
    captainsLog: {
      author: "Flint Duskbourne, Chief Operations Officer",
      text: [
        "We found a city under a ruin that was already under another ruin.",
        "It looks maintained. It is empty. Something inside it stabbed Cass, vanished, and apparently decided that was sufficient introduction.",
        "Fenn and Reggie then discovered a temple capable of replaying a centuries-old massacre and, more importantly, capable of noticing when someone new entered the room. Whatever happened there was not satisfied with being history.",
        "Dark Eye wanted them executed for waking the dead.",
        "I objected primarily because they are our dead to wake while operating under a valid expedition agreement.",
        "We are leaving the city alone until everyone has stopped bleeding and Quill finishes insisting that the books in his bag became Parallax property through 'custodial momentum.'",
        "We will return.",
        "There is always something beyond the horizon.",
        "Apparently, sometimes the horizon is underground."
      ],
    },
    finalAssessment: {
      verdict: "PARTIAL SUCCESS",
      description:
        "A previously undocumented Sharren urban complex was discovered and its access route confirmed. Parallax obtained evidence of an anomalous historical phenomenon capable of physically interacting with contemporary observers, recovered a residual Starshard sample, preserved valuable archival material for further study, and extracted all personnel alive. The lower city remains unexplored. The nature of its inhabitants, the purpose of its containment boundary, the mechanism behind the temple manifestation, and the historical role of Shanara Nayalara remain unresolved.",
      conclusion: "INVESTIGATION CONTINUES.",
    },
  },
];

export function getOperationalRecord(slugOrId: string): OperationalRecord | undefined {
  const normalized = slugOrId.toLowerCase().trim();
  return CANONICAL_OPERATIONAL_RECORDS.find(
    (rec) => rec.id.toLowerCase() === normalized || rec.slug.toLowerCase() === normalized
  );
}

export function getAllOperationalRecords(): OperationalRecord[] {
  return [...CANONICAL_OPERATIONAL_RECORDS];
}
