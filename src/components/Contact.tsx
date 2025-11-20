import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Контакти
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Посетете ни и открийте магията на Вселената
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Адрес</h3>
            <p className="text-muted-foreground">
              Астрономическа обсерватория<br />
              „Юрий Гагарин"<br />
              Стара Загора, България
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <Clock className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Работно време</h3>
            <p className="text-muted-foreground">
              Понеделник - Петък: 09:00 - 17:00<br />
              Вечерни наблюдения: По график<br />
              За резервации: Предварително
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <Phone className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-muted-foreground">
              За информация и резервации<br />
              моля свържете се с нас
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <Mail className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Имейл</h3>
            <p className="text-muted-foreground">
              За запитвания относно<br />
              образователни програми и посещения
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/30 text-center">
          <h3 className="text-2xl font-semibold mb-4">Важна информация</h3>
          <p className="text-muted-foreground leading-relaxed">
            Препоръчваме да резервирате посещението си предварително, особено за групови посещения 
            и образователни програми. Нощните наблюдения зависят от метеорологичните условия и 
            се организират по график.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
