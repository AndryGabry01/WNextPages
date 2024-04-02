

import NavAsideBar from "../_components/NavAsideBar";
import Footer from "../_components/Footer";
import styles from "../_cssModule/layout.module.css";

import MarkdownAdapter from "../_components/MarkdownAdapter"

export default function Page({ pageName }) {
      return (
          <main className={styles.main}>
              <NavAsideBar pageName={pageName}/>
              <MarkdownAdapter mdFileName={pageName} />
              <Footer />
          </main>
      )
  }