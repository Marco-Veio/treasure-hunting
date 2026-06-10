"use client";

import Link from "next/link";

export default function FinalPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div
        className="
          max-w-3xl
          w-full
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-10
          shadow-2xl
          text-center
        "
      >
        <div className="text-7xl mb-6">🏆</div>

        <h1 className="text-5xl font-extrabold mb-6">Parabéns!</h1>

        <p className="text-2xl text-zinc-300 leading-relaxed">
          Sua equipe concluiu todos os desafios da caça ao tesouro.
        </p>

        <p className="text-zinc-500 mt-6 text-lg">
          Vocês resolveram enigmas, descobriram pistas e provaram suas
          habilidades.
        </p>

        <div
          className="
            mt-10
            bg-green-500/10
            border
            border-green-500/30
            rounded-2xl
            p-6
          "
        >
          <p className="text-green-400 text-xl font-bold">
            🎉 Missão concluída com sucesso!
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="
              bg-white
              text-black
              font-bold
              px-8
              py-4
              rounded-2xl
              hover:scale-105
              transition
              shadow-lg
            "
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
