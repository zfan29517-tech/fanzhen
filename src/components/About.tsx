import { motion } from 'motion/react';
import IntroAvatar from './IntroAvatar';

export default function About() {
  const experiences = [
    {
      title: "基本信息",
      details: [
        "范桢 Fanzhen",
        "- 科班的教育经历，良好审美与视觉基本功，学习能力强",
        "- 良好团队协作能力，重视团队氛围建设，耐性佳，脾气好"
      ]
    },
    {
      title: "教育经历",
      items: [
        {
          date: "09/2020 - 07/2024",
          location: "江南大学 | 本科 产品设计",
          desc: "主修应用产品设计、用户研究与产品定义、设计心理学等。"
        },
        {
          date: "09/2024 - 07/2027",
          location: "江南大学 | 研究生 工业设计与产品战略",
          desc: "主修交互设计、服务设计、系统设计等。"
        }
      ]
    },
    {
      title: "实习经历",
      items: [
        {
          date: "05/2025 - 09/2025",
          location: "岚图汽车科技有限公司 vux | 用户体验",
          desc: "协同产品经理与体验管理小组参与项目前期场景功能探索，基于目标用户画像与核心场景，对规划车型进行体验洞察，产出创新提案；协同体验测评小组进行用户体验测评，整理测评数据。"
        }
      ]
    },
    {
      title: "项目经历",
      items: [
        {
          date: "06/2025 - 08/2025",
          location: "KEEP营销视觉设计",
          details: [
            "概述 keep集卡营销活动的视觉设计",
            "职责 进行Keep 集卡营销活动的线上视觉设计，完成活动页与卡片ip的视觉输出，贴合运动品牌调性，提升活动视觉吸引力；并深度运用 AIGC 工具赋能设计全流程，提升工作效率"
          ]
        },
        {
          date: "10/2025 - 04/2026",
          location: "灯语交互设计",
          details: [
            "概述 星宇车灯造型与灯语设计",
            "职责 针对不同用车场景（迎宾 / 锁车、转向 / 变道、警示 / 安全、充电 / 泊车等），设计差异化动态灯语方案，基于led矩阵灯与投影灯进行动态灯语设计；设计成果登陆北京车展。"
          ]
        }
      ]
    }
  ];

  return (
    <section id="about-me" className="bg-[#f9f9f9] overflow-hidden">
      {/* Scroll-driven Avatar Intro */}
      <IntroAvatar />

      <div className="max-w-7xl mx-auto px-8 pb-40 -mt-40 md:-mt-80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Column - Sticky Large Heading */}
          <div className="md:col-span-12 lg:col-span-12 mb-32">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <h2 className="text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter uppercase font-display">
                ABOUT<br className="hidden md:block" />ME.
              </h2>
              <div className="h-1.5 bg-black w-40 mt-12 origin-left" />
            </motion.div>
          </div>

          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            {/* Empty space for the sticky bottom-left avatar if needed, but the floating avatar handles itself */}
            <div className="hidden lg:block lg:col-span-4" />
            
            {/* Right Column - Content List */}
            <div className="md:col-span-12 lg:col-span-8 flex flex-col gap-32">
              {experiences.map((section, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-300">0{idx + 1}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{section.title}</h3>
                  </div>

                  {section.details && (
                    <div className="flex flex-col gap-6">
                      {section.details.map((detail, i) => (
                        <p 
                          key={i} 
                          className={`leading-tight font-medium ${
                            i === 0 
                              ? 'text-3xl md:text-4xl font-bold font-display' 
                              : 'text-base text-gray-500'
                          }`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <div className="flex flex-col gap-12">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 pb-12 border-b border-gray-100 last:border-0">
                          <span className="text-sm font-bold text-gray-400 md:w-32">{item.date}</span>
                          <div className="flex-1 flex flex-col gap-2">
                            <h4 className="text-xl font-bold font-display">{item.location}</h4>
                            {item.desc && <p className="text-gray-500 max-w-2xl leading-relaxed">{item.desc}</p>}
                            {item.details && (
                              <div className="flex flex-col gap-2 mt-2">
                                {item.details.map((detail, dIdx) => (
                                  <p key={dIdx} className="text-gray-500 text-sm leading-relaxed">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
