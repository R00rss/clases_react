import { useState } from 'react'
import './App.css'
import ButtonAction from './components/ButtonAction'
import FormComponent from './components/FormComponent'

//componente PADRE
function App() {
  const textList = [
    { name: "Juan", id: "0000-0000-0001" },
    { name: "Pepito", id: "0000-0000-0002" },
    { name: "Pepito3", id: "0000-0000-0004" }
  ]
  const [nombre, setNombre] = useState('Mundo123')
  const [flag, setFlag] = useState(false)


  function clickButton() {
    alert('Hola Mundo')
  }

  function callBack(data) {
    console.log(data)
    setFlag((test) => !test)
    setNombre(data + " test 12351")
    //alert(data)
  }

  const texto = "Aceptar"

  //condition to render
  //const flag = false;

  //A&&B
  //A=true y B = true => true
  //A=false y B = true => false
  //A=true y B = false => false
  //A=false y B = false => false
  console.log("render")

  return (
    <>
      {
        /* <div>
          <ButtonAction texto={"texto1"} action={clickButton} callBack={callBack} />
          <ButtonAction texto={"texto2"} action={clickButton} callBack={callBack} />
          <ButtonAction texto={"texto3"} action={clickButton} callBack={callBack} />
          {flag && <p>{nombre}</p>}
        </div>
        <div>
          {
            textList.map((person, index) => {
              console.log(index)
              //para listas medianas es recomendable usar randomUUID hasta 20 items
              //const id = crypto.randomUUID();
              //para listas grandes tener un ID en la data
              return <ButtonAction key={person.id} texto={person.name} action={clickButton} callBack={callBack} />
            }
            )
          }
  
        </div> 
        */
      }

      <FormComponent />
    </>
  )
}

export default App
