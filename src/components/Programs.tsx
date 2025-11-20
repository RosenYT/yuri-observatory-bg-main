import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Building2, Users2, ArrowRight, Sun } from "lucide-react";

const Programs = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Дейности и инициативи
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Образователни програми и обществени инициативи за популяризиране на астрономията
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Курсове за астрономи-любители</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              От самото си създаване обсерваторията провежда курсове за теоретична подготовка 
              на наблюдатели. Курсовете включват теоретични знания и практически наблюдения.
            </p>
            <a 
              href="http://astronomy4all.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Научете повече <ArrowRight className="w-4 h-4" />
            </a>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
            <Building2 className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Музей на космонавтиката</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              От април 2014 г. във фоайето е разположена постоянна експозиция, посветена на 
              историята на космическите изследвания и постиженията в астрономията.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
            <Users2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Клуб „Гемма"</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Силна обществена подкрепа чрез регистрираната НПО. Клубът организира 
              срещи, лекции и наблюдателни сесии за любители на астрономията.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
            <Sun className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Лекции и работилници</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Редовни образователни програми за ученици и студенти. Интерактивни работилници 
              за деца, семейни наблюдения и специални eventi при астрономически явления.
            </p>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl p-12 border border-primary/30">
          <h3 className="text-3xl font-bold mb-4">Готови за космическо приключение?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присъединете се към хиляди посетители, които са открили магията на Вселената 
            в нашата обсерватория
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-[var(--shadow-cosmic)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Резервирайте посещение
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
