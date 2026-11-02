export const site = {
  name: "海川众核科技有限公司",
  shortName: "海川众核",
  domain: "linyio.com",
  url: "https://linyio.com",
  description:
    "海川众核科技专注 AI 整体解决方案、智能体开发、APP/小程序定制、商城与点餐系统、快递跑腿及软硬件一体化交付，服务深圳及全国企业数字化升级。",
  address: "深圳市龙岗区星河 COCO World F栋209",
  phone: "19822181815",
  wechat: "nihaozac",
  email: "zacforward@163.com",
  mpName: "星码制造",
  keywords: [
    "小程序开发",
    "APP开发",
    "AI解决方案",
    "智能体开发",
    "商城小程序",
    "点餐系统",
    "点餐软件",
    "快递小程序",
    "跑腿小程序",
    "信息化建设",
    "软硬件开发",
    "深圳小程序开发公司",
  ],
} as const;

export type ServiceItem = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  painPoints: string[];
  deliverables: string[];
  process: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "miniprogram",
    title: "微信小程序定制开发",
    seoTitle: "微信小程序开发公司｜定制开发报价与全流程交付",
    description:
      "从需求梳理到上架运维，提供企业微信小程序定制开发，覆盖商城、预约、会员、获客与行业场景。",
    keywords: ["小程序开发", "微信小程序定制", "企业小程序开发公司"],
    painPoints: ["模板改不了核心流程", "多端数据割裂", "上架被拒反复返工"],
    deliverables: ["原型与交互", "前后端源码", "上架材料包", "运维手册"],
    process: ["需求访谈", "原型确认", "开发联调", "测试上架", "培训运维"],
  },
  {
    slug: "app",
    title: "APP 软件定制开发",
    seoTitle: "APP开发公司｜iOS/Android 定制与上架",
    description:
      "原生/跨端 APP 定制，覆盖用户端、商家端、管理端，提供测试、上架与持续迭代。",
    keywords: ["APP开发", "手机软件开发", "iOS Android 开发"],
    painPoints: ["外包延期", "体验粗糙难留存", "后期无人维护"],
    deliverables: ["UI 设计", "双端应用", "后台管理", "应用商店上架支持"],
    process: ["方案评估", "UI 设计", "研发测试", "提审上架", "版本迭代"],
  },
  {
    slug: "ai-solution",
    title: "AI 技术整体解决方案",
    seoTitle: "AI解决方案｜企业智能化落地与系统集成",
    description:
      "围绕业务目标设计 AI 能力落地路径：知识库、智能客服、审核识别、运营提效与系统对接。",
    keywords: ["AI解决方案", "企业AI落地", "智能化系统"],
    painPoints: ["只会演示难上线", "数据孤岛", "投入看不见回报"],
    deliverables: ["可行性评估", "模型/提示策略", "系统对接", "效果看板"],
    process: ["场景诊断", "方案设计", "试点落地", "效果复盘", "规模化推广"],
  },
  {
    slug: "agent",
    title: "智能体 / Agent 开发",
    seoTitle: "智能体开发｜企业 Agent 定制与工作流自动化",
    description:
      "为企业打造可执行任务的智能体：接待咨询、线索跟进、内容生产、内部流程自动化。",
    keywords: ["智能体开发", "Agent开发", "AI数字员工"],
    painPoints: ["聊天机器人只会闲聊", "无法对接业务系统", "权限与安全难控"],
    deliverables: ["Agent 角色设定", "工具调用", "审批流", "运营后台"],
    process: ["角色定义", "知识接入", "工具编排", "灰度试用", "正式上线"],
  },
  {
    slug: "mall",
    title: "商城小程序 / 商城软件",
    seoTitle: "商城小程序开发｜电商系统定制与私域成交",
    description:
      "商城小程序与独立商城系统：商品、订单、优惠券、分销、会员积分与数据报表一体化。",
    keywords: ["商城小程序", "商城软件开发", "电商小程序定制"],
    painPoints: ["模板商城扩展受限", "营销玩法不够", "库存订单对不上"],
    deliverables: ["商城前台", "商家后台", "支付对接", "营销组件"],
    process: ["品类梳理", "信息架构", "交易链路开发", "支付联调", "运营培训"],
  },
  {
    slug: "ordering",
    title: "点餐软件 / 点餐系统 / 软硬件",
    seoTitle: "点餐系统开发｜扫码点餐软硬件一体化",
    description:
      "扫码点餐、后厨 KDS、收银、会员与打印机/平板等硬件联调，适配餐饮门店真实作业。",
    keywords: ["点餐系统", "点餐软件", "扫码点餐", "点餐软硬件"],
    painPoints: ["出餐慢易出错", "软硬件不兼容", "多门店难统一"],
    deliverables: ["点餐小程序/H5", "后厨屏", "收银端", "打印/硬件对接"],
    process: ["门店调研", "出餐动线设计", "系统开发", "硬件联调", "驻场上线"],
  },
  {
    slug: "express-errand",
    title: "快递 / 跑腿小程序",
    seoTitle: "快递小程序开发｜跑腿配送系统定制",
    description:
      "下单、计价、调度、骑手端、轨迹与结算，支持同城配送与跑腿业务快速上线。",
    keywords: ["快递小程序", "跑腿小程序", "同城配送系统"],
    painPoints: ["调度效率低", "计价规则复杂", "骑手端体验差"],
    deliverables: ["用户端", "骑手端", "调度后台", "结算报表"],
    process: ["业务规则梳理", "路径与计价", "三端开发", "压测", "灰度运营"],
  },
  {
    slug: "informatization",
    title: "企业信息化建设",
    seoTitle: "信息化系统开发｜企业管理数字化升级",
    description:
      "CRM、进销存、审批流、数据看板等信息化系统定制，打通业务与管理数据。",
    keywords: ["信息化建设", "管理系统开发", "数字化升级"],
    painPoints: ["Excel 堆流程", "部门数据不通", "报表滞后"],
    deliverables: ["业务系统", "权限体系", "数据看板", "迁移方案"],
    process: ["现状诊断", "蓝图设计", "分期建设", "数据迁移", "培训上线"],
  },
  {
    slug: "hardware-software",
    title: "软硬件一体化开发",
    seoTitle: "软硬件开发服务｜设备联调与物联网方案",
    description:
      "设备采集、协议对接、边缘控制与云端业务系统一体交付，适合门店设备与行业硬件场景。",
    keywords: ["软硬件开发", "物联网开发", "设备联调"],
    painPoints: ["硬件厂商协议乱", "联调周期长", "现场不稳定"],
    deliverables: ["协议适配", "设备管理后台", "告警运维", "现场部署"],
    process: ["设备选型", "协议验证", "系统开发", "现场联调", "运维保障"],
  },
];

export const guarantees = [
  {
    title: "需求书面确认",
    desc: "范围、节点、验收标准书面固化，减少扯皮与范围蔓延。",
  },
  {
    title: "里程碑验收付款",
    desc: "按阶段交付验收，进度可见、风险可控。",
  },
  {
    title: "源码与文档交付",
    desc: "核心成果含源码、部署说明与运维手册，不绑死厂商。",
  },
  {
    title: "上线护航期",
    desc: "上线后提供稳定护航与缺陷修复窗口，保障业务平稳切换。",
  },
  {
    title: "质量门禁",
    desc: "用例、回归、性能与安全检查通过后再上线。",
  },
  {
    title: "专属对接人",
    desc: "项目经理全程跟进，响应路径清晰。",
  },
];

export const processSteps = [
  { step: "01", title: "免费评估", desc: "梳理目标、预算、工期与风险，给出可执行建议。" },
  { step: "02", title: "方案报价", desc: "输出功能清单、架构示意、里程碑与报价区间。" },
  { step: "03", title: "原型设计", desc: "关键路径原型确认，先对齐再开发。" },
  { step: "04", title: "研发联调", desc: "按迭代交付，周报同步，问题当日闭环。" },
  { step: "05", title: "测试上线", desc: "功能/兼容/性能验证，协助上架与灰度。" },
  { step: "06", title: "运维迭代", desc: "监控、培训、版本迭代，持续优化转化与稳定。" },
];

export const cases = [
  {
    title: "连锁餐饮扫码点餐",
    industry: "餐饮",
    result: "出餐效率提升约 35%，错单率显著下降",
    image: "/images/case-restaurant-ordering.jpg",
    tags: ["点餐系统", "软硬件联调"],
  },
  {
    title: "品牌私域商城小程序",
    industry: "零售电商",
    result: "上线 90 天私域复购占比提升",
    image: "/images/case-mall-miniprogram.jpg",
    tags: ["商城小程序", "会员营销"],
  },
  {
    title: "同城跑腿三端系统",
    industry: "本地生活",
    result: "调度时效缩短，骑手端留存提升",
    image: "/images/process-team-delivery.jpg",
    tags: ["跑腿小程序", "调度后台"],
  },
];
