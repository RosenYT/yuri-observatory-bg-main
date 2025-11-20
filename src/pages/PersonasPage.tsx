import { Card } from "@/components/ui/card";
import { Rocket, Award, Star } from "lucide-react";
import Footer from "@/components/Footer";

const PersonasPage = () => {
  const personas = [
    {
      name: "Юрий Алексеевич Гагарин",
      role: "Патрон на обсерваторията",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      biography: [
        "Юрий Гагарин е първият човек в космоса, извършил исторически полет на 12 април 1961 г. на борда на космическия кораб 'Восток-1'.",
        "Роден е на 9 март 1934 г. в село Клушино, Русия. Полетът му продължава 108 минути и завършва успешно, превръщайки го в международен герой.",
        "Гагарин става патрон на обсерваторията в Стара Загора същата година - символична връзка между космическото постижение и научното образование в България.",
        "Трагично загива на 27 март 1968 г. при самолетна катастрофа, но неговото наследство продължава да вдъхновява поколения."
      ],
      achievements: [
        "Първият човек в космоса (1961)",
        "Герой на Съветския съюз",
        "Почетен гражданин на множество градове по света"
      ]
    },
    {
      name: "Константин Циолковски",
      role: "Баща на космонавтиката",
      icon: Star,
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=800&q=80",
      biography: [
        "Константин Едуардович Циолковски (1857-1935) е руски и съветски учен, един от основателите на космонавтиката.",
        "Въпреки че е бил самоук в много области, той разработва теоретичните основи на космическите полети и предложи използването на ракети с течно гориво.",
        "Неговата формула на ракетата (уравнение на Циолковски) е фундаментална за изчисляването на скоростта и енергията, необходими за космически полети.",
        "Визионер, който предвиди бъдещето на човечеството в космоса с думите: 'Земята е люлката на човечеството, но не можем да живеем вечно в люлката.'"
      ],
      achievements: [
        "Формулировка на основното уравнение на ракетната техника",
        "Теоретични разработки за многостепенни ракети",
        "Визия за космически станции и колонизация на космоса"
      ]
    },
    {
      name: "Георги Манев",
      role: "Български физик и астроном",
      icon: Award,
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      biography: [
        "Георги Манев (1883-1966) е виден български физик и астроном, професор в Софийския университет.",
        "Разработва собствена гравитационна теория, известна като 'теория на Манев', която модифицира законите на Нютон и предлага алтернатива на общата теория на относителността на Айнщайн.",
        "Неговите изследвания в областта на небесната механика и космологията са признати в международните научни среди.",
        "Манев е сред основателите на българската школа по теоретична физика и астрономия, вдъхновявайки поколения български учени."
      ],
      achievements: [
        "Създател на собствена гравитационна теория",
        "Професор по физика в Софийския университет",
        "Автор на множество научни публикации в областта на астрономията"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Известни личности
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Пионерите в космонавтиката и астрономията, които вдъхновяват нашата мисия
            </p>
          </div>

          <div className="space-y-16">
            {personas.map((persona, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]"
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={persona.image}
                        alt={persona.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <persona.icon className="w-12 h-12 text-primary" />
                      <div>
                        <h2 className="text-3xl font-bold">{persona.name}</h2>
                        <p className="text-lg text-accent">{persona.role}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      {persona.biography.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-6 h-6 text-accent" />
                        Постижения
                      </h3>
                      <ul className="space-y-2">
                        {persona.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonasPage;
