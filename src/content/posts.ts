export interface Post {
  title: string;
  titleZh?: string;
  summary: string;
  summaryZh?: string;
  url: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    title: "A Practical Guide to MCP (Model Context Protocol)",
    titleZh: "MCP 实用指南（模型上下文协议）",
    summary: "How it works, why it matters, and how to use it with Claude Code, Notion, Copilot, Cursor & more.",
    summaryZh: "MCP 的工作原理、为什么重要，以及如何在 Claude Code、Notion、Copilot、Cursor 等工具中使用。",
    url: process.env.NEXT_PUBLIC_POST_MCP!,
    tags: ["AI", "MCP", "Claude"],
  },
  {
    title: "8 AI Tools That Are Revolutionizing Creative Content",
    titleZh: "8 个正在革新创意内容的 AI 工具",
    summary: "From text-to-video to real-time drawing and AI-generated podcasts — tools changing the way we create.",
    summaryZh: "从文字转视频到实时绘画和 AI 播客，这些工具正在改变我们的创作方式。",
    url: process.env.NEXT_PUBLIC_POST_AI_TOOLS!,
    tags: ["AI", "Tools"],
  },
  {
    title: "Face to Sticker Generator using Notion, Make, and Replicate APIs",
    titleZh: "用 Notion、Make 和 Replicate API 构建表情包生成器",
    summary: "From Notion to AI-generated face stickers — fully automated, refreshingly simple.",
    summaryZh: "从 Notion 到 AI 生成的表情包——完全自动化，出乎意料地简单。",
    url: process.env.NEXT_PUBLIC_POST_STICKER!,
    tags: ["Notion", "Replicate", "Automation"],
  },
  {
    title: "Every Developer Should Know Git",
    titleZh: "每个开发者都应该掌握的 Git",
    summary: "Whether you're a senior developer or just starting out — mastering Git commands is crucial.",
    summaryZh: "无论你是高级开发者还是刚入门，掌握 Git 命令都至关重要。",
    url: process.env.NEXT_PUBLIC_POST_GIT!,
    tags: ["Git", "DevOps"],
  },
  {
    title: "Redis in System Design",
    titleZh: "系统设计中的 Redis",
    summary: "How to use Redis effectively with Laravel — with CLI, RedisInsight, and best practices.",
    summaryZh: "如何在 Laravel 中高效使用 Redis，包括 CLI、RedisInsight 和最佳实践。",
    url: process.env.NEXT_PUBLIC_POST_REDIS!,
    tags: ["Redis", "Laravel", "Backend"],
  },
  {
    title: "Wonderful VSCode Extensions",
    titleZh: "超好用的 VSCode 插件",
    summary: "Incredibly useful VSCode extensions that have significantly improved my workflow.",
    summaryZh: "这些 VSCode 插件极大地提升了我的开发效率。",
    url: process.env.NEXT_PUBLIC_POST_VSCODE!,
    tags: ["VSCode", "Tools"],
  },
  {
    title: "Mastering The Essential Linux Commands",
    titleZh: "掌握 Linux 核心命令",
    summary: "The Linux command line is a powerful tool that empowers users to interact with their system.",
    summaryZh: "Linux 命令行是一个强大的工具，让你真正掌控自己的系统。",
    url: process.env.NEXT_PUBLIC_POST_LINUX!,
    tags: ["Linux", "DevOps"],
  },
  {
    title: "Guide to Laravel: Mailable, Tinker, Artisan, Top Libraries, and Using Laravel With React",
    titleZh: "Laravel 全面指南：Mailable、Tinker、Artisan 及与 React 结合",
    summary: "Laravel is one of the most popular PHP frameworks — elegant, expressive, and developer-friendly.",
    summaryZh: "Laravel 是最流行的 PHP 框架之一——优雅、直观、开发者友好。",
    url: process.env.NEXT_PUBLIC_POST_LARAVEL!,
    tags: ["Laravel", "PHP", "React"],
  },
  {
    title: "How to Build a HTML Email Template and Test It Using Laravel + Mailhog",
    titleZh: "如何用 Laravel + Mailhog 构建并测试 HTML 邮件模板",
    summary: "HTML email templates are everywhere — welcome emails, password resets, order confirmations.",
    summaryZh: "HTML 邮件模板无处不在——欢迎邮件、密码重置、订单确认，本文手把手教你做。",
    url: process.env.NEXT_PUBLIC_POST_EMAIL_TEMPLATE!,
    tags: ["Laravel", "Email"],
  },
  {
    title: "Implementing Redirect After Login for Expired Sessions",
    titleZh: "实现登录过期后的重定向跳转",
    summary: "A common challenge in secure web apps — what happens when a session expires mid-flow.",
    summaryZh: "安全 Web 应用中的常见挑战——当会话在操作中途过期时该如何处理。",
    url: process.env.NEXT_PUBLIC_POST_SESSION!,
    tags: ["Auth", "Backend"],
  },
];
