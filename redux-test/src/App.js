import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions/counter';
import { toggleTodo, addTodo } from './redux/actions/todo';
import { getUser } from './redux/actions/user';
import './App.css';

const App = ({
    counter,
    todo,
    user,
    incrementAction,
    decrementAction,
    toggleTodo,
    addTodo,
    getUser
}) => {
    const [username, setUsername] = useState();

    const handleGithubForm = (e) => {
        e.preventDefault();

        getUser(username);
        setUsername('');
    }

    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    }

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
                                    Status:{' '}
                                    {dos.status ? 'completed' : 'pending'}
                                </p>
                                <button onClick={() => toggleTodo(dos)}>
                                    Change Status
                                </button>
                            </li>
                        </>
                    ))}
                </ul>
                <button
                    onClick={() =>
                        addTodo({
                            title:
                                'todo baru nih! ' +
                                Math.round(Math.random() * 100),
                            status: 0,
                        })
                    }
                >
                    Add New Todo
                </button>
            </div>
            <div className="container">
                <h2>Github User</h2>
                <form onSubmit={handleGithubForm}>
                    <input
                        type="text"
                        placeholder="username"
                        required
                        onChange={handleUsernameInput}
                        value={username}
                    />
                    <button type="submit">Submit</button>
                </form>
                {user.isFetching ? <div>Loading...</div> : null}
                {user.isError ? <div>User not found!</div> : null}
                {Object.keys(user.userData).length > 0 ? (
                    <div className="user">
                        <div>
                            <img src={user.userData.avatar_url} />
                            <br />
                        </div>
                        <div>
                            <span>Name: {user.userData.name}</span>
                            <br />
                            <span>Company: {user.userData.company}</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter,
    todo: state.todo,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    incrementAction: () => dispatch(incrementAction()),
    decrementAction: () => dispatch(decrementAction()),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    addTodo: (id) => dispatch(addTodo(id)),
    getUser: (username) => dispatch(getUser(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
