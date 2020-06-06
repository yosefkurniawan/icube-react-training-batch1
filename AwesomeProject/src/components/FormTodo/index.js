import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Switch,
} from 'react-native';
import PrimaryButton from '../primaryButton';
import {globalStyles, formStyles} from '../../assets/style';
import styles from './style';

const FormTodo = ({handleAddTodo}) => {
    const [label, setLabel] = useState('');
    const [status, setStatus] = useState(false);

    const handleSubmit = () => {
        const item = {label, status};
        handleAddTodo(item);
    };

    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.container}>
                <Text style={globalStyles.title}>Add Todo</Text>
                <Text>Label</Text>
                <TextInput
                    value={label}
                    label="Label"
                    style={formStyles.input}
                    onChangeText={(text) => setLabel(text)}
                />
                <Text>Status</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={status ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() =>
                        setStatus((previousState) => !previousState)
                    }
                    value={status}
                />
                <TouchableOpacity
                    style={globalStyles.fullWidth}
                    onPress={() => handleSubmit()}>
                    <PrimaryButton label={'Submit'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default FormTodo;
