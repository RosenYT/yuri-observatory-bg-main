import { Card } from "@/components/ui/card";
import { Eye, Sun, Sparkles } from "lucide-react";
import telescopeImage from "@/assets/telescope.jpg";

const Equipment = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Телескопи и оборудване
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Съвременна апаратура за изследване на небесните тела и Вселената
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={telescopeImage} 
              alt="Телескоп в обсерваторията" 
              className="rounded-2xl shadow-2xl shadow-primary/20 w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Eye className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Рефракторни телескопи</h3>
                  <p className="text-muted-foreground">
                    Високоточни оптични инструменти за наблюдение на планети, звезди и 
                    галактики. Използват се за образователни програми и публични наблюдения.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Sun className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Център за слънчев мониторинг</h3>
                  <p className="text-muted-foreground">
                    От 2011 г. функционира център за космическо време. Специализирано оборудване 
                    за наблюдение на слънчевата активност и космическите явления.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Sparkles className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Историческо оборудване</h3>
                  <p className="text-muted-foreground">
                    В периода 1978–1994 г. обсерваторията е разполагала със звездна зала, 
                    оборудвана с планетариум за демонстрация на звездното небе.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
