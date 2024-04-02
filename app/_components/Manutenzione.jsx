import Image from "next/image";
import styles from "../_cssModule/manutenzione.module.css";
import config from "../../CommunitySiteConfig.json"
import { Typewriter } from "nextjs-simple-typewriter";
/*TODO: FINIRE di IMPLEMENTARE MODalita MANUTENZIONE*/
export default async function Manutenzione({ mdFileName }) {
    const next_basePath = config.NEXT_PUBLIC_BASE_PATH || '/';

    return (

        <div className={styles.Manutenzione}>
            <Image
                src={`${next_basePath}lintinf_manutenzione.svg`}
                alt="Sito Lintinf in Manutenzione"
                width={300}
                height={300}
                priority
                className="unselectable" draggable={false}

            />
            <div>
                <Typewriter
                    words={['Sito in manutenzione', 'Vi invitiamo a tornare pià tardi.']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>

        </div>
    )
}