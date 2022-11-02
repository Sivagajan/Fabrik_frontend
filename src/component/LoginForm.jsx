const Loginform = (props) => {
    return(
        <>
            <input onChange={(e) => {props.setusername(e.target.value)}} type="text" name="" placeholder="Username" />
            <input onChange={(e) => {props.setpassword(e.target.value)}} type="password" name="" placeholder="Passwort" />

            <button onClick={props.login}>Anmelden</button>
        </>
    )

}

export default Loginform