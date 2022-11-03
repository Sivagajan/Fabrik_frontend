import { useEffect, useState } from "react"
import Dashboard from './Dashboard'
import Navigation from "../component/nav/Navigation"

    /* const Home = () => {

const [workers,setWorker] = useState([])

    useEffect(() => {

        let result = null

        const fetchdata = async () => {
            result = await fetch('http://localhost:9898/admin/allworkers', {
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

export default Home */

const Home = (props) => {
    const [user, setUser] = useState()
    const [component, setComponent] = useState(<Dashboard />)
    useEffect(() => {
        const token = localStorage.getItem('token')
        setUser(token)
    }, [])
    return (
        <>
            <Navigation setcomponent={setComponent} />
            {component}
        </>

    )
}

export default Home