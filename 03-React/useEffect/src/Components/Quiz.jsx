import React, { useEffect, useState } from 'react'

function Quiz() {
    const [data, setData] = useState(null)
    const [eror, setEror] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("")
            .then((res) => {
                res.json()
            })
            .then((res) => {
                console.log(res);
                setData(res);
            })
            .catch(()=>{
                setEror(true)
            })
            .finally(()=>{
                setLoading(false)
            })
    })
    return (
        <>
        <h1>Quiz App</h1>
        {loading && <h1>Loading...</h1>}
        {Error && <h1>Error occured..</h1>}
        

        </>
    )
}

export default Quiz