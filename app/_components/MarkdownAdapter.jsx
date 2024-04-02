import { checkIfFileMDExist, getHtml } from "../_lib/data"
import styles from "../_cssModule/markdown.module.css"

import 'highlight.js/styles/atom-one-dark.css'


export default async function MarkdownAdapter({ mdFileName }) {
    const fileExist = await checkIfFileMDExist(mdFileName); // Attendere la risoluzione della promessa
    const ERRORJSX = <div>Errore file Markdown non trovato, controlla nella cartella ./Sezioni.</div>;
    console.log("fileExist", fileExist);
    const html = fileExist ? <div dangerouslySetInnerHTML={{ __html: await getHtml(mdFileName) }} /> : ERRORJSX;
    return (
        <div className={styles.md_container}>
            {html}
        </div>
    );
}
