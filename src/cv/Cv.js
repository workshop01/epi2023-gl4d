import React from 'react'
import { Experiences } from './components/Experiences'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { data } from './data'

export const Cv = () => {
    const user = data
    console.log(user)
  return (
    <div>
        <Header nom={user.nom} prenom={user.prenom}></Header>
        <Profile user={user}/>
        <Experiences experience = {user.experiences}/>

    </div>
  )
}
