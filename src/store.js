export default {
  services: [
    {
      id: 1,
      name: 'Prevention',
      isComponent: true,
      title: {
        ro: 'Prevenție',
      },
      description: {
        ro: 'Controalele regulate și tratamentele de igienizare profesională bianuale sunt recomandate de medicii dentiști din toată lumea pentru prevenția cariilor și a afecțiunilor gingivale. Alege un dentist în Aiud căruia îi pasă!'
      },
      priceTable: {
        title: {
          ro: 'Tratamente de prevenție'
        },
        description: {
          ro: 'Cea mai sigură metodă de prevenție împotriva cariilor și a afecțiunilor gingivale este igienizarea profesională. Dacă au trecut mai mult de 6 luni de la ultima ta igienizare, flosește formularul de mai jos pentru a programa o nouă ședință.',
        },
        rows: {
          ro: [
            {
              name: "Tratament endodondic de urgenta în caz de absces dentar",
              price: "200 Lei",
            },
          ],
        }
      },
      details: {
        hero: {
          title: {
            ro: 'Tratamente de prevenție'
          },
          description: {
            ro: [
              'Întotdeauna este mai ieftin și mai puțin dureros să previi o afecțiune decât să o tratezi. Placa bacteriană (tartrul) este principala cauza a afecțiunilor dentare și gingivale. Astfel, prevenirea formării tartrului prin periaj regulat și igienizarea corectă a cavității bucale este prima linie de protecție împotriva cariilor și bolilor parodontale.',
              'Însă, de cele mai multe ori, chiar și o igienă corectă nu este suficientă pentru curățarea în profunzime a danturii. Prin urmare, tratamentul de igienizare profesională este recomandat o dată la 6 luni, pentru a curăța în totalitate dinții de tartru, prevenind astfel apariția cariilor și afecțiunile gingivale. Totodată, acesta oferă și o ușoară albire naturală a dinților, ajutându-te să te simți mai sănătos și să ai un zâmbet mai frumos.'
            ]
          },
          image: {
            src: require('@/assets/images/PreventionHero.png'),
            alt: {
              ro: 'Young girl brushing her teeth.'
            }
          }
        },
        ctaMessage: {
          title: {
            ro: 'Cum să previi afecțiunile dentare?'
          },
          description: {
            ro: [
              'Pe lângă îngălbenirea dinților și efectele respirației urât mirositoare, pe termen lung, tartrul cauzează apariția cariilor și, în unele cazuri, chiar și gingivită, atunci când se formează sub linia gingiei. Detartrajul periodic elimină riscul acestor afecțiuni, protejându-ți dinții timp de aproximativ 6 luni.'
            ]
          },
          ctaButton: {
            ro: 'Programare Igienizare Dentară'
          }
        },
        pageContent: {
          title: 'Cum se efectuează igienizarea profesională?',
          treatmentSteps: [
            {
              step: 1,
              title: 'Detartraj cu ultrasunete',
              icon: require('@/assets/images/1.svg'),
              illustration: require('@/assets/images/Sonic.png'),
              description: {
                'ro': 'Primul pas în tratamentul de igienizare profesională este îndepărtarea tartrului. Deoarece detartrajul manual crește riscul deteriorării smalțului, clinica noastră folosește procedura de detartraj cu ultrasunete, care nu afectează smalțul dinților sau gingiile și este mai puțin dureroasă decât procedura standard de detartraj.'
              }
            },
            {
              step: 2,
              title: 'Periaj profesional',
              icon: require('@/assets/images/2.svg'),
              illustration: require('@/assets/images/Brush.png'),
              description: {
                'ro': 'Urmează procedura de periaj profesional pentru a îndepărta resturile mai mici de tartru rămase în zonele mai puțin accesibile ale dinților. Aceasta este complet nedureroasă fiind realizată cu ajutorul unor instrumente și paste de dinți speciale. Periajul profesional nu folosește substanțe chimice care deteriorează dintele sau gingia.'
              }
            },
            {
              step: 3,
              title: 'Airflow',
              icon: require('@/assets/images/3.svg'),
              illustration: require('@/assets/images/Airflow.png'),
              description: {
                'ro': 'Air Flow-ul este ultima procedură efectuată în procesul de igienizare. Procedura este efectuată cu ajutorul unui aparat care pulverizează un jet de aer comprimat, apă și particule fine de bicarbonat de sodiu direct pe suprafața dintelui, curățând smalțul dinților de pete sau alte depuneri ce nu au putut fi îndepărtate cu ajutorul detartrajului și al periajului profesional.'
              }
            }
          ]
        }
      }
    },
    {
      id: 2,
      name: 'Endodontics',
      isComponent: true,
      title: {
        ro: 'Endodonție',
      },
      description: {
        ro: 'Pastrarea dintelui natural este deosebit de importantă. Echipa noastră de dentiști din Aiud și Cluj are experiența și tehnologia necesară pentru a trata cu succes straturile interioare ale dintelui.'
      },
      details: {
        hero: {
          title: {
            ro: 'Tratamente de salvare a dintelui'
          },
          description: {
            ro: [
              'Tratamentul endodontic are ca obiectiv salvarea dintelui natural sau cel puțin a rădăcinii acestuia, folosind tehnici de tratare a canalelor dintelui. De cele mai multe ori, acest tratament presupune extirparea nervului, igienizarea și umplerea canalelor cu materiale biocompatibile, precum și reconstrucția coroanei dentare.',
              'Salvarea dintelui natural sau a rădăcinii acestuia este deosebit de importantă pentru că previne migrarea dinților adiacenți în spațiul gol rămas și elimină necesitatea implantului dentar (backlink la implanturi) sau a altor lucrări protetice. Din acest motiv, tratamentul endodontic este mai economic și mai benefic pentru pacient, pe termen lung, decât extracția.'
            ]
          },
          image: {
            src: require('@/assets/images/EndoHero.png'),
            alt: {
              ro: 'Little girl having a toothache.'
            }
          }
        },
        ctaMessage: {
          title: {
            ro: ''
          },
          description: {
            ro: [
              ''
            ]
          },
          ctaButton: {
            ro: ''
          }
        },
      },
      priceTable: {
        title: {
          ro: 'Tratamente de salvare a dintelui'
        },
        description: {
          ro: 'Păstrarea dintelui natural este deosebit de importantă. Tratamenele moderne pot salva dinții chiar și în cazul afecțiunilor în stare avansată. Folosește formularul de mai jos pentru o programare rapidă care îți poate salva dintele.',
        },
        rows: {
          ro: [
            {
              name:
                "Obturație (plombă) fotopolimerizabilă (1 perete/mai multi pereți)",
              price: "200 Lei",
            },
            {
              name:
                "Obturație (plombă) cu pivot de reconstrucție fibră de sticla",
              price: "200 Lei",
            },
            {
              name: "Tratament canal incisivi (monoradiculari)",
              price: "200 Lei",
            },
            {
              name: "Tratament canal premolari (include obturația finală)",
              price: "200 Lei",
            },
            {
              name: "Tratament canal molari M1, M2 (include obturația finală)",
              price: "200 Lei",
            },
          ]
        }
      }
    },
    {
      id: 3,
      name: 'Prosthetics',
      isComponent: true,
      title: {
        ro: 'Protetică',
      },
      description: {
        ro: 'Lipsa unui dinte sau a unui grup de dinți îți poate afecta calitatea vieții. Profită de serviciile de protetică oferite de echipa noastră de dentiști din Aiud și alege punți dentare sau proteze care să reziste!'
      },
      details: {
        hero: {
          title: {
            ro: 'Protetică dentară'
          },
          description: {
            ro: [
              'Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a unui grup de dinți duce și la afecțiuni ale cavitații bucale,  ale articulației temporomandibulare sau afecțiuni digestive. De aceea este recomandată  înlocuirea dinților lipsă cu implanturi, punți dentare sau proteze. Află care  este cea mai potrivită variantă pentru tine.',
            ]
          },
          image: {
            src: require('@/assets/images/ProtHero.png'),
            alt: {
              ro: 'Little girl having a toothache.'
            }
          }
        },
        ctaMessage: {
          title: {
            ro: 'Care soluție e potrivită pentru mine?'
          },
          description: {
            ro: [
              'Există mai multe tipuri de proteze, fixe sau mobile, cum ar fi: proteze care se conectează la dinți sau implanturi, proteze care se atașează folosind adezivi, sau care pot fi menținute de mușchii înconjurători. Aceste proteze au scopul de a reda forma și culoarea dinților dumneavoastră naturali, pentru a vă oferi un zâmbet cât mai natural și estetic.',
              'Soluția potrivită pentru tine, însă, trebuie aleasă împreună cu medicul stomatolog, în urma unei consultații profesioniste.',
            ]
          },
          ctaButton: {
            ro: 'Programare Consultatie'
          }
        },
      },
      priceTable: {
        title: {
          ro: 'Tratamente protetice'
        },
        description: {
          ro: 'Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a unui grup de dinți duce și la afecțiuni ale cavitații bucale, ale articulației gurii sau afecțiuni digestive. Stabilește cu medicul tau stomatolog un plan de tratament folosind formularul de mai jos.',
        },
        rows: {
          ro: [
            {
              name: "Dispozitiv reconstrucție coronaridicular (DCR)",
              price: "200 Lei",
            },
            {
              name: "Ablație lucrare metalica (per dinte stâlp)",
              price: "200 Lei",
            },
            {
              name: "Coroană metaloceramică",
              price: "200 Lei",
            },
            {
              name: "Coroană zirconium",
              price: "200 Lei",
            },
          ]
        }
      }
    },
    {
      id: 4,
      name: 'Surgery',
      isComponent: true,
      title: {
        ro: 'Chirurgie',
      },
      description: {
        ro: 'La DRT Dentist, echipa noastră de chirurgi stomatologi are o singură prioritate: salvarea dinților tăi naturali! De aceea, ne concentrăm pe rezolvarea rapidă a complicațiilor dentare și gingivale.'
      },
      details: {
        hero: {
          title: {
            ro: 'Tratamente Chirurgicale'
          },
          description: {
            ro: [
              'Tratamentele chirurgicale sunt specialitatea clinicii noastre. Obiectivul nostru este de a salva dinții recuperabili prin rezolvarea complicațiilor dentare și gingivale în cel mai scurt timp posibil, ușor și fără durere.',
              'Află mai multe despre tratamentele noastre și fa-ți o programare online pentru a crește șansele de ați salva dinții aflați in pericol.'
            ]
          },
          image: {
            src: require('@/assets/images/EndoHero.png'),
            alt: {
              ro: 'Little girl having a toothache.'
            }
          }
        },
        ctaMessage: {
          title: {
            ro: ''
          },
          description: {
            ro: [
              ''
            ]
          },
          ctaButton: {
            ro: ''
          }
        },
      },
      priceTable: {
        title: {
          ro: 'Tratamente chirurgicale'
        },
        description: {
          ro: 'Obiectivul nostru este de a salva dinții recuperabili și rezolvarea complicațiilor dentare și gingivale în cel mai scurt timp posibil, ușor și fără durere. Folosește formularul de mai jos pentru o programare rapidă care îți poate salva dintele.',
        },
        rows: {
          ro: [
            {
              name: "Tratament endodondic de urgenta în caz de absces dentar",
              price: "200 Lei",
            },
            {
              name: "Extracție dentară (alveloplastică, separație interdiculară)",
              price: "200 Lei",
            },
            {
              name: "Extracție dentară chirurgicală (alvelotomie)",
              price: "200 Lei",
            },
            {
              name: "Extracție chirurgicală a dinților incluși (M3/C, PM)",
              price: "200 Lei",
            },
            {
              name: "Rezecție apicală dinți frontali (1, PM)",
              price: "200 Lei",
            },
            {
              name: "Rezecție apicală dinți laterali (M1, M2)",
              price: "200 Lei",
            },
            {
              name: "Chiuretaj parodontal in câmp deschis (per dinte)",
              price: "200 Lei",
            },
          ]
        }
      }
    },
    {
      id: 5,
      name: 'Orthodontics',
      isComponent: true,
      title: {
        ro: 'Ortodonție',
      },
      description: {
        ro: 'Tratamentele ortodontice corectează dantura, contribuie la menținerea unei igiene orale impecabile și reduc riscul apariției cariilor. DRT Dentist perfecționează zâmbete prin tratamente ortodontice moderne, folosind aparate dentare fixe sau mobile.'
      },
      details: {
        hero: {
          title: {
            ro: 'Tratamente ortodontice'
          },
          description: {
            ro: [
              'Din ce în ce mai multe persoane adulte apelează la tratamente ortodontice recunoscând astfel importanța alinierii dinților și a mușcăturii. Tratamentele moderne nu impun nicio limită de vârstă, încurajând chiar corectarea anomaliilor arcadei dentare la adulți, pentru a preveni viitoare complicații.',
              'Dinții înghesuiți sunt mai greu de igienizat fiind astfel mai expuși riscului de a fi pierduți din cauza cariilor și a paradontozei. Ortodonția este specialitatea medicinei dentare care se ocupă de alinierea dinților folosind aparate dentare fixe sau mobile, cu scopul îmbunătățirii mușcăturii, igienei dentare și, nu în ultimul rând, a aspectului fizic al feței și al zâmbetului.'
            ]
          },
          image: {
            src: require('@/assets/images/OrtoHero.png'),
            alt: {
              ro: 'Man smiling wearing braces.'
            }
          }
        },
        ctaMessage: {
          title: {
            ro: ''
          },
          description: {
            ro: [
              ''
            ]
          },
          ctaButton: {
            ro: ''
          }
        },
      },
      priceTable: {
        title: {
          ro: 'Tratamente ortodontice și aparate dentare'
        },
        description: {
          ro: 'Procedura de corectare a dinților strâmbi sau înghesuiți folosind aparate dentare fixe sau mobile. Stabilește cu medicul tau ortodont un plan de tratament folosind formularul de mai jos.',
        },
        rows: {
          ro: [
            {
              name: "Consulatație și plan de tratament",
              price: "Gratuit",
            },
            {
              name: "Ortodontie, tratament ortodontic - aparat dentar fix",
              price: "200 Lei",
            },
            {
              name: "Aparat dentar mobil",
              price: "200 Lei",
            },
            {
              name: "Ședință de ajustare periodică ",
              price: "200 Lei",
            },
          ]
        }
      }
    },
    {
      id: 6,
      name: 'Implantology',
      isComponent: true,
      title: {
        ro: 'Implantologie',
      },
      description: {
        ro: 'Implanturile dentare se remarcă datorită rezistenței în timp și nu compromit dinții alăturați. Descoperă materialele și tehnologia de ultimă generație utilizate pentru implanturi de către medicii noștri dentiști din Aiud!'
      },
      details: {
        hero: {
          title: {
            ro: 'Implanturi Dentare'
          },
          description: {
            ro: [
              'Implantul dentar este o procedură medicală prin care se înlocuiește rădăcina unuia sau mai multor dinți cu o rădăcină din titan de înaltă puritate, înfiletată chirurgical în țesutul osos al maxilarului. Această rădăcină va servi ca fundație pentru montarea lucrării protetice.',
              'Materialul folosit pentru realizarea implantului este <strong class="font-mvb">100% biocompatibil</strong>, organismul nostru integrându-l astfel in osul mandibular prin <strong class="font-mvb">procesul natural de osteointegrare.</strong>'
            ]
          },
          image: {
            src: require('@/assets/images/ProtHero.png'),
            alt: {
              ro: 'Little girl having a toothache.'
            }
          }
        },
        ctaMessage: {
          title: {
            ro: 'TBD'
          },
          description: {
            ro: [
              'Implantul dentar este recomandat de medici din întreaga lume pentru că, spre deosebire de punțile sau protezele clasice, acesta este mai estetic, mai funcțional, mai rezistent și prezintă mai puține riscuri. Procedura de implant dentar este specialitatea clinicii noastre, echipa noastră oferind servicii de înaltă calitate.'
            ]
          },
          ctaButton: {
            ro: 'Programare Consultatie'
          }
        },
        dentalImplantBenefits: {
          title: {
            ro: 'Care sunt beneficiile implantului dentar?'
          },
          benefits: [
            {
              id: 1,
              name: 'Prevention',
              isComponent: false,
              title: {
                ro: 'Previne migrarea dinților',
              },
              description: {
                ro: 'Implantul unei rădăcini artificiale previne procesul de migrare a dinților învecinați spre spațiul gol rămas după extracție, păstrând astfel forma naturală a maxilarului și prevenind posibile complicații de vorbire sau masticație.'
              }
            },
            {
              id: 2,
              name: 'Prevention',
              isComponent: false,
              title: {
                ro: 'Nu afectează dinții învecinați',
              },
              description: {
                ro: 'Pe lângă prevenirea migrării dinților, procedura de implant dentar nu compromite dinții adiacenți pentru construcția de punți.'
              }
            },
            {
              id: 3,
              name: 'Prevention',
              isComponent: false,
              title: {
                ro: 'Nu restricționează masticația',
              },
              description: {
                ro: 'Comparativ cu punțile sau protezele (backlink la proteze, daca există) clasice, un implant dentar este mai stabil și nu acoperă cerul gurii. De aceea, pacienții cu implanturi dentare se pot bucura de o gamă mai largă de produse alimentar.'
              }
            },
            {
              id: 4,
              name: 'Prevention',
              isComponent: false,
              title: {
                ro: 'Garantează o rezistență mai mare',
              },
              description: {
                ro: 'Implantele dentare au o durată de viață superioară altor lucrări protetice. Implantul de titan poate rezista pe durata întregii vieți, pentru că este asimilat de organism, spre deosebire de o coroană dentară, care are o durată de viață intre 5 și 15 ani.'
              }
            },
          ],
        },
        pageContent: {
          implantProcedure: {
            title: {
              ro: "Etapele Implantului Dentar",
            },
            steps: [
              {
                step: 1,
                title: {
                  ro: "Consultația și planul de tratament",
                },
                image: require("@/assets/images/ImplantStep1.png"),
                description: {
                  ro: [
                    "Planul de tratament este stabilit de medicul specialist, pe baza unei radiografii panoramice. În unele cazuri, este nevoie și de o scanare CT, în special atunci când radiografia simplă nu reflectă clar volumul osului. Dacă pacientul suferă de afecțiuni cronice, medicul implantolog poate recomanda efectuarea unor analize suplimentare.",
                    "De obicei, planul de tratament cuprinde procedura de inserarea a rădăcinii din titan și montarea bontului de prindere și a coroanei dentare. Acest plan va conține o estimare a costurilor și a programărilor calendaristice.",
                    "Uneori, este necesar ca planul de tratament sa conțină și proceduri de creștere a volumului de os, prin adiție osoasă și, eventual, sinus lifting.",
                  ],
                },
              },
              {
                step: 2,
                title: {
                  ro: "Inserarea chirurgicală a implantului",
                },
                image: require("@/assets/images/ImplantStep2.png"),
                description: {
                  ro: [
                    "Inserarea unui implant dentar în os se face sub anestezie locală. Procedura nu este dureroasă și are o durată de aproximativ 30 de minute. În funcție de caz, după inserare, implantul poate fi acoperit cu gingia, pentru a facilita procesul de osteointegrare sau se poate continua cu montarea bontului și atașarea coroanei.",
                  ],
                },
              },
              {
                step: 3,
                title: {
                  ro: "Perioada de osteointegrarea",
                },
                image: false,
                description: {
                  ro: [
                    "De cele mai multe ori, implantul dentar presupune o perioadă de vindecare între inserarea implantului și montarea bontului și a coroanei dentare. Această perioadă poate dura de la 3 la 6 luni, în funcție de recomandarea medicul implantolog.",
                  ],
                },
              },
              {
                step: 4,
                title: {
                  ro: "Montarea bonturilor",
                },
                image: require("@/assets/images/ImplantStep3.png"),
                description: {
                  ro: [
                    "La finalul perioadei de osteointegrare, se montează, pentru o perioadă de 2-3 săptămâni, un bont de vindecare, ce ajută gingia să capete o formă naturală. Apoi, se atașează o altă piesă, numită bont protetic, care va constitui suportul pentru coroana dentară ce va înlocui dintele lipsă.",
                  ],
                },
              },
              {
                step: 5,
                title: {
                  ro: "Atașarea Coroanei",
                },
                image: false,
                description: {
                  ro: [
                    "Coroana este realizată de tehnicianul dentar, conform specificațiilor medicului implantolog. Aceasta urmează a fi cimentată pe bont, rezultând astfel un dinte perfect funcțional și estetic.",
                  ],
                },
              },
            ],
          },
        },
      },
      priceTable: {
        title: {
          ro: 'Tratamente de implantologie'
        },
        description: {
          ro: 'Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a unui grup de dinți duce și la afecțiuni ale cavitații bucale, ale articulației gurii sau afecțiuni digestive. Stabilește cu medicul tau stomatolog un plan de tratament folosind formularul de mai jos.',
        },
        rows: {
          ro: [
            {
              name: "Consulatație și plan de tratament",
              price: "Gratuit",
            },
            {
              name:
                "Implant dentar endoosos (partea chirurgicala, firma MISS/MEGAGEN)",
              price: "200 Lei",
            },
            {
              name: "Bont protectic implanter ( cilindric, conic)",
              price: "200 Lei",
            },
            {
              name: "Os mineral regenerativ (1gr)",
              price: "200 Lei",
            },
          ]
        }
      }
    },
  ],
}