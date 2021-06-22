import React, { Component } from 'react';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import HeaderMenuPrimary from '../../blocks/menu/HeaderMenuPrimary';
// import LangSelector from '../../components/language/LangSelector';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';

class Header extends Component {
    render() {
        return (
            <header id="header" className="site-header">
                <div className="wrapper">
                    <div className="header-content d-flex justify-content-between">
                        <div className="header-left align-self-center">
                            <div className="d-flex align-items-center">
                                <HeaderLogo />

                                <div className="menu">
                                    <HeaderMenuPrimary />
                                </div>
                            </div>
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                                {/* <LangSelector /> */}

                                <SearchModal />

                                <MenuModal />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;
