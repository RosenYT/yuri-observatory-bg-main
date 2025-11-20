import { Card } from "@/components/ui/card";
import { Award, Users, Rocket, Building } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Първата в България
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Първата Народна астрономическа обсерватория в страната е именно тази в Стара Загора, 
            официално открита на 26 февруари 1961 г.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">История и патронаж</h3>
            <p className="text-muted-foreground leading-relaxed">
              Годината на откриване съвпада с полета на първия космонавт, Юрий Гагарин, 
              който става неин патрон. Обсерваторията е родена от стремежа на обществото 
              да бъде съпричастно към Космоса.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
            <Users className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Мисия и цели</h3>
            <p className="text-muted-foreground leading-relaxed">
              Популяризиране на астрономията и космонавтиката сред младите хора и всички граждани. 
              Насочване на студентите към науката чрез образователни програми и практически наблюдения.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-2xl p-8 mb-12 border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center">Признания и отличия</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Медал „Кирил и Методий" І степен</h4>
                <p className="text-muted-foreground">За значим принос в насочването на младите хора към науката</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Building className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Плакет на Софийския университет</h4>
                <p className="text-muted-foreground">„Св. Климент Охридски"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-semibold mb-6">Интересни факти за Вселената</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="text-primary text-2xl">✦</span>
              <p className="text-muted-foreground">
                Светлината от най-далечните звезди, които виждаме, е пътувала милиарди години, 
                преди да стигне до нас.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent text-2xl">✦</span>
              <p className="text-muted-foreground">
                Млечният път съдържа между 200 и 400 милиарда звезди и се движи в космоса със 
                скорост от 600 км в секунда.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary text-2xl">✦</span>
              <p className="text-muted-foreground">
                Юпитер е толкова голям, че в него биха се поместили всички останали планети 
                от Слънчевата система.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-accent text-2xl">✦</span>
              <p className="text-muted-foreground">
                Ако заминете днес със скоростта на светлината, до най-близката звезда (Проксима Кентавър) 
                бихте пътували 4.24 години.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
