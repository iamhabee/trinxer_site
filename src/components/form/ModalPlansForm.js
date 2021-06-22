import React, {Component} from 'react'
import axios from "axios";

class ModalPlansForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                author: '',
                authorLastName: '',
                email: '',
                company: '',
                phone: '',
                comment: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
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

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }, ).then( response => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );

    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );

        this.setState( {
            alertTimeout: setTimeout( function () {
                    var element = document.querySelector( '#alert' );
                    
                    if ( element ) {
                        element.classList.remove( 'fadeIn' );
                        element.classList.add( 'fadeOut' );
    
                        setTimeout( function () {
                            element.remove()
                        }, 900 )
                    }
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( !document.querySelector( '#alert' ) ) {
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

            var element = document.querySelector( '#cf-2' );

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
            <form onSubmit={ this.submitForm } id="cf-2" className="contact-form">
                <div className="form-group form-group-xs">
                    <input id="cf-2-first-name"
                           className="form-control form-control-lg"
                           name="author"
                           value={ this.state.values.author }
                           onChange={ this.handleInputChange }
                           type="text" placeholder="First name *"
                           required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <input id="cf-2-last-name"
                           className="form-control form-control-lg"
                           name="authorLastName"
                           value={ this.state.values.authorLastName }
                           onChange={ this.handleInputChange }
                           type="text" placeholder="Last name *"
                           required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <input id="cf-2-email"
                           className="form-control form-control-lg"
                           name="email"
                           value={ this.state.values.email }
                           onChange={ this.handleInputChange }
                           type="email"
                           placeholder="Email *"
                           required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <input id="cf-2-company"
                           className="form-control form-control-lg"
                           name="company"
                           value={ this.state.values.company }
                           onChange={ this.handleInputChange }
                           type="text"
                           placeholder="Company *"
                           required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <input id="cf-2-phone-no"
                           className="form-control form-control-lg"
                           name="phone"
                           value={ this.state.values.phone }
                           onChange={ this.handleInputChange }
                           type="tel"
                           placeholder="Phone no. *"
                           required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <textarea id="cf-2-message"
                              className="form-control form-control-lg"
                              name="message"
                              value={ this.state.values.message }
                              onChange={ this.handleInputChange }
                              placeholder="Message *"
                              required="required"></textarea>
                </div>

                <div className="form-group form-group-xs">
                    <button type="submit" className="btn btn-outline-tertiary">Submit</button>
                </div>
            </form>
        );
    };
};

export default ModalPlansForm;