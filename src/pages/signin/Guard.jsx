import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Guard = () => {
    const nav = useNavigate()

    useEffect(() => {
        const checktoken = async () => {
            const response = await fetch('http://localhost:9898/api/verify', {
                // user_id zugriff
                headers: {
                    Authentication: 'Bearer ' + localStorage.getItem('token')
                }
            })
            const data = await response.json()

            console.log(data);
            if (!data.state) nav('/')
        }
        checktoken()
    }, [])



    return (
        <>
            <Outlet />
        </>

    )
}
export default Guard