# PC的网站 V8

V8 新增：

- 左侧球员卡新增生涯总进球、左脚/右脚/头球累计。
- 新增 FC/FIFA 风格的“擅长位置”球场热点图与位置展示评分。
- 新增独立 `games.html` 游戏页面，默认分为 CS / 3A，可扩展截图、成就与视频。
- 保留原足球年度/月度数据、进球构成饼图、比赛二级页和视频匹配逻辑。

## 更新 GitHub Pages

将整个目录内容上传覆盖原仓库即可，尤其不要漏掉新增的：

- `games.html`
- `games.js`

## 调整位置评分

编辑 `data.js` 的：

```js
profile.positionRatings
```

当前是个人档案展示值：RW 84、LW 83、ST 82。由于既有逐场记录中大量比赛没有记录出场位置，这些评分不是按出场数据自动推算，后续可以按你的实际体验修改。

## 添加游戏内容

在 `data.js` 的 `games.items` 中添加：

```js
{
  section: "cs",
  type: "截图",
  title: "标题",
  image: "assets/games/example.jpg",
  note: "说明",
  videoUrl: ""
}
```

3A 内容的 `section` 写成 `aaa`。


## V8.1 年度球探报告

足球赛季卡右上角新增年度球探报告入口。切换 2022–2026 年时，会自动切换到对应 PDF：

- `reports/scout-report-2022.pdf`
- `reports/scout-report-2023.pdf`
- `reports/scout-report-2024.pdf`
- `reports/scout-report-2025.pdf`
- `reports/scout-report-2026.pdf`

上传 GitHub 时请务必把整个 `reports/` 文件夹一起上传。
