//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events/>
      </div>
    </>
  )
}

export default App
