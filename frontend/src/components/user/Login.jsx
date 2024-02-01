import { useState } from "react"
// import { history} from "react-router-dom"

export const Login = () => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const userValue = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const userLogin = async (e) => {
        e.preventDefault
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if (response.ok) {
                console.log("user login sucess frontend.")
            } else {
                console.log("login un")
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={userLogin} method="post" >
                <input type="text"
                    name="name"
                    value={user.name}
                    placeholder="Enter user name"
                    onChange={userValue}
                />
                <input type="password"
                    name="password"
                    value={user.password}
                    placeholder="Enter your password"
                    onChange={userValue}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
