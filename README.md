# My Archive — Work & Football

一个纯静态的个人网站，用于展示：

- 个人作品集
- 足球赛季数据
- 比赛记录
- 踢球视频
- 个人信息与链接

无需 React / Vue / Node.js，直接放 GitHub Pages 即可。

## 文件说明

- `index.html`：网站结构
- `styles.css`：所有视觉样式
- `data.js`：**你以后最常修改的文件**，作品 / 比赛 / 视频 / 个人资料都在这里
- `app.js`：页面渲染与交互逻辑
- `assets/`：以后可以放封面图、头像等资源

## 先改这几个地方

打开 `data.js`：

1. 把 `YOUR NAME` 换成你的名字或网名
2. 修改 `profile.links` 里的 GitHub / Bilibili / Email
3. 在 `works` 里替换成你的真实作品
4. 在 `seasons` 里录入每年的出场、进球、助攻
5. 在 `matches` 里持续新增比赛记录
6. 在 `videos` 里填入视频链接

## 新增比赛示例

```js
{
  date: "2026-08-25",
  title: "比赛名称 / 对手",
  position: "RW",
  goals: 2,
  assists: 1,
  note: "比赛简评。",
  videoUrl: "https://你的视频链接"
}
```

## 新增作品示例

```js
{
  id: 5,
  title: "项目名称",
  category: "品牌与内容",
  year: "2026",
  summary: "一句话说明你做了什么、解决了什么问题。",
  tags: ["Brand", "Video"],
  featured: false,
  url: "https://项目详情链接"
}
```

## GitHub Pages 部署

1. 在 GitHub 新建仓库，例如 `my-archive`
2. 把这个文件夹里的全部文件上传到仓库根目录
3. 进入仓库 `Settings`
4. 打开 `Pages`
5. `Build and deployment` → `Source` 选择 `Deploy from a branch`
6. Branch 选择 `main`，目录选择 `/ (root)`
7. 保存

稍后即可通过：

`https://你的GitHub用户名.github.io/my-archive/`

访问。

## 视频建议

不建议把大量 MP4 直接放进 GitHub 仓库。推荐：

- Bilibili
- YouTube
- 腾讯视频 / 公开视频页
- 对象存储 / CDN

网站里只保存封面和播放链接，会轻很多。
