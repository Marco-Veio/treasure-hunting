"use client";

import ImageModal from "@/components/ImageModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OitavoDesafio() {
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
          <h1 className="text-5xl font-extrabold mb-3 text-green-500">
            🛣️ Desafio Rotas no Next.js
          </h1>

          <p className="text-zinc-400 text-lg mb-10">O Labirinto das Rotas</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/next.svg"
                alt="Next.js"
                width={420}
                height={420}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-800/60 rounded-2xl p-6 border border-zinc-700">
                <p className="text-lg leading-relaxed text-zinc-200">
                  No Next.js App Router, cada página da aplicação é criada
                  automaticamente a partir da estrutura de pastas do projeto.
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-3">Pergunta</h2>

                <p className="text-lg text-zinc-200 leading-relaxed">
                  Como normalmente criamos novas rotas no Next.js App Router?
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
                  Rotas secretas
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => abrirModal("/locais/planta-pote.jpeg")}
                    className="
                      bg-blue-600
                      hover:bg-blue-700
                      transition
                      rounded-2xl
                      p-5
                      font-semibold
                      text-lg
                      cursor-pointer
                    "
                  >
                    📂 Criamos arquivos com o nome da rota
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/pebolim.jpeg")}
                    className="
                      bg-green-600
                      hover:bg-green-700
                      transition
                      rounded-2xl
                      p-5
                      font-semibold
                      text-lg
                      cursor-pointer
                    "
                  >
                    ⚛️ Criamos uma pasta com o nome da rota na pasta app e
                    dentro dela um arquivo page.tsx
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/buraco-tronco.jpeg")}
                    className="
                      bg-purple-600
                      hover:bg-purple-700
                      transition
                      rounded-2xl
                      p-5
                      font-semibold
                      text-lg
                      cursor-pointer
                    "
                  >
                    🌐 Definimos no arquivo layout.tsx
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/arvore-cachorro.jpeg")}
                    className="bg-yellow-600 hover:bg-yellow-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🖥️ Criamos uma pasta com o nome da rota na raiz do projeto e
                    dentro dela um arquivo page.tsx
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
                    if (e.key === "Enter") {
                      validarResposta();
                    }
                  }}
                  placeholder="Digite aqui..."
                  className="
                    w-full
                    bg-zinc-800
                    border
                    border-zinc-700
                    rounded-2xl
                    p-5
                    text-lg
                    outline-none
                    focus:border-white
                  "
                />
              </div>

              <button
                onClick={validarResposta}
                className="w-full bg-green-600 hover:bg-green-700 transition py-5 rounded-2xl font-bold text-xl shadow-lg cursor-pointer"
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
              Qual arquivo define uma página no App Router do Next.js?
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => alert("❌")}
                className="
                  bg-zinc-700
                  hover:bg-zinc-600
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  transition
                "
              >
                app.tsx
              </button>

              <button
                onClick={() => alert("❌")}
                className="
                  bg-zinc-700
                  hover:bg-zinc-600
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  transition
                "
              >
                index.tsx
              </button>

              <button
                onClick={revelar}
                className="
                  bg-zinc-700
                  hover:bg-zinc-600
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  
                  transition
                "
              >
                page.tsx
              </button>

              <button
                onClick={() => alert("❌")}
                className="
                  bg-zinc-700
                  hover:bg-zinc-600
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  transition
                "
              >
                route.tsx
              </button>
            </div>
          </div>
        )}
      </ImageModal>
    </main>
  );
}
