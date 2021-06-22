import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from '../../components/modal/SearchModal';
import ModalMenuPrimary from '../../blocks/menu/ModalMenuPrimary';
import LangSelector from '../../components/language/LangSelector';

class MenuModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    };

    open() {
        this.setState( { showModal: true } );
    };

    close() {
        this.setState( { showModal: false  } );
    };

    render() {
        return (
            <Fragment>
                <div className="menu-toggle">
                    <button onClick={ this.open }type="button" className="btn btn-primary btn-square min-w-auto" data-toggle="modal" data-target="#menu-modal"><i className="fas fa-bars i-default"></i></button>
                </div>
                
                <Modal
                    id="menu-modal"
                    className="modal fade"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ false }
                    aria-labelledby="menu-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full"
                    ref={ node => this.chart = node }
                    >
                    <div className="wrapper">
                        <div className="modal-content">
                            <div className="modal-header modal-header-top">
                                <div className="header-content d-flex justify-content-between w-100">
                                    <div className="header-left align-self-center">
                                        <div className="d-flex align-items-center">
                                            <HeaderLogo />
                                        </div>
                                    </div>

                                    <div className="header-right d-flex justify-content-end">
                                        <div className="d-flex align-items-center">
                                            <SearchModal />

                                            <div className="menu-close-toggle">
                                                <button onClick={ this.close }type="button" className="btn btn-primary btn-square min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times i-default"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-between align-items-md-center align-items-lg-center align-items-xl-center w-100">
                                    <div className="modal-text order-1 order-md-0 order-lg-0 order-xl-0">
                                        <p>575 Crescent Avenue <br />PA 18951 <br />United Kingdom</p>

                                        <p>
                                            <a href="tel:+43253312523">+432 533 12 523</a><br />
                                            <a href="mailto:info@domain.com">info@domain.com</a>
                                        </p>
                                    </div>

                                    <div className="animated fadeinright d-flex justify-content-end w-100 order-0 order-md-1 order-lg-1 order-xl-1">
                                        <ModalMenuPrimary /> 
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-between w-100">
                                    <div className="modal-text">
                                        <p>© { new Date().getFullYear() } Dentist & Medical React JS Template by Adveits</p>
                                    </div>

                                    <LangSelector />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    };
};

export default MenuModal;
