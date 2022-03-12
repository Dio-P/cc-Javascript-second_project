import {useState, useEffect} from 'react'


const MainContainer = () => {
    
    const [WikiData, setWikiData] = useState([])
    useEffect(() => {
        getWikiData()
      }, [])
    
      const getWikiData = () => {
        fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json")
          .then(res => res.json())
          .then(WikiData => setWikiData(WikiData))
      }


  return (
      <>
      <p>Main Container</p>
      </>
  )
}


    //   //
    //   Nodes - loop - for each battlefield
    //   geojson battlefield item -> Battlefield.Properties.Name

    //   search wiki (Battlefield.Properties.Name) -> wikiname (title or pageID)
    // https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={Battlefield.Properties.Name]%201471&format=json
    // example:
    // https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Battle%20of%20Barnet%201471&format=json
    //   wikiname -> get wiki content
    //     api.php?action=query&prop=revisions&titles= {wikiname} &rvslots=*&rvprop=content&formatversion=2

    // ------------------
// const [WikiData, setWikiData] = useState("")
        // useEffect ( () => {
    //   getWikiEntry()
    //   .then(data => setWikiData(data.query.search.title))
    // })


    ---
    // export const getWikiEntry = () => {
//     const result = fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Battle%20of%20Barnet%201471&format=json ')
//     .then(res => res.json())

//     return result
// }

