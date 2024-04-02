import Image from "next/image"
import Link from "next/link";
import config from "../../CommunitySiteConfig.json"
import styles from "../_cssModule/footer.module.css"

function generateLinks(next_basePath,links) {
  
  return links.map((link, index) => {
    const { url, image, alt, width, height, target } = link;

    return (
      <Link key={index} href={url} target={target} className="unselectable" draggable={false}>
        <Image
          src={`${next_basePath}${image}.svg`}
          alt={alt}
          width={width}
          height={height}
          priority
          className="unselectable"
          draggable={false}
        />
      </Link>
    );
  });
}
export default function Footer({ isMobile = true }) {
  const next_basePath = config.NEXT_PUBLIC_BASE_PATH || '/';
  const links = config.FOOTERLINK
  return (
    <footer className={isMobile ? styles.footer_mobile : styles.footer}>
      {generateLinks(next_basePath,links)}
    </footer>
  )
}