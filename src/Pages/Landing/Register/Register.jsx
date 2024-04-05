import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "./Register.css"
import axios from "axios"

const Register = () => {
    const navigate = useNavigate()
    const [state,setState] = useState({
        name: "",
        last: "",
        email: "",
        password: "",
        passwordre: "",
    })
    console.log(state);

    const inSave = (e) => { 
        const name = e.target.name;
        const value = e.target.value;
        setState((prev)=>{
            return {...prev, [name]: value}
        })
    }

    const btn = async (e) => {
        e.preventDefault()
        if(state.name && state.last && state.email && state.password && state.password === state.passwordre){
            const {status} = await axios.post("http://localhost:3000/users", state)
            if(status === 201){
                alert("Togri")
                navigate("/")
            }
        }else{
            alert("XATO")
        }
    }

    return<>
        <div className="register">
            <input onChange={inSave} name="name" type="text" placeholder="Name"/>
            <input onChange={inSave} name="last" type="text" placeholder="Last Nme"/>
            <input onChange={inSave} name="email" type="email" placeholder="Email"/>
            <input onChange={inSave} name="password" type="password" placeholder="Password"/>
            <input onChange={inSave} name="passwordre" type="password" placeholder="Passwort RE"/>
            <button onClick={btn}>Register</button>
        </div>
    </>
}

export default Register