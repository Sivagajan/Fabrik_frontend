import { useEffect, useState } from "react"
import MachineItem from './MachineItem'

const MachineList = () => {
    const [machines, setMachines] = useState([])

    useEffect (() => {

        const fetchdata = async () => {
            
            const response = await fetch('http://localhost:9898/admin/allmachines',
                { headers: {
                    Authentication : 'Bearer ' + localStorage.getItem('token')
                }})

                if(response.status === 200){
                    const data = await response.json()

                    setMachines(data)
                }
        }

        fetchdata()
    },[])

    return(
        <div className="MachineList">
            {machines.map((machine, key) => <MachineItem key={key} machine={machine}/>)}
        </div>
    )
}


export default MachineList