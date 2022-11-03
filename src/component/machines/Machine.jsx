import { useState } from "react"
import MachineNavigation from './MachineNavigation'
import MachineList from './MachineList'


const Machine = () => {
    const [component, setComponent] = useState(< MachineList/>)

    return(
        <div>
            <h1 className="MachinesHeader">Maschinen</h1>

            <MachineNavigation setcomponent={setComponent}/>
            {component}
            
        </div>
    )
}

export default Machine