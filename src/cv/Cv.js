import React from 'react'
import { useParams } from 'react-router-dom'
import { Experiences } from './components/Experiences'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { data } from './data'

export const Cv = () => {
  const {name} = useParams()
    const user = data
    console.log(user)
  return (
    <div>
        <Header nom={name} prenom={user.prenom}></Header>
        <Profile user={user}/>
        <Experiences experience = {user.experiences}/>

    </div>
  )
}
