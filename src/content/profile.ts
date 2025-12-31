export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: { en: string; zh: string };
  location: string;
  period: string;
  gpa?: string;
  courses?: { en: string[]; zh: string[] };
  achievements?: { en: string[]; zh: string[] };
}

export interface Experience {
  company: string;
  role: { en: string; zh: string };
  location: string;
  period: string;
  bullets: { en: string[]; zh: string[] };
}

export interface Project {
  id: string;
  title: { en: string; zh: string };
  role: { en: string; zh: string };
  period: string;
  location?: string;
  tags: string[];
  problem: { en: string; zh: string };
  dataset: { en: string; zh: string };
  approach: { en: string; zh: string };
  tools: string[];
  impact: { en: string[]; zh: string[] };
  nextSteps?: { en: string; zh: string };
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface Avatar {
  src: string;
  alt: string;
}

export interface Profile {
  name: string;
  location: string;
  email: string;
  phone: string;
  headline: string;
  summary: string;
  about: string;
  avatar: Avatar;
  social: SocialLink[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  focusAreas: FocusArea[];
}

export const profile: Profile = {
  name: "Zed Li",
  avatar: {
    src: "/avatar.png",
    alt: "Avatar of Zed Li, a smiling data analyst wearing glasses",
  },
  location: "Vancouver, Canada",
  email: "Lijinsheng2024@outlook.com",
  phone: "+1 (236) 965-0046",
  headline: "Master of Business Analytics candidate at UBC Sauder | Data Analyst focused on SQL, Python, BI dashboards, and decision-ready insights.",
  summary: "Data Analyst and Master of Business Analytics candidate at UBC Sauder with expertise in transforming complex datasets into actionable business insights. Proficient in Python, SQL, Tableau, and Power BI, with a proven track record of improving data quality metrics to 95% accuracy through systematic qualitative coding and AI-powered grouping at Fathom AI. Previously drove customer growth and operational efficiency as Territory Manager at ICOOL HVAC, converting 30+ clients and supporting $1.2M monthly operations. Passionate about metric-first analysis, hypothesis-driven problem-solving, and storytelling with data to drive strategic decision-making.",
  about: "I transform messy data into meaningful insights that drive business decisions. My approach is metric-first: I start with the business question, identify the right KPIs, then build the analysis pipeline—not the other way around.\n\nAt Fathom AI, I structured qualitative data into a taxonomy that reduced false negatives by 30% and false positives by 25%, achieving 95% accuracy. This wasn't just about coding—it was about creating a reusable, traceable system that enabled automated analysis.\n\nI believe in hypothesis-driven analysis: every analysis starts with a clear hypothesis, and every visualization tells a story. Whether I'm analyzing real estate trends across 50,000 listings or building dashboards for hospitality cancellation patterns, I focus on the 'so what'—the actionable insight that changes behavior.\n\nWhen I'm not analyzing business data, I enjoy exploring Vancouver's public datasets—traffic patterns, housing trends, weather correlations—and visualizing them to understand the city better. I also apply data analysis to my passion for basketball, breaking down player efficiency and shot charts to understand the game at a deeper level.",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jinsheng-li713/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/zedli-data",
      icon: "github",
    },
    {
      name: "Tableau Public",
      url: "https://public.tableau.com/app/profile/zed.li",
      icon: "tableau",
    },
  ],
  education: [
    {
      institution: "UBC Sauder School of Business",
      degree: {
        en: "Master of Business Analytics",
        zh: "商业分析硕士",
      },
      location: "Vancouver, Canada",
      period: "Sep 2025 – Aug 2026",
      gpa: "3.8/4.0",
      courses: {
        en: [
          "Business Analytics Programming",
          "Database Management",
          "Machine Learning",
          "Data Visualization",
          "Statistical Analysis",
        ],
        zh: [
          "商业分析编程",
          "数据库管理",
          "机器学习",
          "数据可视化",
          "统计分析",
        ],
      },
    },
    {
      institution: "University of Nottingham",
      degree: {
        en: "BSc (Hons) International Business Management",
        zh: "国际商务管理理学学士（荣誉）",
      },
      location: "Nottingham, UK",
      period: "Sep 2020 – Jul 2024",
      gpa: "3.6/4.0",
      achievements: {
        en: ["Dream Scholarship", "Loctek Scholarship"],
        zh: ["梦想奖学金", "乐歌奖学金"],
      },
    },
    {
      institution: "NEOMA Business School",
      degree: {
        en: "Exchange Program",
        zh: "交换项目",
      },
      location: "Reims, France",
      period: "2023",
      gpa: "3.7/4.0",
    },
  ],
  experience: [
    {
      company: "Fathom AI",
      role: {
        en: "Qualitative Coder",
        zh: "定性编码员",
      },
      location: "Vancouver, Canada",
      period: "Sep 2025 – Present",
      bullets: {
        en: [
          "Database Setup: Set up a database for analysis by selecting key words from raw data as primary identifiers, and used AI models to automatically group and label the data, creating a solid foundation for later automated analysis.",
          "Data Reviewing: Optimised data structure accuracy, reducing FN/FP error by 30%/25% respectively and lifting overall accuracy to 95%.",
        ],
        zh: [
          "数据库搭建：通过从原始数据中选择关键词作为主要标识符来搭建分析数据库，并使用 AI 模型自动分组和标记数据，为后续自动化分析奠定坚实基础。",
          "数据审查：优化数据结构准确性，将假阴性/假阳性错误分别降低 30%/25%，并将整体准确率提升至 95%。",
        ],
      },
    },
    {
      company: "ICOOL HVAC",
      role: {
        en: "Canada & USA Territory Manager",
        zh: "加拿大及美国区域经理",
      },
      location: "US & China",
      period: "Aug 2024 – Jun 2025",
      bullets: {
        en: [
          "Business Development: Led client development across Canada and the U.S Southeast, acquiring an average of 2 new clients monthly via cold calls, industry trade shows and store visits.",
          "Working Task: Standardised support workflows, set clear response-time targets, and used CRM for closure—keeping 30+ daily inquiries on time and high quality and consistently supporting USD 1.2M/month in sales.",
          "Business Travel Experience: Increased retention and satisfaction via frequent in-store/on-site visits and value reviews; safeguarded existing accounts while converting 30+ clients into long-term partnerships, achieving USD 1.5M in sales during the international business trips.",
        ],
        zh: [
          "业务拓展：领导加拿大和美国东南部的客户开发，通过电话销售、行业展会和门店拜访，平均每月获得 2 个新客户。",
          "工作任务：标准化支持工作流程，设定明确的响应时间目标，并使用 CRM 进行跟进——保持 30+ 每日咨询的及时性和高质量，并持续支持每月 120 万美元的销售额。",
          "商务差旅经验：通过频繁的门店/现场访问和价值评估提高客户保留率和满意度；在保护现有账户的同时，将 30+ 客户转化为长期合作伙伴，在国际商务差旅期间实现 150 万美元的销售额。",
        ],
      },
    },
  ],
  projects: [
    {
      id: "real-estate-analysis",
      title: {
        en: "Real Estate Business Analysis (Canada)",
        zh: "房地产商业分析（加拿大）",
      },
      role: {
        en: "Team Lead",
        zh: "团队负责人",
      },
      period: "Sep 2025 – Oct 2025",
      location: "Vancouver",
      tags: ["Python", "SQL", "NLP", "EDA", "Data Visualization"],
      problem: {
        en: "Understanding price elasticity across different regions and property types in the Canadian real estate market to inform pricing strategies and market positioning.",
        zh: "了解加拿大房地产市场中不同地区和物业类型的价格弹性，为定价策略和市场定位提供信息。",
      },
      dataset: {
        en: "Approximately 50,000 property listings and transaction records covering multiple Canadian markets, including property characteristics, pricing history, and market indicators.",
        zh: "约 50,000 条房产挂牌和交易记录，涵盖多个加拿大市场，包括房产特征、价格历史和市场指标。",
      },
      approach: {
        en: "Conducted comprehensive exploratory data analysis using Pandas and NumPy to handle missing values and outliers. Applied NLTK and scikit-learn for text feature extraction from property descriptions, building a feature set that captured both structured and unstructured data. Created visualizations using Matplotlib and WordCloud to identify trends, patterns, and correlations between property attributes and pricing dynamics.",
        zh: "使用 Pandas 和 NumPy 进行全面的探索性数据分析，处理缺失值和异常值。应用 NLTK 和 scikit-learn 从房产描述中提取文本特征，构建捕获结构化和非结构化数据的特征集。使用 Matplotlib 和 WordCloud 创建可视化，识别房产属性和价格动态之间的趋势、模式和相关性。",
      },
      tools: ["Python", "Pandas", "NumPy", "NLTK", "scikit-learn", "Matplotlib", "WordCloud"],
      impact: {
        en: [
          "Processed and analyzed 50,000+ listings, identifying key price drivers and market segments",
          "Reduced analysis time by an estimated 60% through automated feature extraction and visualization pipelines",
          "Generated actionable insights on regional price sensitivity that informed strategic decision-making",
          "Created reusable analysis framework applicable to future real estate market studies",
        ],
        zh: [
          "处理并分析了 50,000+ 条挂牌信息，识别关键价格驱动因素和市场细分",
          "通过自动化特征提取和可视化流程，将分析时间减少约 60%",
          "生成关于区域价格敏感性的可行动洞察，为战略决策提供信息",
          "创建可复用的分析框架，适用于未来的房地产市场研究",
        ],
      },
      nextSteps: {
        en: "Expand analysis to include temporal trends and seasonality factors. Integrate external economic indicators (interest rates, employment data) to build predictive models. Develop interactive dashboard for real-time market monitoring.",
        zh: "扩展分析以包括时间趋势和季节性因素。整合外部经济指标（利率、就业数据）以构建预测模型。开发用于实时市场监控的交互式仪表盘。",
      },
      caseStudyUrl: "/case-studies/real-estate.pdf",
    },
    {
      id: "hospitality-cancellation",
      title: {
        en: "Hospitality Booking Cancellation Analysis",
        zh: "酒店预订取消分析",
      },
      role: {
        en: "Team Lead",
        zh: "团队负责人",
      },
      period: "Sep 2023 – Dec 2023",
      location: "Reims, France",
      tags: ["SQL", "Tableau", "Data Cleaning", "BI", "Dashboard"],
      problem: {
        en: "Identifying key drivers of booking cancellations to optimize pricing strategies, reduce revenue loss, and improve customer retention policies.",
        zh: "识别预订取消的关键驱动因素，以优化定价策略、减少收入损失并改善客户保留政策。",
      },
      dataset: {
        en: "Approximately 20,000 booking records stored in MySQL, including booking channels, lead times, property types, guest demographics, and cancellation status.",
        zh: "存储在 MySQL 中的约 20,000 条预订记录，包括预订渠道、提前预订时间、物业类型、客人人口统计和取消状态。",
      },
      approach: {
        en: "Cleaned and validated data in MySQL, reducing noise and invalid records by 20% through systematic data quality checks. Built comprehensive Tableau dashboards that visualized cancellation rates across multiple dimensions: booking channel, lead time, property type, guest segment, and seasonal patterns. Conducted statistical analysis to identify correlations and segment high-risk cancellation groups.",
        zh: "在 MySQL 中清理和验证数据，通过系统性数据质量检查将噪音和无效记录减少 20%。构建全面的 Tableau 仪表盘，从多个维度可视化取消率：预订渠道、提前预订时间、物业类型、客人细分和季节性模式。进行统计分析以识别相关性并细分高风险取消群体。",
      },
      tools: ["MySQL", "Tableau", "SQL", "Excel"],
      impact: {
        en: [
          "Processed 20,000+ booking records with 20% reduction in data quality issues",
          "Identified high-risk cancellation segments enabling targeted policy interventions",
          "Created interactive dashboards that provided real-time insights to operations team",
          "Generated recommendations that informed pricing and cancellation policy optimization",
        ],
        zh: [
          "处理了 20,000+ 条预订记录，数据质量问题减少 20%",
          "识别高风险取消细分，实现有针对性的政策干预",
          "创建交互式仪表盘，为运营团队提供实时洞察",
          "生成建议，为定价和取消政策优化提供信息",
        ],
      },
      nextSteps: {
        en: "Develop predictive cancellation model using machine learning. Integrate real-time booking data for proactive risk management. A/B test policy changes based on identified high-risk segments.",
        zh: "使用机器学习开发预测性取消模型。整合实时预订数据以进行主动风险管理。基于已识别的高风险细分进行政策变更的 A/B 测试。",
      },
    },
    {
      id: "vancouver-public-data",
      title: {
        en: "Vancouver Public Data Trends Dashboard",
        zh: "温哥华公共数据趋势仪表盘",
      },
      role: {
        en: "Personal Project",
        zh: "个人项目",
      },
      period: "2024",
      location: "Vancouver",
      tags: ["SQL", "Python", "Data Visualization", "Public Data", "Dashboard"],
      problem: {
        en: "Exploring Vancouver's public datasets to understand urban trends and create accessible visualizations that help residents understand their city better.",
        zh: "探索温哥华的公共数据集，了解城市趋势并创建易于理解的可视化，帮助居民更好地了解他们的城市。",
      },
      dataset: {
        en: "Public datasets including transportation patterns, housing affordability metrics, weather data, and demographic indicators from City of Vancouver open data portal.",
        zh: "来自温哥华市开放数据门户的公共数据集，包括交通模式、住房负担能力指标、天气数据和人口统计指标。",
      },
      approach: {
        en: "Aggregated and cleaned multiple public data sources using SQL and Python. Created time-series analysis to identify trends and correlations between housing, transportation, and demographic factors. Built interactive visualizations and dashboards that made complex urban data accessible to non-technical audiences.",
        zh: "使用 SQL 和 Python 聚合和清理多个公共数据源。创建时间序列分析以识别住房、交通和人口统计因素之间的趋势和相关性。构建交互式可视化和仪表盘，使复杂的城市数据对非技术受众易于理解。",
      },
      tools: ["Python", "SQL", "Tableau", "Pandas", "Matplotlib"],
      impact: {
        en: [
          "Synthesized multiple public datasets into cohesive narrative about urban trends",
          "Created visualizations that improved public understanding of housing and transportation dynamics",
          "Demonstrated ability to work with diverse, real-world datasets and communicate insights effectively",
        ],
        zh: [
          "将多个公共数据集综合为关于城市趋势的连贯叙述",
          "创建可视化，提高公众对住房和交通动态的理解",
          "展示了处理多样化真实世界数据集并有效传达洞察的能力",
        ],
      },
      nextSteps: {
        en: "Expand to include predictive modeling for housing trends. Integrate real-time data feeds for live dashboard updates. Publish interactive version for public access.",
        zh: "扩展以包括住房趋势的预测建模。整合实时数据源以进行实时仪表盘更新。发布交互式版本供公众访问。",
      },
      githubUrl: "https://github.com/zedli-data/vancouver-data",
      liveUrl: "https://public.tableau.com/app/profile/zed.li/viz/VancouverTrends",
    },
    {
      id: "canadaretail-hr-strategy",
      title: {
        en: "Data-Driven HR Strategy for CanadaRetail",
        zh: "CanadaRetail 数据驱动的人力资源策略",
      },
      role: {
        en: "Team Project",
        zh: "团队项目",
      },
      period: "MBAN Business Immersion (BA 550)",
      location: "Vancouver",
      tags: ["R", "Tableau", "People Analytics", "Regression", "EDA", "HR Strategy", "Data Visualization"],
      problem: {
        en: "Developed a data-driven HR strategy for a retail case (\"CanadaRetail\"), diagnosing turnover risk drivers and translating insights into actionable retention, training, and hiring recommendations using regression and visualization.",
        zh: "为零售案例（\"CanadaRetail\"）开发数据驱动的人力资源策略，诊断离职风险驱动因素，并使用回归和可视化将洞察转化为可行动的保留、培训和招聘建议。",
      },
      dataset: {
        en: "HR and employee data from CanadaRetail including tenure, training participation, compensation, store performance metrics, and turnover intention indicators.",
        zh: "来自 CanadaRetail 的人力资源和员工数据，包括任期、培训参与度、薪酬、门店绩效指标和离职意向指标。",
      },
      approach: {
        en: "Business immersion project: building a data-driven HR strategy for a retail organization (\"CanadaRetail\"). Conducted comprehensive people analytics to identify turnover risk patterns by tenure and training participation, with early-tenure groups showing higher leaving intention. Analyzed compensation fairness and pay-tier differences linked to turnover intention. Performed store-level prioritization to identify high-risk stores and performance vs. employee quality signals for targeted intervention. Developed hiring model recommendations using regression-based predictors and applicant readiness scoring concept to support sales hiring decisions.",
        zh: "商业沉浸项目：为零售组织（\"CanadaRetail\"）构建数据驱动的人力资源策略。进行全面的人员分析，按任期和培训参与度识别离职风险模式，早期任期群体显示出更高的离职意向。分析薪酬公平性和与离职意向相关的薪酬层级差异。进行门店级优先级排序，识别高风险门店以及绩效与员工质量信号，以进行有针对性的干预。使用基于回归的预测因子和申请人就绪度评分概念开发招聘模型建议，以支持销售招聘决策。",
      },
      tools: ["R Studio", "Tableau", "ChatGPT"],
      impact: {
        en: [
          "Turnover risk patterns by tenure and training participation; early-tenure groups show higher leaving intention",
          "Compensation fairness and pay-tier differences linked to turnover intention",
          "Store-level prioritization: identified high-risk stores and performance vs. employee quality signals for targeted intervention",
          "Hiring model recommendation: regression-based predictors and applicant readiness scoring concept to support sales hiring decisions",
        ],
        zh: [
          "按任期和培训参与度的离职风险模式；早期任期群体显示出更高的离职意向",
          "薪酬公平性和与离职意向相关的薪酬层级差异",
          "门店级优先级排序：识别高风险门店以及绩效与员工质量信号，以进行有针对性的干预",
          "招聘模型建议：基于回归的预测因子和申请人就绪度评分概念，以支持销售招聘决策",
        ],
      },
      nextSteps: {
        en: "Implement recommended retention strategies in high-risk stores. Deploy hiring model scoring system for applicant evaluation. Monitor turnover metrics and refine models based on real-world outcomes.",
        zh: "在高风险门店实施推荐的保留策略。部署招聘模型评分系统以评估申请人。监控离职指标并根据实际结果优化模型。",
      },
      caseStudyUrl: "/case-studies/canadaretail-hr-strategy.pdf",
    },
  ],
  skills: [
    {
      name: "Data & Analytics",
      skills: ["Python", "R", "SQL (MySQL/Oracle)", "Excel"],
    },
    {
      name: "BI & Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
    },
    {
      name: "Data Toolkit",
      skills: ["Pandas", "NumPy", "SciPy", "scikit-learn", "NLTK"],
    },
    {
      name: "Web Basics",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Languages",
      skills: ["English (Fluent)", "Mandarin (Native)", "French (Intermediate)"],
    },
  ],
  focusAreas: [
    {
      title: "Data Analytics & BI",
      description: "Turn messy data into decision-ready insights using SQL, Python, and BI dashboards.",
      icon: "📊",
    },
    {
      title: "Data Management",
      description: "Build analysis-ready datasets with clean data models, strong QA, and reliable data hygiene.",
      icon: "🗄️",
    },
    {
      title: "Applied ML & NLP",
      description: "Use machine learning and NLP to extract signals from text and automate insight workflows.",
      icon: "🤖",
    },
  ],
};

