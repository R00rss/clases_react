// export function useFetch() 

import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(
        () => {
            const abortController = new AbortController();

            setController(abortController)

            fetch(url,
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

    return {
        data,
        loading,
        error,
        handlerAbortRequest
    }

}

export { useFetch }