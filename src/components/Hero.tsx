import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-observatory.jpg";

const Hero = () => {
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
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm text-primary font-medium">Основана 1959 г.</span>
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
      </div>

      {/* Scroll indicator - mouse */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
          className="group"
          aria-label="Scroll down"
        >
          <div className="w-7 h-12 rounded-full border-2 border-foreground/40 group-hover:border-foreground transition-colors flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground/60 group-hover:bg-foreground rounded-full animate-scroll-mouse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;