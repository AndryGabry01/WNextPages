import styes from "../_cssModule/notFound.module.css"
import Link from "next/link"
import Image from "next/image"
import { Cursor, Typewriter } from 'nextjs-simple-typewriter'
import config from "../../CommunitySiteConfig.json"

//https://morioh.com/a/357c8d0324b3/nextjs-simple-typewriter-add-a-typing-effect-to-your-nextjs-pages
export default function GenericError({errorCode, errorPhrase, secondPhrase}) {
  const next_basePath = config.NEXT_PUBLIC_BASE_PATH || '/';
  const firstPhrase = "Errore </>"+errorCode+"</>, "+errorPhrase
  return (
    <div className={styes.not_found}>
      
      <Link href={"/"} className="unselectable" draggable={false}
      >
        <Image
          src={`${next_basePath}homeLogo.svg`}
          alt="Logo della LINTINF"
          width={200}
          height={200}
          priority
          className="unselectable" draggable={false}

        />
      </Link>
      <h1> <Typewriter words={[firstPhrase]} typeSpeed={50} /></h1>
      <h2><Typewriter words={["", secondPhrase]} delaySpeed={4000} /></h2>
    </div>
  )
}