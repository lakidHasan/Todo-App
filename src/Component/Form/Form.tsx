import React, { FormEvent, useState } from 'react';
import {FunctionComponent as FC} from 'react';
import TODOI from '../Interface/TodoInterface';

interface Props {
    addTodo( todo: string) : void;
}
const Form : FC<Props> = ({addTodo}) => {
    const [todo, setTodo] = useState<string>();

    const handleSubmit = (e: FormEvent <HTMLFormElement> ) => {
       
        e.preventDefault();
        if (!todo) return window.alert("please add the field");
        addTodo(todo);
        setTodo("");
    }
    return (
        <div className='col-md-6 mx-auto my-5'>
            <form onSubmit={handleSubmit}>
                <div className='form-group rounded-0 d-flex'>
                    <input type="text" placeholder='add todo' className='form-control rounded-0' style={{boxShadow: "none"}}
                    value={todo} onChange={(e) => setTodo(e.target.value)}/>
                    <button type='submit' className='btn btn-primary rounded-0'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default Form;