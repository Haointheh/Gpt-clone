import React from 'react'
import Sidebar from './components/Sidebar'
import { Route , Routes} from 'react-router-dom'
import Community from './pages/Community'
import Credits from './pages/Credits'
import Chatbox from './components/Chatbox'

const App = () => {
  return (
    <>
    <div>
      < div className='flex h-screen w-screen'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Chatbox />} />
          <Route path='/credits' element={<Credits />} />
          <Route path='/Community' element={<Community />} />
        </Routes>
      </div>
    </div>
  
    </>
  )
}

export default App