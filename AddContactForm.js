import React from 'react'
import {KeyboardAvoidingView, StyleSheet, TextInput, Button, TouchableOpacity, Text} from 'react-native'
import {Constants} from 'expo'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
    input: {padding: 20, borderColor: 'black', borderWidth: 1, },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
    },
})

export default class AddContactForm extends React.Component{
    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone){
            this.validateForm()
        }
    }

    //generic method for updating the state based on text input
    getHandler = key => val => { 
        this.setState({[key]: val}) 
    } 

    handleNameChange = this.getHandler('name')
    handlePhoneChange = this.getHandler('phone')

    //as it says
    validateForm = () => {
        //this is not what he did
        if (+this.state.phone >= 0 && this.state.phone.length == 8 && this.state.name.length >= 3){
            return this.setState({isFormValid: true})
        }else{
            return this.setState({isFormValid: false})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }
  
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    value={this.state.name} 
                    onChangeText={this.getHandler('name')}
                    placeholder="Enter Contact Name"
                />

                <TextInput 
                    style={styles.input} 
                    value={this.state.phone} 
                    onChangeText={this.getHandler('phone')}
                    keyboardType="numeric"
                    placeholder="Enter Phone Number"
                />
                
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }
}