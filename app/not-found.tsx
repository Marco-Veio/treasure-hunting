"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="w-screen h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-5xl font-extrabold">Página não encontrada</h1>
      <h2 className="text-2xl">Certeza que é essa a resposta?</h2>
      <button
        className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition shadow-lg cursor-pointer"
        onClick={() => router.back()}
      >
        Voltar à página anterior
      </button>
    </main>
  );
}
