import Image from "next/image"
import Link from "next/link"
import styles from "../_cssModule/navasidebar.module.css"
import config from "../../CommunitySiteConfig.json"
import Footer from "./Footer.jsx"

import GenericIcon from "./GenericIcon"



function generate(Section,selectedPage) {
  return Section.map((sec, index) => {
    const { sectionName,btnLabel, fileName, iconName, customPath } = sec;
    const href = customPath || `/${fileName}`;

    console.log(sectionName, selectedPage)
    return (
      <Link key={index}  href={href} className="unselectable" draggable={false}>
        <div className={sectionName == selectedPage ? styles.selected : ""}>
          <GenericIcon iconName={iconName} />
          {btnLabel}
        </div>
      </Link>
    );
  });
}

export default function NavAsideBar({ pageName }) {
    const next_basePath = config.NEXT_PUBLIC_BASE_PATH || '/';
    const communityName = config.COMMUNITYNAME
    return (
        <nav className={styles.navaside}>
            <header>
                <Link href={"/"} className="unselectable" draggable={false}
                >
                    <Image
                        src={`${next_basePath}homeLogo.svg`}
                        width={200}
                        height={200}
                        priority
                        className="unselectable" draggable={false}

                    />
                </Link>
                <Link href={"/"} className="unselectable" draggable={false}>

                    <h1 className="">{communityName.toUpperCase()}</h1>
                </Link>

            </header>
            <main>
                {generate(config.SECTION,pageName)}
            </main>
            <Footer isMobile={false}/>
        </nav>
    )
}


