import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions/counter';
import { toggleTodo, addTodo } from './redux/actions/todo';

const App = ({
    counter,
    todo,
    incrementAction,
    decrementAction,
    toggleTodo,
    addTodo,
}) => {
    return (
        <>
            <div className="container">
                <h2>Counter</h2>
                <div>Counter: {counter}</div>
                <div>
                    <button onClick={incrementAction}>+ 1</button>
                    <button onClick={decrementAction}>- 1</button>
                </div>
            </div>
            <div className="container">
                <h2>TODO LIST</h2>
                <ul>
                    {todo.map((dos) => (
                        <>
                            <li>
                                <p>Title: {dos.title}</p>
                                <p>
                                    Status: {dos.status ? 'completed' : 'pending'}
                                </p>
                                <button onClick={() => toggleTodo(dos)}>
                                    Change Status
                                </button>
                            </li>
                        </>
                    ))}
                </ul>
                <button onClick={() => addTodo({title: 'todo baru nih! '+Math.round(Math.random() * 100), status: 0})}>Add New Todo</button>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter,
    todo: state.todo
})

const mapDispatchToProps = (dispatch) => ({
    incrementAction: () => dispatch(incrementAction()),
    decrementAction: () => dispatch(decrementAction()),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    addTodo: (id) => dispatch(addTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
