import React from 'react'
import {Button, View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Constants} from 'expo'

import ContactsList from '../ContactList'

const styles = {
  container: {
    paddingTop: Constants.statusBarHeight,
    
  },
  buttons:{
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1 ,
      borderColor: 'black',
      height: 40,
    },
}

export default class ContactsListScreen extends React.Component{
  static navigationOptions = {
    headerTitle: 'Contacts',
    
  }
  
  state = {
    showContacts: true,
  }
  
  toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts,
        }))
  }
  
  showForm = () => {
    this.props.navigation.navigate("AddContact")
  }


  render(){
    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.buttons} onPress={this.toggleContacts}>
              <Text>{!this.state.showContacts? 'Show' : 'Hide'} Contacts</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons} onPress={this.showForm}>
              <Text>Add Contact</Text>
            </TouchableOpacity>
            {this.state.showContacts && (<ContactsList contacts={this.props.screenProps.contacts}/>)}
      </View>
          )
  }
  
}