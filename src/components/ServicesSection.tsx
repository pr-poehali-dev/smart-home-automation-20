import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Детские дни рождения",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/9645cd16-9d19-4ce7-8434-313748dd0aec.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/68d2ed3f-7d80-4a45-b3b7-ecb87b950021.jpg",
      bg: "bg-yellow-50",
    },
    {
      title: "Корпоративные праздники",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/68d2ed3f-7d80-4a45-b3b7-ecb87b950021.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/4c246540-39af-4d16-933d-78022cf4f3e5.jpg",
      bg: "bg-pink-50",
    },
    {
      title: "Свадьбы и юбилеи",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/4c246540-39af-4d16-933d-78022cf4f3e5.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/9645cd16-9d19-4ce7-8434-313748dd0aec.jpg",
      bg: "bg-purple-50",
    },
    {
      title: "Тематические вечеринки",
      image: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/68d2ed3f-7d80-4a45-b3b7-ecb87b950021.jpg",
      overlayImage: "https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/files/9645cd16-9d19-4ce7-8434-313748dd0aec.jpg",
      bg: "bg-green-50",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Наши услуги
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Любой праздник — от камерного семейного до грандиозного корпоратива.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${service.bg} rounded-3xl p-8 flex flex-col h-[320px] transition-all duration-300 hover:shadow-lg`}
            >
              <div className="relative flex-grow flex items-center justify-center mb-6">
                <img
                  src={service.image}
                  alt={`${service.title} showcase`}
                  className="absolute w-44 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                />
                <img
                  src={service.overlayImage}
                  alt={`${service.title} example`}
                  className="absolute w-44 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                />
              </div>

              <h3 className="font-sans text-left text-lg font-medium text-foreground mt-auto">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
