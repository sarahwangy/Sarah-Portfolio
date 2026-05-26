# 工具使用总结

本项目开发过程中使用到的 Plugin、Skill、Agent、CLI 汇总。

## 工具一览

| 类别 | 名称 | 用途 | 调用方式 |
|---|---|---|---|
| **Plugin** | `superpowers` | 提供所有 Skill 的基础框架，安装在 `~/.claude/plugins/` | 自动加载 |
| **Skill** | `superpowers:using-superpowers` | 每次对话开始时建立 Skill 使用规则 | 自动触发（session start hook）|
| **Skill** | `superpowers:brainstorming` | 设计语言切换按钮前，探索方案、提出 2-3 个选项 | 自动触发（判断需要设计决策时）|
| **Skill** | `verify` | 截图验证 UI 改动是否符合预期 | 自动触发（改完代码后验证）|
| **Agent** | `claude-code-guide` | 回答关于 npx vs npm、Playwright 安装、Skill 调用等 Claude Code 相关问题 | `Agent(subagent_type="claude-code-guide")` |
| **Agent** | `Explore` | 抓取并总结外部文章（webportfolios.dev 配色文章）| `Agent(subagent_type="Explore")` |
| **CLI** | `npx playwright` | 无头截图（桌面端、移动端、OG 图验证），截图存到 `.screenshots/` | `npx playwright screenshot ...` |
| **CLI** | `npm` / `npx` | 安装依赖（framer-motion、lucide-react）、运行 build/dev | `npm install` / `npm run build` |
| **CLI** | `git` | 每个 ticket 完成后 commit + push 到 GitHub | `git add / commit / push` |
| **Visual Companion** | `brainstorming/start-server.sh` | 启动本地服务器，在浏览器里展示 UI 方案对比（语言切换按钮三选一）| `bash start-server.sh --project-dir ...` |

---

## 补充说明

### Playwright
- 外部 CLI 工具，不是 Skill 也不是 Agent
- 浏览器安装在全局缓存 `~/Library/Caches/ms-playwright/`，所有项目共用，不需要重复安装
- 项目里用 `npx playwright screenshot` 截图，存到 `.screenshots/`（已加入 `.gitignore`）
- 默认 headless 运行（不弹窗口），加 `--headed` 可以看到浏览器

### Superpowers Plugin
- 一个 Plugin，包含多个 Skill（brainstorming、verify、writing-plans 等）
- 安装在 `~/.claude/plugins/cache/claude-plugins-official/superpowers/`
- 通过 `Skill` 工具调用，例如 `Skill("superpowers:brainstorming")`

### Visual Companion
- brainstorming skill 内置的子功能，不是独立工具
- 启动一个本地 HTTP 服务器，把 HTML mockup 渲染到浏览器里
- 用于需要视觉对比的设计决策（本项目用于选语言切换按钮样式）
- 会话文件存在 `.superpowers/brainstorm/`（已加入 `.gitignore`）

### npx vs npm install 的区别

| | `npx <tool>` | `npm install <tool>` |
|---|---|---|
| 保存到项目？ | ❌ 不保存 | ✅ 写入 package.json |
| 用途 | 临时运行命令 | 项目长期依赖 |
| 浏览器/二进制位置 | 全局缓存（所有项目共享） | 项目 node_modules/ |

### Agent 类型说明

| Agent | 适合做什么 |
|---|---|
| `claude-code-guide` | 回答关于 Claude Code CLI、API、SDK 的使用问题 |
| `Explore` | 快速搜索文件、抓取网页、定位代码，只读不写 |
| `general-purpose` | 复杂多步骤研究任务 |
| `Plan` | 设计实现方案，输出计划 |
