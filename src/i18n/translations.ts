export type Locale = "en" | "zh";

export interface Translations {
  nav: {
    home: string;
    about: string;
    education: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    downloadResume: string;
    getInTouch: string;
  };
  sections: {
    about: string;
    education: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendMessage: string;
    sending: string;
    preferEmail: string;
    successMessage: string;
    errorMessage: string;
    emailCopied: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMinLength: string;
    openingEmail: string;
  };
  projects: {
    searchPlaceholder: string;
    filterByTags: string;
    clearFilters: string;
    showing: string;
    of: string;
    projects: string;
    noProjectsFound: string;
    viewDetails: string;
    problem: string;
    dataset: string;
    approach: string;
    tools: string;
    impact: string;
    nextSteps: string;
  };
  footer: {
    quickLinks: string;
    connect: string;
    contact: string;
    rightsReserved: string;
  };
  timeline: {
    keyCourses: string;
    achievement: string;
    gpa: string;
  };
  focusAreas: {
    dataAnalytics: {
      title: string;
      description: string;
    };
    dataManagement: {
      title: string;
      description: string;
    };
    appliedML: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Work Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      downloadResume: "Download Resume",
      getInTouch: "Get in Touch",
    },
    sections: {
      about: "About",
      education: "Education",
      experience: "Work Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a question or want to work together? Get in touch!",
      nameLabel: "Name *",
      emailLabel: "Email *",
      messageLabel: "Message *",
      sendMessage: "Send Message",
      sending: "Sending...",
      preferEmail: "Prefer email? Use the link below:",
      successMessage: "Message sent successfully! I'll get back to you soon.",
      errorMessage: "Failed to send message. Please use the email link below or try again later.",
      emailCopied: "Email copied to clipboard!",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters",
      openingEmail: "Opening your email client...",
    },
    projects: {
      searchPlaceholder: "Search projects by title, tags, or tools...",
      filterByTags: "Filter by tags:",
      clearFilters: "Clear filters",
      showing: "Showing",
      of: "of",
      projects: "projects",
      noProjectsFound: "No projects found matching your criteria.",
      viewDetails: "View Details",
      problem: "Problem",
      dataset: "Dataset",
      approach: "Approach",
      tools: "Tools & Technologies",
      impact: "Impact",
      nextSteps: "Next Steps",
    },
    footer: {
      quickLinks: "Quick Links",
      connect: "Connect",
      contact: "Contact",
      rightsReserved: "All rights reserved.",
    },
    timeline: {
      keyCourses: "Key Courses:",
      achievement: "Achievement:",
      gpa: "GPA:",
    },
    focusAreas: {
      dataAnalytics: {
        title: "Data Analytics & BI",
        description: "Turn messy data into decision-ready insights using SQL, Python, and BI dashboards.",
      },
      dataManagement: {
        title: "Data Management",
        description: "Build analysis-ready datasets with clean data models, strong QA, and reliable data hygiene.",
      },
      appliedML: {
        title: "Applied ML & NLP",
        description: "Use machine learning and NLP to extract signals from text and automate insight workflows.",
      },
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      education: "教育背景",
      experience: "工作经历",
      projects: "项目经历",
      skills: "技能",
      contact: "联系方式",
    },
    hero: {
      downloadResume: "下载简历",
      getInTouch: "联系我",
    },
    sections: {
      about: "关于",
      education: "教育背景",
      experience: "工作经历",
      projects: "项目经历",
      skills: "技能",
      contact: "联系方式",
    },
    contact: {
      title: "联系方式",
      subtitle: "有问题或想合作？欢迎联系！",
      nameLabel: "姓名 *",
      emailLabel: "邮箱 *",
      messageLabel: "留言 *",
      sendMessage: "发送消息",
      sending: "发送中...",
      preferEmail: "更倾向使用邮箱？请使用下方链接：",
      successMessage: "消息发送成功！我会尽快回复您。",
      errorMessage: "消息发送失败。请使用下方邮箱链接或稍后重试。",
      emailCopied: "邮箱已复制到剪贴板！",
      nameRequired: "姓名是必填项",
      emailRequired: "邮箱是必填项",
      emailInvalid: "请输入有效的邮箱地址",
      messageRequired: "留言是必填项",
      messageMinLength: "留言至少需要 10 个字符",
      openingEmail: "正在打开邮箱客户端...",
    },
    projects: {
      searchPlaceholder: "按标题、标签或工具搜索项目...",
      filterByTags: "按标签筛选：",
      clearFilters: "清除筛选",
      showing: "显示",
      of: "共",
      projects: "个项目",
      noProjectsFound: "未找到匹配的项目。",
      viewDetails: "查看详情",
      problem: "问题",
      dataset: "数据集",
      approach: "方法",
      tools: "工具与技术",
      impact: "影响",
      nextSteps: "下一步",
    },
    footer: {
      quickLinks: "快速链接",
      connect: "社交链接",
      contact: "联系方式",
      rightsReserved: "版权所有。",
    },
    timeline: {
      keyCourses: "核心课程：",
      achievement: "成就：",
      gpa: "GPA：",
    },
    focusAreas: {
      dataAnalytics: {
        title: "数据分析与商业智能",
        description: "使用 SQL、Python 和 BI 仪表盘将杂乱数据转化为可决策的洞察。",
      },
      dataManagement: {
        title: "数据管理",
        description: "构建分析就绪的数据集，具备清晰的数据模型、严格的质控和可靠的数据治理。",
      },
      appliedML: {
        title: "应用机器学习与自然语言处理",
        description: "使用机器学习和 NLP 从文本中提取信号，并自动化洞察工作流程。",
      },
    },
  },
};

