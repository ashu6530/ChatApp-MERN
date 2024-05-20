import Chatpage from "./Pages/Chatpage"
import Homepage from "./Pages/Homepage"
import { Button } from "./components/ui/button"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/chats" element={<Chatpage/>}/>
    </Routes>
  )
}

export default App