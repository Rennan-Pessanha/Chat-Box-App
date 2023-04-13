import React, {useEffect, useState} from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./Serviçes/firebase"
import Login from './Serviçes/components/Login'
import Loading from './Serviçes/components/Loading/'
import SideBarra from './Sidebar/sideBarra'
import * as C from './Styles/app'

const App = () => {
  const [user, loading] = useAuthState(auth)
  const [userChat, setUserChat] = useState(null)

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.vid).set({
        email: user.email,
        photoURL: user.photoURL,
      })
    }
  }, [user])

  if (loading) return <Loading />

  if (!user) return <Login />

  return ( <C.container>
  <SideBarra setUserChat={setUserChat} userChat={userChat} />
  </C.container>
  )
}

export default App