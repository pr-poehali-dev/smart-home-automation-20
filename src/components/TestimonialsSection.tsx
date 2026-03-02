import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder-user.jpg",
    quote:
      "ЯркоФест устроил день рождения дочери просто сказочный! Всё было продумано до мелочей — шарики, аниматоры, торт. Ребёнок был в полном восторге, а мы — в шоке от того, насколько всё было идеально.",
    name: "Марина Козлова",
    role: "Мама именинницы",
    rating: 5,
  },
  {
    image: "/placeholder-user.jpg",
    quote:
      "Заказывали корпоративный новый год на 250 человек. Ребята справились блестяще — живая музыка, тематическое оформление, конкурсы. Сотрудники до сих пор вспоминают! Обязательно будем работать снова.",
    name: "Алексей Громов",
    role: "HR-директор, ООО «Технологии»",
    rating: 5,
  },
  {
    image: "/placeholder-user.jpg",
    quote:
      "Доверили им свою свадьбу — и не пожалели ни секунды. Оформление было просто потрясающим, всё как на картинке из Pinterest. Гости восхищались весь вечер. Спасибо за незабываемый день!",
    name: "Анна Петрова",
    role: "Невеста",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят клиенты</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Лучшая награда для нас — ваши улыбки и тёплые слова после праздника.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
