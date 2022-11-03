
const MachineItem = ({machine}) => {

    return(
        <div className="MachineItem">
            <p>{machine.machine}  geld</p>

            <p>Mitarbeiter 1</p>
            <p>Mitarbeiter 2</p>

            <p>läuft seit</p>

            <div>
                <button>Start</button>
                <button>Stop</button>
            </div>
        </div>
    )
}

export default MachineItem