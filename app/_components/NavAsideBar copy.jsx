import Image from "next/image"
import Link from "next/link"
import styles from "../_cssModule/navasidebar.module.css"
import config from "../../CommunitySiteConfig.json"
import Footer from "./Footer.jsx"

import GenericIcon from "./GenericIcon"
function generate(Section) {
  return Section.map((sec, index) => {
    const { pageName, fileName, iconName, customPath } = sec;
    const href = customPath || `/${fileName}`;

    return (
      <Link key={index} href={href} className="unselectable" draggable={false}>
        <div className={pageName === "home" ? styles.selected : ""}>
          <GenericIcon iconName={iconName} />
          {pageName}
        </div>
      </Link>
    );
  });
}
export default function NavAsideBar({ pageName }) {
    const next_basePath = config.NEXT_PUBLIC_BASE_PATH || '/';
    return (
        <nav className={styles.navaside}>
            <header>
                <Link href={"/"} className="unselectable" draggable={false}
                >
                    <Image
                        src={`${next_basePath}lintinf.svg`}
                        alt="Logo della LINTINF"
                        width={200}
                        height={200}
                        priority
                        className="unselectable" draggable={false}

                    />
                </Link>
                <Link href={"/"} className="unselectable" draggable={false}>

                    <h1 className="">LINTINF</h1>
                </Link>

            </header>
            <main>
                <Link href={"/"}className="unselectable" draggable={false}><div className={pageName === "home" ? styles.selected : ""}><GenericIcon iconName={"IoHome"}/>Home</div></Link>
                <Link href={"/qea"}className="unselectable" draggable={false}><div className={pageName === "qea" ? styles.selected : ""} ><GenericIcon iconName={"FaQuestion"} />Q&A</div></Link>
                <Link href={"/appunti"}className="unselectable" draggable={false}><div className={pageName === "appunti" ? styles.selected : ""}> < GenericIcon iconName={"FaBook"} />Appunti</div></Link>
                <Link href={"/tutorial"}className="unselectable" draggable={false}><div className={pageName === "tutorial" ? styles.selected : ""}> < GenericIcon iconName={"FaHammer"} />Tutorial</div></Link>
                <Link href={"/informazioni"}className="unselectable" draggable={false}><div className={pageName === "informazioni" ? styles.selected : ""}> < GenericIcon iconName={"GrCircleInformation"} />Informazioni</div></Link>
                <Link href={"/contributori"}className="unselectable" draggable={false}><div className={pageName === "contributori" ? styles.selected : ""}> < GenericIcon iconName={"FaPeopleGroup"} />Contributori</div></Link>
                <Link href={"/rappresentati"}className="unselectable" draggable={false}><div className={pageName === "rappresentati" ? styles.selected : ""}> < GenericIcon iconName={"MdAddModerator"} />Rappresentati</div></Link>
            </main>
            <Footer isMobile={false}/>
        </nav>
    )
}