import React from 'react';
import '../styles/ContactPage.css';
import { Prompt, useBlocker } from 'react-router-dom';



class ContactPage extends React.Component {
    state = {
        value: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        })
    }
    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value
            })
        } else {
            this.setState({
                value: e.target.value
            })
        }
    }
    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>

            </div>
        );
    }
}

export default ContactPage;