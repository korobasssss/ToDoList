import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { rootStore } from './modules/store/store.ts'
import { Provider } from 'react-redux'

const mainStore = rootStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </StrictMode>,
)
