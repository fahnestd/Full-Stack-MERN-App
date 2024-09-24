import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <header>
          <h1>Exercise Tracker</h1>
          <p>Enter, edit, and delete all your workouts!</p>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit/:id' element={<EditPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
        <footer>
          <p>©2023 Devin Fahnestock</p>
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
