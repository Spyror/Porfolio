import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Component/Header'
import Main from './Component/Main'
import Connect from './Component/Connect'
import Footer from './Component/Footer'
import About from './Component/About'

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <Connect/>
    <Footer/>
    {/* <BrowserRouter>
    <Routes>
      <Route path="tel:7905792558" element={<h1>Phone</h1>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App
