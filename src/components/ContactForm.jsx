import React, { Component } from 'react'

export class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            telno: "",
            message: ""
        }
    }
    render() {
        return (
            <form action="">
                <label htmlFor="name">
                    <input type="text"/>
                </label>
                <label htmlFor="email">
                    <input type="email" name="" id=""/>
                </label>
                <label htmlFor="telno">
                    <input type="number" name="" id=""/>
                </label>
                <label htmlFor="message">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>
            </form>
        )
    }
}

export default ContactForm
