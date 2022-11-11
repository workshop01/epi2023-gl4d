import React from 'react'

export const Button = ({btnclass , value}) => {
   /*  console.log(p) */
    /* const btnclass = p.btnclass
    const value = p.value */
    /* const {btnclass , value} = p */
    return (
        <button className={btnclass}>{value}</button>
    )
}
