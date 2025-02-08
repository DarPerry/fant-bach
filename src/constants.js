import _ from "lodash";

const TEAMS = {
    RINGS: "Rings",
    ROSES: "Roses",
};

const CONTESTANT_IDS = {
    ALEX_G: "Alex G.",
    ALLI_JO_H: "Alli Jo H.",
    ALLYSHIA_G: "Allyshia G.",
    BAILEY_B: "Bailey B.",
    BEVERLY_O: "Beverly O.",
    CAROLINA_Q: "Carolina Q.",
    CHLOIE_C: "Chloie C.",
    CHRISTINA_S: "Christina S.",
    DINA_L: "Dina L.",
    ELLA_D: "Ella D.",
    J_NAE_S: "J'Nae S.",
    JULIANA_P: "Juliana P.",
    KELSEY_C: "Kelsey C.",
    KYLEIGH_H: "Kyleigh H.",
    LITIA_G: "Litia G.",
    NATALIE_P: "Natalie P.",
    NEICY_B: "Neicy B.",
    PARISA_S: "Parisa S.",
    RADHIKA_G: "Radhika G.",
    REBEKAH_G: "Rebekah G.",
    ROSE_S: "Rose S.",
    SARAFIENA_W: "Sarafiena W.",
    SAVANNAH_Q: "Savannah Q.",
    VICKY_N: "Vicky N.",
    ZOE_M: "Zoe M.",
};

const ROSTERS = {
    ROSES: [],
    RINGS: [],
};

const {
    ALEX_G,
    ALLI_JO_H,
    ALLYSHIA_G,
    BAILEY_B,
    BEVERLY_O,
    CAROLINA_Q,
    CHLOIE_C,
    CHRISTINA_S,
    DINA_L,
    ELLA_D,
    J_NAE_S,
    JULIANA_P,
    KELSEY_C,
    KYLEIGH_H,
    LITIA_G,
    NATALIE_P,
    NEICY_B,
    PARISA_S,
    RADHIKA_G,
    REBEKAH_G,
    ROSE_S,
    SARAFIENA_W,
    SAVANNAH_Q,
    VICKY_N,
    ZOE_M,
} = CONTESTANT_IDS;

const SCORE_CARD = {
    DATE: {
        GROUP: {
            INVITED: 5,
            WINS: 10,
            ROSE: 10,
        },
        ONE_ON_ONE: {
            INVITED: 15,
            ROSE: 20,
        },
        TWO_ON_ONE: {
            INVITED: 5,
            WINS: 15,
        },
    },
    ROSE_CEREMONY: {
        ROSE: 5,
        ELIMINATED: -10,
    },
    END_OF_SEASON: {
        FANTASY_SUITE: 25,
        HOMETOWN: 30,
        FINAL_ROSE: 50,
        ENGAGED: 75,
    },
    DRAMA_AND_CONFLICT: {
        SELF_ELIMINATION: -15,
        INTERRUPT_CONVERSATION: 5,
        CRIES: 5,
    },
    SPECIAL_MOMENT: {
        FIRST_KISS: 15,
        FIRST_IMPRESSION: 20,
        FLYING_DATE: 10,
        SHOPPING_DATE: 10,
        KISS: 5,
    },
};

const DATE_EVENTS = {
    GROUP: {
        INVITED: [],
        WINS: [],
        ROSE: [],
    },
    ONE_ON_ONE: {
        INVITED: [],
        ROSE: [],
    },
    TWO_ON_ONE: {
        INVITED: [],
        WINS: [],
    },
};

const ROSE_CEREMONY_EVENTS = {
    ROSE: [],
    ELIMINATED: [],
};

const END_OF_SEASON_EVENTS = {
    FANTASY_SUITE: [],
    HOMETOWN: [],
    FINAL_ROSE: [],
    ENGAGED: [],
};

const DRAMA_AND_CONFLICT_EVENTS = {
    SELF_ELIMINATION: [],
    INTERRUPT_CONVERSATION: [],
    CRIES: [],
};

const SPECIAL_MOMENT_EVENTS = {
    FIRST_KISS: [],
    FIRST_IMPRESSION: [],
    FLYING_DATE: [],
    SHOPPING_DATE: [],
    KISS: [],
    // MAKEOUT: [],
};

const WEEKLY_EVENTS = () => ({
    DATE: DATE_EVENTS,
    ROSE_CEREMONY: ROSE_CEREMONY_EVENTS,
    END_OF_SEASON: END_OF_SEASON_EVENTS,
    DRAMA_AND_CONFLICT: DRAMA_AND_CONFLICT_EVENTS,
    SPECIAL_MOMENT: SPECIAL_MOMENT_EVENTS,
});

const WEEK_ONE_EVENTS = WEEKLY_EVENTS();

WEEK_ONE_EVENTS.SPECIAL_MOMENT.KISS = [
    ALLYSHIA_G,
    JULIANA_P,
    LITIA_G,
    ALEX_G,
    VICKY_N,
    ZOE_M,
    ROSE_S,
    ALEX_G,
];

WEEK_ONE_EVENTS.DRAMA_AND_CONFLICT.INTERRUPT_CONVERSATION = [VICKY_N];
WEEK_ONE_EVENTS.SPECIAL_MOMENT.FIRST_KISS = [ALLYSHIA_G];
WEEK_ONE_EVENTS.SPECIAL_MOMENT.FIRST_IMPRESSION = [ALEX_G];
WEEK_ONE_EVENTS.ROSE_CEREMONY.ROSE = [
    LITIA_G,
    ROSE_S,
    ZOE_M,
    ELLA_D,
    ALLI_JO_H,
    NATALIE_P,
    JULIANA_P,
    VICKY_N,
    CAROLINA_Q,
    BEVERLY_O,
    BAILEY_B,
    DINA_L,
    CHLOIE_C,
    REBEKAH_G,
    SARAFIENA_W,
    ALLYSHIA_G,
    PARISA_S,
];
WEEK_ONE_EVENTS.ROSE_CEREMONY.ELIMINATED = [
    KYLEIGH_H,
    J_NAE_S,
    CHRISTINA_S,
    RADHIKA_G,
    NEICY_B,
    SAVANNAH_Q,
    KELSEY_C,
];

const WEEK_TWO_EVENTS = WEEKLY_EVENTS();

WEEK_TWO_EVENTS.DATE.ONE_ON_ONE.INVITED = [ALEX_G];
WEEK_TWO_EVENTS.DATE.ONE_ON_ONE.ROSE = [ALEX_G];
WEEK_TWO_EVENTS.DATE.GROUP.INVITED = [
    BEVERLY_O,
    SARAFIENA_W,
    ALLI_JO_H,
    NATALIE_P,
    PARISA_S,
    VICKY_N,
    CHLOIE_C,
    ZOE_M,
    JULIANA_P,
    ALLYSHIA_G,
    DINA_L,
    ELLA_D,
    CAROLINA_Q,
    BAILEY_B,
    ROSE_S,
    LITIA_G,
    REBEKAH_G,
];
WEEK_TWO_EVENTS.DRAMA_AND_CONFLICT.INTERRUPT_CONVERSATION = [
    ZOE_M,
    ZOE_M,
    ALLI_JO_H,
    ZOE_M,
    CHLOIE_C,
];

WEEK_TWO_EVENTS.DATE.GROUP.WINS = [CHLOIE_C, CAROLINA_Q];
WEEK_TWO_EVENTS.SPECIAL_MOMENT.KISS = [
    CHLOIE_C,
    CHLOIE_C,
    NATALIE_P,
    ZOE_M,
    ALEX_G,
    ALEX_G,
    CAROLINA_Q,
    CAROLINA_Q,
    ROSE_S,
    LITIA_G,
    CAROLINA_Q,
];

WEEK_TWO_EVENTS.DATE.GROUP.ROSE = [NATALIE_P, LITIA_G];
WEEK_TWO_EVENTS.DRAMA_AND_CONFLICT.CRIES = [BAILEY_B, BAILEY_B];
WEEK_TWO_EVENTS.ROSE_CEREMONY.ROSE = [
    JULIANA_P,
    BEVERLY_O,
    SARAFIENA_W,
    CAROLINA_Q,
    ZOE_M,
    DINA_L,
    ROSE_S,
    BAILEY_B,
    PARISA_S,
    ALLI_JO_H,
    CHLOIE_C,
];
WEEK_TWO_EVENTS.ROSE_CEREMONY.ELIMINATED = [
    ELLA_D,
    REBEKAH_G,
    ALLYSHIA_G,
    VICKY_N,
];

const scoreMap = {};

const logPathAndValueWithoutLast = (obj, path = []) => {
    for (const key in obj) {
        if (typeof obj[key] === "object") {
            logPathAndValueWithoutLast(obj[key], [...path, key]);
        } else {
            console.log([...path].join("."), obj[key]);

            if (!scoreMap[obj[key]]) {
                if (_.get(SCORE_CARD, [...path].join(".")) === undefined) {
                    console.log("No score for", [...path].join("."));
                }

                scoreMap[obj[key]] =
                    _.get(SCORE_CARD, [...path].join(".")) || 0;
            } else {
                console.log(_.get(SCORE_CARD, [...path].join(".")));
                scoreMap[obj[key]] += _.get(SCORE_CARD, [...path].join("."));
            }
        }
    }

    return scoreMap;
};

const contestants = [
    {
        firstName: "Alex",
        lastName: "Godin",
        age: 27,
        occupation: "Pediatric Speech Therapist",
        from: {
            city: "New Brunswick",
            state: {
                name: "Canada",
                abbreviation: "CAN",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619042/403e145f67ad694f074a76a135f94724/1600x640-Q90_403e145f67ad694f074a76a135f94724.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619042/20eb6dc8c739b94c4787c0ce1aa9518f/579x579-Q90_20eb6dc8c739b94c4787c0ce1aa9518f.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Alli Jo",
        lastName: "Hinkes",
        age: 30,
        occupation: "Boxing Trainer",
        from: {
            city: "Manalapan",
            state: {
                name: "New Jersey",
                abbreviation: "NJ",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619060/d7c232ce80920bea9b4f7d15c734691b/1600x640-Q90_d7c232ce80920bea9b4f7d15c734691b.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619060/9fb62d94d4b6b28846e44692a7f46118/579x579-Q90_9fb62d94d4b6b28846e44692a7f46118.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Allyshia",
        lastName: "Gupta",
        age: 29,
        occupation: "Interior Designer",
        from: {
            city: "Tampa",
            state: {
                name: "Florida",
                abbreviation: "FL",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619069/635a0c58dcb48a0a4cfc9ae287caa597/1600x640-Q90_635a0c58dcb48a0a4cfc9ae287caa597.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619069/6771154da78b09de338fd357da044974/579x579-Q90_6771154da78b09de338fd357da044974.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Bailey",
        lastName: "Brown",
        age: 27,
        occupation: "Social Media Manager",
        from: {
            city: "Atlanta",
            state: {
                name: "Georgia",
                abbreviation: "GA",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619075/b79ba64093c1201cd741683bbbbbd550/1600x640-Q90_b79ba64093c1201cd741683bbbbbd550.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619075/6067281ccd0433494934bf779c05482b/579x579-Q90_6067281ccd0433494934bf779c05482b.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Beverly",
        lastName: "Ortega",
        age: 30,
        occupation: "Insurance Salesperson",
        from: {
            city: "Howard Beach",
            state: {
                name: "New York",
                abbreviation: "NY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619087/ff025954596c5d9434641ef045bad7ba/1600x640-Q90_ff025954596c5d9434641ef045bad7ba.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619087/948c38c7d8cde40636ef7131e6274b10/579x579-Q90_948c38c7d8cde40636ef7131e6274b10.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Carolina",
        lastName: "Quixano",
        age: 28,
        occupation: "Public Relations Producer",
        from: {
            city: "Guaynabo",
            state: {
                name: "Puerto Rico",
                abbreviation: "PUR",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619093/9a50584079d707ecd328cf6c7dfbf65d/1600x640-Q90_9a50584079d707ecd328cf6c7dfbf65d.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619093/4f0a1edd19e526d337d9f5ca59a766ad/579x579-Q90_4f0a1edd19e526d337d9f5ca59a766ad.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Chloie",
        lastName: "Costello",
        age: 27,
        occupation: "Model",
        from: {
            city: "New York",
            state: {
                name: "New York",
                abbreviation: "NY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619103/5feeb2b3514f14734cb5a6971e10f0f6/1600x640-Q90_5feeb2b3514f14734cb5a6971e10f0f6.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619103/82d58dbd8377791012a918c89fa96ed7/579x579-Q90_82d58dbd8377791012a918c89fa96ed7.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Christina",
        lastName: "Smith",
        age: 26,
        occupation: "Marketing Director",
        from: {
            city: "Fargo",
            state: {
                name: "North Dakota",
                abbreviation: "ND",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619107/d0fc79e651bf93932405b80cc7f63a7e/1600x640-Q90_d0fc79e651bf93932405b80cc7f63a7e.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619107/909cc37276246b83fc6297233d4970e4/579x579-Q90_909cc37276246b83fc6297233d4970e4.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Dina",
        lastName: "Lupancu",
        age: 31,
        occupation: "Attorney",
        from: {
            city: "Chicago",
            state: {
                name: "Illinois",
                abbreviation: "IL",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619123/54de5502b9bb0a4edfdb77717211b17d/1600x640-Q90_54de5502b9bb0a4edfdb77717211b17d.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619123/6109faf18a924da5ce75c7ae3bd53bde/579x579-Q90_6109faf18a924da5ce75c7ae3bd53bde.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Ella",
        lastName: "Del Rosario",
        age: 25,
        occupation: "Luxury Travel Host",
        from: {
            city: "Los Angeles",
            state: {
                name: "California",
                abbreviation: "CA",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619129/c92bb9c073a8e50fcda5733eb1b8d30c/1600x640-Q90_c92bb9c073a8e50fcda5733eb1b8d30c.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619129/3efa03414bdf97d9f550a9ea3aa5707c/579x579-Q90_3efa03414bdf97d9f550a9ea3aa5707c.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "J'Nae",
        lastName: "Squires-Horton",
        age: 28,
        occupation: "Account Coordinator",
        from: {
            city: "Colorado Springs",
            state: {
                name: "Colorado",
                abbreviation: "CO",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619135/1946a832f76ec19300067aee4dbefeee/1600x640-Q90_1946a832f76ec19300067aee4dbefeee.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619135/37bf422d2fc0ec9a5ccf64efc7a905a6/579x579-Q90_37bf422d2fc0ec9a5ccf64efc7a905a6.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Juliana",
        lastName: "Pasquarosa",
        age: 28,
        occupation: "Client Service Associate",
        from: {
            city: "Newton",
            state: {
                name: "Massachusetts",
                abbreviation: "MA",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619145/4034b9f5e81f9bb29543a501cab276c7/1600x640-Q90_4034b9f5e81f9bb29543a501cab276c7.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619145/152e33f4c1bcf19c7fc9ed6c11a27f1b/579x579-Q90_152e33f4c1bcf19c7fc9ed6c11a27f1b.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Kelsey",
        lastName: "Curtis",
        age: 26,
        occupation: "Interior Designer",
        from: {
            city: "Brooklyn",
            state: {
                name: "New York",
                abbreviation: "NY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619149/edaa7ee7a315d6af71b34ffd2afe2284/1600x640-Q90_edaa7ee7a315d6af71b34ffd2afe2284.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619149/e99ee61de266291dd75fc52f44de7288/579x579-Q90_e99ee61de266291dd75fc52f44de7288.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Kyleigh",
        lastName: "Henrich",
        age: 26,
        occupation: "Retail Manager",
        from: {
            city: "Wilmington",
            state: {
                name: "North Carolina",
                abbreviation: "NC",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619154/a372a5ed7921d1da0e286be5f8874c3f/1600x640-Q90_a372a5ed7921d1da0e286be5f8874c3f.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619154/24971b2c5fd108a1e9bfb93799c147a2/579x579-Q90_24971b2c5fd108a1e9bfb93799c147a2.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Litia",
        lastName: "Garr",
        age: 31,
        occupation: "Venture Capitalist",
        from: {
            city: "Salt Lake City",
            state: {
                name: "Utah",
                abbreviation: "UT",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619161/a0d959f633c850c349a8a727da7d35eb/1600x640-Q90_a0d959f633c850c349a8a727da7d35eb.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619161/6ff4a9f8c5dfb66cb506f6380c63f65d/579x579-Q90_6ff4a9f8c5dfb66cb506f6380c63f65d.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Natalie",
        lastName: "Phillips",
        age: 25,
        occupation: "Ph.D Student",
        from: {
            city: "Louisville",
            state: {
                name: "Kentucky",
                abbreviation: "KY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619169/0cb8d760dcd157a9b0db696c8d561224/1600x640-Q90_0cb8d760dcd157a9b0db696c8d561224.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619169/6c38c057f77a5b4b33a639d858858902/579x579-Q90_6c38c057f77a5b4b33a639d858858902.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Neicy",
        lastName: "Baxter",
        age: 32,
        occupation: "Pediatrician",
        from: {
            city: "Blythewood",
            state: {
                name: "South Carolina",
                abbreviation: "SC",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619176/f7b098cefe396999faae6a87fbe4b3ff/1600x640-Q90_f7b098cefe396999faae6a87fbe4b3ff.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619176/bd077fdaf9dc47cee122a77406801920/579x579-Q90_bd077fdaf9dc47cee122a77406801920.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Parisa",
        lastName: "Shifteh",
        age: 29,
        occupation: "Pediatric Behavior Analayst",
        from: {
            city: "Birmingham",
            state: {
                name: "Michigan",
                abbreviation: "MI",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619183/b7dc2fed4643a57e85d5a65b030efdbc/1600x640-Q90_b7dc2fed4643a57e85d5a65b030efdbc.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619183/cb808dd8d95d5f99bf99626fbf4d5a5f/579x579-Q90_cb808dd8d95d5f99bf99626fbf4d5a5f.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Radhika",
        lastName: "Gupta",
        age: 28,
        occupation: "Attonery",
        from: {
            city: "New York",
            state: {
                name: "New York",
                abbreviation: "NY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619189/a52a4e541ac6f1218f931d1ed6561a9d/1600x640-Q90_a52a4e541ac6f1218f931d1ed6561a9d.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619189/187b4d72ee6286b02e166c6dad594d84/579x579-Q90_187b4d72ee6286b02e166c6dad594d84.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Rebekah",
        lastName: "Garrett",
        age: 31,
        occupation: "ICU Nurse",
        from: {
            city: "Dallas",
            state: {
                name: "Texas",
                abbreviation: "TX",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619195/96d312fd11ee3adb57e63697413d65af/1600x640-Q90_96d312fd11ee3adb57e63697413d65af.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619195/4b46c27e84fc8418a081faa72089ae19/579x579-Q90_4b46c27e84fc8418a081faa72089ae19.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Rose",
        lastName: "Sombke",
        age: 27,
        occupation: "Registered Nurse",
        from: {
            city: "Chicago",
            state: {
                name: "Illinois",
                abbreviation: "IL",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619199/c46816206aa9afec2d0da44740306a04/1600x640-Q90_c46816206aa9afec2d0da44740306a04.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619199/f44608b748e054358279cd7207d3da26/579x579-Q90_f44608b748e054358279cd7207d3da26.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Sarafiena",
        lastName: "Watkins",
        age: 29,
        occupation: "Associate Media Director",
        from: {
            city: "New York",
            state: {
                name: "New York",
                abbreviation: "NY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619205/57bb7a9aefc6010237595da0ed1011f8/1600x640-Q90_57bb7a9aefc6010237595da0ed1011f8.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619205/bbfa7e62976e1dd1a5e8312fe86613ed/579x579-Q90_bbfa7e62976e1dd1a5e8312fe86613ed.jpg",
        },
        eliminated: false,
        scoring: [],
    },
    {
        firstName: "Savannah",
        lastName: "Quinn",
        age: 27,
        occupation: "Wedding Planner",
        from: {
            city: "Charlottesville",
            state: {
                name: "Virginia",
                abbreviation: "VA",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619209/6212480c812d41b22a4e63b8676f87ea/1600x640-Q90_6212480c812d41b22a4e63b8676f87ea.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619209/c5d562829bb2566dde2357eedfbe4457/579x579-Q90_c5d562829bb2566dde2357eedfbe4457.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Vicky",
        lastName: "Nyamuswa",
        age: 28,
        occupation: "Nightclub Server",
        from: {
            city: "Las Vegas",
            state: {
                name: "Nevada",
                abbreviation: "NV",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619215/738398adfd8fc5419e6f713cc2e50a7f/1600x640-Q90_738398adfd8fc5419e6f713cc2e50a7f.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619215/f915585cb166f4d15e35050934ac4eee/579x579-Q90_f915585cb166f4d15e35050934ac4eee.jpg",
        },
        eliminated: true,
        scoring: [],
    },
    {
        firstName: "Zoe",
        lastName: "McGrady",
        age: 27,
        occupation: "Tech Engineer and Model",
        from: {
            city: "New York",
            state: {
                name: "New York",
                abbreviation: "NY",
            },
        },
        images: {
            banner: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619227/9572c4a0c8a68da891db831df7f6b741/1600x640-Q90_9572c4a0c8a68da891db831df7f6b741.jpg",
            avatar: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4619227/e7b6dcd659709edb0f4f47a6794a50b5/579x579-Q90_e7b6dcd659709edb0f4f47a6794a50b5.jpg",
        },
        eliminated: false,
        scoring: [],
    },
];

[WEEK_ONE_EVENTS, WEEK_TWO_EVENTS].map((c) => logPathAndValueWithoutLast(c));

console.log(scoreMap);

const CONTESTANTS_WITH_SCORES = contestants.map((contestant) => {
    return {
        ...contestant,
        score: scoreMap[
            `${contestant.firstName} ${contestant.lastName.at(0)}.`
        ],
    };
});

// Do above for both week one and week two

export { contestants, scoreMap, ROSTERS, CONTESTANTS_WITH_SCORES };

/*
🌹 Date-Related Points
    Gets Invited on a Group Date → +5
    Wins the Group Date Competition → +10 (Winning gets extra attention & validation.)
    Receives a Group Date Rose → +10 (Sign of a strong connection.)
    Gets Invited on a 1-on-1 Date → +15 (Exclusive time with the Bachelor.)
    Receives a Rose on a 1-on-1 Date → +20 (Major relationship progression.)
    Goes on a 2-on-1 Date → +5 (Risky but significant.)
    Wins the 2-on-1 Date → +15 (Survival = strong standing.)
    Receives a Rose at a Rose Ceremony → +5 (Progressing but expected.)
    
🏆 End of Season Points
    Goes on a Fantasy Suite Date → +25 (Top-tier status.)
    Makes it to Hometown Dates → +30 (Serious long-term potential.)
    Receives the Final Rose → +50 (Beating all competition.)
    Gets Engaged in the Finale → +75 (Ultimate victory!)

💔 Elimination & Drama Points
    Gets Eliminated at a Rose Ceremony → -10 (End of the road.)
    Self-Elimination → -15 (Less negative since it's their choice.)
    Interrupts Another Contestant’s Conversation → +5 (Bold but controversial move.)
    Cries on Camera → +5 (The producers love it—so should your fantasy team.)

💋 Special Moments
    First Kiss of the Season → +15 (Being first stands out.)
    Gets the First Impression Rose → +20 (Huge early boost—statistically important.)
    Goes on a Flying Date (e.g., helicopter, plane) → +10 (Classic, romantic Bachelor moment.)
    Goes on "The Shopping" Date → +10 (A luxurious and rare experience.)

*/
