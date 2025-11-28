import { useState } from "react";
import { X } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

// Исторически снимки за времевата линия
import astronautikaImg from "@/assets/timeline-astronautika-1960.jpg";
import openingImg from "@/assets/timeline-opening-1961.jpg";
import eclipseImg from "@/assets/timeline-eclipse-1961.jpg";
import gagarinImg from "@/assets/timeline-gagarin-1961.jpg";
import vtoriBairImg from "@/assets/timeline-vtori-bair-1968.jpg";
import planetariumImg from "@/assets/timeline-planetarium-1978.jpg";
import planetarium2023Img from "@/assets/timeline-planetarium-2023.jpg";

const TimelineSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const data = [
    {
      title: "1957",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Началото на космическата ера</span>
            На 4 октомври 1957 г. с изстрелването на първия изкуствен спътник „Спутник-1" човечеството навлиза
            в космическата ера. Очите на всички са устремени нагоре – следят бързо движещите се светли точици
            на фона на звездите. Възниква необходимост от редовни наблюдения и обучени наблюдатели.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            По инициатива на проф. Никола Бонев и група научни сътрудници от секция Астрономия, катедра по
            астрономия в СУ и ентусиасти към ЦК на ДОСО се създава Българско астронавтическо дружество в София.
            Проф. Бонев, роден на 11 юли 1898 г. в Стара Загора, е негов председател от 1957 г. до смъртта си
            през 1979 г. През 1959 г. подобна секция се създава и във Варна.
          </p>
        </div>
      ),
    },
    {
      title: "1960",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Основаване на Секция Астронавтика в Стара Загора</span>
            На 13 март 1960 г. със съдействието на проф. Никола Бонев е основана секция Астронавтика – първият
            клон на Българското астронавтическо дружество извън София, към аероклуба на ДОСО. Неин ръководител
            е Бончо Кънчев Бонев (р. 4 май 1917 г. в Малка Верея), дългогодишен сътрудник на ДОСО, радиолюбител
            и конструктор на първите радиоприемници в града, ръководител на секцията по ракетомоделизъм.
          </p>
          <div className="relative group overflow-hidden rounded-xl border border-border my-6 max-w-lg mx-auto">
            <img
              src={astronautikaImg}
              onClick={() => setSelectedImage(astronautikaImg)}
              alt="Занятие по ракетомоделизъм, 1960 г."
              className="w-full h-auto object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
              <p className="text-sm text-foreground/90 font-medium">Теоретично занятие по ракетомоделизъм. Момчето е Кънчо Бонев – синът на Бончо Бонев.</p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            За кратко време секцията нараства до над 800 членове – специалисти, инженери, технически кадри,
            любители на небесните явления от всички възрасти. Занятията се провеждат първоначално в една
            стаичка до ритуалните зали на Община Стара Загора, а по-късно в тавански стаи в бившето Първо
            средно училище (сега ГПЧЕ „Ромен Ролан"). По решение на местното ръководство с подкрепата на
            ОК на БКП и ЦК на ДОСО е решено да се построи Народна астрономическа обсерватория.
          </p>
        </div>
      ),
    },
    {
      title: "1961",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Откриване на първата народна обсерватория в България</span>
            На 15 февруари 1961 г., само дни преди официалното откриване, на връх Столетов екип от астрономи-любители,
            ръководен от първия щатен астроном Величка Драганова, наблюдава пълно слънчево затъмнение. Резултатите
            от наблюдението на слънчевата корона са регистрирани в архива на БАН.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="relative group overflow-hidden rounded-xl border border-border">
              <img
                src={eclipseImg}
                onClick={() => setSelectedImage(eclipseImg)}
                alt="Слънчево затъмнение на връх Столетов, 15 февруари 1961 г."
                className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                <p className="text-sm text-foreground/90 font-medium">Наблюдение на слънчевото затъмнение на връх Столетов, 15 февруари 1961 г.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl border border-border">
              <img
                src={openingImg}
                onClick={() => setSelectedImage(openingImg)}
                alt="Официално откриване на НАО, 26 февруари 1961 г."
                className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                <p className="text-sm text-foreground/90 font-medium">Министър Начо Папазов прерязва лентата. Вляво е кметът Йордан Капсамунов, вдясно – проф. Никола Бонев.</p>
              </div>
            </div>
          </div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            На 26 февруари 1961 г. в двора на училище „Иван Вазов" (сега ГПЧЕ „Ромен Ролан") е официално открита
            Първата в България Народна астрономическа обсерватория. Лентата прерязва министърът на просветата
            и културата Начо Папазов. На церемонията присъстват проф. Никола Бонев, председателят на Общинския
            съвет Йордан Капсамунов и множество ентусиасти.
          </p>
          <div className="relative group overflow-hidden rounded-xl border border-border my-6 max-w-lg mx-auto">
            <img
              src={gagarinImg}
              onClick={() => setSelectedImage(gagarinImg)}
              alt="Юрий Гагарин в Стара Загора, 26 май 1961 г."
              className="w-full h-auto object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-sm text-foreground/90 font-medium">Юрий Гагарин на летището в Стара Загора, 26 май 1961 г. – първото му посещение извън СССР.</p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            На 12 април 1961 г. Юрий Гагарин става първият човек в космоса. Само месец и половина по-късно,
            на 26 май 1961 г., първият космонавт на планетата посещава Стара Загора – това е първото му посещение
            извън СССР, по повод празнуването на 24 май. Ентусиазираното старозагорско общество го приветства
            по целия път. Гагарин дава съгласието си обсерваторията да носи неговото име.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            През юни 1961 г. по решение на АН на СССР и Секция Астрономия при БАН към обсерваторията е открита
            Станция 1102 за наблюдение на изкуствени спътници на Земята – първата провинциална станция, в която
            наблюдателната работа се извършва изключително от доброволни средношколци. За първи път в световната
            практика се провежда научна работа с ученици.
          </p>
        </div>
      ),
    },
    {
      title: "1965-1968",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Изграждане на нова база на Втория баир</span>
            На 5 км северно от гр. Стара Загора, след системни проучвания на астроклимата с цел изграждане
            на национална обсерватория, започва построяването на нова база. Сградата е изградена с постоянното
            участие на щатния състав и доброволния труд на астрономите-любители.
          </p>
          <div className="relative group overflow-hidden rounded-xl border border-border my-6 max-w-xs mx-auto">
            <img
              src={vtoriBairImg}
              onClick={() => setSelectedImage(vtoriBairImg)}
              alt="Бончо Бонев с телескопа Куде-рефрактор, 1968 г."
              className="w-full h-auto object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-sm text-foreground/90 font-medium">Бончо Бонев под купола на Куде-рефрактора в извънградската база на обсерваторията на Втория баир</p>
            </div>
          </div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Построена е модерна база със съответни работни кабинети, апаратна, лаборатория и кула с диаметър 5 м
            с въртящ се купол за телескопа Куде-рефрактор 200/3000 на „Карл Цайс", ГДР – уред идеален за фотографски
            дейности и наблюдение на планети. Обсерваторията на Втория баир започва да функционира от 1968 г.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            През 1966 г. се провежда национално съвещание за приемане на единна учебна програма за всички НАОП.
            Приета е 3-годишна програма с раздели: Сферична и теоретична астрономия, Астрофизика, Астрономическа оптика,
            Изкуствени спътници на Земята, Астрофотография. Курсистите се обучават да могат самостоятелно да
            извършват наблюдения и да изпращат резултати до изчислителния център „Москва-Космос".
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            От 1968 г. ръководството на обсерваторията се поема от н.с. Митко Гогошев. Семейство Цветана и
            Митко Гогошеви идват по разпределение след завършване на астрономия в СУ през 1966 г. и първоначално
            живеят в таванските помещения на училищната сграда.
          </p>
        </div>
      ),
    },
    {
      title: "1974-1978",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Преобразуване и откриване на планетариум</span>
            През 1974 г. с решение на Министерски съвет обсерваторията на Втория баир преминава към БАН като
            Базова астрономическа обсерватория към Централната лаборатория за космически изследвания с директор
            Митко Гогошев. Там се изработва космическа техника за първия български космонавт Георги Иванов.
            Бончо Бонев защитава образователния характер на Народната обсерватория в града.
          </p>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            През 1977 г. със средства от бюджета на Стара Загора от Пловдивския панаир се закупува планетариум
            тип ZKP-2 на заводите „Карл Цайс", Йена.
          </p>
          <div className="relative group overflow-hidden rounded-xl border border-border my-6 max-w-lg mx-auto">
            <img
              src={planetariumImg}
              onClick={() => setSelectedImage(planetariumImg)}
              alt="Откриване на планетариума, 3 ноември 1978 г."
              className="w-full h-auto object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-sm text-foreground/90 font-medium">Астрономи-любители около уреда планетариум на откриването, 3 ноември 1978 г.</p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            На 3 ноември 1978 г. официално е открита Народна астрономическа обсерватория с Планетариум (НАОП)
            „Юрий Гагарин". Върху 6-метровия свободно висящ купол – новост в световната практика, спестила
            150 000 лева – се проектира цялото небе. Електронно-програмното устройство показва движението на
            планетите от 1950 до 2030 г. Планетариумът е единственият в България и трети в Европа (след ГДР
            и Полша) по технически възможности.
          </p>
        </div>
      ),
    },
    {
      title: "1994-1996",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Пожар и възраждане</span>
            Черна дата за НАОП е 26 юни 1994 г. Късо съединение на старата електроинсталация предизвиква
            пожар, който тлее с часове. Когато димът и огънят лумват през покрива е вече късно. Огънят
            погълна почти всичко – библиотеката, планетариумът, архиви, снимки – всичко съграждано и
            събирано 30 години.
          </p>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Старозагорската общественост и кметът Андронов намират средства за възстановяване. Само за година
            базата е възстановена по нов проект и снабдена с уреди, мебели, диапозитиви, видеозаписи, книги –
            дарения от други обсерватории, училища и институции. На 4 октомври 1995 г. НАО е открита официално
            за пореден път.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            На 12 април 1996 г. по инициатива на астрономите-любители д-р Пламен Яковлиев, Петко Колев,
            Валентин Иванов и др. е учреден Клуб на астрономите-любители „Гемма". Клубът става основа за
            голяма част от дейността, насочена към широката общественост – наблюдения, експедиции, лагер-школи.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Калоян Пенев, курсист по време на възстановяването, става първият българин със златен медал от
            Международната астрономическа олимпиада. Днес е професионален астроном в САЩ.
          </p>
        </div>
      ),
    },
    {
      title: "2007-2017",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Борба за самостоятелност</span>
            През 2007 г. училищата и Народните обсерватории в други градове преминават на делегирани бюджети
            на МОН, но НАО Стара Загора остава под общинския бюджет без официален статут на образователна институция.
            Отпадат учителските нормативи на щатните специалисти.
          </p>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            През 2012 г. директорът Алексей Стоев преминава в ИКИТ-БАН. Обсерваторията остава без директор,
            започва прелюдия за обезличаване. Реагира се с интернет петиция. През 2013 г. без обсъждане е
            решено обединяване с Младежки дом и Детски център в „Център за наука, култура и изкуство".
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            През 2016 г. новият Закон за предучилищно и училищно образование най-после дава правна база на
            астрономическите обсерватории. На 27 юли 2017 г. Общински съвет единодушно гласува новия статут –
            Център за подкрепа за личностно развитие – Астрономическа обсерватория „Юрий Гагарин".
            Самостоятелността е гарантирана, директор на половин бройка е назначен Алексей Стоев.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-lg md:text-xl block mb-2">Нов цифров планетариум</span>
            На 14 декември 2023 г. е официално открит новият цифров планетариум. Към абревиатурата отново
            се добавя П – Планетариум, така че институцията е НАОП „Юрий Гагарин".
          </p>
          <div className="relative group overflow-hidden rounded-xl border border-border my-6 max-w-lg mx-auto">
            <img
              src={planetarium2023Img}
              onClick={() => setSelectedImage(planetarium2023Img)}
              alt="Новият цифров планетариум, декември 2023 г."
              className="w-full h-auto object-cover transition-transform duration-500 scale-110 group-hover:scale-115 cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-sm text-foreground/90 font-medium">Клуб „Гемма" в новия цифров планетариум, декември 2023 г.</p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm font-normal mb-4">
            Днес обсерваторията разполага с 3 съвременни телескопа за любителски наблюдения и продължава
            да популяризира астрономията и космонавтиката. Участва в световни проекти: Нощ на Гагарин
            (всяка година на 12 април), измерване на светлинното замърсяване, съвместни наблюдения на
            променливи звезди. Старозагорските астрономи-любители от няколко поколения вече са голяма
            общност, вдъхновяваща нови поколения да се интересуват от тайните на Вселената.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Timeline data={data} />
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 md:top-4 md:right-4 p-2 bg-black/50 hover:bg-primary rounded-full text-white transition-colors z-50 backdrop-blur-md border border-white/10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TimelineSection;
