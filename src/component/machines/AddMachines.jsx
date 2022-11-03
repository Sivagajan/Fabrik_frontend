import { useState } from "react"

const AddMachines = () => {

    const date = new Date()
    const [machine, setMachine] = useState('')
    
    const add = async () => {

        const machines = {
            machine : machine,
        }

        const response = await fetch('http://localhost:9898/admin/addmachine', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                Authentication: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(machines)
        })

        const data = await response.json()

        if(data.state) {
            setMachine('')
        }
    }

    return(
        <div>
            <input type="text" value={machine}  onChange={(e) => {setMachine(e.target.value)}}/>
            <button onClick={add}> Maschine hinzufügen</button>
        </div>
    )
}

export default AddMachines