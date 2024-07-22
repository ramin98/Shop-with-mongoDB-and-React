import Admin from './Admin'
import Bag from './Bag'
import Goods from './Goods'
import {Routes, Route} from "react-router-dom"

function Main() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Goods/>}/>
        <Route path="/admin" element={<Admin/>}/>

        <Route path="/bag" element={<Bag/>}/>
      </Routes>
    </main>
  )
}

export default Main
