import { SECTION } from "../../CommunitySiteConfig.json"
export function generateStaticParams() {
  var a = SECTION.map(section_page => {
    console.log(section_page)
    return { pageName: section_page.sectionName }
  });
  return a
}


import GenerciPage from "../_components/GenericPage"

export default function Page({ params }) {
  const { pageName } = params
  console.log("____________________---"  )
  console.log(pageName  )
  console.log(pageName  )
  console.log(pageName  )
    return (
       <GenerciPage pageName={pageName}/>
    )
}