import { Telescope } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Telescope className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Обсерватория</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Първата народна астрономическа обсерватория в България, 
              посветена на разкриването на тайните на Вселената.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Полезни връзки</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">
                  Галерия
                </Link>
              </li>
              <li>
                <Link to="/personas" className="hover:text-primary transition-colors">
                  Известни личности
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="hover:text-primary transition-colors">
                  Клубове
                </Link>
              </li>
              <li>
                <a 
                  href="http://astronomy4all.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Курсове по астрономия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Обсерватория „Юрий Гагарин"</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Стара Загора, България
            </p>
            <p className="text-sm text-muted-foreground">
              Открита: 26 февруари 1961 г.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Астрономическа обсерватория „Юрий Гагарин". 
            Всички права запазени.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Вдъхновявайки поколения да гледат към звездите
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
