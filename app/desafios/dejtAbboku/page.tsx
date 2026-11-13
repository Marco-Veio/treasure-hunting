"use client";

import ImageModal from "@/components/ImageModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NpmDesafio() {
  const router = useRouter();

  const [resposta, setResposta] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemModal, setImagemModal] = useState("");

  function validarResposta() {
    router.push(`/desafios/${resposta.trim()}`);
  }

  function abrirModal(imagem: string) {
    setImagemModal(imagem);
    setModalAberto(true);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
          <h1 className="text-5xl font-extrabold mb-3 text-red-500">
            📦 Desafio do gerenciador de pacotes
          </h1>

          <p className="text-zinc-400 text-lg mb-10">
            O Gerenciador de Pacotes
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/modules.png"
                alt="NPM"
                width={420}
                height={420}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-800/60 rounded-2xl p-6 border border-zinc-700">
                <p className="text-lg leading-relaxed text-zinc-200">
                  Em um projeto JavaScript, precisamos instalar bibliotecas como
                  React, Axios e outras dependências.
                </p>

                <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                  <li>Instala pacotes de terceiros</li>
                  <li>Gerencia dependências do projeto</li>
                  <li>Usa comandos como install e run</li>
                </ul>

                <p className="mt-5 text-zinc-400">
                  Isso é feito através de uma ferramenta padrão do Node.js.
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-3">Pergunta</h2>

                <p className="text-lg text-zinc-200 leading-relaxed">
                  Qual ferramenta usamos para instalar e gerenciar pacotes em
                  projetos Node.js?
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
                  Ferramentas secretas
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => abrirModal("/locais/muro-campo.jpeg")}
                    className="bg-blue-600 hover:bg-blue-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    Node.js
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/tronco-buraco.jpeg")}
                    className="bg-green-600 hover:bg-green-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    Express
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/tronco-limpo.jpeg")}
                    className="bg-purple-600 hover:bg-purple-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    NPM
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/tapete.jpeg")}
                    className="bg-yellow-600 hover:bg-yellow-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🖥️ Pylance
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-500 mb-3">
                  Digite sua resposta
                </label>

                <input
                  value={resposta}
                  onChange={(e) => setResposta(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") validarResposta();
                  }}
                  placeholder="Digite aqui..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-5 text-lg outline-none focus:border-yellow-500"
                />
              </div>

              <button
                onClick={validarResposta}
                className="w-full bg-red-600 hover:bg-red-700 transition py-5 rounded-2xl font-bold text-xl shadow-lg cursor-pointer"
              >
                Validar resposta
              </button>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        aberto={modalAberto}
        imagem={imagemModal}
        onClose={() => setModalAberto(false)}
      >
        {(revelar) => (
          <div className="text-white">
            <p className="text-sm text-zinc-300 mb-3">
              Qual comando usamos para instalar um pacote com NPM?
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => alert("❌")}
                className="bg-zinc-700 hover:bg-zinc-600 rounded-lg px-3 py-2 text-sm cursor-pointer"
              >
                npm start
              </button>

              <button
                onClick={() => alert("❌")}
                className="bg-zinc-700 hover:bg-zinc-600 rounded-lg px-3 py-2 text-sm cursor-pointer"
              >
                npm run dev
              </button>

              <button
                onClick={revelar}
                className="bg-zinc-700 hover:bg-zinc-600 rounded-lg px-3 py-2 text-sm cursor-pointer"
              >
                npm install
              </button>

              <button
                onClick={() => alert("❌")}
                className="bg-zinc-700 hover:bg-zinc-600 rounded-lg px-3 py-2 text-sm cursor-pointer"
              >
                node install
              </button>
            </div>
          </div>
        )}
      </ImageModal>
    </main>
  );
}
