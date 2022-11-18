import React from 'react'

export const Header = ({ nom, prenom }) => {

  return (
    <header>
      <h1>CV de {prenom} {nom}</h1>
    </header>
  )
}
