import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Loginform from '../component/LoginForm'


const Login = () => {

    const nav = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        
        const result = await fetch('http://localhost:9898/api/login', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        if(result.status === 200) {

            const data = await result.json()

            console.log(data.token)

            localStorage.setItem('token', data.token)
            nav('/home')
        }
    }

    return(
        <>
            <Loginform  login={login} setusername={setUsername} setpassword={setPassword}  />
        </>
    )
}

export default Login