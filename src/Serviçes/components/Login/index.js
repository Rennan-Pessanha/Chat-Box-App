import React from 'react'
import { auth, provider } from "../../../Serviçes/firebase"
import * as C from "./style"

const Login = () => {
    const handlesSignin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
  return (
    <C.Container>
        <C.button onClick={handlesSignin}> Login com o Google </C.button>
    </C.Container>
  )
}

export default Login