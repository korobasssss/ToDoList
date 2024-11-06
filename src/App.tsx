import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './app/routes'
import { SearchProvider } from './app/context/SearchContext'

function App() {

  return (
    <SearchProvider>
      <RouterProvider router={routes}/>
    </SearchProvider>
  )
}

export default App
