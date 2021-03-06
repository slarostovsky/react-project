import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
    const [value ,setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            alert.show('ok', 'succes')
            setValue('')
        } else {
            alert.show('Введите название заметки')
        }
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Введите название заметки"
                       value={value}
                       onChange={event => setValue(event.target.value)}
                       />
            </div>
        </form>
    )
}