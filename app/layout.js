//import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
import "./globals.css";
import Manutenzione from './_components/Manutenzione';
import config from "../CommunitySiteConfig.json"
//const inter = Inter({ subsets: ["latin"] });
const isManut = config.ENABLE_MANUTENZIONE

export const metadata = {
  title: "LINTINF",
  description: "Pagina del corso di Laurea Triennale Ingegneria delle Tecnologie Informatiche (LINTINF) dell'Università di Parma (UNIPR)",

};



export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={roboto.className}>
        {isManut ? <Manutenzione /> : children}</body>
    </html>
  );
}
