import React, { Component } from 'react';
import { sendMessage } from '../../services';
// import axios from 'axios';

class ContactForm extends Component {
    
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                name: '',
                phone: '',
                email: '',
                message: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            isSubmitting:false,
            // responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    }

    submitForm = async e => {
        e.preventDefault();
        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }
        
        this.setState( { isSubmitting: true } );
        
        sendMessage(this.state.values)
        .then((data) => {
            if(data.status){
                this.callAlert( data.message, "success" )
            }
            if(!data.status){
                this.callAlert( data.message, "warning" )
            }
            this.setState( { isSubmitting: false } );
        }).catch( error => {
            console.log(error)
            this.callAlert( this.state.errorMessage, 'error' )
        } );
    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );
        this.setState( {
            alertTimeout: setTimeout( function() {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );
                    setTimeout( function() {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } )
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '#cf-1' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = e =>
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
    } );

    render() {
        return (
            <form onSubmit={ this.submitForm } method="post" action="form.php" id="cf-1" className="contact-form">
                <div className="form-group form-group-xs">
                    <p className="input-group gutter-width-md no-space">
                        <span className="gutter-width">
                            <input name="name" 
                                type="text" 
                                className="form-control form-lg bg-white" 
                                id="cf-1-name" 
                                placeholder="Name *"
                                value={ this.state.values.name }
                                onChange={ this.handleInputChange } 
                                required="required" />
                        </span>

                        <span className="gutter-width">
                            <input name="phone" 
                                type="text" 
                                className="form-control form-lg bg-white" 
                                id="cf-1-phone" 
                                placeholder="Phone *"
                                value={ this.state.values.phone }
                                onChange={ this.handleInputChange } 
                                required="required" />
                        </span>
                    </p>
                </div>

                <div className="form-group form-group-xs">
                    <p className="input-group gutter-width-md no-space">
                        <span className="gutter-width">
                            <input name="email" 
                                type="email" 
                                className="form-control form-lg bg-white" 
                                id="cf-1-email" 
                                placeholder="Email" 
                                value={ this.state.values.email }
                                onChange={ this.handleInputChange }
                                required="required" />
                        </span>

                        <span className="gutter-width">
                            <input name="message" 
                                type="text" 
                                className="form-control form-lg bg-white" 
                                id="cf-1-question" 
                                placeholder="Question *"
                                value={ this.state.values.message }
                                onChange={ this.handleInputChange } 
                                required="required" />
                        </span>
                    </p>
                </div>

                <div className="form-group form-group-xs mb-0">
                    <button type="submit" className="btn btn-primary">{this.state.isSubmitting?"Sending...":"Submit"}</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
