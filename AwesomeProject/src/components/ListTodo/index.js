import React from 'react';
import {Text, ScrollView} from 'react-native';
import style from './style';
import {globalStyles} from '../../assets/style';

const ListTodo = ({todoList}) => {
    console.log(todoList);
    return (
        <ScrollView style={globalStyles.container}>
            {todoList.length ? (
                todoList.map((item) => {
                    return (
                        <Text syle={style.todoItem} key={item.label}>
                            <Text
                                style={
                                    style.todoLabel
                                }>{`${item.label} : `}</Text>
                            {item.status === false ? (
                                <>
                                    <Text style={style.statusActive}>
                                        Active
                                    </Text>
                                </>
                            ) : (
                                <Text style={style.statusDone}>Completed</Text>
                            )}
                        </Text>
                    );
                })
            ) : (
                <Text>There is no items...</Text>
            )}
        </ScrollView>
    );
};

export default ListTodo;
