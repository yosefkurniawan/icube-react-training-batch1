import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {globalStyles} from './assets/style';
import LoginForm from './components/formLogin';

const App = () => {
  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <ScrollView style={globalStyles.scrollView}>
          <LoginForm />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
