import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { Card } from "@/components/ui/card";
import { Telescope, Award } from "lucide-react";
import medalImage from "@/assets/medal.jpg";
import observatoryImage from "@/assets/observatory.jpg";
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
                  <h3 className="font-semibold text-lg mb-2">Грандиозното Слънце</h3>
                  <p className="text-muted-foreground">
                    Слънцето е така голямо, че около него могат да орбитират 1,3 милиона Земи. 
                    То е отговорно за абсолютно цялата енергия в нашата слънчева система.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-accent text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Отдалечаващата се Луна</h3>
                  <p className="text-muted-foreground">
                    Луната постепенно се отдалечава от Земята с около 3,8 см на година. 
                    За милиарди години тя ще завърши орбитата си далеч от планетата ни.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Денят на Венера</h3>
                  <p className="text-muted-foreground">
                    На Венера един ден (период на въртене) трае 243 земни дни, което е дори 
                    по-дълго от нейната орбита около Слънцето (225 земни дни).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-3">
                <span className="text-accent text-2xl flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Безброй звезди</h3>
                  <p className="text-muted-foreground">
                    В Млечния път има между 100 и 200 милиарда звезди, но има галактики с над 
                    100 трилиона звезди. Всяка една е потенциално център на система от планети.
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

          {/* За обсерваторията - снимка вляво, текст вдясно */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={observatoryImage} 
                alt="Обсерватория Юрий Гагарин" 
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Telescope className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">За обсерваторията</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Основана официално на 26 февруари 1961 година, Народната астрономическа обсерватория в Стара Загора 
                    е първата от своя род в България. Идеята се ражда от необходимостта да се задоволи растящият интерес 
                    на обществото към космоса след изстрелването на първите изкуствени спътници на Земята. 
                    Обсерваторията е получила своето официално название „Юрий Гагарин" след посещението на първия 
                    космонавт Юрий Гагарин в Стара Загора на 26 май 1961 година, когато той лично дава съгласието си 
                    обсерваторията да носи неговото име. През 1978 година, с отварянето на Планетариума (тип ZKP-2 
                    на заводите „Карл Цайс", Йена), учреждението получава разширени възможности за образователна 
                    и популяризаторска дейност.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Награди и признания - текст вляво, снимка вдясно */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-1">
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Награди и признания</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Медал „Кирил и Методий" I степен</strong> – За значителен принос в науката и образованието. 
                        Обсерваторията е удостоена с това почетно отличие за своите многогодишни научни постижения, 
                        международното си сътрудничество и за развитието на астрономическото образование и популяризация в България.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Плакет на Софийския университет „Климент Охридски"</strong> – За най-съществен принос в 
                        откриването и насочването на младите хора към физиката, астрономията и науката. Тази награда 
                        признава ролята на обсерваторията в подготовката на нови кадри и вдъхновяването на нови поколения 
                        учени и ентусиасти на науката.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:order-2 flex justify-center">
              <img 
                src={medalImage} 
                alt="Медал Кирил и Методий I степен" 
                className="rounded-2xl shadow-2xl shadow-accent/20 max-w-sm h-auto object-cover"
              />
            </div>
          </div>

          <Card className="p-8 mt-16 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30 text-center max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold mb-4 text-foreground">Основна цел на обсерваторията</h4>
            <p className="text-foreground/90 leading-relaxed italic text-lg">
              "Раздвижване на знанията по астрономия и космонавтика, разпространение на научни знания сред всички 
              слоеве на население, обучение на нови поколения астрономи-любители и популяризиране на постиженията 
              на съвременната наука."
            </p>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      <Footer />
    </div>
  );
};

export default Home;
