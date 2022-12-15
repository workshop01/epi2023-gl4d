import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GeneralContext } from './GeneralContext'

export const Login = () => {

    const {users , register} = useContext(GeneralContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    const save = (event) => {
        event.preventDefault() // annuler l'action par defaut du bouton (refresh)
        console.log(form)

        let exist = users.find(u=> u.email === form.email && u.password === form.password)
        if(exist){
            navigate('/feedback')
        }else{
            alert('Email or password invalid')
        }
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
                    <button onClick={(e)=>register(e , form)}>Register</button>
                </form>
            </div>
        </div>

    )
}
