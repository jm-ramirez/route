import React from 'react'
import { useParams } from 'react-router-dom'

export const Person = () => {
    const { name, lastName } = useParams();
    return (
        <div>
            <h1>Página de persona: { name } { lastName }</h1>
            <p>Esta es la página de persona</p>
        </div>
    )
}
