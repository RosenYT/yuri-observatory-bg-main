import { Card } from "@/components/ui/card";
import { Users2, BookOpen, Calendar, Image } from "lucide-react";
import Footer from "@/components/Footer";

const ClubsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Клуб „Гемма"
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Общността на любителите на астрономията в Стара Загора
            </p>
          </div>

          {/* About the Club */}
          <div className="mb-16">
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30">
              <div className="flex items-start gap-6 mb-6">
                <Users2 className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-4">За клуба</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Клубът е основан на 12 април 1996 година по инициатива на астрономите-любители 
                      д-р Пламен Яковлиев, Петко Колев, Валентин Иванов и други ентусиасти. 
                      Той е регистриран по Закона за сдруженията с нестопанска цел. 
                      Председател на Клуба е Валентин Иванов.
                    </p>
                    <p>
                      Клуб 'Гемма' е организирана групация на астрономи-любители, които са страстни 
                      поклонници на наблюдение на звездното небе, изучаване на небесни явления и 
                      популяризиране на астрономията.
                    </p>
                    <p>
                      Членовете на клуба имат достъп до уредите на обсерваторията и провеждат редовни 
                      наблюдения и лекции. Клубът работи в тясно сътрудничество с персоналът на НАОП 
                      и е центърът на любителската астрономическа дейност в Стара Загора.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Activities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Дейности на клуба</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Астрономически наблюдения</h3>
                <p className="text-muted-foreground">
                  Редовни астрономически наблюдения на Луната, планети, звезди и други небесни обекти 
                  през телескопите на обсерваторията.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Публични сеанси</h3>
                <p className="text-muted-foreground">
                  Организиране на насладителни сеанси за публично наблюдение през телескопи 
                  за всички любители на астрономията.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Image className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Лекции и семинари</h3>
                <p className="text-muted-foreground">
                  Лекции и образователни семинари по астрономия и космонавтика, 
                  участие в международни астрономически проекти и конференции.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Users2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Метеорни наблюдения</h3>
                <p className="text-muted-foreground">
                  Докладване на резултатите от наблюдения на метеорни потоци и звездни явления 
                  към съответните научни организации.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Работа с младежи</h3>
                <p className="text-muted-foreground">
                  Поддържане на живо интереса към космоса и астрономията в младежката среда 
                  чрез образователни програми и практически занимания.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Сътрудничество</h3>
                <p className="text-muted-foreground">
                  Сътрудничество с други любителски и професионални астрономически организации 
                  в България и чужбина.
                </p>
              </Card>
            </div>
          </div>

          {/* Membership */}
          <div className="mb-16">
            <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-border">
              <h2 className="text-3xl font-bold mb-6 text-center">Членство</h2>
              <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Клуб „Гемма" приветства всички, които се интересуват от астрономията - от начинаещи 
                  до опитни наблюдатели. Не е необходимо специално образование или оборудване.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Как да станете член?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Посетете обсерваторията или свържете се с нас</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Участвайте в няколко наблюдателни сесии като гост</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Попълнете заявление за членство</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Заплатете символична годишна такса</span>
                    </li>
                  </ul>
                </div>
                <p className="text-center text-lg font-medium text-foreground">
                  Присъединете се към нашата общност и открийте магията на нощното небе!
                </p>
              </div>
            </Card>
          </div>

          {/* Gallery Preview */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Моменти от клуба</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80"
                  alt="Наблюдение с телескоп"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80"
                  alt="Нощно небе"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=800&q=80"
                  alt="Млечен път"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClubsPage;
