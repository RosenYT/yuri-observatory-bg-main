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
                      Клуб „Гемма" е неправителствена организация, която осигурява силна обществена 
                      подкрепа за дейността на Народната астрономическа обсерватория „Юрий Гагарин".
                    </p>
                    <p>
                      Членовете на клуба са астрономи-любители от различни възрасти, обединени от 
                      общата страст към изследването на небето и популяризирането на космическата наука.
                    </p>
                    <p>
                      Клубът играе ключова роля в организирането на образователни и обществени събития, 
                      които правят астрономията достъпна за всички граждани на Стара Загора.
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
                <h3 className="text-xl font-semibold mb-3">Наблюдателни сесии</h3>
                <p className="text-muted-foreground">
                  Редовни наблюдения на небесни тела с телескопите на обсерваторията. 
                  Изучаване на планети, звезди, галактики и други космически обекти.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Лекции и срещи</h3>
                <p className="text-muted-foreground">
                  Месечни срещи с презентации на актуални астрономически теми. 
                  Гост-лектори от университети и научни институции.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Image className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Астрофотография</h3>
                <p className="text-muted-foreground">
                  Обучение по астрономическа фотография. Споделяне на техники и оборудване 
                  за заснемане на небесни обекти.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Users2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Обществени събития</h3>
                <p className="text-muted-foreground">
                  Организиране на публични наблюдения при специални астрономически явления 
                  като затъмнения, метеорни дъждове и парад на планети.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Образователни програми</h3>
                <p className="text-muted-foreground">
                  Подкрепа за курсовете за астрономи-любители. Работилници за деца и младежи, 
                  насочени към развиване на интерес към науката.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]">
                <Calendar className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Експедиции</h3>
                <p className="text-muted-foreground">
                  Организиране на наблюдателни експедиции в тъмни локации извън града 
                  за по-добра видимост на небесни обекти.
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
