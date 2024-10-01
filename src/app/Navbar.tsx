
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
   <div className="border-b py-4">
     <div className="container mx-auto flex justify-between">
     <Image
     src="/Logo-ia.png"
     alt="Logo"
    height={24}
    width={100}
     />
      <nav className="flex gap-4">
       <Link href="/">Gerar</Link>
       <Link href="/collection">Coleção</Link>
      </nav>
      <div>Entrar</div>
      
     </div>
   </div>
    );
}