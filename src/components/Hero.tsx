import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-observatory.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

const facts = [
  {
    title: "Грандиозното Слънце",
    text: "Слънцето е така голямо, че около него могат да орбитират 1,3 милиона Земи. То е отговорно за абсолютно цялата енергия в нашата слънчева система.",
    color: "text-primary"
  },
  {
    title: "Отдалечаващата се Луна",
    text: "Луната постепенно се отдалечава от Земята с около 3,8 см на година. За милиарди години тя ще завърши орбитата си далеч от планетата ни.",
    color: "text-accent"
  },
  {
    title: "Денят на Венера",
    text: "На Венера един ден (период на въртене) трае 243 земни дни, което е дори по-дълго от нейната орбита около Слънцето (225 земни дни).",
    color: "text-primary"
  },
  {
    title: "Безброй звезди",
    text: "В Млечния път има между 100 и 200 милиарда звезди, но има галактики с над 100 трилиона звезди. Всяка една е потенциално център на система от планети.",
    color: "text-accent"
  }
];

const Hero = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm text-primary font-medium">Основана 26 февруари 1961 г.</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Обсерватория</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                „Юрий Гагарин"
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Първата народна астрономическа обсерватория в България — прозорец към Вселената от над 60 години.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Разгледай обсерваторията
              </Button>
            </div>
          </div>

          {/* Interesting Facts Animation */}
          <div className="hidden lg:block relative h-[200px] w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFactIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Card className="h-full p-6 bg-black/40 backdrop-blur-md border-primary/20 shadow-2xl shadow-primary/5 flex flex-col justify-center">
                  <div className="flex gap-4">
                    <span className={`text-2xl flex-shrink-0 ${facts[currentFactIndex].color}`}>✦</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">{facts[currentFactIndex].title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {facts[currentFactIndex].text}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;