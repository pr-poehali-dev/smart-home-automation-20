import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Семья Ивановых",
      project: "День рождения принцессы",
      metric: "150 гостей в восторге",
      description: "Оформили залу в стиле «Замок» с живыми цветами, тематическим тортом и интерактивными играми для детей.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/4c246540-39af-4d16-933d-78022cf4f3e5.jpg",
    },
    {
      client: "ООО «Технологии»",
      project: "Новогодний корпоратив",
      metric: "300 сотрудников — один праздник",
      description: "Организовали грандиозный новогодний вечер с живой музыкой, фотозоной и яркими тематическими декорациями.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/68d2ed3f-7d80-4a45-b3b7-ecb87b950021.jpg",
    },
    {
      client: "Анна и Дмитрий",
      project: "Свадьба в стиле бохо",
      metric: "Незабываемый день на всю жизнь",
      description: "Создали уникальный образ торжества с живыми цветами, гирляндами и атмосферой настоящего волшебства.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/9645cd16-9d19-4ce7-8434-313748dd0aec.jpg",
    },
    {
      client: "Детский сад «Солнышко»",
      project: "Выпускной вечер",
      metric: "80 детей и 160 счастливых родителей",
      description: "Оформили яркий выпускной с театрализованным представлением, аниматорами и памятными подарками каждому ребёнку.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/4c246540-39af-4d16-933d-78022cf4f3e5.jpg",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Наши кейсы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Реальные праздники, которые мы превратили в яркие воспоминания.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
