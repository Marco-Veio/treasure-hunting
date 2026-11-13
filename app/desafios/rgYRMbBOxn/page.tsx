"use client";

import ImageModal from "@/components/ImageModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTimer } from "@/hooks/timer";

export default function PrimeiroDesafio() {
  const router = useRouter();
  const { block, blocked } = useTimer();

  const [resposta, setResposta] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemModal, setImagemModal] = useState("");

  function validarResposta() {
    // if (blocked) {
    //   alert("⏳ Você precisa esperar um pouco antes de enviar outra resposta!");
    // } else {
    //   block();
    //   router.push(`/desafios/${resposta.trim()}`);
    // }
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
            🧩 Desafio Torre de Hanoi
          </h1>

          <p className="text-zinc-400 text-lg mb-10">
            O Enigma da Torre de Hanoi
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/hanoi.gif"
                alt="Torre de Hanoi"
                width={420}
                height={420}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-800/60 rounded-2xl p-6 border border-zinc-700">
                <p className="text-lg leading-relaxed text-zinc-200">
                  Para resolver a Torre de Hanoi, você deve mover todos os
                  discos para a última torre obedecendo as regras:
                </p>

                <ul className="list-disc list-inside text-zinc-400 mt-4 space-y-2">
                  <li>Mover apenas um disco por vez</li>
                  <li>Um disco maior nunca pode ficar sobre um menor</li>
                  <li>Você pode usar as torres auxiliares</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-3">Pergunta</h2>

                <p className="text-lg text-zinc-200">
                  Qual é o número mínimo de movimentos necessários para resolver
                  a Torre de Hanoi com{" "}
                  <span className="font-bold text-red-400">3 discos</span>?
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
                  Pistas visuais
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => abrirModal("/locais/telhas-banco.jpeg")}
                    className="bg-blue-600 hover:bg-blue-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🔍 3 Movimentos
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/arvore-cercada.jpeg")}
                    className="bg-green-600 hover:bg-green-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🗺️ 5 Movimentos
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/trave.jpeg")}
                    className="bg-purple-600 hover:bg-purple-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🧠 7 Movimentos
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/cone.jpeg")}
                    className="bg-yellow-600 hover:bg-yellow-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🖥️ 9 Movimentos
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
                  placeholder="Digite aqui..."
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-5 text-lg outline-none focus:border-red-500"
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

      {modalAberto && (
        <ImageModal
          aberto={modalAberto}
          imagem={imagemModal}
          onClose={() => setModalAberto(false)}
        >
          {(revelar) => (
            <div className="text-white">
              <p className="text-sm text-zinc-300 mb-3">
                Fórmula da Torre de Hanoi:
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert("❌")}
                  className="bg-zinc-700 hover:bg-zinc-600 rounded-lg px-3 py-2 text-sm transition cursor-pointer"
                >
                  n² + 1
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
                  2n + 1
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
                  2ⁿ − 1
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
                  n! − 1
                </button>
              </div>
            </div>
          )}
        </ImageModal>
      )}
    </main>
  );
}
