import { useState } from 'react'
import './App.css'
import ButtonAction from './components/ButtonAction'

//componente PADRE
function App() {
  const [nombre, setNombre] = useState('Mundo123')


  function clickButton() {
    alert('Hola Mundo')
  }

  function callBack(data) {
    console.log(data)
    setNombre(data + " test 12351")
    //alert(data)
  }
  const texto = "Aceptar"

  return (
    <>
      <div>
        {/*componentes HIJOS*/}
        <ButtonAction texto={texto} action={clickButton} callBack={callBack} />
        <ButtonAction texto={texto} action={clickButton} callBack={callBack} />
        <ButtonAction texto={texto} action={clickButton} callBack={callBack} />
        <ButtonAction texto={texto} action={clickButton} callBack={callBack} />
        <ButtonAction texto={texto} action={clickButton} callBack={callBack} />
        <p>{nombre}</p>
      </div>
    </>
  )
}

export default App
