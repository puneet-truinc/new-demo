import React from 'react'
import 

function Todos() {
  return (
    <div>
        <h1>{props.text}Todos</h1>
        <Todos text='Hello World' />
        <Todos text='Learn React' />
        <Todos text='Explore the react' />
    </div>
  );
}

export default Todos;
