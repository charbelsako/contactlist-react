import {Component} from 'react'
import {TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {Constants} from 'expo'

const styles = StyleSheet.create({
    input: {padding: 20, borderColor: 'black', borderWidth: 1, },
    container: {
        flex: 1,
        paddingTop: Contstant.statusBarHeight,
        justifyContent: 'center',
    }
})

export default class AddContactForm extends Component{
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
        if (+this.state.phone >= 0 && this.state.phone.length <= 8 && this.state.name.length >= 2){
            return this.setState({isFormValid: true})
        }else{
            return this.setState({isFormValid: true})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    //a helper function to hide the form
    hideForm = () => {
        this.setState({
            showForm: false,
        })
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
                <Button title="Submit" onPress={this.handleSubmit} disabled={this.state.isFormValid}/>
                <Button title="Cancel" onPress={this.hideForm} />
            </KeyboardAvoidingView>
        )
    }
}