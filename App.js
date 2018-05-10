import React, {Component} from 'react'
import {TouchableOpacity, Button, SectionList, TextInput, StyleSheet, Text, View} from 'react-native'
import {Constants} from 'expo'

import contacts, { compareNames } from './contacts'
import {createStackNavigator} from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'

const AppNavigator = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  
}, {
  initialRouteName: "ContactList",
})

const styles = StyleSheet.create({
    
})

export default class App extends Component {
    state = {
        contacts: contacts,
    }
    
    addContact = (newContact) => {
        this.setState( prevState => ({
            showContacts: true,
            contacts: [...prevState.contacts, newContact],
        }))
    }

    render(){
        return (
          <AppNavigator screenProps={{contacts:this.state.contacts, addContact: this.addContact}}/>
        )
    }
}
