import logo from "../assets/loginIMG.png"
import { Button } from '../components/Button'
import {TextField} from '../components/TextField'

const TelaLogin = () => {
  return (
    <div className='container'>
        <img src={logo} className='imgLogo' alt="" />
        <TextField tipo={"text"} placeholder={"Login"}/>
        <TextField tipo={"password"} placeholder={"Password"}/>
        <Button titulo={"Entrar"}/>
    </div>
  )
}

export default TelaLogin