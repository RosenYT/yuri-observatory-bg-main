import { Timeline } from "@/components/ui/timeline";

const TimelineSection = () => {
  const data = [
    {
      title: "1961",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg md:text-xl block mb-2">Официално откриване</span>
            На 26 февруари 1961 г. е официално открита Народната астрономическа обсерватория „Юрий Гагарин" в Стара Загора - първата в България. Откриването съвпада с историческия полет на първия космонавт Юрий Гагарин, който става патрон на обсерваторията.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg"
              alt="Откриване на обсерваторията"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/placeholder.svg"
              alt="Юрий Гагарин"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1960-те",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg md:text-xl block mb-2">Изграждане и развитие</span>
            Обсерваторията е родена от стремежа на обществото да бъде съпричастно към Космоса. През този период се изграждат основните съоръжения и се придобиват първите телескопи. Започват редовни наблюдения и образователни програми за младежи.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg"
              alt="Строителство"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/placeholder.svg"
              alt="Първи телескоп"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1970-1990",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Разширяване на дейността</span>
            Обсерваторията разширява образователната си дейност. Създава се клуб „Гема" за младежи, интересуващи се от астрономия. Организират се редовни лекции, семинари и публични наблюдения на небесни явления.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            През този период обсерваторията се утвърждава като важен център за популяризиране на астрономията в региона и страната.
          </p>
        </div>
      ),
    },
    {
      title: "1990-2000",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-lg md:text-xl block mb-2">Модернизация</span>
            След промените в страната, обсерваторията преминава през период на модернизация. Придобиват се нови телескопи и оборудване. Създава се Център за слънчево наблюдение, който позволява изследване на слънчевата активност.
          </p>
        </div>
      ),
    },
    {
      title: "2000-2010",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Признание и отличия</span>
            Обсерваторията получава медал „Кирил и Методий" І степен за значим принос в насочването на младите хора към науката. Удостоена е и с плакет на Софийския университет „Св. Климент Охридски".
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Продължава активната образователна дейност с хиляди посетители годишно.
          </p>
        </div>
      ),
    },
    {
      title: "Днес",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Модерен образователен център</span>
            Днес обсерваторията продължава да популяризира астрономията и космонавтиката сред младите хора и всички граждани. Организира редовни курсове по любителска астрономия, поддържа Музей на космонавтиката и провежда лекции и семинари.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-8">
            Обсерваторията остава важен културен и образователен център за Стара Загора и региона, вдъхновявайки нови поколения да се интересуват от тайните на Вселената.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg"
              alt="Съвременна обсерватория"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="/placeholder.svg"
              alt="Образователни програми"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
};

export default TimelineSection;
