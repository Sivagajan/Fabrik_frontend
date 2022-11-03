import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom"


const Guard = () => {
    const nav = useNavigate()

    useEffect(() => {
        const checkToken = async () => {
            const response = await fetch('http://localhost:9898/api/verify', {
                headers: {
                    Authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })
            const data = await response.json()

            console.log(data)

            if(!data.state){
                alert('Halt Stop, hier rede ich ! und ich sage dir Du hast was falsch gemacht ')
                
                nav('/')
            }
        }

        checkToken()
    },[])

    return(
        <>
            <Outlet />
        </>
    )
}

export default Guard
