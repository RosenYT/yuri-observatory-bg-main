import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { Telescope, Award } from "lucide-react";
import medalImage from "@/assets/medal.jpg";
import observatoryImage from "@/assets/observatory.jpg";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      
      {/* Observatory Summary */}
      <section id="summary" className="py-20 px-4">
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
        </div>
      </section>

      <div className="text-center mb-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
            История на обсерваторията
          </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
      </div>

      {/* Timeline */}
      <Timeline />

      <Footer />
    </div>
  );
};

export default Home;
