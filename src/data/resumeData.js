export const personal = {
  name: '李想',
  nameEn: 'Li Xiang',
  title: '嵌入式开发工程师',
  subtitle: '电子信息 硕士',
};

export const contact = {
  email: 'lixiang0721@outlook.com',
  location: '上海',
};

export const about = {
  headline: '具备电子信息及电气工程专业背景，拥有从0到1的嵌入式项目开发经验，能独立完成控制系统软硬件设计与实现。',
  tags: ['嵌入式开发', 'PLC/CoDeSys', 'FreeRTOS', 'STM32', 'ARM Cortex-M', 'C/C++', 'ST语言', 'PCB设计'],
};

export const education = [
  {
    id: 1,
    degree: '硕士',
    major: '电子信息',
    school: '上海大学',
    badge: '211 · 双一流',
    start: '2023-08',
    end: '2026-06',
  },
  {
    id: 2,
    degree: '本科',
    major: '电气工程与智能控制',
    school: '上海海事大学',
    badge: '一本 · 一流学科',
    start: '2019-08',
    end: '2023-06',
  },
  {
    id: 3,
    degree: '高中',
    major: '理科',
    school: '郑州市第十一中学',
    badge: '省级示范性高中',
    start: '2016-09',
    end: '2019-06',
  },
  {
    id: 4,
    degree: '初中',
    major: '',
    school: '郑州市第八中学',
    badge: '郑州市重点中学',
    start: '2013-09',
    end: '2016-06',
  },
  {
    id: 5,
    degree: '小学',
    major: '',
    school: '河南省实验小学',
    badge: '河南省重点小学',
    start: '2007-09',
    end: '2013-06',
  },
];

export const skills = [
  {
    category: '编程语言',
    icon: '💻',
    items: ['C/C++', 'ST语言', 'Python', 'FBD'],
  },
  {
    category: 'MCU 平台',
    icon: '🔲',
    items: ['ARM Cortex-M', 'STM32F1/F3/F4', 'GD32F470'],
  },
  {
    category: '通信协议',
    icon: '🔗',
    items: ['UART', 'I2C', 'SPI', 'CAN', 'DMA'],
  },
  {
    category: '嵌入式 OS',
    icon: '⚙️',
    items: ['FreeRTOS', 'RT-Thread'],
  },
  {
    category: '硬件设计',
    icon: '📐',
    items: ['原理图设计', 'PCB Layout', '四层板设计'],
  },
  {
    category: '工控/PLC',
    icon: '🏭',
    items: ['CoDeSys', 'IEC 61499', 'EcoStruxure', 'DCS'],
  },
];

export const projects = [
  {
    id: 1,
    title: '多功能通用控制器设计',
    period: '2024-09 ~ 至今',
    org: '农业农村部 — 国家农业科技重大项目课题',
    highlights: [
      '完成控制器原理图绘制及四层板PCB布线，核心板采用GD32F470IGH6，扩展板集成STM32F407IGT6与STM32F303ZET6',
      '设计核心板与扩展板间实时串口通信协议，确保数据高效可靠传输',
      '开发DI/DO、DI/VI/CURI、DAC、FREQ/DI、PWM/DO、CAN等多种复用电路接口底层驱动',
      '开发CoDeSys农艺操作功能库，覆盖底盘控制、割台仿形控制、脱粒清选控制等系统',
    ],
  },
  {
    id: 2,
    title: '某军用大型装备控制系统',
    period: '2025-04 ~ 2025-07',
    org: '国机集团',
    highlights: [
      '设计PWM负载电流监测电路，实现PWM电流闭环输出，保障支架动作平稳可靠',
      '通过PID算法实现多支架同步控制，上升/下降高度误差 ≤ 5mm',
      '遥控信号通过CAN总线连接至控制器，控制多路比例阀实现车身及车顶支架的独立与同步控制',
    ],
  },
  {
    id: 3,
    title: '蔬菜收获机器人设计',
    period: '2024-03 ~ 2024-08',
    org: '上海市科学技术委员会',
    highlights: [
      '基于STM32F103ZET6 + FreeRTOS操作系统，完成机器人整体控制系统设计',
      '编写蔬菜自动整理装筐系统及机器人行驶底盘控制代码',
      '主导软硬件系统故障排查与测试，历经数月调试，项目成功通过上海市科学技术委员会验收',
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: '施耐德电气（中国）有限公司',
    role: '工业自动化工程师',
    period: '2025-01 ~ 2025-04',
    highlights: [
      '掌握IEC 61499国际标准编程方法，熟练使用EcoStruxure Automation Expert平台',
      '德国汉诺威工业博览会污水处理Demo：用两台PLC实现控制器+模拟器架构，利用DCS编程理念实现全功能模拟',
      '深入理解事件驱动的任务调度理念，将其应用于实际工业自动化项目',
    ],
  },
  {
    id: 2,
    company: '赛农伯机器人（上海）有限公司',
    role: '研发工程师',
    period: '2024-03 ~ 2024-08',
    highlights: [
      '参与上海市科学技术委员会蔬菜收获机器人项目，独立负责控制系统设计与实现',
      '使用FreeRTOS完成机器人多任务调度与控制，在农田现场进行每日调试',
      '主导硬件与软件系统故障排查，项目成功通过验收',
    ],
  },
];

export const achievements = [
  {
    id: 1,
    label: '研电赛',
    value: '一等奖',
    detail: '第二十届中国研究生电子设计竞赛上海赛区',
    icon: '🏆',
  },
  {
    id: 2,
    label: '专利申请',
    value: '5+ 项',
    detail: '《一种农机开放式多核控制器及其资源虚拟化映射方法》、《绿叶菜自动收割整理装筐机器人》等多篇发明专利',
    icon: '📜',
  },
  {
    id: 3,
    label: '荣誉称号',
    value: '优秀毕业生',
    detail: '2023年上海市优秀毕业生',
    icon: '🎖️',
  },
  {
    id: 4,
    label: '英语能力',
    value: 'CET-6',
    detail: '双学位背景 + 外企工作经验，可流利交流与阅读专业文献',
    icon: '🌐',
  },
];
