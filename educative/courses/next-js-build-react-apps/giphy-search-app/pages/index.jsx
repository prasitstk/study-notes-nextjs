import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home(initialData) {
  const [formInputs, setFormInputs] = useState()
  const [searchTerm, setSearchTerm] = useState('cats')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    //console.log(initialData);

    //Store initial cat giphy data in state
    setSearchResults(initialData.catGiphys.data)
  }, [initialData])

  const handleInputs = (event) => {
    let { name, value } = event.target
    setFormInputs({ ...formInputs, [name]: value });
  }

  const search = async (event) => {
    /*
    The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    For example, this can be useful when:

    Clicking on a "Submit" button, prevent it from submitting a form
    Clicking on a link, prevent the link from following the URL
    */
    event.preventDefault()
    let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${formInputs.searchTerm}&api_key=pTfJsIazED23RYP8Xz9JV8tN0vtUXt9Z&limit=6`)
    giphys = await giphys.json()
    console.log(giphys.data)
    setSearchResults(giphys.data)
    setSearchTerm(formInputs.searchTerm)
  }

  return (
    <>
      <div className='container'>
        <Head>
          <title>Giphy Search App</title>
          <meta name="description" content="This is an example of a meta description. This will often show up in search results."></meta>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/styles.css" />
        </Head>

        {/* <h1>Giphy Search App</h1> */}

        <form onSubmit={search}>
          <input name="searchTerm" onChange={handleInputs} type="text" required />
          <button>Search</button>
        </form>

        <h1>Search results for: {searchTerm}</h1>

        <p>Share this search with others:

          <Link
            href="/search/[pid]"
            as={`/search/${searchTerm}`}>
            <a>
              {`/search/${searchTerm}`}
            </a>
          </Link>

        </p>

        <div className="giphy-search-results-grid">
          {searchResults.map((each, index) => {
            return (
              <div key="index">
                <h3>{each.title}</h3>
                <img src={each.images.original.url} alt={each.title} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

// export async function getStaticProps() {
//   let catGiphys = await fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=pTfJsIazED23RYP8Xz9JV8tN0vtUXt9Z&limit=10')
//   catGiphys = await catGiphys.json()
//   return { props: { catGiphys: catGiphys } }
// }

// Changed to server-side rendering
export async function getServerSideProps() {
  let catGiphys = await fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=pTfJsIazED23RYP8Xz9JV8tN0vtUXt9Z&limit=6')
  catGiphys = await catGiphys.json()
  return { props: { catGiphys: catGiphys } }
}
