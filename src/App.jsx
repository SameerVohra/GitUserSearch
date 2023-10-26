import { BrowserRouter,Routes,Route } from "react-router-dom"
import GitSearch from "./Components/GitSearch"
import UserInfo from "./Components/UserInfo"


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
    
    {/* <UserInfo/> */}
    <Routes>
      <Route path="/" element={<GitSearch/>}></Route>
      <Route path="userinfo/:username" element={<UserInfo/>}></Route>
    </Routes>
</BrowserRouter>
    </div>
    </>
  )
}

export default App
