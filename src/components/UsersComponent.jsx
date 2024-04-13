import { useFetch } from "../hooks/useFetch"

function UserComponent() {
    const { data, error, handlerAbortRequest, loading } = useFetch("https://jsonplaceholder.typicode.com/users")

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