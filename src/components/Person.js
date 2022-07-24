import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {
    const { name, lastName } = useParams();
    const navigate = useNavigate();

    const send = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let lastName = e.target.lastName.value;
        let url = `/person/${name}/${lastName}`;

        if(name.length <= 0 && lastName.length <= 0){
            navigate('/index');
        }else{
            navigate(url);
        }
    };

    return (
        <div>
            <h1>Página de persona: { name??'Name' } { lastName??'LastName' }</h1>
            <p>Esta es la página de persona</p>

            <form onSubmit={send}>
                <input type='text' name='name'/>
                <input type='text' name='lastName'/>
                <input type='submit' name='send' value='send'/>
            </form>
        </div>
    )
}
