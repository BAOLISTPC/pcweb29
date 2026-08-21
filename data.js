/*
  这是你最常改的文件。
  以后新增作品、比赛、视频，基本只需要改这里。
*/

window.SITE_DATA = {
  profile: {
    name: "YOUR NAME",
    brand: "MY ARCHIVE",
    heroKicker: "WORK / FOOTBALL / LIFE",
    heroTitle: "把做过的事，\n和踢过的球都留下来。",
    heroDesc: "一个属于自己的数字档案馆：作品、比赛、数据与视频。",
    currentFocus: "Brand / Video / Football",
    footballPositions: "RW · LW · ST",
    footballStyle: "RUN / CROSS / FINISH",
    number: "—",
    aboutTitle: "这是我的长期个人档案。",
    aboutText: "工作上记录作品，球场上记录每一场比赛。网站会随着时间持续更新。",
    links: [
      { label: "GitHub", url: "https://github.com/" },
      { label: "Bilibili", url: "#" },
      { label: "Email", url: "mailto:you@example.com" }
    ]
  },

  works: [
    {
      id: 1,
      title: "品牌内容项目",
      category: "品牌与内容",
      year: "2026",
      summary: "用于放你最有代表性的品牌内容、公众号、宣传项目或整合传播案例。",
      tags: ["Brand", "Content", "Strategy"],
      featured: true,
      url: "#"
    },
    {
      id: 2,
      title: "短视频策划与制作",
      category: "视频策划",
      year: "2026",
      summary: "展示脚本、分镜、拍摄、剪辑与数据优化，适合作为完整视频项目案例。",
      tags: ["Video", "Shooting", "Edit"],
      featured: false,
      url: "#"
    },
    {
      id: 3,
      title: "展会 / 活动项目",
      category: "展会与活动",
      year: "2026",
      summary: "展示从立项、筹备、现场执行到复盘的完整项目能力。",
      tags: ["Event", "SOP", "Operation"],
      featured: false,
      url: "#"
    },
    {
      id: 4,
      title: "产品内容与视觉",
      category: "产品内容",
      year: "2026",
      summary: "用于收录产品手册、产品卖点、视觉物料与宣传内容等成果。",
      tags: ["Product", "Visual", "Copy"],
      featured: false,
      url: "#"
    }
  ],

  playerAttributes: [
    { name: "速度", value: 84 },
    { name: "射门", value: 82 },
    { name: "传球", value: 79 },
    { name: "盘带", value: 81 },
    { name: "防守", value: 67 },
    { name: "体能", value: 85 }
  ],

  seasons: [
    {
      year: 2026,
      status: "ACTIVE",
      apps: 1,
      goals: 1,
      assists: 2,
      note: "当前先放入一条示例比赛记录。你把历史数据发给我后，可以继续补齐每一年的赛季档案。"
    },
    {
      year: 2025,
      status: "ARCHIVE",
      apps: 0,
      goals: 0,
      assists: 0,
      note: "待录入。"
    },
    {
      year: 2022,
      status: "ARCHIVE",
      apps: 0,
      goals: 0,
      assists: 0,
      note: "待录入。"
    }
  ],

  matches: [
    {
      date: "2026-08-18",
      title: "百旺",
      position: "RW",
      goals: 1,
      assists: 2,
      note: "1 球 2 助攻。可在这里补充比赛感受、对手、比分、战术角色等。",
      videoUrl: ""
    }
  ],

  videos: [
    {
      title: "8.18 百旺比赛集锦",
      type: "MATCH HIGHLIGHTS",
      date: "2026-08-18",
      url: ""
    },
    {
      title: "个人进球合集",
      type: "GOALS",
      date: "持续更新",
      url: ""
    },
    {
      title: "传中 / 助攻合集",
      type: "ASSISTS",
      date: "持续更新",
      url: ""
    }
  ]
};
