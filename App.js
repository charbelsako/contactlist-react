import React, {Component} from 'react'
import {Button, SectionList, TextInput, StyleSheet, Text, View} from 'react-native'
import {Constants} from 'expo'

import contacts, { compareNames } from './contacts'
import Row from './Row'
import ContactsList from './ContactList'
import AddContactForm from './AddContactForm'

//probably make a file styles.js
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
})

export default class App extends Component {
    state = {
        showContacts: false,
        showForm: false,
        contacts: contacts,
    }
    
    addContact = (newContact) => {
        this.setState( prevState => ({
            showForm: false,
            contacts: [...prevState.contacts, contact],
        }))
    }

    toggleForm = () => {
        this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts,
        }))
    }

    sort = () => {
        this.setState(
            prevState => ({
                contacts: [...prevState.contacts].sort(compareNames)
            })
        )
    }

    render(){
        if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
        return (
            <View style={styles.container}>
                <Button title="toggle contacts" onPress={this.toggleContacts}  />
                <Button title="Add Contact" onPress={this.toggleForm}  />                
                {this.state.showContacts && (<ContactsList contacts={this.state.contacts}/>)}
            </View>
        )
    }
}
