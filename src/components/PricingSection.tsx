import { Button } from "@/components/ui/3d-button"
import Icon from "@/components/ui/icon"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Камерный",
      price: "30 000 ₽",
      period: "от",
      description: "Уютный праздник до 30 человек — домашняя вечеринка или небольшой день рождения.",
      features: [
        "Оформление шарами и декором",
        "Фотозона",
        "Ведущий 2 часа",
        "Сценарий под ваш запрос",
        "Доставка и монтаж декора",
      ],
    },
    {
      name: "Яркий",
      price: "80 000 ₽",
      period: "от",
      description: "Полноценный праздник до 100 человек — день рождения, юбилей или детская вечеринка.",
      features: [
        "Профессиональное оформление",
        "Аниматоры и ведущий",
        "Шоу-программа",
        "Тематический торт",
        "Фото и видеосъёмка",
        "Монтаж и демонтаж",
        "Сопровождение в день праздника",
      ],
      featured: true,
    },
    {
      name: "Грандиозный",
      price: "По запросу",
      period: "свяжитесь с нами",
      description: "Масштабные события — корпоративы, свадьбы, фестивали без ограничений.",
      features: [
        "Безлимитный масштаб",
        "Персональный менеджер",
        "Уникальная концепция",
        "Полное продакшн-сопровождение",
        "Живая музыка / DJ",
        "Кейтеринг под ключ",
        "Постпродакшн фото и видео",
        "Эксклюзивные декорации",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Прозрачные цены
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Выберите формат под ваш праздник. Всегда честно и без скрытых платежей.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">🎉 Самый популярный</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-muted-foreground mr-1 text-sm">{plan.period}</span>
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Заказать
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
