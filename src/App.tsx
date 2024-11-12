import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './app/routes'
import 'ui-kit-todo-list/style'

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    </>
    
    
  )
}

export default App
