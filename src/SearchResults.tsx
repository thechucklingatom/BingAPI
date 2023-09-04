export interface BingApiResults {
  webPages: WebPage
} 

export interface WebPage {
  value: WebPageValue[]
}

export interface WebPageValue {
  id: string,
  webSearchUrl: string,
  name: string,
  url: string,
  isFamilyFriendly: boolean,
  displayUrl: string,
  snippet: string,
}

function SearchResults(searchResults: BingApiResults) {
  return (
    <>
      {searchResults.webPages.value.map((webPage: WebPageValue) => {
        return(
          <div key={webPage.id + "div"} style={{border: '2px solid'}}>
            <h2 key={webPage.id + "name"}><a key={webPage.id + "urlName"} href={webPage.url}>{webPage.name}</a></h2>
            <h5 key={webPage.id + "display"}><a key={webPage.id + "urlDisplay"} href={webPage.url}>{webPage.displayUrl}</a> </h5>
            <p key={webPage.id}>{webPage.snippet}</p>
          </div>
        )
      })}    
    </>
  )
}

export default SearchResults;
