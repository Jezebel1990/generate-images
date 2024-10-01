
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/Logo-ia.png'

export function Navbar() {
    return (
   <div className="border-b py-4">
     <div className="container mx-auto flex justify-between">
     <Image
     src={logo} 
     alt="Logo"
    height={24}
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