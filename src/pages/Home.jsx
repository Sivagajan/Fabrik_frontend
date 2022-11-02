import { useEffect, useState } from "react"
import Dashboard from './Dashboard'

const Home = () => {

    const [workers,setWorker] = useState([])

    useEffect(() => {

        let result = null

        const fetchdata = async () => {
            result = await fetch('http://localhost:9898/admin/home', {
                headers: {
                    Authentication: 'Bearer ' +localStorage.getItem('token')
                }})

                if(result.status === 200){
                    const data = await result.json()
                    setWorker(data)
                }
        }
        fetchdata()

        

    },[])
    console.log(workers)


    return (
        <>
            <h1>Home</h1>

            <article>
                {workers.map((worker, key) => 
                    
                        <Dashboard key={key} worker={worker} />
                )}
            </article>


        </>
    )
}

export default Home