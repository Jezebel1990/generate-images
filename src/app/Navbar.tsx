"use client";

import Link from "next/link";

export function Navbar() {
    return (
   <div className="border-b py-4">
     <div className="container mx-auto flex justify-between">
      <nav className="flex gap-4">
       <Link href="/">Gerar</Link>
       <Link href="/collection">Coleção</Link>
      </nav>
      <div>Entrar</div>
     </div>
   </div>
    );
}