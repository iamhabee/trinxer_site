import React, { Component } from 'react';
// import axios from 'axios';
import { sendReply } from '../../services';
import UserContext from '../../context';

class CommentForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            values: {
                comment: '',
                fullName: '',
                email: '',
                commentId: this.props.id,
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000,
            isSubmitting:false
        };
    }

    static contextType = UserContext;

    submitForm = async e => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }
        this.setState( { isSubmitting: true } );
        sendReply(this.state.values)
        .then( data => {
            if(data.status){
                this.callAlert( data.message, "success" )
                this.context.setComments(data.data)
            }
            if(!data.status){
                this.callAlert( data.message, "warning" )
            }
            this.setState( { isSubmitting: false } );

            // this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );

    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );

        this.setState( {
            alertTimeout: setTimeout( function () {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );

                    setTimeout( function () {
                        element.remove()
                    }, 900 )
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

            var element = document.querySelector( '#commentform' );

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

    handleCheckBox = e =>
        this.setState( {
            values: {
                ...this.state.values,
                saveEmail: !this.state.values.saveEmail
            }
    });

    render() {
        return (
            <form onSubmit={ this.submitForm } action="form.php" method="post" id="commentform" className="comment-form">
                <div className="form-group form-group-xs">
                    <p className="comment-notes">Your email address will not be published. Required fields are marked <span className="required">*</span></p>
                </div>

                <div className="form-group form-group-xs">
                    <textarea id="comment" 
                        className="form-control form-lg" 
                        name="comment" 
                        cols="45" rows="4" 
                        placeholder="Your comment here *" 
                        value={ this.state.values.comment }
                        onChange={ this.handleInputChange }
                        required="required">
                    </textarea>
                </div>

                <div className="form-group form-group-xs">
                    <input id="fullName" 
                        className="form-control form-lg" 
                        name="fullName" 
                        type="text" 
                        placeholder="Your Full name here *" 
                        value={ this.state.values.fullName }
                        onChange={ this.handleInputChange }
                        required="required" />
                </div>

                <div className="form-group form-group-xs">
                    <input id="email" 
                        className="form-control form-lg" 
                        name="email" 
                        type="email" 
                        placeholder="Your email here *"
                        value={ this.state.values.email }
                        onChange={ this.handleInputChange } 
                        required="required" />
                </div>

                {/* <div className="form-group form-group-xs">
                    <input id="url" 
                        className="form-control form-lg" 
                        name="url" 
                        placeholder="Your website here" 
                        value={ this.state.values.url }
                        onChange={ this.handleInputChange }
                        type="url" />
                </div> */}

                {/* <div className="form-group form-group-xs">
                    <p className="comment-form-cookies-consent custom-control custom-checkbox before">
                        <input id="wp-comment-cookies-consent" 
                            className="custom-control-input" 
                            name="wp-comment-cookies-consent" 
                            checked={ this.state.saveEmail }
                            onChange={ this.handleCheckBox } 
                            type="checkbox" />

                        <label className="custom-control-label" htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                </div> */}

                <div className="form-submit">
                    <input name="submit" type="submit" className="btn btn-primary" value={this.state.isSubmitting?"Replying...":"Post Comment" }/>
                </div>
            </form>
        );
    }
}

export default CommentForm;
