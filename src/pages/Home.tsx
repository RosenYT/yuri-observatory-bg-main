import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { Card } from "@/components/ui/card";
import { Telescope, Award } from "lucide-react";
import telescopeImage from "@/assets/telescope.jpg";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      
      {/* Famous Astronomy Facts */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Интересни факти за Вселената
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Светлината от миналото</h3>
                  <p className="text-muted-foreground">
                    Светлината от най-далечните звезди, които виждаме, е пътувала милиарди години, 
                    така че всъщност гледаме в миналото на Вселената.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-accent text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Звездна прах</h3>
                  <p className="text-muted-foreground">
                    Всеки атом във вашето тяло е дошъл от звезда, която е експлодирала. 
                    Буквално сме направени от звезден прах.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Невидимата Вселена</h3>
                  <p className="text-muted-foreground">
                    Около 95% от Вселената се състои от тъмна материя и тъмна енергия, 
                    които не можем да видим директно.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-accent text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Безкрайни галактики</h3>
                  <p className="text-muted-foreground">
                    Във видимата Вселена има повече от 100 милиарда галактики, 
                    всяка съдържаща милиарди звезди.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Observatory Summary */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              За обсерваторията
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={telescopeImage} 
                alt="Обсерватория Юрий Гагарин" 
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Telescope className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Първата в България</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Първата Народна астрономическа обсерватория в страната е именно тази в Стара Загора, 
                    официално открита на 26 февруари 1961 г. Годината на откриване съвпада с полета на 
                    първия космонавт, Юрий Гагарин, който става неин патрон.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Признания</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Обсерваторията е родена от стремежа на обществото да бъде съпричастно към Космоса 
                    и е отличена с множество награди:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Медал „Кирил и Методий" І степен</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Плакет на Софийския университет „Св. Климент Охридски"</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30">
                <p className="text-foreground/90 leading-relaxed italic">
                  "Популяризиране на астрономията и космонавтиката сред младите хора и всички граждани. 
                  Насочване на студентите към науката чрез образователни програми и практически наблюдения."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      <Footer />
    </div>
  );
};

export default Home;
