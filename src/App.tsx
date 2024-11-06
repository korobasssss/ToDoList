import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './app/routes'
import { SearchProvider } from './app/context/SearchContext'
import { FilterProvider } from './app/context/FilterContext'

function App() {

  return (
    <SearchProvider>
      <FilterProvider>
        <RouterProvider router={routes}/>
      </FilterProvider>
    </SearchProvider>
  )
}

export default App
