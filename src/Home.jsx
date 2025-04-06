import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const rtlLangs = ["ar", "fa"];
    document.documentElement.dir = rtlLangs.includes(i18n.language) ? "rtl" : "ltr";
  }, [i18n.language]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-neutral-600 max-w-2xl"
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
      </section>

      {/* Sobre */}
      <section id="about" className="py-20 px-6 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#74b424]">{t("menu.about")}</h2>
          <p className="text-neutral-700">
            A PaladSys entrega soluções estratégicas em infraestrutura e segurança da informação para organizações que exigem excelência, performance e resiliência.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#74b424]">{t("menu.services")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-neutral-100 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Infraestrutura Gerenciada</h3>
              <p className="text-neutral-600">Gestão completa de servidores, redes e sistemas com foco em alta disponibilidade.</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Backup & Disaster Recovery</h3>
              <p className="text-neutral-600">Soluções robustas para continuidade do seu negócio e proteção contra perdas de dados.</p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Segurança da Informação</h3>
              <p className="text-neutral-600">Monitoramento, prevenção de ameaças e implementação de políticas de segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section id="partners" className="py-20 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#74b424]">{t("menu.partners")}</h2>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="w-32 h-16 bg-white border border-neutral-200 rounded-lg shadow-sm flex items-center justify-center text-black font-semibold">Logo 1</div>
            <div className="w-32 h-16 bg-white border border-neutral-200 rounded-lg shadow-sm flex items-center justify-center text-black font-semibold">Logo 2</div>
            <div className="w-32 h-16 bg-white border border-neutral-200 rounded-lg shadow-sm flex items-center justify-center text-black font-semibold">Logo 3</div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#74b424]">{t("menu.contact")}</h2>
          <p className="text-neutral-700 mb-6">
            Quer saber como podemos ajudar sua empresa? Envie uma mensagem e fale com um especialista da PaladSys.
          </p>
          <form
            action="https://formspree.io/f/moqgqyep"
            method="POST"
            className="grid gap-4 text-left"
          >
            <input type="text" name="name" placeholder={t("form.name")}
              className="w-full p-3 rounded-md bg-neutral-100 border border-neutral-300 text-black placeholder-neutral-500" required />
            <input type="email" name="email" placeholder={t("form.email")}
              className="w-full p-3 rounded-md bg-neutral-100 border border-neutral-300 text-black placeholder-neutral-500" required />
            <textarea name="message" placeholder={t("form.message")}
              className="w-full p-3 rounded-md bg-neutral-100 border border-neutral-300 text-black placeholder-neutral-500" required rows="5" />
            <button type="submit"
              className="bg-[#74b424] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-[#639c1e] transition">
              {t("form.submit")}
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-neutral-500 text-sm bg-white">
        <p>© {new Date().getFullYear()} PaladSys. Todos os direitos reservados.</p>
        <p className="mt-2 text-black">contato@paladsys.com</p>
      </footer>
    </main>
  );
}
