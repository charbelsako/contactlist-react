import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

const renderItem = (obj) => <Row {...(obj.item)} />

const renderSectionHeader = (obj) => <Text> obj.section.title </Text>

const ContactsList = props => {
    const contactsByLetter = props.contacts.reduce( (obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact], 
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList 
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

ContactsList.PropTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}

export default ContactsList