import React from 'react'
import { useState } from 'react'

export const FeedbackForm = ({ send }) => {

    const [form, setForm] = useState({
        rating: 0, text: ''
    })


    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            {/* feedback form */}
            <div className='card'>
                <h2>Leave your feedback</h2>

                <form onSubmit={(e) => send(e, form)}>
                    <ul className='rating'>
                        {
                            values.map((nb) => {
                                return (
                                    <li>
                                        <input type="radio" name="rating" value={nb} id={nb}
                                            onChange={(e) => setForm({ ...form, rating: e.target.value })}
                                        />
                                        <label htmlFor={nb}>{nb}</label>
                                    </li>
                                )
                            })
                        }





                    </ul>
                    <div className='input-group'>
                        <input onChange={(e) => setForm({ ...form, text: e.target.value })} />
                        <button className="btn btn-secondary">send</button>
                    </div>
                </form>
            </div>
            {/* / feedback form */}
        </div>
    )
}
