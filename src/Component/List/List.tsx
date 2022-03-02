import React, {FunctionComponent as FC} from 'react';
import TODOI from "../Interface/TodoInterface";

interface Props {
    todos : TODOI[];
    completeTodo(id: number): void;
    deleteTodo(id :number): void;
}
const List : FC <Props> = ({todos, completeTodo, deleteTodo}) => {
    return (
        <div className='col-md-6 mx-auto my-5'>
         {
             todos.map((todo: TODOI,index: number) : any=>(
                <div key={index} className="d-flex align-items-center justify-content-start w-100">
                    <h1 className={`text-center py-2 ${todo.completed ? "completed": "notCompleted"}`} 
                    style={{width:"80%"}} 
                    onClick={()=> completeTodo(todo.id)}>
                        {todo.text}
                        </h1>
                    {
                        todo.completed && <button
                        onClick={()=> completeTodo(todo.id)}
                        type='button' className='btn btn-danger mx-auto'>Delete</button>
                    }
                </div> 
             ))
         }
        </div>
    );
};

export default List;