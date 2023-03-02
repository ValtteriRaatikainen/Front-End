import React from 'react';
export default function Todotable(props) {
    return (
        <table>
            <tbody>
                {
                    props.todo.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={props.deleteTodo}>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )

};