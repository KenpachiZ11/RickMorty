import { Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Hero } from './pages/Hero'
import { Singlepage } from './pages/Singlepage'
import { Contact } from './pages/Contact'
import { Notfound } from './pages/Notfound'

import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index path='/' element={<Home/>}/>
          <Route path='/hero' element={<Hero/>}/>
          <Route path='/hero/:id' element={<Singlepage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
