import React, { useEffect, useState } from "react";

function UserComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(
        () => {
            const abortController = new AbortController();

            setController(abortController)

            fetch("https://jsonplaceholder.typicode.com/users",
                { signal: abortController.signal }
            )
                .then(
                    response => {
                        console.log(response)
                        return response.json()
                    }
                ).then(
                    data => {
                        console.log(data)
                        setData(data)
                    }
                ).catch(
                    error => {
                        if (error.name === 'AbortError') {
                            console.log({ error })
                            return
                        }// este error no es bloqueando para el usuario en nuestra lógica
                        setError(error)
                        console.error(error)
                    }
                ).finally(() => {
                    setLoading(false)
                })
            return () => abortController.abort()
        }, []
    )

    function handlerAbortRequest() {
        console.log("handlerAbortRequest")
        if (!controller) return;
        controller.abort();
    }


    console.log("render")


    if (loading) {
        console.log("loading")
        // early return
        return (
            <>
                <p>Loading...</p>
                <button onClick={handlerAbortRequest}>cancel</button>
            </>

        )
    }
    // un valor es null o undefined es falsy
    if (error) {
        // if (error !== null || error !== undefined) { esto es lo mismo que arriba
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <h1>Users</h1>
            {/* aquí estoy seguro que loading es false
                y error es null
            */}
            <ul>
                {data.map(
                    user => {
                        const { id, name } = user;
                        return <li key={id}>{name}</li>
                    }
                )}

            </ul>

        </div>
    )
}

export default UserComponent;