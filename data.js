/*
  足球数据 V3 — 以 2026-08-21 最新上传记录为唯一数据源

  数据口径：
  - 比赛日期、名称、进球/助攻、跑动距离、脚法均按原记录录入。
  - 原记录未提供开球时间和进球分钟：统一显示“未记录”，不做推测。
  - 地点仅在比赛名称能明确识别场地/区域时提取，否则显示“未单独记录”。
  - 2022：逐场助攻合计 12，年度汇总写 11。
  - 2025：逐场进球合计 45，年度汇总写 43。
    赛季大数字使用原文年度汇总，比赛卡保留逐场原始记录。
*/

window.SITE_DATA = {
  "profile": {
    "name": "YOUR NAME",
    "brand": "MY ARCHIVE",
    "heroKicker": "WORK / FOOTBALL / LIFE",
    "heroTitle": "把做过的事，\n和踢过的球都留下来。",
    "heroDesc": "个人作品、比赛、进球与视频的长期数字档案。",
    "currentFocus": "Brand / Video / Football",
    "footballPositions": "RW · LW · ST",
    "footballStyle": "RUN / CROSS / FINISH",
    "number": "—",
    "aboutTitle": "这是我的长期个人档案。",
    "aboutText": "足球数据以最新上传记录为准。原记录没有提供开球时间和进球分钟的项目，网站统一显示“未记录”，不做推测。",
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/"
      },
      {
        "label": "Bilibili",
        "url": "#"
      },
      {
        "label": "Email",
        "url": "mailto:you@example.com"
      }
    ]
  },
  "works": [
    {
      "id": 1,
      "title": "品牌内容项目",
      "category": "品牌与内容",
      "year": "2026",
      "summary": "用于放你最有代表性的品牌内容、公众号、宣传项目或整合传播案例。",
      "tags": [
        "Brand",
        "Content",
        "Strategy"
      ],
      "featured": true,
      "url": "#"
    },
    {
      "id": 2,
      "title": "短视频策划与制作",
      "category": "视频策划",
      "year": "2026",
      "summary": "展示脚本、分镜、拍摄、剪辑与数据优化，适合作为完整视频项目案例。",
      "tags": [
        "Video",
        "Shooting",
        "Edit"
      ],
      "featured": false,
      "url": "#"
    },
    {
      "id": 3,
      "title": "展会 / 活动项目",
      "category": "展会与活动",
      "year": "2026",
      "summary": "展示从立项、筹备、现场执行到复盘的完整项目能力。",
      "tags": [
        "Event",
        "SOP",
        "Operation"
      ],
      "featured": false,
      "url": "#"
    },
    {
      "id": 4,
      "title": "产品内容与视觉",
      "category": "产品内容",
      "year": "2026",
      "summary": "用于收录产品手册、产品卖点、视觉物料与宣传内容等成果。",
      "tags": [
        "Product",
        "Visual",
        "Copy"
      ],
      "featured": false,
      "url": "#"
    }
  ],
  "playerAttributes": [
    {
      "name": "速度",
      "value": 84
    },
    {
      "name": "射门",
      "value": 82
    },
    {
      "name": "传球",
      "value": 79
    },
    {
      "name": "盘带",
      "value": 81
    },
    {
      "name": "防守",
      "value": 67
    },
    {
      "name": "体能",
      "value": 85
    }
  ],
  "seasonSummary": [
    {
      "year": 2022,
      "status": "ARCHIVE",
      "apps": 23,
      "goals": 50,
      "assists": 11,
      "source": "年度汇总",
      "detailGoals": 50,
      "detailAssists": 12,
      "note": "逐场助攻合计 12，年度汇总为 11"
    },
    {
      "year": 2023,
      "status": "ARCHIVE",
      "apps": 30,
      "goals": 52,
      "assists": 20,
      "source": "年度汇总",
      "detailGoals": 52,
      "detailAssists": 20,
      "note": "逐场累计与年度汇总一致。"
    },
    {
      "year": 2024,
      "status": "ARCHIVE",
      "apps": 28,
      "goals": 41,
      "assists": 38,
      "source": "年度汇总",
      "detailGoals": 41,
      "detailAssists": 38,
      "note": "逐场累计与年度汇总一致。"
    },
    {
      "year": 2025,
      "status": "ARCHIVE",
      "apps": 22,
      "goals": 43,
      "assists": 22,
      "source": "年度汇总",
      "detailGoals": 45,
      "detailAssists": 22,
      "note": "逐场进球合计 45，年度汇总为 43"
    },
    {
      "year": 2026,
      "status": "ACTIVE",
      "apps": 15,
      "goals": 48,
      "assists": 22,
      "source": "逐场累计（截至 2026-08-18）",
      "detailGoals": 48,
      "detailAssists": 22,
      "note": "2026 年文档未写年度总计，按已录入逐场记录累计。"
    }
  ],
  "matches": [
    {
      "date": "2022-07-17",
      "time": "未记录",
      "location": "未单独记录",
      "event": "深圳拜仁队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "8.09km",
      "note": "1球（右脚）一助",
      "raw": "1球（右脚）一助 跑动8.09km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-08-07",
      "time": "未记录",
      "location": "未单独记录",
      "event": "深圳拜仁外战",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "5.7km",
      "note": "1球（左脚）一助攻",
      "raw": "1球（左脚）一助攻 跑动5.7km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-09-01",
      "time": "未记录",
      "location": "未单独记录",
      "event": "五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "8.53km",
      "note": "3球",
      "raw": "3球 跑动8.53km",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-09-05",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.15km",
      "note": "1球（左脚？）",
      "raw": "1球（左脚？） 跑动5.15km",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-09-06",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "6.11km",
      "note": "2球（左右脚）",
      "raw": "2球（左右脚） 跑动6.11km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-09-26",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设数创友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "8.80km",
      "note": "1球（左脚）",
      "raw": "1球（左脚） 跑动8.80km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-09",
      "time": "未记录",
      "location": "未单独记录",
      "event": "六人野球",
      "format": "6人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "9.02km",
      "note": "3球（左脚2右脚1）中场吊射",
      "raw": "3球（左脚2右脚1）中场吊射 跑动9.02km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-10",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设试训",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "8.47km",
      "note": "2球（左右脚）",
      "raw": "2球（左右脚） 跑动8.47km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-13",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "15.45km",
      "note": "2球（左右脚）",
      "raw": "2球（左右脚） 跑动15.45km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-15",
      "time": "未记录",
      "location": "未单独记录",
      "event": "队内六人（🥚受伤）",
      "format": "6人制",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "9.06km",
      "note": "2球（左右脚",
      "raw": "2球（左右脚 跑动9.06km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-17",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 6,
      "assists": 0,
      "status": "源数据",
      "runDistance": "8.14km",
      "note": "6球（左右脚各三球）",
      "raw": "6球（左右脚各三球） 跑动8.14km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-23",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设外语友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.73km",
      "note": "1球（左脚）",
      "raw": "1球（左脚） 跑动5.73km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-29",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设传播友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 5,
      "assists": 1,
      "status": "源数据",
      "runDistance": "7.21km",
      "note": "5球（左脚了2球右脚3球（脚后跟进球）一助攻",
      "raw": "5球（左脚了2球右脚3球（脚后跟进球）一助攻 跑动7.21km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-10-31",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "8.55km",
      "note": "1球（右脚）过四人晃飞后卫穿裆门将",
      "raw": "1球（右脚）过四人晃飞后卫穿裆门将 跑动8.55km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "连过多人后穿裆"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-04",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "11.68km",
      "note": "1球（右脚）1助攻",
      "raw": "1球（右脚）1助攻 跑动11.68km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-07",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "12.48km",
      "note": "2球（一左一右）1助攻",
      "raw": "2球（一左一右）1助攻 跑动12.48km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-14",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设传播+艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 1,
      "status": "源数据",
      "runDistance": "10.00km",
      "note": "4球（左脚2球右脚2球）1助攻",
      "raw": "4球（左脚2球右脚2球）1助攻 跑动10.00km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-16",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设外语+艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "7.69km",
      "note": "2球（左右脚各一球）",
      "raw": "2球（左右脚各一球） 跑动7.69km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-21",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设外语",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "9.58km",
      "note": "2球（左右脚各一球）1助攻",
      "raw": "2球（左右脚各一球）1助攻 跑动9.58km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-25",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.79km",
      "note": "3球（右脚）",
      "raw": "3球（右脚） 跑动5.79km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-11-29",
      "time": "未记录",
      "location": "未单独记录",
      "event": "外语+艺设数创+艺设队内赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 2,
      "status": "源数据",
      "runDistance": "10.05km",
      "note": "3球（左脚一球右脚两球（外语两球艺设一球）2助攻",
      "raw": "3球（左脚一球右脚两球（外语两球艺设一球）2助攻 跑动10.05km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2022-12-05",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设外语友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 2,
      "status": "源数据",
      "runDistance": "10.71km",
      "note": "2助攻（一左一右）",
      "raw": "2助攻（一左一右） 跑动10.71km",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2022-12-08",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设数创野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "3.38km",
      "note": "2球（左脚一球右脚一球）1助攻（右脚）",
      "raw": "2球（左脚一球右脚一球）1助攻（右脚） 跑动3.38km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-03-28",
      "time": "未记录",
      "location": "东区",
      "event": "艺设东区五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "至少4km",
      "note": "1球（左脚推射）1助攻",
      "raw": "1球（左脚推射）1助攻 跑动至少4km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "推射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-04-03",
      "time": "未记录",
      "location": "西区",
      "event": "艺设西区五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "9.48km",
      "note": "1球（右脚爆射）",
      "raw": "1球（右脚爆射） 跑动9.48km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "爆射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-04-06",
      "time": "未记录",
      "location": "西区",
      "event": "艺设西区队内七人训练赛",
      "format": "7人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "7.32km",
      "note": "1球（右脚推射）",
      "raw": "1球（右脚推射） 跑动7.32km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "推射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-04-09",
      "time": "未记录",
      "location": "未单独记录",
      "event": "深圳拜仁七人比赛",
      "format": "7人制",
      "score": "",
      "position": "左边卫",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "4.49km",
      "note": "1球（头球） 左边卫",
      "raw": "1球（头球） 左边卫 跑动4.49km",
      "goalEvents": [
        {
          "foot": "头球",
          "minute": "未记录",
          "zone": "未记录",
          "type": "头球"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-04-21",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设数创十一人友谊赛",
      "format": "11人制",
      "score": "",
      "position": "左边锋",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "至少2km",
      "note": "1球（弧顶兜射）左边锋",
      "raw": "1球（弧顶兜射）左边锋 跑动至少2km",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "弧顶兜射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-05-05",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设数创友谊赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 0,
      "status": "源数据",
      "runDistance": "6.80km",
      "note": "4球（一右臀一头两右脚）",
      "raw": "4球（一右臀一头两右脚） 跑动6.80km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "头球",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "其他",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-05-08",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设外语十一人友谊赛",
      "format": "11人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "6.64km",
      "note": "1球（右脚推射）",
      "raw": "1球（右脚推射） 跑动6.64km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "推射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-05-10",
      "time": "未记录",
      "location": "未单独记录",
      "event": "长胜杯艺设传播",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "6.61km",
      "note": "1球（右脚）还有一进球被吹",
      "raw": "1球（右脚）还有一进球被吹 跑动6.61km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-05-15",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.27km",
      "note": "2球（右脚2卡卡）",
      "raw": "2球（右脚2卡卡） 跑动5.27km",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-05-22",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.40km",
      "note": "1球（右脚）",
      "raw": "1球（右脚） 跑动5.40km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-05-24",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设队内训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 0,
      "status": "源数据",
      "runDistance": "8.67km",
      "note": "4球（左脚1球右脚3球）",
      "raw": "4球（左脚1球右脚3球） 跑动8.67km",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-06-01",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设传播经济五人训练",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.50km",
      "note": "3球（左脚1球右脚两球（1胸部停球凌空抽射）",
      "raw": "3球（左脚1球右脚两球（1胸部停球凌空抽射） 跑动5.50km",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-06-19",
      "time": "未记录",
      "location": "西区",
      "event": "西区野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.57km",
      "note": "1球（右脚伊布凌空抽射）",
      "raw": "1球（右脚伊布凌空抽射） 跑动5.57km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "凌空抽射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-07-01",
      "time": "未记录",
      "location": "绿城天台",
      "event": "绿城天台",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 6,
      "status": "源数据",
      "runDistance": "至少3km",
      "note": "1球6助攻（进球右脚）",
      "raw": "1球6助攻（进球右脚） 跑动至少3km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-07-11",
      "time": "未记录",
      "location": "绿洲天台",
      "event": "绿洲天台",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 2,
      "status": "源数据",
      "runDistance": "7.60km",
      "note": "2助攻（右脚）",
      "raw": "2助攻（右脚） 跑动7.60km",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2023-08-02",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 3,
      "status": "源数据",
      "runDistance": "6.17km",
      "note": "2球3助攻（右脚）",
      "raw": "2球3助攻（右脚） 跑动6.17km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-08-04",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "5km左右",
      "note": "1球1助攻（右脚）",
      "raw": "1球1助攻（右脚） 跑动5km左右",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-08-07",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "7km左右",
      "note": "3球（1左脚2右脚）",
      "raw": "3球（1左脚2右脚） 跑动7km左右",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-08-20",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "5km左右",
      "note": "1球2助攻（右脚1球1助左脚1助）",
      "raw": "1球2助攻（右脚1球1助左脚1助） 跑动5km左右",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-08-22",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 2,
      "status": "源数据",
      "runDistance": "5.51km",
      "note": "2球2助攻（都是右脚）",
      "raw": "2球2助攻（都是右脚） 跑动5.51km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-08-26",
      "time": "未记录",
      "location": "广软",
      "event": "广软野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "5.4km",
      "note": "1球（右脚）",
      "raw": "1球（右脚） 跑动5.4km",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-08-29",
      "time": "未记录",
      "location": "广软",
      "event": "广软野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚凌空抽射）；左脚韧带撕裂",
      "raw": "1球（右脚凌空抽射） 左脚韧带撕裂",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "凌空抽射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-10-14",
      "time": "未记录",
      "location": "广软",
      "event": "广软新生杯",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚）",
      "raw": "1球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-10-18",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚外脚背）",
      "raw": "1球（右脚外脚背）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "外脚背"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-11-19",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码杯",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（左右脚）",
      "raw": "2球（左右脚）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-11-22",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（右脚）",
      "raw": "2球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-11-29",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球（左脚1球右脚2球）1助（右脚）",
      "raw": "3球（左脚1球右脚2球）1助（右脚）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-12-19",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码杯",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（左右脚）1助（右脚）",
      "raw": "2球（左右脚）1助（右脚）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-12-27",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（左右脚）1助（右脚）",
      "raw": "2球（左右脚）1助（右脚）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2023-12-30",
      "time": "未记录",
      "location": "未单独记录",
      "event": "艺设野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 5,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "5球（七人右脚2（中圈吊门）左脚1 五人右脚1头1）",
      "raw": "5球（七人右脚2（中圈吊门）左脚1 五人右脚1头1）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "头球",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-01-14",
      "time": "未记录",
      "location": "深仁",
      "event": "深仁",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚尖）",
      "raw": "1球（右脚尖）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "脚尖"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-01-18",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球2助攻（右脚）",
      "raw": "1球2助攻（右脚）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-01-24",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 3,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚）3助攻（右脚2左脚1）",
      "raw": "1球（右脚）3助攻（右脚2左脚1）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-01-28",
      "time": "未记录",
      "location": "深仁",
      "event": "深仁",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2助攻（1左脚1右脚）",
      "raw": "2助攻（1左脚1右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-02-03",
      "time": "未记录",
      "location": "深仁",
      "event": "深仁",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻（右脚）",
      "raw": "1助攻（右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-02-14",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 6,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "6球2助攻（均右脚）",
      "raw": "6球2助攻（均右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-02-18",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲五人野球",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻（右脚）",
      "raw": "1助攻（右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-02-28",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球2助攻（右脚）",
      "raw": "1球2助攻（右脚）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-03-06",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码野球训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（右脚）",
      "raw": "2球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-03-20",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 3,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "4球3助（右脚）",
      "raw": "4球3助（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-04-20",
      "time": "未记录",
      "location": "广软",
      "event": "广软杯",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1造点1助（右脚）1倒数第二传（头）",
      "raw": "1造点1助（右脚）1倒数第二传（头）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-05-22",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚）",
      "raw": "1球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-05-26",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（左脚）",
      "raw": "1球（左脚）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-05-29",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻",
      "raw": "1助攻",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-06-04",
      "time": "未记录",
      "location": "广软",
      "event": "广软野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻（右脚）",
      "raw": "1助攻（右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-06-05",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2助攻（左右脚）失点",
      "raw": "2助攻（左右脚）失点",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-06-29",
      "time": "未记录",
      "location": "未单独记录",
      "event": "足协杯三四名决赛",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻",
      "raw": "1助攻",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-07-13",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 3,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "4球（右脚）3助攻（2右脚1左脚）",
      "raw": "4球（右脚）3助攻（2右脚1左脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-07-28",
      "time": "未记录",
      "location": "求水山人民医院",
      "event": "求水山人民医院野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助（右脚）",
      "raw": "1助（右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-08-12",
      "time": "未记录",
      "location": "绿洲",
      "event": "绿洲野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球2助攻（右脚）",
      "raw": "1球2助攻（右脚）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-08-27",
      "time": "未记录",
      "location": "广软",
      "event": "广软野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球2助攻（右）2造乌龙（1左1右）",
      "raw": "2球2助攻（右）2造乌龙（1左1右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-09-03",
      "time": "未记录",
      "location": "广软",
      "event": "广软野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球1助攻（右）",
      "raw": "2球1助攻（右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-10-16",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻（右）",
      "raw": "1助攻（右）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2024-11-06",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右）",
      "raw": "1球（右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-11-11",
      "time": "未记录",
      "location": "华工西区",
      "event": "华工西区野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（右）",
      "raw": "2球（右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-11-22",
      "time": "未记录",
      "location": "华工西区",
      "event": "华工西区野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 6,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "6球（4右2左）1助攻（右）",
      "raw": "6球（4右2左）1助攻（右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-12-12",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码训练",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球1助（右）",
      "raw": "1球1助（右）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2024-12-18",
      "time": "未记录",
      "location": "未单独记录",
      "event": "数码野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 4,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "4球4助（右）",
      "raw": "4球4助（右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-01-01",
      "time": "未记录",
      "location": "八号仓球场",
      "event": "八号仓球场",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 3,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "4球（1左3右）3助（2右1手）",
      "raw": "4球（1左3右）3助（2右1手）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-02-13",
      "time": "未记录",
      "location": "八号仓球场",
      "event": "八号仓球场",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 5,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "5球（1左4右）1助攻（右）",
      "raw": "5球（1左4右）1助攻（右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-02-19",
      "time": "未记录",
      "location": "八号仓球场",
      "event": "八号仓球场",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 6,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球6助（均右脚）",
      "raw": "2球6助（均右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-03-01",
      "time": "未记录",
      "location": "MVP球场",
      "event": "MVP球场",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 4,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "4球1助（均右脚）",
      "raw": "4球1助（均右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-03-02",
      "time": "未记录",
      "location": "华工",
      "event": "华工野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球1助（均右脚）",
      "raw": "3球1助（均右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-03-16",
      "time": "未记录",
      "location": "华工",
      "event": "华工小孩局",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 4,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右）中圈吊射4助（2左2右）",
      "raw": "1球（右）中圈吊射4助（2左2右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "中圈吊射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-03-21",
      "time": "未记录",
      "location": "华工",
      "event": "华工野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 6,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "6球（3左3右）",
      "raw": "6球（3左3右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-03-28",
      "time": "未记录",
      "location": "华工",
      "event": "华工野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球2助（右脚）",
      "raw": "1球2助（右脚）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-04-06",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚）",
      "raw": "1球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-04-27",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人（GLC）",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚）",
      "raw": "1球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-05-17",
      "time": "未记录",
      "location": "广软",
      "event": "广软数码11人野球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（右脚）",
      "raw": "2球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-05-20",
      "time": "未记录",
      "location": "未单独记录",
      "event": "广电踢球",
      "format": "未记录",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（头）",
      "raw": "1球（头）",
      "goalEvents": [
        {
          "foot": "头球",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-06-19",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻（右脚）",
      "raw": "1助攻（右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2025-07-17",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻（右脚）",
      "raw": "1助攻（右脚）",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2025-10-22",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球（2右1左）",
      "raw": "3球（2右1左）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-11-02",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（1左1右）1助（左）",
      "raw": "2球（1左1右）1助（左）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-11-13",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球（右脚，一条龙）",
      "raw": "3球（右脚，一条龙）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        },
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "见比赛备注"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-11-20",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚凌空抽射）",
      "raw": "1球（右脚凌空抽射）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "凌空抽射"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-11-24",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（右脚）",
      "raw": "2球（右脚）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-12-03",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 0,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1助攻",
      "raw": "1助攻",
      "goalEvents": [],
      "videoUrl": ""
    },
    {
      "date": "2025-12-18",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚点球）",
      "raw": "1球（右脚点球）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "点球"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2025-12-27",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（1左1右）",
      "raw": "2球（1左1右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-01-14",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球1助（右）",
      "raw": "1球1助（右）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-01-22",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（左凌空）",
      "raw": "1球（左凌空）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-01-28",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右）",
      "raw": "1球（右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-03-02",
      "time": "未记录",
      "location": "鹏基工业区",
      "event": "鹏基工业区五人",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 6,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "6球1助攻（3左3右）",
      "raw": "6球1助攻（3左3右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-03-05",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球（右脚）丢点",
      "raw": "1球（右脚）丢点",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-04-01",
      "time": "未记录",
      "location": "鹏基工业区",
      "event": "鹏基工业区五人",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球2助（1左2右）",
      "raw": "3球2助（1左2右）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-04-09",
      "time": "未记录",
      "location": "笔架山",
      "event": "笔架山八人glc",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球2助攻（1左1右）",
      "raw": "1球2助攻（1左1右）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-05-16",
      "time": "未记录",
      "location": "鹏基工业区",
      "event": "鹏基工业区五人",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 8,
      "assists": 6,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "8球6助（右）",
      "raw": "8球6助（右）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-05-25",
      "time": "未记录",
      "location": "中心公园",
      "event": "中心公园八人",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（左右）；受伤（左脚脚踝）",
      "raw": "2球（左右） 受伤（左脚脚踝）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-06-30",
      "time": "未记录",
      "location": "鹏基工业区",
      "event": "鹏基工业区五人",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 10,
      "assists": 5,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "10球5助（6右4左）",
      "raw": "10球5助（6右4左）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-07-11",
      "time": "未记录",
      "location": "民治",
      "event": "民治八人",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 2,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "2球（左右旋转）",
      "raw": "2球（左右旋转）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-07-22",
      "time": "未记录",
      "location": "石鼓",
      "event": "石鼓八人",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 0,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球（右脚）；受伤（左脚脚踝）",
      "raw": "3球（右脚） 受伤（左脚脚踝）",
      "goalEvents": [
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-08-05",
      "time": "未记录",
      "location": "鹏基工业园",
      "event": "鹏基工业园五人",
      "format": "5人制",
      "score": "",
      "position": "未记录",
      "goals": 5,
      "assists": 1,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "5球1助（3右2左）",
      "raw": "5球1助（3右2左）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-08-12",
      "time": "未记录",
      "location": "石鼓",
      "event": "石鼓八人",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 3,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "3球2助攻（1右1左1头）",
      "raw": "3球2助攻（1右1左1头）",
      "goalEvents": [
        {
          "foot": "左脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "右脚",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        },
        {
          "foot": "头球",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    },
    {
      "date": "2026-08-18",
      "time": "未记录",
      "location": "石鼓",
      "event": "石鼓八人",
      "format": "8人制",
      "score": "",
      "position": "未记录",
      "goals": 1,
      "assists": 2,
      "status": "源数据",
      "runDistance": "未记录",
      "note": "1球2助攻（左脚）",
      "raw": "1球2助攻（左脚）",
      "goalEvents": [
        {
          "foot": "未记录",
          "minute": "未记录",
          "zone": "未记录",
          "type": "未单独记录"
        }
      ],
      "videoUrl": ""
    }
  ],
  "videos": []
};
