import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/Home' element={<Home />} />
    </Routes>
  )
}

export default App
