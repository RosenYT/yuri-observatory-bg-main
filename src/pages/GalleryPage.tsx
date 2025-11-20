import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Footer from "@/components/Footer";

import galaxy1 from "@/assets/galaxy-1.jpg";
import galaxy2 from "@/assets/galaxy-2.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import nebula2 from "@/assets/nebula-2.jpg";
import planet1 from "@/assets/planet-1.jpg";
import planet2 from "@/assets/planet-2.jpg";
import stars1 from "@/assets/stars-1.jpg";
import andromeda from "@/assets/andromeda.jpg";

const galleryImages = [
  {
    src: galaxy1,
    alt: "Спирална галактика",
    title: "Спирална галактика",
    description: "Красива спирална галактика със светещи рамена от млади звезди и космическа прах. Тези структури са дом на милиарди звезди и планетни системи."
  },
  {
    src: galaxy2,
    alt: "Далечна галактика",
    title: "Далечна галактика",
    description: "Галактика отдалечена на милиони светлинни години. Светлината, която виждаме сега, е напуснала тази галактика преди много време."
  },
  {
    src: nebula1,
    alt: "Цветна мъглявина",
    title: "Мъглявина - люлка на звездите",
    description: "Мъглявина е огромен облак от газ и прах в космоса, където раждат нови звезди. Тези цветове се дължат на различни химични елементи."
  },
  {
    src: nebula2,
    alt: "Космическа мъглявина",
    title: "Планетарна мъглявина",
    description: "Когато звезда като нашето Слънце умира, тя изхвърля външните си слоеве и създава тази красива планетарна мъглявина."
  },
  {
    src: planet1,
    alt: "Планета",
    title: "Екзопланета",
    description: "Планета извън нашата Слънчева система. Учените са открили хиляди такива светове, някои от които може би крият живот."
  },
  {
    src: planet2,
    alt: "Газов гигант",
    title: "Газов гигант",
    description: "Огромна планета, подобна на Юпитер, със сложна атмосфера и множество спътници. Газовите гиганти са най-големите планети във Вселената."
  },
  {
    src: stars1,
    alt: "Звездно поле",
    title: "Звездно скупчище",
    description: "Плътно скупчище от хиляди звезди, свързани от гравитацията. Тези древни структури съдържат едни от най-старите звезди в галактиката."
  },
  {
    src: andromeda,
    alt: "Галактика Андромеда",
    title: "Галактика Андромеда",
    description: "Най-близката до нас голяма галактика, видима със свободно око от тъмни места. След около 4 милиарда години тя ще се слее с нашия Млечен път."
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Галерия
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Пътешествие през красотата на Космоса - изображения на галактики, мъглявини и небесни тела
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-cosmic)]"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur-sm border-border">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              
              <div className="p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="text-2xl font-bold mb-3">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default GalleryPage;
