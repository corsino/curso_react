import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent';
import Title from './components/Title';
const n=20;
function App() {
  const [count, setCount] = useState(0)
const redTitle = false;
  return (
    <>
      <div>
        <h1>React Com CSS</h1>
        <MyComponent />
        <p>paragrafo do app js</p>
        {/*css inline dinamico*/}
        <h2 style={n<10 ? ({color:"purple"}) : ({color:"pink"})}>CSS Dinamico</h2>
         {/*Classe dinamica*/}
         <h2 className={redTitle ? "red-title" : "title"}>esse texto vai ter classe dinamica</h2>
         {/*Css Modules*/}
         <Title />
         <h3 className='my_title'>Titulo na raiz</h3>
      </div>
    </>
  )
}

export default App
