# Sarah's Portfolio — 开发任务拆解

> 配套文档：`PRD.md`
> 总耗时估计：**12-16 小时**（2-3 天可完成 MVP 上线）
> 风格参考：[brittanychiang.com](https://brittanychiang.com)

---

## 进度总览

| 阶段 | Ticket 范围 | 目标 |
|------|------------|------|
| **阶段 0：准备** | P01 - P02 | 项目脚手架 + 基础配置 |
| **阶段 1：布局** | P03 - P05 | 双栏布局 + Sidebar + 滚动导航 |
| **阶段 2：内容** | P06 - P09 | About / Experience / Projects / Blog 四大板块 |
| **阶段 3：项目卡** | P10 - P11 | Love My Shelf 详细卡片 + 占位卡 |
| **阶段 4：细节** | P12 - P15 | 响应式 / SEO / og 图 / 动画 |
| **阶段 5：上线** | P16 - P17 | 部署 + 自定义域名 |

---

## 🟢 阶段 0：准备（1 小时）

### **P01：项目脚手架**
- **前置**：无
- **预计耗时**：15 分钟
- **任务**：
  ```bash
  npx create-next-app@latest sarah-portfolio \
    --typescript --tailwind --app --src-dir --import-alias "@/*"
  cd sarah-portfolio
  npm run dev
  ```
- 在 GitHub 建 repo（**Public**，方便面试官看源码），`git push`
- **DoD**：本地 `localhost:3000` 看到默认页；代码已在 GitHub

---

### **P02：基础样式 + 字体 + 全局色板**
- **前置**：P01
- **预计耗时**：45 分钟
- **任务**：
  - 装字体：`next/font` 引入 Inter + JetBrains Mono
    ```tsx
    // src/app/layout.tsx
    import { Inter, JetBrains_Mono } from 'next/font/google';
    const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
    const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
    ```
  - 在 `tailwind.config.ts` 加自定义颜色：
    ```ts
    theme: {
      extend: {
        colors: {
          'brand-bg': '#0F172A',
          'brand-bg-alt': '#1E293B',
          'brand-text': '#E2E8F0',
          'brand-text-muted': '#94A3B8',
          'brand-accent': '#5EEAD4',
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          mono: ['var(--font-mono)'],
        },
      },
    }
    ```
  - `globals.css` 设置 body 默认：
    ```css
    body {
      @apply bg-brand-bg text-brand-text-muted font-sans antialiased;
    }
    ```
- **DoD**：刷新页面看到深蓝灰底 + Inter 字体；颜色和字体能在任意组件用

---

## 🟢 阶段 1：布局（3 小时）

### **P03：双栏布局骨架**
- **前置**：P02
- **预计耗时**：1 小时
- **任务**：
  - `src/app/page.tsx`：
    ```tsx
    export default function Home() {
      return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Sidebar />
            <main className="pt-24 lg:w-1/2 lg:py-24">
              {/* 四个 section */}
            </main>
          </div>
        </div>
      );
    }
    ```
  - 桌面端（lg 以上）左右各 50%，左侧 sticky
  - 移动端（<lg）单栏堆叠
- **DoD**：拉大窗口看到双栏；缩到手机宽度自动堆叠

---

### **P04：Sidebar 组件（姓名 / 头衔 / Tagline / 社交链接）**
- **前置**：P03
- **预计耗时**：1 小时
- **任务**：
  - 文件：`src/components/Sidebar.tsx`
  ```tsx
  export function Sidebar() {
    return (
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
            Sarah Wang
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-brand-text sm:text-xl">
            Frontend Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I build warm, useful AI-powered personal products.
          </p>
          <SectionNav />
        </div>
        <SocialLinks />
      </header>
    );
  }
  ```
  - 社交链接组件（GitHub / LinkedIn / Email / X）：
    - 用 `lucide-react` 图标
    - 默认灰色，hover 变 `text-brand-text`
- **DoD**：左侧能看到完整的个人信息块；社交图标 hover 变亮

---

### **P05：SectionNav 滚动跟随高亮**
- **前置**：P04
- **预计耗时**：1 小时
- **任务**：
  - 文件：`src/components/SectionNav.tsx`
  - 4 个导航项：About / Experience / Projects / Blog
  - 用 `IntersectionObserver` 监听 main 里的 `<section>` 元素
  - 当前激活项左边的横线变长 + 变白；非激活项保持灰短线
  - 点击导航项 → 平滑滚动到对应 section（`element.scrollIntoView({ behavior: 'smooth' })`）
  - 动画用 Tailwind `transition-all duration-300`
  ```tsx
  <a
    href="#about"
    className={cn(
      "group flex items-center py-3",
      active === 'about' && 'text-brand-text'
    )}
  >
    <span className={cn(
      "mr-4 h-px bg-brand-text-muted transition-all",
      active === 'about' ? 'w-16 bg-brand-text' : 'w-8 group-hover:w-16 group-hover:bg-brand-text'
    )} />
    <span className="text-xs font-bold uppercase tracking-widest">
      About
    </span>
  </a>
  ```
- **DoD**：滚动右侧内容，左侧导航对应项的横线伸长 + 文字变白；点击导航能平滑滚动到对应 section

---

## 🟢 阶段 2：内容（4 小时）

### **P06：About 板块**
- **前置**：P05
- **预计耗时**：45 分钟
- **任务**：
  - 文件：`src/components/About.tsx`
  - 一段自我介绍，120-200 字
  - 关键词加链接（高亮青绿色），比如：
    - 公司名 → 公司官网
    - 项目名 → 项目 demo
    - "我在 [Klaviyo] 做..." 这种结构
  - 段落之间用 `mb-4`
  - 链接组件抽出来：
    ```tsx
    function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-brand-text hover:text-brand-accent transition-colors"
        >
          {children}
        </a>
      );
    }
    ```
- **DoD**：About 段落渲染正常；链接 hover 变青绿

---

### **P07：Experience 板块**
- **前置**：P06
- **预计耗时**：1 小时
- **任务**：
  - 数据源：`src/content/experience.ts`
    ```ts
    export const experience = [
      {
        period: '2024 — Present',
        company: 'Klaviyo',
        companyUrl: 'https://klaviyo.com',
        role: 'Senior Frontend Engineer',
        description: '...',
        tags: ['React', 'TypeScript', 'Design System'],
      },
      // ...
    ];
    ```
  - 组件 `ExperienceItem.tsx`：
    - 左：时间段（小字、灰色、`uppercase tracking-widest`）
    - 右：公司名（带 ↗ 箭头）+ 角色 + 描述 + tags
    - 整条 hover：背景轻微变亮、向左移 2px
  - 用 `<a>` 包整条，链接到公司官网
- **DoD**：能看到 1-3 条工作经历；hover 整张卡片有微动效

---

### **P08：Projects 板块（结构）**
- **前置**：P07
- **预计耗时**：30 分钟
- **任务**：
  - 数据源：`src/content/projects.ts`（先建文件，下面 P10 / P11 填内容）
    ```ts
    export type Project = {
      name: string;
      url: string;
      githubUrl?: string;
      description: string;
      cover: string;
      tags: string[];
      status: 'live' | 'building' | 'idea';
    };
    
    export const projects: Project[] = [
      // P10 P11 填
    ];
    ```
  - 组件 `Projects.tsx`：循环渲染 `ProjectCard`
  - 板块标题 sticky 在顶部（小屏时）：`<h2>Projects</h2>` 用 `lg:sr-only`（桌面端隐藏，因为左侧导航已经标了）
- **DoD**：Projects section 框架就位，等内容填进去

---

### **P09：Blog 板块（占位）**
- **前置**：P08
- **预计耗时**：30 分钟
- **任务**：
  - 文件：`src/components/Blog.tsx`
  - MVP 阶段先显示：
    ```tsx
    <section id="blog" className="mb-16 scroll-mt-16">
      <h2 className="lg:sr-only">Blog</h2>
      <div className="rounded-md bg-brand-bg-alt/30 p-8 text-center">
        <p className="text-brand-text-muted">
          Coming soon ✍️
        </p>
        <p className="mt-2 text-sm">
          关于 AI 产品设计、个人项目实践的写作
        </p>
      </div>
    </section>
    ```
  - 未来真写博客时，把这个占位换掉
- **DoD**：滚到底能看到占位卡

---

### **P09.5：Resume PDF 链接（可选）**
- **前置**：P06
- **预计耗时**：15 分钟
- **任务**：
  - 在 About 末尾加一行：
    ```tsx
    <p className="mt-8">
      <a href="/resume.pdf" target="_blank" className="...">
        View Full Résumé →
      </a>
    </p>
    ```
  - 把 PDF 放在 `public/resume.pdf`
- **DoD**：点击打开新窗口看到 PDF
- **跳过条件**：如果暂时没准备好简历 PDF，可以省略

---

## 🟢 阶段 3：项目卡（3 小时）

### **P10：Love My Shelf 项目卡（详细）**
- **前置**：P08
- **预计耗时**：1.5 小时
- **任务**：
  - 准备 Love My Shelf 的封面图：
    - 截 Dashboard 页面 / Hero 区一张精美图
    - 1200×630 或 800×600，放到 `public/images/projects/love-my-shelf-cover.png`
  - 在 `src/content/projects.ts` 加这条：
    ```ts
    {
      name: 'Love My Shelf',
      url: 'https://shelf.sarah.dev',
      githubUrl: 'https://github.com/sarah/love-my-shelf',
      description: `拿手机拍一下书的封面，AI 自动识别书名、副标、作者、类型，一秒入库到 Notion。为了管理我从图书馆借来的几十本书做的个人工具——把"扫码 + 手输"的 5 分钟流程压缩到 5 秒。后端用 Anthropic Claude 做 vision 识别 + Tool Use，前端 Next.js + Tailwind，部署在 Vercel。`,
      cover: '/images/projects/love-my-shelf-cover.png',
      tags: ['Next.js', 'TypeScript', 'Anthropic Claude', 'Notion API', 'Tailwind', 'Vercel'],
      status: 'live',
    }
    ```
  - `ProjectCard.tsx` 实现：
    - 整张卡是 `<a>` 链接到项目主站
    - 左：封面缩略图（200×120）
    - 右：项目名（带 ↗ 箭头）+ 描述 + tags
    - hover：背景 `bg-brand-bg-alt/50`、向左移 2px、箭头变青绿
    - tags 用 mono 字体，pill 样式：`bg-brand-accent/10 text-brand-accent rounded-full px-3 py-1 text-xs`
- **DoD**：Projects section 看到 Love My Shelf 卡片，点击跳转 Vercel 部署；hover 动效流畅

---

### **P11：Coming Soon 占位卡（2-3 张）**
- **前置**：P10
- **预计耗时**：1 小时
- **任务**：
  - 在 `projects.ts` 加 2-3 个 `status: 'building'` 或 `'idea'` 的项目：
    ```ts
    {
      name: 'Love My Events',
      url: '',
      description: '社区活动管理工具：拍海报 / 复制 email / 语音输入，AI 自动提取并分类。',
      cover: '/images/projects/coming-soon.png',
      tags: ['Next.js', 'Claude', 'Notion'],
      status: 'building',
    },
    {
      name: 'YouTube Sorter',
      url: '',
      description: '导入订阅 CSV，AI 自动按主题分类，发现兴趣盲区。',
      cover: '/images/projects/coming-soon.png',
      tags: ['Next.js', 'Claude'],
      status: 'idea',
    },
    ```
  - `ProjectCard` 根据 `status` 调整样式：
    - `live`：正常显示，可点击
    - `building`：右上角加小标签 "Building"（橙色），可点击（如有 url）
    - `idea`：右上角加小标签 "Coming soon"（灰色），不可点击（`<div>` 而非 `<a>`）
  - 通用占位封面图：用 Figma 做一张简单的"插画 + 项目 logo"图，深蓝底
- **DoD**：Projects 列表能看到 3-4 个项目，状态区分明显

---

### **P11.5：项目卡缩略图统一处理**
- **前置**：P10, P11
- **预计耗时**：30 分钟
- **任务**：
  - 用 `next/image` 优化加载
  - 占位用 `placeholder="blur"` + 灰度模糊
  - 缩略图统一比例（16:10 或 3:2）
- **DoD**：所有项目卡缩略图大小一致；首次加载有 blur 占位不闪烁

---

## 🟢 阶段 4：细节（3 小时）

### **P12：移动端适配**
- **前置**：P11
- **预计耗时**：1 小时
- **任务**：
  - Chrome DevTools 切到 iPhone 14 视图测一遍：
    - Sidebar 堆叠到顶部，不 sticky
    - SectionNav 在小屏上隐藏（`hidden lg:block`）
    - ProjectCard 缩略图缩小或换位置
    - 整体 padding 调整
  - 真机访问 `http://你的电脑IP:3000` 测一下
- **DoD**：iPhone Safari 上浏览顺畅，无横向滚动条，字号舒适

---

### **P13：metadata + Open Graph**
- **前置**：P12
- **预计耗时**：30 分钟
- **任务**：
  - `src/app/layout.tsx` 加完整 metadata（见 PRD §9.1）
  - 用 Figma / Canva 做 og-image.png（1200×630）：
    - 深蓝灰背景
    - 大字 "Sarah Wang"
    - 副标 "Frontend Engineer"
    - 角落小字 sarah.dev
  - 放到 `public/og-image.png`
- **DoD**：用 [opengraph.xyz](https://www.opengraph.xyz/) 输入你的 URL 能看到正确预览

---

### **P14：favicon + 网站图标**
- **前置**：P13
- **预计耗时**：30 分钟
- **任务**：
  - 设计或选一个 SW 字母组合 favicon
  - 用 [realfavicongenerator.net](https://realfavicongenerator.net/) 生成全套
  - 放到 `public/` 下
  - `layout.tsx` 加 `<link>` 引用
- **DoD**：浏览器 tab 上能看到 favicon

---

### **P15：微动画 + 抛光**
- **前置**：P14
- **预计耗时**：1 小时
- **任务**：
  - 装 Framer Motion：`npm install framer-motion`
  - 给 SectionNav 的横线伸缩加 spring 动画
  - ProjectCard hover 的位移用 framer 让它更顺滑
  - 整页淡入：第一次加载时整体 `opacity 0 → 1` 200ms
  - 检查所有 `<a>` 都有 `:focus-visible` 样式（无障碍）
  - 检查所有图片都有 alt
  - Lighthouse 跑一遍，目标全绿（≥95）
- **DoD**：Lighthouse 桌面端 Performance / Accessibility / Best Practices / SEO 都 95+

---

## 🟢 阶段 5：上线（1.5 小时）

### **P16：部署 Vercel**
- **前置**：P15
- **预计耗时**：30 分钟
- **任务**：
  - vercel.com 用 GitHub 登录
  - Import `sarah-portfolio` repo
  - 直接 Deploy（不需要环境变量）
  - 第一次部署成功后拿到 `https://sarah-portfolio-xxx.vercel.app/`
- **DoD**：URL 能打开、手机能打开、跑分依然高

---

### **P17：绑定自定义域名（可选但强烈推荐）**
- **前置**：P16
- **预计耗时**：1 小时（含买域名 + DNS 生效等待）
- **任务**：
  - 买域名：[Namecheap](https://namecheap.com) 或 [Cloudflare Domains](https://domains.cloudflare.com)
    - 推荐：`sarahwang.dev` / `sarah.dev`（若可用） / `sarahw.me` / `iamsarah.com`
    - **不要选 `.tk` `.ml` 等免费但不专业的后缀**
    - $10-15/年
  - Vercel Project Settings → Domains → 加域名
  - 按 Vercel 指引在域名供应商设 DNS（CNAME 或 A 记录）
  - 等 15-60 分钟 DNS 生效
  - HTTPS 自动配（Vercel 用 Let's Encrypt）
- **DoD**：访问 `https://sarah.dev` 能看到主页，地址栏有锁图标
- **附加任务**：为以后的 love-my-shelf 等子项目预留子域名（`shelf.sarah.dev`），配 CNAME 指向 Vercel

---

## 📋 快速 checklist

```
□ P01 项目脚手架
□ P02 字体 + 色板
□ P03 双栏布局骨架
□ P04 Sidebar 组件
□ P05 SectionNav 滚动跟随【里程碑1 - 骨架完成】
□ P06 About 板块
□ P07 Experience 板块
□ P08 Projects 板块结构
□ P09 Blog 板块占位
□ P09.5 Resume PDF（可选）
□ P10 Love My Shelf 项目卡
□ P11 Coming Soon 占位卡
□ P11.5 缩略图统一处理【里程碑2 - 内容齐全】
□ P12 移动端适配
□ P13 metadata + OG
□ P14 favicon
□ P15 微动画 + Lighthouse 优化【里程碑3 - 抛光完成】
□ P16 部署 Vercel
□ P17 自定义域名【里程碑4 - 上线】
```

---

## ⚠️ 重要提醒

1. **不要在主页上写虚假经历或夸大项目**。真实最有力量。
2. **不要堆动效**。每个动画必须问自己"这个让用户更舒服了，还是只是炫技"。
3. **每天 git push**，部署是渐进的，每次小改进 Vercel 都自动重新部署。
4. **写完 About 给两个朋友看**，看他们能不能在 30 秒里说出"你是谁、在做什么、想找什么工作"。
5. **不要等所有内容都完美再上线**——MVP 上线后慢慢优化比闷头做 3 周强。

---

## 🎯 给 Claude Code 的第一条指令

```
请按 TICKETS.md 的 P01 创建项目脚手架：
1. npx create-next-app@latest sarah-portfolio --typescript --tailwind --app --src-dir --import-alias "@/*"
2. 初始化 git
3. 检查 .gitignore
4. 运行 npm run dev 确认能跑

完成后告诉我，再进 P02 配字体和色板。
```

---

**祝顺利，期待 sarah.dev 上线那天！✨**
