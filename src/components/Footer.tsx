import { Instagram, Mail, Phone } from "lucide-react"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Star" className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-primary">Мастер-Фломастер</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Праздничное агентство «Мастер-Фломастер» — разукрасим ваш праздник! Дни рождения, корпоративы, свадьбы и детские вечеринки с яркими эмоциями.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Как работаем
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79034899419"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 (903) 489-94-19
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+79034899419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Send" className="w-4 h-4" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@master-flo.ru"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@master-flo.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Мастер-Фломастер. Все права защищены.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/+79034899419"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <Icon name="Send" className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
