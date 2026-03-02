import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Семья Ивановых",
      project: "День рождения принцессы",
      metric: "150 гостей в восторге",
      description: "Оформили залу в стиле «Замок» с живыми цветами, тематическим тортом и интерактивными играми для детей.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/28a05c61-1ecc-4f23-88c9-425f9f014e12.jpeg",
    },
    {
      client: "День рождения Brawl Stars",
      project: "Тематическая вечеринка",
      metric: "Дети в полном восторге!",
      description: "Аниматор в образе героя Brawl Stars, торт со свечами-фонтанами и яркая игровая программа для детей.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/c8fd0084-8879-4cd8-9e50-710dc1072cef.jpeg",
    },
    {
      client: "Щенячий патруль",
      project: "Тематическая вечеринка для малышей",
      metric: "Любимые герои вживую",
      description: "Аниматоры в костюмах Чейза, Скай и Маршала — конкурсы, игры и незабываемые фото с любимыми персонажами.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/be87b507-84be-4d23-a618-a404cd94b213.jpg",
    },
    {
      client: "Барби праздник",
      project: "День рождения маленькой принцессы",
      metric: "Торт, сюрприз и море радости",
      description: "Аниматор в розовом образе, тематический торт Барби, аквагрим и весёлые конкурсы для детей.",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/d0df4e58-6e75-4495-aad3-d12d66612eb9.png",
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