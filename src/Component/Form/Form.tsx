import React, { useState } from 'react';
import {FunctionComponent as FC} from 'react';
const Form : FC = () => {
    const [todo, setTodo] = useState<string>();
    return (
        <div className='col-md-6 mx-auto my-5'>
            <form>
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