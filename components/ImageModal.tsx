"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface ImageModalProps {
  aberto: boolean;
  imagem: string;
  onClose: () => void;
  children?: (revelar: () => void) => ReactNode;
}

export default function ImageModal({
  aberto,
  imagem,
  onClose,
  children,
}: ImageModalProps) {
  const [revelada, setRevelada] = useState(false);

  useEffect(() => {
    if (aberto) {
      // eslint-disable-next-line
      setRevelada(false);
    }
  }, [aberto]);

  if (!aberto) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        bg-black/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-zinc-900
          border
          border-zinc-700
          rounded-3xl
          p-6
          max-w-4xl
          w-full
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-20
            w-11
            h-11
            rounded-full
            bg-red-600
            hover:bg-red-700
            text-xl
            font-bold
            transition
          "
        >
          ✕
        </button>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={imagem}
              alt="Pista"
              width={1200}
              height={800}
              className={`
                rounded-2xl
                max-h-[60vh]
                w-full
                object-contain
                transition-all
                duration-500
                ${revelada ? "blur-0 scale-100" : "blur-2xl scale-105"}
              `}
            />
          </div>

          {!revelada && (
            <div
              className="
                bg-zinc-800/80
                border
                border-zinc-700
                rounded-2xl
                p-6
              "
            >
              {children?.(() => setRevelada(true))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
