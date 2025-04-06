import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const slideImages = [
  "/slides/slide1.jpeg",
  "/slides/slide2.jpeg",
  "/slides/slide3.jpeg"
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const rtlLangs = ["ar", "fa"];
    document.documentElement.dir = rtlLangs.includes(i18n.language) ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo_white_background.jpg" alt="PaladSys Logo" className="h-8 md:h-10" />
          <nav className="hidden md:flex space-x-6 items-center">
            {["home", "about", "services", "partners", "contact"].map((item, idx) => (
              <Link
                key={idx}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-[#74b424] transition"
              >
                {t(`menu.${item}`)}
              </Link>
            ))}
            <select
              onChange={changeLanguage}
              defaultValue={i18n.language}
              className="ml-4 px-2 py-1 rounded-md border border-neutral-300 text-sm text-black"
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="de">🇩🇪 DE</option>
              <option value="ru">🇷🇺 RU</option>
              <option value="ar">🇸🇦 AR</option>
              <option value="fa">🇮🇷 FA</option>
              <option value="zh">🇨🇳 ZH</option>
              <option value="hi">🇮🇳 HI</option>
              <option value="bn">🇧🇩 BN</option>
            </select>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4">
            {["home", "about", "services", "partners", "contact"].map((item, idx) => (
              <Link
                key={idx}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
                className="block py-2 border-b border-neutral-200 hover:text-[#74b424]"
              >
                {t(`menu.${item}`)}
              </Link>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="pt-20 relative h-screen flex items-center justify-center text-center overflow-hidden">
        {slideImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 px-4">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-2xl mt-4 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-10 inline-block bg-[#74b424] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#639c1e] transition"
            whileHover={{ scale: 1.05 }}
          >
            {t("button.contact")}
          </motion.a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="py-20 px-6 bg-neutral-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6 text-[#74b424]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            className="text-neutral-700 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("about.intro")}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["pillar1", "pillar2", "pillar3"].map((key, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-[#74b424]">
                  {t(`about.${key}.title`)}
                </h3>
                <p className="text-neutral-600">
                  {t(`about.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
