import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { SzovegKezelo } from "./Components/SzovegKezeloFuggvenyek"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <SzovegKezelo/>
        <Footer/>
      </div>
    </>
  )
}

export default App
