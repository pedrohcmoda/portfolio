import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/bg-unsplash.jpg"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
              Construindo o futuro através do
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500"> código</span>
          </h1>
          <p className="text-gray-200 hidden md:block gap-5">
            Descubra o poder dos códigos e das soluções digitais.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/minhas-skills" className='rounded-[20px] relative group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Veja Mais
            </Link>
            <Link href="/meus-projetos" className="rounded-[20px]  relative group bg-transparent border hover:bg-black/30 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Meus Projetos
            </Link>
            <Link href="/me-contate" className="rounded-[20px]  relative group bg-transparent border hover:bg-black/30 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Me contate
            </Link>
          </div>
        </div>

      </div>
      <div className="absolute flex bottom-10 z-[20px] right-5 flex-col md:hidden gap-5">
        <Link href="/minhas-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Veja Mais
        </Link>

        <Link href="/meus-projetos" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Meus Projetos
        </Link>

        <Link href="/me-contate" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Me contate
        </Link>
        <Image
            src="/stars.png"
            alt="stars"
            width={1980}
            height={1080}
            className="absolute top-10 left-0 z-[10]"
          />

      </div>
    </main>
  );
}
