import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import galaxy1 from "@/assets/galaxy-1.jpg";
import galaxy2 from "@/assets/galaxy-2.jpg";
import nebula1 from "@/assets/nebula-1.jpg";
import nebula2 from "@/assets/nebula-2.jpg";
import planet1 from "@/assets/planet-1.jpg";
import planet2 from "@/assets/planet-2.jpg";
import stars1 from "@/assets/stars-1.jpg";
import andromeda from "@/assets/andromeda.jpg";

const galleryImages = [
  { src: galaxy1, alt: "Галактика с красиви космически облаци", title: "Галактична мъглявина" },
  { src: galaxy2, alt: "Спирална галактика", title: "Спирална галактика" },
  { src: nebula1, alt: "Розово-лилава мъглявина", title: "Космическа мъглявина" },
  { src: nebula2, alt: "Тъмна мъглявина", title: "Horsehead Nebula" },
  { src: planet1, alt: "Планета Сатурн с пръстени", title: "Сатурн" },
  { src: planet2, alt: "Планета Юпитер", title: "Юпитер" },
  { src: stars1, alt: "Звездно купище", title: "Звездна формация" },
  { src: andromeda, alt: "Галактика Андромеда", title: "Галактика Андромеда" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Галерия
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Вдъхновяващи снимки от дълбокия космос и нашите астрономически наблюдения
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer border-2 border-border hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-sm font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur-lg border-primary/30">
            {selectedImage !== null && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
                  <p className="text-muted-foreground">{galleryImages[selectedImage].alt}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
