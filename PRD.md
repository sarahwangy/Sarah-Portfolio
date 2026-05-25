# Sarah's Portfolio — 产品需求文档

> 个人主页 / 作品集网站，给面试官、合作者、朋友看的"一站式"个人窗口。
> 风格参考：[brittanychiang.com](https://brittanychiang.com)（深色专业 / 极简 / 文字优先 / 左右双栏）

---

## 1. 背景

我已经在做 `love-my-shelf` 项目，未来会做更多个人项目（活动收集、YouTube 分类、Bookmark Hub 等）。需要一个**总入口**：

1. **作品展示**：简历里附一个 URL，面试官打开能立刻看到我做了什么
2. **项目导航**：朋友想用我的某个工具时，从这里能找到所有项目的入口
3. **个人介绍**：About / Experience / Blog，让别人 30 秒知道我是谁

这个项目本身就是一个作品——它的设计感、代码质量、技术选择，**都是被面试官打分的对象**。所以不能潦草做，要做到"看一眼就觉得这人靠谱"。

---

## 2. 目标

**MVP（2-3 天上线）**：
- 一个深色调极简的单页 / 多 section 网站
- 包含 4 个板块：About / Projects / Experience / Blog
- 现阶段 Projects 区有 Love My Shelf（已上线）+ 2-3 个 Coming Soon 占位
- 部署在 `sarah.dev`（或类似域名）的根路径
- 适配桌面 + 移动端
- 简历可以直接贴这个 URL

**完整版（持续迭代）**：
- 每完成一个新项目，加一张项目卡片
- 写博客文章
- 加入 GitHub 实时数据（star 数等）
- 多语言（英文优先，中文可选）

---

## 3. 用户和场景

### 用户 1：招聘官 / 面试官（最重要）
- 30 秒判断："这人能不能进下一轮面试？"
- 关注：技术栈 / 作品深度 / 设计感 / 代码质量
- 行为：扫一眼 About → 看 Projects → 可能点进 Love My Shelf 的 demo → 关掉

### 用户 2：朋友 / 同行
- 想看看我最近在做什么
- 关注：项目演示、能不能用、有意思吗
- 行为：直接点 Projects 进去试

### 用户 3：自己
- 把所有项目放在一个地方，方便管理
- 写博客记录思考
- 简历上只贴一个链接，省心

---

## 4. 设计原则

参考 [brittanychiang.com](https://brittanychiang.com) 的精髓：

### 4.1 极简、专业、文字优先
- 不堆动效、不堆插图
- 排版 = 99% 的视觉效果
- 留白要大方，不要塞满

### 4.2 深色调，青绿高亮
- 主背景：`#0F172A`（深蓝灰，slate-900）
- 次背景：`#1E293B`（slate-800）
- 主文字：`#E2E8F0`（slate-200）
- 次文字：`#94A3B8`（slate-400）
- 高亮：`#5EEAD4`（teal-300）— 链接、tag、当前 section 指示器

### 4.3 双栏布局（桌面端）
- **左侧固定（sticky）**：姓名 / 头衔 / 短简介 / 章节导航 / 社交链接
- **右侧滚动**：About / Experience / Projects / Blog 内容依次排列
- 滚动到哪个 section，左侧导航对应项高亮

### 4.4 移动端：单栏堆叠
- 左侧内容堆叠到顶部
- 右侧内容自然往下排
- 隐藏 section 导航（用户直接滚就行）

### 4.5 字体
- 标题：`Inter` 或 `Geist`（粗体 600-700）
- 正文：同字体 400-500
- 等宽字（代码 / tag）：`JetBrains Mono` 或 `Geist Mono`

### 4.6 微交互（克制）
- 链接 hover：颜色 + 下划线渐入
- 项目卡 hover：背景轻微变亮，整张卡向左微移 2px
- Section 切换：左侧指示器线条平滑滑动
- **不做**：粒子背景、3D、Locomotive Scroll、复杂动画

---

## 5. 内容架构（详细）

### 5.1 左侧（固定）

```
Sarah Wang

Full Stack Engineer
基于 AI 构建温暖、有用的个人产品

[ABOUT]
[EXPERIENCE]
[PROJECTS]
[BLOG]

[GitHub] [LinkedIn] [Email] [X/Twitter]
```

- 姓名：大字（48-56px）
- 头衔：中字（20-24px），灰色
- Tagline：1-2 行，灰色，体现个人特色
- 章节导航：4 个，当前章节有左侧短横线（参考站那种长线效果）
- 社交图标：底部，hover 高亮

### 5.2 右侧 - About

一段自我介绍，120-200 字，简洁有人味。结构建议：

1. 我是谁 + 在做什么
2. 我的关注点 / 风格
3. 在什么公司 / 做什么角色（如适用）
4. 业余在做什么（让人觉得"是个真人"）

**写作建议**：每段引用 1-2 个关键词加链接（蓝绿色）增强可读性，比如公司名、项目名、爱好。

### 5.3 右侧 - Experience

时间线形式，每条：

```
2024 — Present
[Company Name]  →
Senior Full Stack Engineer
一句话描述工作内容
[React] [TypeScript] [Tailwind] tags
```

如果工作经历少，可以列 2-3 条（实习 / 自由职业都算）。诚实写就行。

### 5.4 右侧 - Projects（核心）

每个项目一张卡片，结构：

```
[截图/GIF 缩略图 200×120px]   |   Project Name  →
                              |   一段描述（70-120 字）：
                              |   是什么、解决了什么问题、用了什么技术
                              |
                              |   [Next.js] [Anthropic] [Notion] [Tailwind] tags
                              |   ★ 12 stars（如有 GitHub 数据）
```

**Love My Shelf 文案草稿**（直接抄）：

> **Love My Shelf** —
> 拿手机拍一下书的封面，AI 自动识别书名、副标、作者、类型，
> 一秒入库到 Notion。为了管理我从图书馆借来的几十本书而做的
> 个人工具——把"扫码 + 手输"的 5 分钟流程压缩到 5 秒。
>
> 后端用 Anthropic Claude 做 vision 识别 + Tool Use，前端 Next.js + Tailwind，
> 部署在 Vercel。已上线，每周自用。

预留卡片：

- **Love My Events** — Coming Soon  
  社区活动管理工具：拍海报 / 复制 email / 语音输入，自动提取活动信息归类。

- **YouTube Sorter** — Coming Soon  
  导入订阅 CSV，AI 自动按主题分类，发现兴趣盲区。

### 5.5 右侧 - Blog（可选）

MVP 阶段可以先放一句 "Coming soon ✍️"，之后再写。

正式版每篇文章卡片：

```
日期 · 阅读时长
文章标题  →
2-3 行摘要
[标签]
```

---

## 6. 技术栈

| 类别 | 选择 | 理由 |
|---|---|---|
| 框架 | **Next.js 15 App Router + TypeScript** | 和 love-my-shelf 一致，便于复用经验 |
| 样式 | **Tailwind CSS** | 同上 |
| 部署 | **Vercel** | 同上，免费 |
| 内容管理 | **MDX 文件**（项目和博客都用） | 不需要 CMS，简单、版本可控、Git 友好 |
| 字体 | **next/font** 加载 Inter + JetBrains Mono | 免费、性能好 |
| 图标 | **Lucide React** | 简洁、好看 |
| 动画 | **Framer Motion**（克制使用） | 处理 section 滚动指示器和 hover |
| Analytics | **Vercel Analytics**（免费版） | 看有多少人来 |

**不用**：
- ❌ Sanity / Contentful（个人站太重）
- ❌ Locomotive Scroll / GSAP（炫技但拖性能）
- ❌ React Three Fiber（除非真要 3D）

---

## 7. 信息架构

```
sarah-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← 字体、全局样式、metadata
│   │   ├── page.tsx            ← 主页（单页应用）
│   │   ├── globals.css         ← Tailwind + 自定义 CSS 变量
│   │   └── blog/
│   │       ├── page.tsx        ← 博客列表（未来用）
│   │       └── [slug]/page.tsx ← 文章详情（未来用）
│   ├── components/
│   │   ├── Sidebar.tsx         ← 左侧 sticky 区
│   │   ├── SectionNav.tsx      ← 章节导航 + 滚动跟随高亮
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── ExperienceItem.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Blog.tsx
│   │   ├── SocialLinks.tsx
│   │   └── Footer.tsx
│   ├── content/
│   │   ├── projects.ts         ← 项目数据
│   │   ├── experience.ts       ← 工作经历数据
│   │   └── posts/              ← 博客 MDX 文件
│   ├── lib/
│   │   ├── github.ts           ← 可选：拉 GitHub 数据
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   │   └── projects/
│   │       └── love-my-shelf-cover.png
│   ├── favicon.ico
│   └── og-image.png            ← 分享卡片预览图
├── .env.local                  ← 可选：GITHUB_TOKEN
├── package.json
└── README.md
```

---

## 8. 关键页面/组件设计细节

### 8.1 Sidebar（左侧固定）

```jsx
<aside className="lg:sticky lg:top-0 lg:h-screen lg:py-24 lg:w-1/2">
  {/* 姓名 */}
  <h1 className="text-5xl font-bold tracking-tight">Sarah Wang</h1>
  {/* 头衔 */}
  <h2 className="mt-3 text-xl text-slate-200">Full Stack Engineer</h2>
  {/* Tagline */}
  <p className="mt-4 max-w-xs leading-normal">
    我做温暖、有用的 AI 个人产品。
  </p>
  {/* SectionNav */}
  <SectionNav />
  {/* SocialLinks */}
  <SocialLinks />
</aside>
```

### 8.2 SectionNav（带滚动跟随）

- 4 个 section（About / Experience / Projects / Blog）
- 用 `IntersectionObserver` 监听当前在视口中的 section
- 当前 section：左边的横线变长 + 文字变白
- 其他 section：短横线 + 灰字

参考代码：
```jsx
const [active, setActive] = useState('about');

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  
  document.querySelectorAll('section').forEach(s => observer.observe(s));
}, []);
```

### 8.3 ProjectCard（鼠标悬停整张卡片）

- 整张卡是一个 `<a>`，点击进入项目
- Hover：背景从透明变成 `bg-slate-800/50`，整卡左移 2px
- 标题旁有 ↗ 箭头，hover 时变色 + 向右上微动
- Tag 用 `JetBrains Mono`，圆角 pill，青绿色文字 + 深青绿色背景

### 8.4 Mobile

- 768px 以下：左右栏堆叠
- Sidebar 不再 sticky，正常占据顶部
- SectionNav 隐藏（用户滚动即可）
- ProjectCard 缩略图换到顶部

---

## 9. SEO + 分享卡片

### 9.1 metadata（layout.tsx）

```typescript
export const metadata = {
  title: 'Sarah Wang — Full Stack Engineer',
  description: '我做温暖、有用的 AI 个人产品。',
  openGraph: {
    title: 'Sarah Wang — Full Stack Engineer',
    description: '...',
    images: ['/og-image.png'],
    url: 'https://sarah.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    images: ['/og-image.png'],
  },
};
```

### 9.2 og-image.png（1200×630）

- 深蓝灰背景
- 大字"Sarah Wang"
- 副标"Full Stack Engineer"
- 右下角小字 sarah.dev
- 用 Figma 5 分钟做好导出 PNG

---

## 10. 数据存储

不需要任何后端 / 数据库。所有内容都在代码里：

- `src/content/projects.ts` — 项目数组
- `src/content/experience.ts` — 工作经历数组
- `src/content/posts/*.mdx` — 博客文章

每次更新内容 → git commit → Vercel 自动重新部署。10 秒上线。

---

## 11. 风险 / 决策记录

### ADR-1：为什么不用 Astro？
Astro 对静态站点更友好，但你已经熟 Next.js，复用成本最低。性能差异在这种小站上感知不到。

### ADR-2：为什么不放 Resume PDF 下载？
极少有人会下载。需要时面试官会主动要。**省一个按钮 = 设计更干净**。如果坚持要，加在 About 段末尾低调一个链接。

### ADR-3：为什么 Blog 板块也保留，即使没文章？
- 占位的"Coming Soon ✍️"显示出"我在思考"的姿态
- 等真写了第一篇时不需要重新加 section

### ADR-4：要不要英文优先？
**强烈建议英文优先**。海外面试官多、技术内容用英文专业感更强。中文版可以做 `/zh` 路径，但 MVP 先英文。

---

## 12. 成功标准

- 部署到 sarah.dev（或类似域名）
- Lighthouse 性能 / 可访问性 / SEO 都 95+ 分
- 移动端正常显示
- 简历贴上去面试官第一反应是"这做得真用心"
- 我自己每次发链接都觉得自豪
