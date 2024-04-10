//class components - absoleto

// functional components

//props de la aplicacion
function ButtonAction({ texto, action, callBack }) {
    return (
        <button
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={() => callBack(texto)}
        >
            {texto}
        </button>
    )
}

export default ButtonAction;