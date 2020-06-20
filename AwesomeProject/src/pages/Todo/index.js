import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
import FormTodo from '../../components/FormTodo';
import ListTodo from '../../components/ListTodo';

const Todo = () => {
    const [todo, setTodo] = useState([]);

    const handleAddTodo = (item) => {
        setTodo(todo.concat(item));
    };

    return (
        <ScrollView style={globalStyles.container}>
            <FormTodo handleAddTodo={handleAddTodo} />
            <ListTodo todoList={todo} />
        </ScrollView>
    );
};

export default Todo;
