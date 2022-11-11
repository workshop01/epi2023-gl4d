import React, { useState } from 'react'

export const Login = () => {

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const save = (event) => {
        event.preventDefault() // annuler l'action par defaut du bouton (refresh)
        console.log(form)
    }
    const setFormValue = (event, attribut) =>
        setForm({ ...form, [attribut]: event.target.value })
    return (


        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h2 style={{ textAlign: 'center' }}> Login</h2>
                <form onSubmit={save}>
                    <p>Email</p>
                    <input className='form-control' required type="email" onChange={(event) => setFormValue(event, 'email')}></input>
                    <p>password</p>
                    <input className='form-control' required type="password" minLength="6" onChange={(event) => setForm({ ...form, password: event.target.value })}></input>
                    <br></br>
                    <button className='form-control btn btn-primary' >Save</button>
                </form>
            </div>
        </div>

    )
}
