import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Types from './1-types'
import Hooks from './2-hooks'
import Network from './3-network'
import Context from './4-context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>
)
