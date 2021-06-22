import React, { Component } from 'react';
import { Link } from 'react-scroll';

class BackToTop extends Component {;
    constructor() {
        super();
        this.state = {
            show: true,
        };  
    };

    componentDidMount() {
        document.body.classList.contains( "error404" ) || document.body.classList.contains( "ui" ) ? this.setState( { show: false } )  : this.setState( { show: true } );
    };

    handleClick = () => {
        if ( document.body.classList.contains( "home" )) {
            window.addEventListener( "scroll", this.removeMenuActive , false );

            setTimeout( () => {
                window.removeEventListener( "scroll", this.removeMenuActive , false );
            }, 800 );
        }
    };

    // Removes active class from header menu while scrolling, so that menu links would not highlight while scrolling to top
    removeMenuActive = () => {
        let menu_items = document.querySelectorAll( "#header .menu .menu-primary .nav-item" );

        menu_items.forEach( menu_item => {
            menu_item.classList.remove( "active" );
        })
    };

    render() {
        let page = '';

        if ( document.body.classList.contains( 'header-fixed-true' ) ) {
            page = 'main';
        } else {
            page = 'header';
        }

        return (
            <div id="back-to-top" style ={ { display: this.state.show ? "block" : "none" } }>
                <Link onClick={ this.handleClick } className="scroll-to-id" to={ page } href={ "#" + page }><i className="fas fa-long-arrow-alt-up i-large"></i></Link>
            </div>
        );
    };
};

export default BackToTop;
