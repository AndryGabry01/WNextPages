


import Link from 'next/link'
 import GenericError from "./_components/GenericError"
export default function NotFound() {
  return (
    <GenericError errorCode={404} errorPhrase={"Pagina non Trovata!"} secondPhrase={"Ricorda che la rinuncia agli studi non è la soluzione ;)"}/>
  )
}