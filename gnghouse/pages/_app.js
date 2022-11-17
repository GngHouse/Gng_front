import '../styles/globals.css'
import Header from "../src/components/Header"
import Body from "../src/components/Body"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
  
}

export default MyApp
