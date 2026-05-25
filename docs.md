# Project Docs

## Playwright — 截图验证工具

### 是什么

Playwright 是一个外部 CLI 工具，用来控制浏览器做截图和自动化测试。它**不是** Skill，也**不是** Agent。

| 概念 | 是什么 | 怎么调用 |
|---|---|---|
| **Playwright** | 外部 npm CLI 工具，控制浏览器 | `npx playwright screenshot ...` |
| **Skill** | `.claude/skills/` 里的指令文件 | 打 `/skill名字` 或 Claude 自动触发 |
| **Agent** | Claude 派出去独立完成任务的子实例 | Claude 内部用 `Agent(...)` 调用 |

---

### 安装情况

本项目用的是 `npx playwright`，浏览器安装在全局缓存：

```
~/Library/Caches/ms-playwright/
```

**不在** `node_modules/` 里，没有写入 `package.json`。

#### npx vs npm install 的区别

| | `npx playwright` | `npm install playwright` |
|---|---|---|
| 保存到项目？ | ❌ 不保存 | ✅ 写入 package.json |
| 用途 | 临时运行命令 | 项目长期依赖 |
| 浏览器位置 | 全局缓存（所有项目共享） | 项目 node_modules/ |

---

### 跨项目使用

- ✅ 其他项目**不需要重新安装浏览器**，全局缓存共享
- ✅ 任何项目都可以直接运行 `npx playwright screenshot`
- ⚠️ 如果某项目要写 Playwright **测试代码**，需要在那个项目里 `npm install playwright`

---

### 常用命令

```bash
# 截图（headless，不弹窗口）
npx playwright screenshot --browser chromium --viewport-size "390,844" http://localhost:3000 .screenshots/mobile.png

# 全页截图
npx playwright screenshot --browser chromium --viewport-size "1440,900" --full-page http://localhost:3000 .screenshots/desktop-full.png

# 带界面运行（会弹出浏览器窗口）
npx playwright screenshot --browser chromium --headed http://localhost:3000 .screenshots/out.png
```

---

### 截图存放规范

所有截图存放在 `.screenshots/` 文件夹，已加入 `.gitignore`，不会提交到 GitHub。

```
.screenshots/
├── mobile-390.png        # 390px 移动端
├── mobile-full.png       # 移动端全页
├── desktop.png           # 1440px 桌面端
└── og-image-preview.png  # OG 分享卡片预览
```

---

### 如何让 Claude 截图

直接说就行，不需要任何命令：

- "截一下现在的移动端效果"
- "帮我看看 localhost:3000 在 iPhone 上长什么样"
- "verify 一下这个改动"

Claude 会自动用 `npx playwright screenshot` 截图，存到 `.screenshots/`，并在对话里显示图片。
