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
    url: "https://medium.com/@sarahwang9",
    tags: ["AI", "MCP", "Claude"],
  },
  {
    title: "8 AI Tools That Are Revolutionizing Creative Content",
    titleZh: "8 个正在革新创意内容的 AI 工具",
    summary: "From text-to-video to real-time drawing and AI-generated podcasts — tools changing the way we create.",
    summaryZh: "从文字转视频到实时绘画和 AI 播客，这些工具正在改变我们的创作方式。",
    url: "https://medium.com/@sarahwang9",
    tags: ["AI", "Tools"],
  },
  {
    title: "Face to Sticker Generator using Notion, Make, and Replicate APIs",
    titleZh: "用 Notion、Make 和 Replicate API 构建表情包生成器",
    summary: "From Notion to AI-generated face stickers — fully automated, refreshingly simple.",
    summaryZh: "从 Notion 到 AI 生成的表情包——完全自动化，出乎意料地简单。",
    url: "https://medium.com/@sarahwang9",
    tags: ["Notion", "Replicate", "Automation"],
  },
  {
    title: "Every Developer Should Know Git",
    titleZh: "每个开发者都应该掌握的 Git",
    summary: "Whether you're a senior developer or just starting out — mastering Git commands is crucial.",
    summaryZh: "无论你是高级开发者还是刚入门，掌握 Git 命令都至关重要。",
    url: "https://medium.com/@sarahwang9",
    tags: ["Git", "DevOps"],
  },
  {
    title: "Redis in System Design",
    titleZh: "系统设计中的 Redis",
    summary: "How to use Redis effectively with Laravel — with CLI, RedisInsight, and best practices.",
    summaryZh: "如何在 Laravel 中高效使用 Redis，包括 CLI、RedisInsight 和最佳实践。",
    url: "https://medium.com/@sarahwang9",
    tags: ["Redis", "Laravel", "Backend"],
  },
];
