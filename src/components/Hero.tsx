import { Button } from "@/components/ui/3d-button"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-300/30 blur-2xl" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-pink-400/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-28 h-28 rounded-full bg-green-400/20 blur-2xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {"500+ праздников"}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {"10 лет на рынке"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-center leading-[1.1] mb-6 text-balance"
        >
          Разукрасим{" "}
          <span className="inline-flex items-center gap-3">
            ваш
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/15">
              <Icon name="PartyPopper" className="w-5 h-5 md:w-7 md:h-7 text-primary" />
            </span>
            праздник!
          </span>{" "}
          Ярко и незабываемо.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Создаём праздники, о которых говорят — дни рождения, корпоративы, свадьбы и детские вечеринки с ярким оформлением и настоящим весельем.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button size="lg" className="rounded-full px-8 text-base">
            Обсудить праздник
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/28a05c61-1ecc-4f23-88c9-425f9f014e12.jpeg"
              alt="Детский праздник — Русалочка"
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/c8fd0084-8879-4cd8-9e50-710dc1072cef.jpeg"
              alt="Детский праздник — аниматор с тортом"
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://cdn.poehali.dev/projects/1a262dcf-e384-44e2-8d98-0b46a8be6f9f/bucket/be87b507-84be-4d23-a618-a404cd94b213.jpg"
              alt="Аниматоры Щенячий патруль"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
