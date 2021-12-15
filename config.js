module.exports = {
  bot: {
    token: "",
    prefix: "!",
    owners: ["875768640320962650"],
    mongourl: "mongodb+srv://dbl:dbl@cluster0.lt2km.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    servers: {
      token: "",
      prefix: "!"
    }
  },

  website: {
    callback: "",
    secret: "r_DK-p8n_8JhigNG8_uxWr5hjuzLSHyP",
    clientID: "918819837705347072", // Bot client id.
    tags: ["Moderation", "Fun", "Minecraft", "Economy", "Guard", "NSFW", "Anime", "Invite", "Music", "Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish"],
    reporttags: ["Choose one...","NSFW content","API abuse","Malicious use of bot page","Copycat","Doesn't work","Other"],
    languages: [
      { flag: 'gb', code: 'en', name: 'English' },
      { flag: 'in', code: 'hi', name: 'हिंदी' },
      { flag: 'in', code: 'te', name: 'తెలుగు' },
      { flag: 'tr', code: 'tr', name: 'Türkçe' },
      { flag: 'de', code: 'de', name: 'Deutsch' },
      { flag: 'it', code: 'it', name: 'Italiano' },
      { flag: 'ne', code: 'ne', name: 'नेपाली' },
      { flag: 'ar', code: 'ar', name: 'العربية' },
      { flag: 'fr', code: 'fr', name: 'French' },
      { flag: 'pl', code: 'pl', name: 'Polish' }
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development"
        },
        {
          icon: "fal fa-play",
          name: "Stream"
        },
        {
          icon: "fal fa-camera",
          name: "Media"
        },
        {
          icon: 'fal fa-building',
          name: 'Company'
        },
        {
          icon: 'fal fa-gamepad',
          name: 'Game'
        },
        {
          icon: 'fal fa-icons',
          name: 'Emoji'
        },
        {
          icon: 'fal fa-robot',
          name: 'Bot List'
        },
        {
          icon: 'fal fa-server',
          name: 'Server List'
        },
        {
          icon: 'fal fa-moon-stars',
          name: 'Turkish'
        },
        {
          icon: 'fab fa-discord',
          name: 'Support'
        },
        {
          icon: 'fal fa-volume',
          name: 'Sound'
        },
        {
          icon: 'fal fa-comments',
          name: 'Chatting'
        },
        {
          icon: 'fal fa-lips',
          name: 'NSFW'
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange"
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest"
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay"
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme"
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop"
        },
        {
          icon: "fal fa-desktop",
          name: "Technology"
        },
        {
          icon: "fal fa-laugh",
          name: "Fun"
        },
        {
          icon: "fal fa-share-alt",
          name: "Social"
        },
        {
          icon: "fal fa-laptop",
          name: "E-Spor"
        },
        {
          icon: 'fal fa-palette',
          name: 'Design'
        },
        {
          icon: 'fal fa-users',
          name: 'Community'
        }
      ]
    }
  },

  server: {
    id: "918742094762356756", // DisBots.xyz Server ID
    invite: "https://discord.gg/",
    dblinvite: "",
    roles: {
      yonetici: "919184312472059915", // Team roleid
      manager: "918742094791737353",// Community Manager Role Id of
      booster: "918749511608856606", // Server booster Role ID
      sponsor: "918742094791737348", // Sponsor Role id
      community: "918742094791737352", // Community Role id
      supporter: "918742094791737346",// Supporter Role id
      partnerRole: "918742094791737349", // Partner Role id
      site_creator: "919188947333181510",// Site Creator Role id
      administrator: "919184312472059915", // Team Role id Again
      moderator: "918742094791737353", // bot tester Role id
      moderatorrole: "918742094791737350", // Server Moderator Role id
      profile: {
        sitecreator:"919188947333181510", // Site Creator Role id
        booster: "918749511608856606",// Server booster Role ID
        community: "918742094791737352",// Community Role id
        sponsor: "918742094791737348", // Sponsor Role id
        supporter: "918742094791737346", // Supporter Role id
        manager: "918742094791737353", // Community Manager Role Id
        partnerRole: "918742094791737349" // Partner Role id
      },
      codeshare: {
        python: "PY",
        javascript: "JS",
        html: "HTML",
        substructure: "Substructure",
        bdfd: "BDFD", // Bot Designer For Discord
        fiveInvite: "5 INVITES",
        tenInvite: "10 INVITES",
        fifteenInvite: "15 INVITES",
        twentyInvite: "20 INVITES"
      },
      botlist: {
        ownerserver: "918742094808510496", // Server Owner Role ID
        developer: "919187430039498793", // Bot Developer Role ID
        certified_developer: "919187547526164481",// Certified Bot Developer Role ID
        boosted_developer: "919187539955421215", // Boosted Bot Developer Role ID
        promoted_developer: "919187850564632607",// Promoted Bot Developer Role ID
        premium_developer: "919187979652714536",// Premium Server Owner Role ID
        bot: "914439440208904212",// Approved Bot Role ID
        boosted_bot: "919186541698515005", // Boosted Bot Role ID
        promoted_bot: "919186709198012457",// Promoted Bot Role ID
        certified_bot: "919186853645664308"// Certified Bot Role ID
      }
    },
    channels: {
      codelog: "920727718511931403", // Code Log
      login: "920727861474787428",// Login Log
      webstatus: "920727994903982140",// Website Status Log
      uptimelog: "920728109853065316",// Uptime Log
      botlog: "920728207471304755",// bot Log
      reportlog: "920728294813474816",// bot report Log
      votes: "920728382281502780"// Vote Log Log
    }
  }


}
