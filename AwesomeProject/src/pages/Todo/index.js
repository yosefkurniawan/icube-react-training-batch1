import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {globalStyles} from '../../assets/style';
// import FormLogin from '../components/FormLogin';
import FormTodo from '../../components/FormTodo';
import ListTodo from '../../components/ListTodo';

const Todo = () => {
    const [todo, setTodo] = useState([]);

    const handleAddTodo = (item) => {
        setTodo(todo.concat(item));
    };

    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.scrollView}>
                {/* <FormLogin /> */}
                <FormTodo handleAddTodo={handleAddTodo} />
                <ListTodo todoList={todo} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Todo;
