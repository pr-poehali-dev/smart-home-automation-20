import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-balance"
        >
          <span className="text-primary">Делаем праздники</span> незабываемыми, яркими и{" "}
          <span className="text-accent">по-настоящему радостными</span>. Каждая деталь — с душой.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-dashed border-primary/40 rounded-3xl p-8 text-center bg-pink-50"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">98</span>
              <span className="text-primary text-5xl md:text-6xl font-serif font-bold">%</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Довольных клиентов</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              98% клиентов возвращаются снова и рекомендуют нас друзьям и близким.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-dashed border-primary/40 rounded-3xl p-8 text-center bg-green-50"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">10</span>
              <span className="text-primary text-5xl md:text-6xl font-serif font-bold">лет</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">На рынке</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Десять лет создаём праздники — знаем все секреты незабываемых событий.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
