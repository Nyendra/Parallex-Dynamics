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
  notes?: string[];
}

export interface AnomalousFindingEntry {
  title: string;
  description?: string;
  resultHeader?: string;
  bullets?: string[];
  notes?: string[];
}

export interface PropertyDamageEntry {
  items: string[];
  outcome?: string;
}

export interface OperationalRecord {
  id: string;
  slug: string;
  title: string;
  status:
    | "PARTIAL SUCCESS"
    | "CONCLUDED"
    | "RESTRICTED"
    | "UNDER REVIEW"
    | "ACTIVE"
    | "MISSION SUCCESSFUL"
    | "OBJECTIVE ACHIEVED"
    | "COMPLETE — RESTRICTED INTERNAL DISTRIBUTION";
  statusBadge?: string;
  location: string;
  detailedLocation?: string;
  type: "EXPLORATION" | "SCIENCE" | "SECURITY" | "DIPLOMATIC" | "LOGISTICS" | "CLASSIFIED";
  classification: string;
  classificationFootnote?: string;
  summary: string;
  metaDescription?: string;
  fullMissionSummary: string[];
  personnelList: PersonnelEntry[];
  associatedPersonnel?: PersonnelEntry[];
  timeline: TimelineEntry[];
  notableFindings: NotableFinding[];
  incidents: IncidentEntry[];
  propertyDamage?: PropertyDamageEntry;
  personnelNotes: { name: string; note: string | string[] }[];
  diplomaticConsequences?: string[];
  complianceNotes: string[];
  anomalousFindings: (string | AnomalousFindingEntry)[];
  captainsLog: {
    author: string;
    text: string[];
  };
  finalAssessment: {
    verdict: string;
    description: string | string[];
    conclusion: string;
  };
}

export const CANONICAL_OPERATIONAL_RECORDS: OperationalRecord[] = [
  {
    id: "PD-0104",
    slug: "pd-0104",
    title: "A Key for Every Cage",
    status: "OBJECTIVE ACHIEVED",
    location: "Nebuch Metropolitan Zone",
    detailedLocation:
      "Nebuch Metropolitan Zone — Old Town, Red Road Exchange, Gwynplaine's Children Forward Camp",
    type: "CLASSIFIED",
    classification: "LEVEL 5 CLASSIFIED // COMPLETE — RESTRICTED INTERNAL DISTRIBUTION",
    summary:
      "During final expedition preparations in Nebuch, Paradallax operatives execute a covert acquisition in the Red Road Exchange to recover a captive juvenile owlbear. The operation results in fatal defensive contact with broker Boris, the liberation of surviving inventory, and the recovery of anomalous spatial-translocation devices.",
    metaDescription:
      "A classified Paradallax Initiative acquisition operation in Nebuch's Red Road Exchange recovers a captive juvenile owlbear, reveals anomalous spatial-access keys, and ends in the fatal engagement of broker Boris.",
    fullMissionSummary: [
      "Paradallax personnel used the final operational window in Nebuch to replenish supplies, liquidate repaired equipment, conduct limited research, and prepare Gwynplaine's Children for its continued southbound expedition. Chief Security Marshal Reggie successfully transferred twelve refurbished weapons to an Old Town fabricator, receiving both compensation and unsolicited criticism regarding his finishing technique. The fabricator expressed conditional willingness to discuss further professional instruction should Reggie return to Nebuch.",
      "Procurement activities subsequently moved into the Red Road Exchange, an unofficial commercial district whose understanding of product provenance remains usefully flexible. Reggie, Fenn, and Gabriel acquired medical supplies and specialist access equipment while surveying vendors. During this process, Reggie and Gabriel encountered an exotic-fauna dealer operating under the name Boris. Behind the dealer's conventional transport enclosure was a spatially concealed biological inventory containing several high-value organisms, including griffin and drake embryos, a juvenile displacer organism, and a juvenile owlbear.",
      "The organisms appeared to be maintained primarily as luxury commodities. Reggie developed an immediate interest in recovering the owlbear juvenile and expressed substantial concern regarding the broker's treatment of his inventory. Following consultation with Fenn and Cass, a pre-dawn Special Acquisition was authorized at the field level. No surviving documentation identifies the executive who authorized it, which is operationally convenient.",
      "The recovery team returned to the Red Road under altered identities. Reggie employed a subdermal adaptive-disguise system to assume the appearance of a trapper using the name \"Norris.\" Cass entered under optical concealment, while Fenn adopted a separate synthetic identity profile. The plan called for Boris to be displaced from his transport enclosure long enough for the team to access the concealed inventory.",
      "Boris did not cooperate with the intended sequence. Upon answering the disturbance, he became physically aggressive and attempted to drag Reggie into the transport compartment. Reggie responded with force. During the resulting close-quarters struggle, Boris sustained catastrophic cervical trauma and died immediately.",
      "With the operation's original parameters no longer applicable, Fenn and Cass entered the enclosure and secured the site. A keyring recovered from Boris contained two anomalously active access devices. Field scanning indicated strong spatial-translocation signatures. One device opened access to an architecturally impossible marble bathing suite occupying considerably more internal volume than the transport platform could physically contain. The second exposed a similarly displaced biological holding facility containing Boris's caged inventory.",
      "The owlbear juvenile was located alive. Cass applied a temporary morphogenic transformation, reducing the organism to a mouse-scale biological form so it could be moved safely within Fenn's dimensional storage system. Once the priority organism had been secured, the team opened the remaining containment units and released Boris's surviving stock into the surrounding district rather than leave them confined.",
      "Boris's remains were placed temporarily inside the same dimensional storage network to prevent immediate discovery at the scene. The team then returned to Gwynplaine's Children without further contact.",
      "Chief Engineering Officer Kant immediately identified significant behavioral distress in Reggie on his return. Cass described the incident as an acquisition attempt followed by defensive force after Boris initiated physical contact. Flint registered clear concern regarding the explanation but elected to prioritize expedition readiness and the immediate departure from Nebuch. Kant later informed Reggie privately that, based on the circumstances presented, he regarded the fatal response as self-defense.",
      "Parallel work at the forward camp continued throughout the operation. Kant replenished fabrication stock, energetic compounds, scrap materials, and ignition components. Flint completed maintenance on expedition armor and weapons. Gabriel and Onix manufactured basic regenerative compounds, while Quill continued analysis of recovered archival material.",
      "Before departure, Quill identified two sites warranting investigation along the planned southern route. The first, Maglandak, is a valley associated with reports of lithic formations that appear to breathe, disembodied voices or acoustic echoes without obvious sources, and an exceptionally preserved scale-like artifact capable of shifting color. Farther along the route lies a reported Baphomet remnant, the nature of which remains unresolved.",
      "Gabriel and Onix additionally tested a conventional regenerative field against Onix's atypical necrobiological physiology. The field produced neither the destructive response that some models predicted nor any measurable restoration of Onix's vitality.",
      "Following completion of loading and maintenance, Paradallax personnel departed Nebuch aboard Gwynplaine's Children and continued south."
    ],
    personnelList: [
      {
        name: "Reggie",
        role: "Chief Security Marshal",
        duty: "Primary field operative during the Red Road acquisition. Conducted initial reconnaissance, direct engagement, and recovery of the target organism."
      },
      {
        name: "Fenn",
        role: "Vice President of Corporate Relations",
        duty: "Provided acquisition support, identity obfuscation, anomalous scanning, and secure dimensional storage."
      },
      {
        name: "Cass",
        role: "Director of Special Acquisitions",
        duty: "Provided covert entry capability and specialist assistance during extraction."
      },
      {
        name: "Flint Duskbourne",
        role: "Chief Operations Officer",
        duty: "Maintained expedition readiness at the forward camp and managed departure preparations following the incident."
      },
      {
        name: "Quill Varon",
        role: "Chief Science Officer",
        duty: "Conducted archival analysis and identified two significant locations along the expedition's southern route."
      },
      {
        name: "Kant Vixit",
        role: "Chief Engineering Officer",
        duty: "Acquired additional engineering materials and provided post-incident personnel support."
      },
      {
        name: "Onix",
        role: "Director of Xenobiology & Medical Research",
        duty: "Assisted with production and testing of expeditionary medical compounds."
      },
      {
        name: "Gabriel",
        role: "Expedition Associate",
        duty: "Supported Red Road procurement activity and medical-compound preparation."
      }
    ],
    associatedPersonnel: [
      {
        name: "Lia",
        role: "Expedition Associate",
        duty: "Present at Gwynplaine's Children during final equipment servicing and departure preparations."
      },
      {
        name: "Boris",
        role: "Independent Exotic Fauna Broker",
        duty: "Operator of an unregistered exotic-organism dealership within the Red Road Exchange. Deceased during the acquisition incident."
      }
    ],
    timeline: [
      {
        time: "01",
        title: "Old Town Equipment Transfer",
        event: "Reggie sells twelve refurbished weapons to a local fabricator and establishes the possibility of future technical instruction."
      },
      {
        time: "02",
        title: "Red Road Procurement",
        event: "Medical compounds and specialist intrusion equipment are acquired. Boris's concealed exotic-fauna inventory is discovered."
      },
      {
        time: "03",
        title: "Acquisition Planning",
        event: "Reggie, Fenn, and Cass agree to recover the juvenile owlbear during the pre-dawn period using covert identities and concealment systems."
      },
      {
        time: "04",
        title: "Fatal Contact",
        event: "Boris becomes physically aggressive during the diversion. Reggie engages him at close range, resulting in fatal cervical trauma."
      },
      {
        time: "05",
        title: "Spatial Compartments Identified",
        event: "Two anomalous access keys reveal impossible-volume spaces hidden within Boris's transport unit: a private bathing facility and an exotic-organism holding complex."
      },
      {
        time: "06",
        title: "Xenofauna Recovery",
        event: "Cass temporarily reduces the owlbear juvenile to a transportable morphology. Fenn secures it in dimensional storage. Remaining captive organisms are released."
      },
      {
        time: "07",
        title: "Internal Debrief",
        event: "The team returns to Gwynplaine's Children. Kant recognizes Reggie's distress, Flint questions the circumstances, and preparations for immediate departure continue."
      },
      {
        time: "08",
        title: "Southern Route Confirmed",
        event: "Quill briefs the expedition on Maglandak and the Baphomet remnant. Paradallax leaves Nebuch and proceeds south."
      }
    ],
    notableFindings: [
      {
        title: "Boris Spatial Access Keys",
        description:
          "Two compact access devices recovered from Boris produced measurable anomalous signatures.",
        bullets: [
          "One provided entry to a marble bathing complex whose internal dimensions cannot be reconciled with the external volume of the transport enclosure.",
          "The second provided access to a concealed biological holding area containing multiple large organisms.",
          "The keys appear to function less as mechanical access devices and more as authentication anchors for spatially displaced environments.",
          "Further examination was not performed prior to departure."
        ]
      },
      {
        title: "Exotic Biological Inventory",
        description: "Confirmed inventory included:",
        bullets: [
          "one griffin-class embryo",
          "one drake-class embryo",
          "one juvenile displacer organism",
          "one juvenile owlbear",
          "additional captive fauna of lesser operational interest"
        ],
        notes: [
          "The juvenile owlbear was recovered by Paradallax personnel.",
          "Other surviving organisms were released from confinement."
        ]
      }
    ],
    anomalousFindings: [
      {
        title: "Maglandak",
        description:
          "Archival analysis conducted by Chief Science Officer Quill identifies Maglandak as a potentially significant anomalous zone along the expedition's southern route. Reports consistently reference:",
        bullets: [
          "stone formations exhibiting rhythmic movement comparable to respiration",
          "voices or echoes without identifiable speakers",
          "a pristine scale-like artifact displaying active chromatic variation"
        ],
        notes: [
          "The reliability and common origin of these reports remain undetermined.",
          "Maglandak has been marked for potential field investigation."
        ]
      },
      {
        title: "Baphomet Remnant",
        description:
          "Records also indicate the existence of a surviving Baphomet-associated structure, entity, or technological remnant farther along the same route.",
        notes: [
          "Available information is insufficient for classification.",
          "Investigation remains pending."
        ]
      },
      {
        title: "Necrobiological Regeneration Trial",
        description:
          "Gabriel and Onix performed a limited test of a standard regenerative effect against Onix's necrobiological condition.",
        resultHeader: "Observed result:",
        bullets: [
          "no destructive interaction",
          "no physiological restoration",
          "no measurable improvement in vitality"
        ],
        notes: [
          "The test establishes that incompatibility does not necessarily imply toxicity.",
          "Further study is authorized when appropriate."
        ]
      }
    ],
    incidents: [
      {
        title: "RED ROAD FATALITY — BORIS",
        severity: "Critical / Fatal",
        details: [
          "Boris initiated physical contact while attempting to forcibly pull Chief Security Marshal Reggie into his transport enclosure.",
          "Reggie responded immediately.",
          "The engagement resulted in catastrophic cervical trauma to Boris and instantaneous death.",
          "No evidence indicates that the fatal outcome was planned prior to contact.",
          "The body was removed from the site to delay discovery of the acquisition operation."
        ]
      }
    ],
    personnelNotes: [
      {
        name: "Chief Security Marshal Reggie",
        note: [
          "Reggie demonstrated significant post-incident distress following the death of Boris.",
          "Personnel familiar with his prior decision-making also observed a noticeable reduction in his reluctance toward extralegal action during planning for the acquisition. His stated motivations combined concern for the captive organism with a strong personal desire to retain it as a long-term companion.",
          "These motives are not considered mutually exclusive.",
          "No immediate restriction of duties was imposed."
        ]
      },
      {
        name: "Chief Engineering Officer Kant Vixit",
        note: [
          "Kant was the first member of the wider expedition to recognize Reggie's altered demeanor after the operation.",
          "He later provided direct reassurance that the fatal encounter constituted self-defense according to the version of events disclosed to him."
        ]
      },
      {
        name: "Chief Operations Officer Flint Duskbourne",
        note: [
          "Flint displayed visible concern regarding the returning team's explanation and the timing of the operation.",
          "He nevertheless prioritized securing Gwynplaine's Children and removing expedition personnel from Nebuch before local circumstances could evolve further.",
          "This decision substantially improved schedule adherence."
        ]
      }
    ],
    complianceNotes: [
      "Special Acquisition Classification: Retroactively applicable.",
      "The term \"recovery\" in this record describes the physical movement of biological assets and does not constitute a legal determination regarding ownership.",
      "Paradallax Initiative does not endorse trafficking in sentient, near-sentient, endangered, anomalous, weaponized, emotionally compelling, or unusually marketable organisms unless all appropriate internal acquisition procedures have been followed.",
      "At the time of this operation, several such procedures had not yet been written.",
      "The liberation of Boris's remaining inventory was not part of the original acquisition objective but is considered an acceptable mitigation measure.",
      "Removal of the deceased broker from the incident location was conducted for operational-security purposes and should not be interpreted as evidence of procedural anxiety."
    ],
    captainsLog: {
      author: "Chief Security Marshal Reggie",
      text: [
        "I wanted the cub.",
        "That's the detail the clean version of this will never make less important.",
        "Boris kept those creatures in cages and was asking enough money for them that nobody buying one was going to think of it as anything except property. I decided that made taking one acceptable. Maybe it did. Maybe I just wanted a reason that sounded better than wanting it.",
        "He grabbed me first.",
        "I remember that clearly.",
        "I also remember how little force it took after that.",
        "Kant says it was self-defense. Cass says the same thing in more professional language. Flint didn't say much at all.",
        "The cub is alive.",
        "The others aren't in cages anymore.",
        "Boris is dead.",
        "All three of those things can be true at once."
      ]
    },
    finalAssessment: {
      verdict: "OBJECTIVE ACHIEVED",
      description: [
        "Priority organism successfully recovered.",
        "Additional captive organisms released.",
        "Exotic spatial-access technology identified.",
        "No Paradallax personnel lost.",
        "Nebuch operations concluded ahead of local investigative response.",
        "Expedition successfully resumed its southern route.",
        "Next prospective investigation: Maglandak."
      ],
      conclusion:
        "Axiom II — Knowledge belongs to those willing to seek it. // Paradallax Initiative notes that the Axiom contains no explicit procurement guidance."
    }
  },
  {
    id: "PD-0103",
    slug: "pd-0103",
    title: "The Line in the Dust",
    status: "OBJECTIVE ACHIEVED",
    location: "Gwynplain Children’s Refuge, Sharan Territory",
    detailedLocation: "Gwynplain Children’s Refuge, Sharan Territory",
    type: "SECURITY",
    classification: "SECURITY ARCHIVE // OBJECTIVE ACHIEVED",
    summary:
      "A hostile Sharan demonstration threatens the Gwynplain Children’s refuge, forcing Paradallax personnel to establish a defensive perimeter before civil unrest becomes a massacre. The incident ends with the enclave secured, Lathander relief operative Gabriel Vale attached to the team, and preparations underway for a star-shard expedition toward Darkigez.",
    metaDescription:
      "A hostile Sharan demonstration threatens the Gwynplain Children’s refuge as Paradallax secures the enclave, recruits Gabriel Vale, and prepares an expedition toward a star shard near Darkigez.",
    fullMissionSummary: [
      "Morning operations at the Gwynplain Children’s Refuge began with a significant deterioration in local relations.",
      "A large group of Sharan civilians assembled outside the enclave perimeter, condemning the Gwynplain Children for refusing submission to Sharr and the Nightseer. The demonstration rapidly exceeded the parameters of peaceful theological disagreement. Reggie, Flint, Onix, and Quill moved to reinforce the primary gate while refuge personnel withdrew younger residents from the immediate area.",
      "Reggie established a physical exclusion boundary in the dust outside the entrance and informed the gathering that crossing it constituted defiance of Sha’s will. The legal and theological basis for this declaration remains unverified. Its immediate effectiveness was considerably easier to measure.",
      "Quill supplemented the warning with a directional acoustic projection resembling distant thunder.",
      "The situation destabilized when a projectile thrown from the crowd struck one of the children.",
      "Paradallax personnel immediately transitioned from deterrence to active crowd containment. Reggie and Flint held the entrance, restrained advancing civilians, and prevented the confrontation from penetrating the refuge. Quill redirected the crowd’s own accusations against its most aggressive members, publicly identifying those attacking children as the more credible candidates for heresy.",
      "Sharan security personnel eventually arrived and dispersed the gathering. Their intervention was effective, although not sufficiently immediate to prevent additional localized violence. Paradallax personnel recovered the wounded and returned all endangered refuge residents behind the perimeter.",
      "The enclave remained secure.",
      "Shortly thereafter, a young Arakocra resident announced the arrival of an individual known locally as “Master Vale.” The visitor identified himself as Gabriel Vale, an armored field chaplain and trauma specialist operating under the Lathander Relief Order.",
      "Standard Paradallax visitor screening procedures were applied. Reggie temporarily secured Vale’s warhammer while Quill escorted him into the refuge.",
      "Vale immediately requested permission to assist the injured.",
      "Working alongside Uot, he treated casualties from the confrontation, stabilized a young tiefling with significant facial trauma, and established an orderly medical queue without requiring additional direction from Paradallax personnel. His combination of discipline, field medicine, and willingness to work inside an organization with unusually flexible definitions of clinical research warranted further evaluation.",
      "During the subsequent briefing, Vale was introduced to several ongoing Paradallax medical programs.",
      "These included Onix’s integration of troll-derived regenerative marrow into Reggie’s already unconventional physiology and the replacement limb currently employed by Quill. Vale displayed concern appropriate to a conventional medical professional but did not withdraw from the conversation.",
      "More importantly, he outlined his allegiance to Lathander and his objective of providing aid to populations subjected to religious oppression.",
      "Paradallax personnel disclosed the broader intention to remove the Gwynplain Children from Sharr’s influence.",
      "Vale agreed with the objective and formally attached himself to the expeditionary group.",
      "This proved immediately useful.",
      "Fenn and Cass emerged later that morning from a temporary field shelter in which they had remained following activities conducted the previous night. Prior to joining the others, Fenn had destroyed several blood-contaminated garments and attempted multiple counter-anomaly treatments on a severely damaged eye.",
      "Neither treatment had succeeded.",
      "Vale examined the injury and identified extensive damage to the iris and pupil consistent with exposure to highly focused, refracted energy. Fenn described the cause as a paid experimental procedure performed by an independent back-alley surgeon operating without meaningful oversight.",
      "Paradallax personnel collectively recommended discontinuing that particular provider relationship.",
      "Vale applied a Lathander photonic restoration technique and completely restored Fenn’s vision.",
      "No further ocular degradation was observed.",
      "With immediate security and medical concerns resolved, Reggie and Quill presented the group with a specialized astronomical tracking map associated with the Choir of the True Firmament. The Choir maintains that conventional planar boundaries are shifting and has tracked a number of anomalous objects commonly referred to as star shards falling across known territories.",
      "The nearest accessible signature was identified near Darkigez.",
      "After reviewing distance, supplies, and expected travel conditions, Paradallax personnel selected the Darkigez signature as the next expeditionary objective. The journey is expected to require several weeks. Vale volunteered to provide field sustenance support, materially reducing conventional food and water requirements.",
      "Onix subsequently conducted a private compatibility discussion with Vale regarding his anti-necrotic capabilities. Reggie’s stabilized post-mortem physiology creates several obvious concerns when operating beside personnel equipped to suppress or destroy undead biological states.",
      "Vale confirmed that his system is selectively controlled and stated that he would not deploy it against allied personnel.",
      "Onix accepted this assurance.",
      "Preparation for departure occupied the remainder of the operational period.",
      "Quill fabricated a specialized control matrix for Onix, who used it to establish a link with a newly manifested celestial corvid reconnaissance organism. Fenn and Cass examined two intricate mechanical cipher devices, making progress on both before an internal reset mechanism erased part of their work.",
      "Reggie spent approximately four hours restoring twelve captured weapons to resale-ready condition.",
      "Flint separately met with Lia and formally declined the Nightseer’s proposed oath of allegiance, making Paradallax’s position toward the local religious authority considerably less ambiguous.",
      "Cass requested information concerning the whereabouts of her patron, Viserys. Flint agreed to relay a message should contact be established.",
      "Before departure preparations concluded, Vale visited the northern Lathander altar, transferred his remaining conventional medical supplies to Uot, and received a discreet private communication whose contents were not entered into the operational file.",
      "Reggie, Fenn, and Vale then loaded the refurbished weapons aboard the Flaming Francine and departed for the regional market.",
      "The recovered hostile materiel was scheduled for commercial liquidation, with proceeds redirected toward expeditionary supplies.",
      "Paradallax Initiative recognizes this as an efficient circular security economy.",
      "Kant and Flint remained at the Gwynplain enclave to supervise their respective projects while final preparations for Darkigez continued."
    ],
    personnelList: [
      {
        name: "Flint Duskbourne",
        role: "Chief Operations Officer",
        duty: "Field command, perimeter defense coordination, formal rejection of the Nightseer’s oath."
      },
      {
        name: "Quill Varon",
        role: "Chief Science Officer",
        duty: "Acoustic projection crowd deterrence, star-map analysis, celestial corvid control matrix fabrication."
      },
      {
        name: "Fenn",
        role: "Vice President of Corporate Relations",
        duty: "Mechanical cipher analysis, ocular restoration recipient, commercial liquidation transport."
      },
      {
        name: "Cass",
        role: "Director of Special Acquisitions",
        duty: "Mechanical cipher examination and intelligence inquiry regarding Viserys."
      },
      {
        name: "Onix",
        role: "Director of Xenobiology & Medical Research",
        duty: "Perimeter gate defense, celestial corvid link establishment, anti-necrotic compatibility assessment."
      },
      {
        name: "Kant Vixit",
        role: "Chief Engineering Officer",
        duty: "Enclave engineering supervision and expedition logistical preparation."
      },
      {
        name: "Reggie",
        role: "Chief Security Marshal",
        duty: "Exclusion boundary enforcement, crowd containment, hostile weapon refurbishment and liquidation."
      },
      {
        name: "Gabriel Vale",
        role: "Lathander Relief Order Field Chaplain & Trauma Specialist",
        duty: "Newly attached expeditionary personnel; field casualty stabilization, Lathander photonic ocular restoration, expeditionary medical & sustenance support."
      }
    ],
    associatedPersonnel: [
      {
        name: "Uot",
        role: "Gwynplain Refuge Medical Coordinator",
        duty: "Enclave medical coordination and recipient of transferred field medical supplies."
      },
      {
        name: "Lia",
        role: "Gwynplain Refuge Liaison",
        duty: "Gwynplain Refuge liaison and intermediary for local authority communications."
      }
    ],
    timeline: [
      {
        time: "01",
        title: "Perimeter Disturbance",
        event: "Sharan civilians assembled outside the Gwynplain Children’s Refuge and demanded renewed obedience to Sharr and the Nightseer."
      },
      {
        time: "02",
        title: "Security Line Established",
        event: "Reggie established a physical exclusion boundary while Quill employed acoustic projection to reinforce the warning. Violence began after a thrown projectile struck a child."
      },
      {
        time: "03",
        title: "Crowd Contained",
        event: "Reggie and Flint prevented the disturbance from entering the enclave. Sharan security eventually dispersed the remaining civilians, and wounded refuge residents were recovered."
      },
      {
        time: "04",
        title: "Vale Arrival",
        event: "Gabriel Vale of the Lathander Relief Order arrived, passed Paradallax security screening, treated injured children alongside Uot, and subsequently joined the expeditionary group."
      },
      {
        time: "05",
        title: "Ocular Restoration",
        event: "Vale successfully repaired Fenn’s severe experimental eye injury after previous counter-anomaly treatments had failed."
      },
      {
        time: "06",
        title: "Darkigez Selected",
        event: "The Choir of the True Firmament star-shard map identified the nearest viable anomaly near Darkigez. Paradallax committed to a multi-week expedition toward the site."
      },
      {
        time: "07",
        title: "Expedition Preparation",
        event: "Quill and Onix established a celestial corvid reconnaissance asset, Reggie refurbished captured weapons, Flint rejected the Nightseer’s oath, and additional logistical preparations were completed."
      },
      {
        time: "08",
        title: "Procurement Run",
        event: "Reggie, Fenn, and Vale departed aboard the Flaming Francine to convert recovered weapons into expeditionary funding and purchase travel supplies."
      }
    ],
    notableFindings: [
      {
        title: "Choir of the True Firmament Star Map",
        description:
          "The recovered tracking system continues to identify anomalous objects described as star shards across multiple regions.",
        bullets: [
          "The Choir maintains that these events correspond with movement or instability between planar boundaries.",
          "Paradallax has not independently verified the Choir’s complete cosmological model.",
          "The existence of the tracked objects themselves is considered sufficiently interesting that methodological disagreement has been postponed until after acquisition.",
          "The nearest active lead is located in the vicinity of Darkigez."
        ]
      },
      {
        title: "Gabriel Vale",
        description:
          "Vale demonstrated advanced restorative capabilities capable of repairing structural ocular trauma that had resisted previous treatments.",
        bullets: [
          "His Lathander-derived techniques may have substantial medical applications if successfully documented, replicated, licensed, or otherwise made available for institutional use.",
          "Vale also possesses anti-necrotic capabilities with possible implications for Reggie’s condition.",
          "Target discrimination has been verbally confirmed."
        ]
      },
      {
        title: "Celestial Corvid Asset",
        description:
          "Using a control matrix fabricated by Quill, Onix successfully established a link with a celestial crow suitable for reconnaissance and observation.",
        bullets: [
          "Its biological classification remains pending.",
          "Onix has requested that nobody refer to it as “just a bird” until testing is complete."
        ]
      }
    ],
    incidents: [
      {
        title: "Gwynplain Civil Disturbance",
        severity: "Moderate (Security / Civil Disorder)",
        details: [
          "A hostile civilian gathering escalated into direct violence against residents of the Gwynplain Children’s Refuge.",
          "Paradallax personnel prevented a perimeter breach and removed injured minors from the confrontation.",
          "No Paradallax fatalities were recorded."
        ]
      },
      {
        title: "Fenn — Ocular Trauma",
        severity: "Severe, resolved (Pre-existing Experimental Injury)",
        details: [
          "Fenn sustained extensive damage to one eye following an independently commissioned experimental procedure involving concentrated refracted energy.",
          "Self-administered countermeasures were ineffective.",
          "Gabriel Vale achieved complete restoration of function.",
          "The provider responsible for the original procedure is not approved under any known Paradallax medical procurement framework. This distinction has not historically prevented anything."
        ]
      }
    ],
    propertyDamage: {
      items: [
        "Enclave perimeter barrier sustained superficial impact damage from thrown civilian projectiles.",
        "Twelve captured hostile weapons recovered and restored to operational resale condition.",
        "Fenn’s blood-contaminated garments destroyed prior to evidence review."
      ],
      outcome: "Recovered hostile materiel converted to expeditionary funding aboard the Flaming Francine under circular security economy guidelines."
    },
    personnelNotes: [
      {
        name: "Reggie",
        note: "Demonstrated effective perimeter control and restraint during a rapidly escalating civilian confrontation. Later restored twelve captured weapons to high operational condition before their planned resale. The Security Office has described this as “asset recovery.” Finance has elected not to challenge the terminology."
      },
      {
        name: "Gabriel Vale",
        note: "Initial field performance was highly favorable. Vale treated civilians without hesitation, adapted rapidly to Paradallax operating conditions, and accepted expeditionary assignment after being briefed on the Gwynplain situation. His comparatively conventional ethical framework should provide useful observational data."
      },
      {
        name: "Fenn",
        note: "Vision fully restored. Destruction of blood-contaminated clothing occurred before formal evidence review. No request has been submitted asking why."
      },
      {
        name: "Flint Duskbourne",
        note: "Formally declined the Nightseer’s proposed oath through liaison Lia. This decision clarifies Paradallax’s position regarding Sharan religious authority and may increase local political friction."
      },
      {
        name: "Cass",
        note: "Continues seeking information regarding Viserys. Flint has agreed to pass along a message should contact occur."
      }
    ],
    diplomaticConsequences: [
      "Relations with Sharr-aligned civilians have deteriorated significantly.",
      "Paradallax’s defense of the Gwynplain Children, combined with Flint’s formal rejection of the Nightseer’s oath, makes continued political neutrality increasingly implausible.",
      "The Gwynplain enclave remains under Paradallax protection.",
      "Local Sharan security ultimately assisted in dispersing the hostile gathering, indicating that institutional relations have not yet deteriorated to the same degree as public sentiment.",
      "Further friction should be anticipated."
    ],
    complianceNotes: [
      "Recovered weapons are being sold to finance expeditionary procurement. This has been categorized as responsible materiel recycling.",
      "Fenn’s independent experimental ophthalmic procedure was not performed by Paradallax Medical.",
      "Fenn’s subsequent destruction of compromised clothing occurred before any evidence-retention request was issued.",
      "Reggie’s physiology remains medically incompatible with several conventional anti-necrotic safety systems.",
      "Gabriel Vale has verbally confirmed selective targeting capability.",
      "Paradallax accepts no liability for theological conclusions reached by hostile crowds following Chief Security Marshal Reggie’s field interpretation of divine intent."
    ],
    anomalousFindings: [
      "The Choir of the True Firmament tracking apparatus indicates that planar boundaries are destabilizing, producing localized star-shard impacts across regional sectors including Darkigez.",
      "Gabriel Vale’s Lathander photonic restoration represents a non-standard therapeutic mechanism capable of reversing geometric ocular degradation. Further clinical documentation is advised.",
      "A celestial corvid reconnaissance organism has been bonded via a specialized control matrix fabricated by Science Division."
    ],
    captainsLog: {
      author: "Flint Duskbourne, Chief Operations Officer",
      text: [
        "The crowd was one thrown rock away from becoming something much worse.",
        "Reggie drew a line in the dirt because there are moments when a boundary means more than another speech. Quill made the sky answer him. I am still undecided whether that improved the situation, but nobody crossed the gate.",
        "Gabriel worries me less than most people who arrive wearing that much armor.",
        "He walked into a camp full of strangers, treated the children first, listened to Onix explain what we have done to Reggie and Quill, repaired Fenn’s eye, and then agreed to come with us.",
        "Either he is exactly the kind of person we need or he has not yet understood us.",
        "We leave for Darkigez soon.",
        "There is apparently a piece of the sky waiting for us there.",
        "After today, that sounds almost straightforward."
      ]
    },
    finalAssessment: {
      verdict: "OBJECTIVE ACHIEVED",
      description:
        "The Gwynplain Children’s Refuge remained secure following a significant civil disturbance. Injured residents were stabilized, Gabriel Vale was successfully integrated into the expeditionary group, Fenn’s ocular injury was resolved, and the nearest star-shard signature was identified near Darkigez. Paradallax personnel have begun final preparations for a multi-week expedition. The immediate threat has been contained. The next one has been located.",
      conclusion: "WE GO FORWARD."
    }
  },
  {
    id: "PD-0102",
    slug: "pd-0102",
    title: "The Fracture Below",
    status: "PARTIAL SUCCESS",
    location: "Nebuch Exclusion Perimeter — Broken Blade Forward Lodge / Sharan Estate District",
    detailedLocation: "Nebuch Exclusion Perimeter — Broken Blade Forward Lodge / Sharan Estate District",
    type: "CLASSIFIED",
    classification: "LEVEL 5 CLASSIFIED // PARTIAL SUCCESS",
    classificationFootnote: "* Direct visual observation of geometric wall fracture strictly prohibited pending development of remote instrumentation.",
    summary:
      "A covert acquisition beneath the Sharan Estate District exposes a geometric fracture capable of physically restructuring those who observe it, an unopened dual-credential vault, and archival evidence of historical erasure.",
    metaDescription:
      "A classified Paradallax Initiative acquisition operation beneath the Sharan Estate District uncovers a dangerous geometric fracture and a sealed inner vault.",
    fullMissionSummary: [
      "Following the Initiative's compulsory removal from the subterranean city of Nebuch by Sharan security personnel, operational staff withdrew to the Broken Blade Forward Lodge and began reassessing regional objectives.",
      "Chief Operations Officer Flint Duskbourne conducted an immediate review of a proposed assignment from Vorth concerning the recovery of ceremonial weapons associated with Shar. The assignment required Initiative personnel to submit to a Sharan oath and permanent identifying brand prior to deployment. After reviewing both the conditions and the projected survival profile, Duskbourne classified the proposal as an unacceptable expenditure of senior personnel and declined participation.",
      "Duskbourne separately advised Uot that further subterranean construction should be reconsidered following the recent energetic event beneath Nebuch. Uot confirmed that preparations at the lodge were already underway for a long-range phase-transfer installation. The current approach relies on resonance patterns being engraved directly into the local stone substrate. Final construction data is expected from Thorn, although the region's reliance on physical courier networks places the estimated correspondence delay at approximately two weeks.",
      "Chief Science Officer Quill Varon continued analysis of materials previously secured from the Library of Varnessa. His review identified evidence of a Sharan institutional program known as the Veiled Audit: a systematic effort to remove selected genealogical and theological records from the historical archive. The scale and intentionality of the deletions indicate that the Sharan theocracy has not merely restricted information but has actively modified the surviving historical record.",
      "While the primary camp established communications and infrastructure, Vice President Fenn and Director Cass initiated a separate acquisition procedure within the Sharan Estate District. The objective was a hexagonal metallic interface component believed to be stored inside a heavily secured private residence.",
      "Cass entered the estate carrying Fenn inside a compact fold-space containment device. An environmental suppression field within the residence disabled Cass's optical concealment shortly after entry. Fenn consequently exited containment and adopted the appearance of a male household servant using the identity Tug, allowing both executives to continue through an extensive private gathering without provoking immediate security intervention.",
      "The team reached a basement vault after implementing an alternative access procedure on a heavy iron door. During the procedure, a field blade was damaged beyond operational use.",
      "Inside the vault, Fenn detected a narrow fracture running through one wall. The phenomenon presented as a shifting, multicolored discontinuity with no visible depth and an internally repeating hexagonal structure.",
      "Direct visual examination caused an immediate anomalous injury.",
      "Fenn's ocular tissue developed a corresponding geometric segmentation pattern, producing severe visual trauma and complete loss of sight in the affected eye. Emergency medical treatment stabilized the injury but did not restore vision. Attempts to disrupt or suppress the fracture produced no measurable effect.",
      "Additional examination of the chamber revealed two circular interface points embedded in the floor. Cass inserted an electron puck recovered during prior operations into one interface and confirmed partial system activation. Full access required a second puck.",
      "Rather than withdraw, the acquisition team elected to remain concealed inside the basement pending further developments.",
      "The required second credential subsequently arrived without Initiative intervention.",
      "Two men, one identified as Wallaby, entered the basement carrying the paired electron pucks necessary to activate the inner access mechanism. An attempted non-lethal containment action failed. The resulting confrontation escalated rapidly. Fenn deployed a fluidic restraint system followed by a directed energy discharge, killing one entrant. Cass neutralized the second through direct bioenergetic extraction.",
      "Estate security personnel arrived moments later.",
      "A guard equipped with a gold-colored neural suppression instrument successfully immobilized Fenn, who was restrained using high-mass security cuffs. Cass avoided detection through renewed optical concealment and used the interruption to secure two dark-metal containers from the vault shelving.",
      "Cass then appropriated a single-use phase-translation device from Fenn's equipment and activated it while maintaining physical contact with her. Both executives were displaced approximately 150 meters vertically and laterally from the vault, emerging on the roof of the estate.",
      "After Fenn recovered sufficient motor control, adaptive morphogenic alteration allowed her to reduce her frame enough to escape the restraints. Both personnel resumed optical concealment and departed the Sharan Estate District without further direct contact.",
      "They reached the Broken Blade camp shortly before dawn with the two recovered containers.",
      "The original inner chamber remains unopened."
    ],
    personnelList: [
      {
        name: "Flint Duskbourne",
        role: "Chief Operations Officer",
        duty: "Operational oversight, strategic review, and personnel protection."
      },
      {
        name: "Quill Varon",
        role: "Chief Science Officer",
        duty: "Archival analysis of Library of Varnessa materials; identification of the Veiled Audit."
      },
      {
        name: "Fenn",
        role: "Vice President of Corporate Relations",
        duty: "Covert estate infiltration (persona: Tug), vault reconnaissance, containment engagement."
      },
      {
        name: "Cass",
        role: "Director of Special Acquisitions",
        duty: "Estate infiltration, interface authentication testing, container acquisition, and emergency extraction."
      },
      {
        name: "Kant Vixit",
        role: "Chief Engineering Officer",
        duty: "Field infrastructure, forge construction, and stone-integrated phase-transfer planning."
      },
      {
        name: "Onix",
        role: "Director of Xenobiology & Medical Research",
        duty: "Expedition overwatch and communications coordination."
      },
      {
        name: "Reggie",
        role: "Chief Security Marshal",
        duty: "Camp security and field forge construction."
      }
    ],
    associatedPersonnel: [
      {
        name: "Uot",
        role: "Broken Blade Infrastructure Coordinator",
        duty: "Supervises lodge preparations for stone-integrated phase-transfer installation."
      },
      {
        name: "Shalia",
        role: "Local Contact",
        duty: "Broken Blade regional liaison."
      },
      {
        name: "Tamira",
        role: "Local Contact",
        duty: "Broken Blade regional liaison."
      },
      {
        name: "Elveh",
        role: "Local Contact",
        duty: "Broken Blade camp resident and custodian of an undeclared aerial organism."
      },
      {
        name: "Thorn",
        role: "Remote Infrastructure Contact",
        duty: "Remote engineering contact providing phase-transfer calculation data via courier."
      },
      {
        name: "Vorth",
        role: "Sharan Intermediary",
        duty: "Proposer of high-risk ceremonial weapon recovery contract."
      },
      {
        name: "Hazard",
        role: "Camp Resident",
        duty: "Juvenile resident of the Broken Blade camp."
      },
      {
        name: "Wallaby",
        role: "Deceased Vault Entrant",
        duty: "Deceased unidentified vault entrant carrying paired electron puck credentials."
      },
      {
        name: "Unidentified Male Associate",
        role: "Deceased Vault Entrant",
        duty: "Deceased unidentified vault entrant and associate of Wallaby."
      }
    ],
    timeline: [
      {
        time: "01",
        title: "Forced Withdrawal from Nebuch",
        event: "Sharan authorities remove Initiative personnel from the underground city. Broken Blade Forward Lodge becomes the temporary operational center."
      },
      {
        time: "02",
        title: "Sharan Recovery Contract Rejected",
        event: "Flint Duskbourne rejects Vorth's proposed recovery operation after determining that its oath, branding requirement, and survival profile exceed acceptable operational parameters."
      },
      {
        time: "03",
        title: "Infrastructure & Archival Work Begins",
        event: "Kant Vixit and Reggie establish a field forge while Quill Varon studies Library of Varnessa material and identifies evidence of the Sharan Veiled Audit."
      },
      {
        time: "04",
        title: "Estate Penetration",
        event: "Fenn and Cass enter a private Sharan estate under concealment, adapt following failure of their initial infiltration system, and reach the subterranean vault."
      },
      {
        time: "05",
        title: "Geometric Fracture Discovered",
        event: "Direct observation of a kaleidoscopic wall anomaly causes severe geometric trauma to Fenn's eye. Conventional suppression methods fail."
      },
      {
        time: "06",
        title: "Inner Access Identified",
        event: "A paired electron-puck authentication system is discovered. The Initiative possesses only one required credential."
      },
      {
        time: "07",
        title: "Vault Confrontation",
        event: "Wallaby and a second entrant arrive with the missing credentials. Both are killed during the resulting confrontation. Estate security captures Fenn temporarily."
      },
      {
        time: "08",
        title: "Emergency Extraction",
        event: "Cass secures two unidentified dark-metal containers and executes a short-range phase translation with Fenn. Both personnel evade subsequent pursuit and return to the Broken Blade camp."
      }
    ],
    notableFindings: [
      {
        title: "The Veiled Audit",
        description:
          "Recovered Varnessa archival material indicates that the Sharan theocracy conducted a coordinated program of genealogical and historical erasure.",
        bullets: [
          "The removed records appear selective rather than incidental.",
          "Further comparison against surviving family histories, religious lineages, and pre-Audit archives is recommended.",
          "The possibility that presently accepted Sharan history is the result of deliberate institutional editing should now be treated as operationally credible."
        ]
      },
      {
        title: "Geometric Wall Fracture",
        description: "A narrow spatial or energetic discontinuity was observed inside the estate vault. Known characteristics:",
        bullets: [
          "Presents as a continuously shifting kaleidoscopic fracture.",
          "Exhibits persistent hexagonal geometry.",
          "Produces severe biological effects through direct observation.",
          "Appears capable of imposing its geometry upon exposed ocular tissue.",
          "Resisted available field suppression techniques.",
          "Was located immediately adjacent to a separately secured inner chamber.",
          "Origin and intended function remain unknown."
        ]
      },
      {
        title: "Paired Electron-Puck Interface",
        description:
          "The inner vault uses two circular access credentials simultaneously. One Initiative-held electron puck successfully engaged half of the mechanism. Two external entrants later demonstrated possession of a functioning pair.",
        bullets: [
          "Whether the access system is associated with the geometric fracture remains unconfirmed."
        ]
      },
      {
        title: "Recovered Containers",
        description:
          "Cass removed two sealed dark-metal containers from vault storage during the emergency extraction. Contents remain pending controlled examination. Acquisition documentation has been retroactively generated."
      }
    ],
    incidents: [
      {
        title: "Ocular Anomaly Exposure — Fenn",
        severity: "Severe",
        details: [
          "Direct examination of the basement fracture caused immediate restructuring of visible ocular tissue into repeating hexagonal segments accompanied by loss of vision.",
          "Emergency treatment prevented further acute deterioration but did not reverse the effect.",
          "Long-term prognosis is undetermined."
        ]
      },
      {
        title: "Vault Fatalities",
        severity: "Fatal (2 external casualties)",
        details: [
          "Wallaby: Fatal",
          "Unidentified Associate: Fatal",
          "Both casualties occurred following failed containment during unauthorized entry into the already unauthorized Initiative work area.",
          "No additional fatalities were recorded during extraction."
        ]
      },
      {
        title: "Temporary Detainment",
        severity: "Operational capture; resolved",
        details: [
          "Fenn was immobilized using a gold-colored Sharan suppression device and secured in heavy restraints.",
          "Cass remained undetected and facilitated extraction before formal Sharan questioning could begin."
        ]
      }
    ],
    propertyDamage: {
      items: [
        "One field blade destroyed during lock access.",
        "Basement security lock damaged.",
        "Minor vault disturbance.",
        "Two dark-metal storage containers removed for off-site evaluation.",
        "No structural damage to the geometric fracture despite attempted suppression."
      ],
      outcome: "The Paradallax Initiative considers the absence of structural collapse a positive facilities outcome."
    },
    personnelNotes: [
      {
        name: "Flint Duskbourne",
        note: "Duskbourne's refusal of the proposed Sharan recovery contract represents an unusually explicit operational veto based on projected personnel loss. The assessment is considered justified. His warning against further underground construction was documented before the lodge proceeded with preparations for a stone-integrated phase-transfer system. This distinction may become administratively relevant."
      },
      {
        name: "Quill Varon",
        note: "Varon's archival analysis has elevated the Veiled Audit from historical rumor to a credible program of institutional information control. Further acquisition of Sharan archival material is approved where legally available. The definition of 'available' remains governed by existing Initiative procurement policy."
      },
      {
        name: "Fenn",
        note: "Despite severe visual trauma, Fenn remained operational through the subsequent confrontation, detention, and extraction. Medical evaluation is mandatory before future exposure to geometrically active surfaces. No prohibition has been issued regarding ordinary hexagons."
      },
      {
        name: "Cass",
        note: "Cass demonstrated successful contingency adaptation following concealment failure, security escalation, partner immobilization, and loss of the planned exit route. The two recovered containers were not part of the stated acquisition objective. They have nevertheless been entered into Initiative inventory."
      },
      {
        name: "Reggie & Kant Vixit",
        note: "Construction of a field forge at the Broken Blade camp progressed successfully until nighttime operations disturbed local residents. Following intervention by Flint Duskbourne, forging activity was suspended until daylight. A grindstone was temporarily confiscated by camp personnel."
      },
      {
        name: "Onix",
        note: "Onix maintained local observation and communications support during Duskbourne's negotiations and logistical coordination. No xenobiological intervention was required."
      }
    ],
    complianceNotes: [
      "The Paradallax Initiative acknowledges that the Sharan Estate District operation involved entry into privately controlled property without documented local authorization.",
      "Internal review has determined that personnel implemented an alternative access procedure under emerging acquisition requirements.",
      "During transit through the estate, an unidentified attendee also appropriated personal garments belonging to Initiative personnel.",
      "No recovery action was attempted. This was the correct prioritization of corporate resources.",
      "The presence of a large private gathering materially reduced the effectiveness of conventional infiltration procedures while substantially improving plausible deniability.",
      "The Initiative does not currently recognize 'the other party had the second electron puck' as an approved credential acquisition strategy."
    ],
    anomalousFindings: [
      "A narrow spatial or energetic discontinuity was observed inside the estate vault, presenting as a continuously shifting kaleidoscopic fracture with persistent hexagonal geometry.",
      "Direct visual observation produced severe biological effects, imposing repeating geometric segmentation onto exposed ocular tissue.",
      "The Initiative presently has insufficient evidence to determine whether the phenomenon is technological, dimensional, psionic, biological, or a combination thereof.",
      "Direct visual observation is prohibited pending development of remote instrumentation."
    ],
    captainsLog: {
      author: "Flint Duskbourne, Chief Operations Officer",
      text: [
        "We were removed from one underground city, declined a contract that appeared designed to kill us, discovered that the Sharan government has been deleting parts of history, and then sent two executives into a stranger's basement looking for a metal hexagon.",
        "The wall reorganized Fenn's eye.",
        "Two people died over a door we still did not open.",
        "Cass came back with two boxes nobody had asked for.",
        "Meanwhile, Reggie built a forge loudly enough to wake a child and Flint had to resolve the situation with a teddy bear.",
        "The official assessment is Partial Success.",
        "This is technically defensible."
      ]
    },
    finalAssessment: {
      verdict: "PARTIAL SUCCESS",
      description:
        "The original acquisition objective remains unresolved and the inner vault was not accessed. However, the operation produced four material gains: confirmation of a previously unknown anomalous fracture, identification of the vault's paired authentication architecture, recovery of two unidentified dark-metal containers, and evidence that Sharan historical records have undergone deliberate institutional purging. Both Initiative executives escaped Sharan custody and returned to the Broken Blade Forward Lodge. The geometric fracture remains active.",
      conclusion: "INVESTIGATION RECOMMENDED. // Axiom IV — Progress requires uncertainty."
    }
  },
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
      "Paradallax personnel were conducting an extended survey of the buried Sharren archival complex when operational priorities temporarily diverged.",
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
      "The historical sequence then acknowledged the presence of Paradallax personnel.",
      "Nayalara and additional violet manifestations redirected their attention toward Fenn and Reggie and began producing repeated high-velocity crescent attacks with measurable physical effects. Both personnel sustained significant laceration injuries during the initial contact.",
      "Fenn initiated an emergency short-range displacement procedure, relocating himself and Reggie to a neighboring rooftop. The maneuver created temporary distance but did not terminate pursuit. Multiple spectral entities emerged throughout the surrounding district, while additional armed figures carrying curved blades began occupying likely escape routes.",
      "Reggie assumed primary responsibility for physical extraction. While shielding Fenn from incoming attacks, he carried him across one of the city's larger structural gaps using high-impulse mobility equipment, then continued the withdrawal through elevated streets and stair systems as manifested personnel climbed surrounding structures in pursuit.",
      "At the upper access level, Fenn and Reggie crossed the original occlusion boundary under a final concentrated attack.",
      "All pursuing manifestations and emitted crescent structures terminated immediately upon reaching the boundary.",
      "The two personnel returned to the Sharren archive with moderate-to-severe injuries and substantial new information regarding the site's lower strata.",
      "Their arrival coincided with an escalating dispute between Captain Dark Eye and Flint Duskbourne. The Sharren security commander attributed recently observed disturbances within the ruins to unauthorized Paradallax activity and asserted that Fenn and Reggie had, in practical terms, 'awakened the dead.' Proposed disciplinary measures included execution under local heresy provisions.",
      "Flint stabilized Reggie's condition using available field medical equipment before addressing the jurisdictional issue. He invoked Paradallax diplomatic standing, the expedition's existing authorization, and the authority of Nightseer Vauthry to prevent immediate punitive action.",
      "Local security ultimately accepted de-escalation.",
      "Paradallax personnel were escorted from the subterranean complex using the excavation's manually operated lift system. Sharren medical personnel treated and cleaned the injured staff at the surface installation.",
      "Further entry into the concealed city was suspended pending review.",
      "The expedition relocated to the Broken Blade Lodge for recovery and analysis of the findings.",
      "During departure, Chief Science Officer Quill Varon also secured a satchel containing several Sharren archival volumes for off-site examination. Available documentation indicates that the transfer was performed discreetly and without introducing unnecessary administrative dependencies.",
      "Paradallax Initiative continues to classify this as an exploration success with unresolved environmental complications."
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
        event: "Captain Dark Eye threatens punitive action over the disturbance. Flint invokes Nightseer Vauthry's authority and expedition standing, preventing escalation. Paradallax withdraws to the Broken Blade Lodge.",
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
          "Captain Dark Eye attributed the site's anomalous activity to Paradallax personnel and threatened execution under Sharren religious law.",
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
      "No Paradallax employee was authorized to intentionally activate ancient religious infrastructure.",
      "Current evidence does not establish that intentional activation occurred.",
      "The site's apparent dead population should not be considered harmless solely on the basis of being dead.",
      "Local theological prohibitions remain in force for subsequent visits.",
      "Future teams should notify Sharren security before entering undocumented subterranean cities whenever operationally practical.",
      "Archival materials currently undergoing off-site examination are not considered stolen property while chain-of-custody terminology remains under review.",
    ],
    anomalousFindings: [
      "The most significant discovery is not the presence of holographic imagery but the manifestation's ability to become causally responsive.",
      "The temple sequence contained identifiable people, consistent ceremonial behavior, spoken language, ideological context, and a discrete violent event involving Shanara Nayalara. After completing or partially completing that sequence, the phenomenon recognized Fenn and Reggie as external participants and produced attacks capable of damaging contemporary biological tissue.",
      "Equally important is the behavior of the city's access boundary. Hostile manifestations pursued Paradallax personnel to the precise point at which they crossed the concealed wall. Emitted projectiles dissipated at or immediately beyond that interface.",
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
        "We are leaving the city alone until everyone has stopped bleeding and Quill finishes insisting that the books in his bag became Paradallax property through 'custodial momentum.'",
        "We will return.",
        "There is always something beyond the horizon.",
        "Apparently, sometimes the horizon is underground."
      ],
    },
    finalAssessment: {
      verdict: "PARTIAL SUCCESS",
      description:
        "A previously undocumented Sharren urban complex was discovered and its access route confirmed. Paradallax obtained evidence of an anomalous historical phenomenon capable of physically interacting with contemporary observers, recovered a residual Starshard sample, preserved valuable archival material for further study, and extracted all personnel alive. The lower city remains unexplored. The nature of its inhabitants, the purpose of its containment boundary, the mechanism behind the temple manifestation, and the historical role of Shanara Nayalara remain unresolved.",
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
