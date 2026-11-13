"use client";

import ImageModal from "@/components/ImageModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TerceiroDesafio() {
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
          <h1 className="text-5xl font-extrabold mb-3 text-yellow-500">
            🌐 Desafio Socket vs HTTP
          </h1>

          <p className="text-zinc-400 text-lg mb-10">
            A Batalha da Comunicação
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/socket-vs-http.png"
                alt="Socket vs HTTP"
                width={420}
                height={420}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-800/60 rounded-2xl p-6 border border-zinc-700">
                <p className="text-lg leading-relaxed text-zinc-200">
                  Dois sistemas precisam trocar mensagens:
                </p>

                <ul className="list-disc list-inside text-zinc-400 mt-4 space-y-2">
                  <li>
                    Um envia mensagens apenas quando o usuário faz uma
                    requisição
                  </li>
                  <li>O outro mantém uma conexão aberta em tempo real</li>
                </ul>

                <p className="mt-5 text-zinc-400">
                  Um deles é muito usado em chats, jogos online e aplicações em
                  tempo real.
                </p>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-3">Pergunta</h2>

                <p className="text-lg text-zinc-200 leading-relaxed">
                  Qual tecnologia normalmente utilizamos quando precisamos de
                  comunicação em tempo real entre cliente e servidor?
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
                  Canais de comunicação
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => abrirModal("/locais/bagulho-copos.jpeg")}
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
                    📡 Comunicação Serial
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/telhas.jpeg")}
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
                    🔌 HTTP
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/pebolim.jpeg")}
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
                    🌐 Websocket
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/cerca.jpeg")}
                    className="bg-yellow-600 hover:bg-yellow-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🖥️ I2C
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
                    focus:border-cyan-500
                  "
                />
              </div>

              <button
                onClick={validarResposta}
                className="
                  w-full
                  bg-yellow-600
                  hover:bg-yellow-700
                  transition
                  py-5
                  rounded-2xl
                  
                  text-xl
                  shadow-lg
                  cursor-pointer
                "
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
              Qual característica diferencia um WebSocket de uma requisição HTTP
              tradicional?
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
                  cursor-pointer
                "
              >
                Usa JSON
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
                  cursor-pointer
                "
              >
                Funciona só no backend
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
                  cursor-pointer
                "
              >
                Mantém conexão aberta em tempo real
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
                  cursor-pointer
                "
              >
                Não usa internet
              </button>
            </div>
          </div>
        )}
      </ImageModal>
    </main>
  );
}
