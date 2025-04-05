import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "PaladSys – Segurança e Inovação";
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PaladSys
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-neutral-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Inteligência em tecnologia. Segurança como prioridade.
        </motion.p>

        <motion.a
          href="#contato"
          className="mt-10 inline-block bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-neutral-200 transition"
          whileHover={{ scale: 1.05 }}
        >
          Fale Conosco
        </motion.a>
      </section>

      <section className="py-20 px-6 bg-neutral-900" id="sobre">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre a PaladSys</h2>
          <p className="text-neutral-300">
            A PaladSys entrega soluções estratégicas em infraestrutura e segurança da informação para organizações que exigem excelência, performance e resiliência.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" id="servicos">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Infraestrutura Gerenciada</h3>
              <p className="text-neutral-400">Gestão completa de servidores, redes e sistemas com foco em alta disponibilidade.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Backup & Disaster Recovery</h3>
              <p className="text-neutral-400">Soluções robustas para continuidade do seu negócio e proteção contra perdas de dados.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Segurança da Informação</h3>
              <p className="text-neutral-400">Monitoramento, prevenção de ameaças e implementação de políticas de segurança.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Parceiros Estratégicos</h2>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-black font-semibold">Logo 1</div>
            <div className="w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-black font-semibold">Logo 2</div>
            <div className="w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-black font-semibold">Logo 3</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="contato">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <p className="text-neutral-300 mb-6">
            Quer saber como podemos ajudar sua empresa? Envie uma mensagem e fale com um especialista da PaladSys.
          </p>
          <form
            action="https://formspree.io/f/moqgqyep"
            method="POST"
            className="grid gap-4 text-left"
          >
            <input type="text" name="name" placeholder="Nome" required className="w-full p-3 rounded-md bg-neutral-800 text-white placeholder-neutral-400" />
            <input type="email" name="email" placeholder="E-mail" required className="w-full p-3 rounded-md bg-neutral-800 text-white placeholder-neutral-400" />
            <textarea name="message" placeholder="Mensagem" required rows="5" className="w-full p-3 rounded-md bg-neutral-800 text-white placeholder-neutral-400"></textarea>
            <button type="submit" className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-neutral-200 transition">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-neutral-500 text-sm bg-neutral-950">
        <p>© {new Date().getFullYear()} PaladSys. Todos os direitos reservados.</p>
        <p className="mt-2">contato@paladsys.com</p>
      </footer>
    </main>
  );
}
