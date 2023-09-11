import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then(
            res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource')
                }
                return res.json();
            }
        ).then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            })
    }, [url])

    return { data, isPending, error }
}

export default useFetch;