"use client";

import { useRouter } from "next/navigation";

import groups from "../config/groups.json";

export default function Home() {
  const router = useRouter();

  function entrarNoGrupo(selectedGroup: string) {
    const initialRoute = groups!.find((group) => group.nome === selectedGroup)!.route || "";
    router.push(`/desafios/${initialRoute}`);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">🏴‍☠️ Caça ao Tesouro</h1>

        <p className="text-zinc-300 text-lg mb-12">
          Escolha o grupo da sua equipe para começar a aventura.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groups.map((grupo) => (
            <button
              key={grupo.nome}
              onClick={() => entrarNoGrupo(grupo.nome)}
              className={`
                ${grupo.cor}
                transition-all
                duration-200
                rounded-2xl
                p-8
                shadow-lg
                hover:scale-105
                active:scale-95
                flex
                flex-col
                items-center
                justify-center
                gap-3
                cursor-pointer
              `}
            >
              <span className="text-5xl">{grupo.emoji}</span>

              <span className="text-2xl font-bold">{grupo.nome}</span>
            </button>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mt-12">
          Boa sorte. O tesouro espera por vocês...
        </p>
      </div>
    </main>
  );
}
