"use client";

import ImageModal from "@/components/ImageModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuartoDesafio() {
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
          <h1 className="text-5xl font-extrabold mb-3 text-blue-500">🗄️ SQL</h1>

          <p className="text-zinc-400 text-lg mb-10">
            O Mistério do Banco de Dados
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/sql.png"
                alt="SQL"
                width={420}
                height={420}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-800/60 rounded-2xl p-6 border border-zinc-700">
                <p className="text-lg leading-relaxed text-zinc-200">
                  Um sistema possui a seguinte tabela:
                </p>

                <div className="mt-5 bg-black/40 rounded-xl p-4 text-sm font-mono overflow-auto">
                  <pre>{`id | nome
-------------
1  | Ana
2  | João
3  | Carlos`}</pre>
                </div>

                <p className="mt-5 text-zinc-400">
                  Um desenvolvedor executou o seguinte comando SQL:
                </p>

                <div className="mt-4 bg-black/60 rounded-xl p-4 text-sm font-mono overflow-auto">
                  <pre>{`SELECT nome
FROM usuarios
WHERE id = 2;`}</pre>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-3">Pergunta</h2>

                <p className="text-lg text-zinc-200 leading-relaxed">
                  Qual será o resultado retornado por esse comando?
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
                  Consultas secretas
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => abrirModal("/locais/moita-cachorro.jpeg")}
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
                    💾 Ana
                  </button>

                  <button
                    onClick={() =>
                      abrirModal("/locais/caixas-componentes.jpeg")
                    }
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
                    🧠 João
                  </button>

                  <button
                    onClick={() => abrirModal("/locais/apoio-pe.jpeg")}
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
                    📊 Carlos
                  </button>
                  <button
                    onClick={() => abrirModal("/locais/banco.jpeg")}
                    className="bg-yellow-600 hover:bg-yellow-700 transition rounded-2xl p-5 font-semibold text-lg cursor-pointer"
                  >
                    🖥️ Null
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
                    focus:border-emerald-500
                  "
                />
              </div>

              <button
                onClick={validarResposta}
                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
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
              Qual comando SQL utilizamos para buscar dados de uma tabela?
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
                DELETE
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
                UPDATE
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
                SELECT
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
                FIND
              </button>
            </div>
          </div>
        )}
      </ImageModal>
    </main>
  );
}
