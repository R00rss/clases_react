import { useState } from "react";


// aqui la funcion setter se declara una vez y se reutiliza
function setter(prev_data, value, key) {
    return {
        //este patron no escala para mas campos
        // name: prev_data.name,
        // salary: prev_data.salary,
        // esto escala para n campos
        ...prev_data,
        // es importante usar el corchete para obtener el valor de la variable
        [key]: value
    }
}

function FormComponent() {
    // const [name, setName] = useState('')
    // const [salary, setSalary] = useState(0)

    // es mejor usar un objeto cuando la data tiene relación
    const [data, setData] = useState({
        name: '',
        salary: 0,
        email: ''
    })



    function handleChangeData(event, key) {
        console.log("event: ", event.target.value)
        const { value } = event.target
        // esta funcion se declara cada vez que se renderiza el componente
        // function setter(prev_data, value, key) {
        //     return {
        //         //este patron no escala para mas campos
        //         // name: prev_data.name,
        //         // salary: prev_data.salary,
        //         // esto escala para n campos
        //         ...prev_data,
        //         // es importante usar el corchete para obtener el valor de la variable
        //         [key]: value
        //     }
        // }
        setData((prev) => setter(prev, value, key))
    }

    function sendData(data) {
        console.log('Enviando data: ', data)
    }

    // function handleChangeName(event) {
    //     console.log("Nombre: ", event.target.value)
    //     setName(event.target.value)
    // }

    // function handleChangeSalary(event) {
    //     console.log("Salario: ", event.target.value)
    //     setSalary(event.target.value)
    // }

    function handleSubmit(event) {
        // función que debería mandar la data a un servicio (servidor)
        event.preventDefault();
        console.log(event)

        const { name, salary: salaryData } = data; // destructuring nativo de JS
        // validación de datos

        const salary = 300;
        console.log(salary)

        // este mensaje es confuso para el usuario
        // if (name.length > 10 || salary < 0) {
        //     alert('El nombre no puede tener más de 10 caracteres o el salario no puede ser negativo')
        //     // early return
        //     return
        // }

        // este codigo funciona pero es menos legible para el desarrollador
        // if (name.length > 10) {
        //     alert('El nombre no puede tener más de 10 caracteres')
        // } else if (salary < 0) {
        //         alert('El salario no puede ser negativo')
        //     } else {
        //         // el nombre es menor igual a 10 caracteres y el salario es mayor igual a 0
        //         sendData()
        //     }
        // }


        if (name.length > 10) {
            alert('El nombre no puede tener más de 10 caracteres')
            // early return
            return
        }

        if (salaryData < 0) {
            alert('El salario no puede ser negativo')
            // early return
            return
        }
        // si el nombre tiene mas de 10 caracteres no se ejecuta el código de abajo
        sendData(data)

    }
    console.log("render")

    return (
        <section>
            <form
                onSubmit={handleSubmit}
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: "start"
                    }
                }
            >
                <label htmlFor="input_name">nombre</label>
                <input
                    placeholder="Nombre"
                    value={data.name} onChange={(e) => handleChangeData(e, "name")} type="text" name="input_name" id="input_name" />

                <label htmlFor="input_salary">Salario</label>
                <input value={data.salary} onChange={(e) => handleChangeData(e, "salary")} type="number" name="input_salary" id="input_salary" />
                {/*  
                    Formas de lanzar el evento onSubmmit
                    1. Boton de tipo submit
                    2. Al hacer enter dentro de un input
                */}
                {/* <button type="button" style={{ alignSelf: "center" }}>Button - Submit</button> */}
                <label htmlFor="input_email">Email</label>
                <input
                    placeholder="example@example"
                    value={data.email}
                    onChange={(e) => handleChangeData(e, "email")}
                    type="email"
                    name="input_email" id="input_email"
                />
                {/* la propiedad pattern es una validacion nativa de JS  */}
                <button type="submit" style={{ alignSelf: "center" }}>Button - Button</button>
            </form>
            <p>{data.name}</p>
            <p>{data.salary}</p>
        </section >
    )
}

export default FormComponent;