import React, { Component } from "react";
import { nanoid } from 'nanoid'
import {AppContainer} from './App.styled'

import {Section} from 'components/Section/Section'
import {PhonebookInput} from 'components/PhonebookInput/PhonebookInput'
import {Contacts} from 'components/Contacts/Contacts'

export default class APP extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

addContacts = (name, number) => {

  const contact = {
    id: nanoid(),
    text: name,
    tel: number
  }

  this.setState(prevState => ({
    contacts: [...prevState.contacts, contact]
  }))
}

handleInputChange = event => {
  this.setState({
    [event.currentTarget.name]: event.currentTarget.value
  })
}

handleSubmit = event => {
  event.preventDefault();

  this.addContacts(this.state.name, this.state.number)

  this.reset()
}

reset = () => {
  this.setState({
    name: '',
    number: ''
  })
}

  render() {

  return (
    <AppContainer>

      <Section title={"Phonebook"}>
       <PhonebookInput 
       titleName={"Name"} 
       titleNumber={"Number"}
       buttonTitle={"Add contact"}
       name={this.state.name}
       number={this.state.number}
       onChange={this.handleInputChange}
       onSubmit={this.handleSubmit}
        />
      </Section>

      <Section title={"Contacts"}>
      <Contacts 
      title={"Find contacts by name"}
      contacts={this.state.contacts} 
      />
      </Section>

    </AppContainer>
  );
}
}


