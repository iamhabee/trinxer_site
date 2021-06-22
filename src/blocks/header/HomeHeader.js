import React, { Component } from 'react';

import HomeHeaderLogo from '../../blocks/logo/HomeHeaderLogo';
import HomeHeaderMenuPrimary from '../../blocks/menu/HomeHeaderMenuPrimary';
// import LangSelector from '../../components/language/LangSelector';
import SearchModal from '../../components/modal/SearchModal';
import MenuModalLight from '../../components/modal/MenuModalLight';
import MenuModalDark from "../../components/modal/MenuModalDark";

class HomeHeader extends Component {
    constructor() {
        super();
        this.state = { isFixed: false };
    };

    unfixHeader = () => {
        this.setState( { isFixed: false } );
    };

    fixHeader = () => {
        this.setState( { isFixed: true } );
    };

    componentDidMount() {
        const headerFixedTrue = "header-fixed-true";
        let fromTop           = 200;

        let fromHTML = document.getElementById( "information" );

        if ( document.querySelector( "body" ).classList.contains( headerFixedTrue ) ) {
            if ( document.getElementById( "header" ) ) {
                if ( fromHTML ) {
                    window.addEventListener( "scroll", () => {
                        if ( ( window.screenTop - fromHTML.getBoundingClientRect().top ) > fromTop ) {
                            document.getElementById( "header" ).classList.add( "animated" );
                            document.getElementById( "header" ).classList.add( "slideInDown" );
                            document.querySelector( ".header-fixed-true" ).classList.add( "header-fixed" );
                            this.fixHeader();
                        } else {
                            document.getElementById( "header" ).classList.remove( "animatedn" );
                            document.getElementById( "header" ).classList.remove( "slideInDown" );
                            document.querySelector( ".header-fixed-true" ).classList.remove( "header-fixed" );
                            this.unfixHeader();
                        }
                    } );
                }
            }
        }
    };

    render() {
        return (
            <header id="header" className="site-header">
                <div className="wrapper">
                    <div className="header-content d-flex justify-content-between">
                        <div className="header-left align-self-center">
                            <div className="d-flex align-items-center">
                                <HomeHeaderLogo logoColor={ this.state.isFixed ? "dark" : "light" } />

                                <div className="menu">
                                    <HomeHeaderMenuPrimary />
                                </div>
                            </div>
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                               {/* <LangSelector /> */}

                                <SearchModal />

                                <MenuModalLight />

                                <MenuModalDark />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
};

export default HomeHeader;
