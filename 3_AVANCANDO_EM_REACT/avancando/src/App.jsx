//components
import ManageData from './components/ManageData'

import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//assets
import img2 from "./assets/img2.jpg";
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

const name = "joaquim"

function myFunction ()
{
  console.log("Executando a função");
}


function App() {
  const [count, setCount] = useState(0)
 

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km: 3423},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 5234},
  ]

 
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
     <div>
        <h1>Avançando em React</h1>
        {/*Imagem em Public*/}
        <div>
        <img src="/img1.png" alt="Paisagem" />  
        <img src={img2} alt="img 2" />  
        </div>  
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name={name}/>
      {/*Destructuring*/}
      <CarDetails brand="Volks" km={100000} color="Azul" newCar={false} />
       <CarDetails brand="Ford" km={500} color="Verde" newCar={true} />
       <CarDetails brand="Honda" km={0} color="Prata" newCar={false}/>
       {/*Reaproveitando */}

       {/*loop em objetos */}
       {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
       ))}
{/*Fragment */}
<Fragments />
<Container>
<p>Este é o Conteúdo</p>
</Container>
{/*Função como Prop */}
<ExecuteFunction myFunction={myFunction} />
{/*State Lift*/}
<Message msg={message} />
<ChangeMessageState handleMessage={handleMessage} />
    </>
  )
}

export default App
