import React, { useContext } from 'react'
import { FaEdit  } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";
import { GeneralContext } from '../GeneralContext';
export const FeedbackCard = ({feedback }) => {
    const { remove , edit} = useContext(GeneralContext)
    return (
        <div className='card'>

            <FcEmptyTrash className='close' onClick={() => remove(feedback)}>
                x
            </FcEmptyTrash>
            <FaEdit className='edit' onClick={() => edit(feedback)} >

            </FaEdit>
            <h3 className='num-display'>{feedback.rating}</h3>
            <p> {feedback.text}</p>
        </div>
    )
}
