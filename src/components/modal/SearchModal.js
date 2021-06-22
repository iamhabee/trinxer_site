import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import { history } from '../../App';
// import Loading from '../../blocks/loading/Loading';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import UserContext from '../../context';
import { searchBlog } from '../../services';
import ButtonSearch from '../../components/button/ButtonSearch';
// import UserContext from '../../context';
// import SearchForm from '../form/SearchForm';
// import LangSelector from '../../components/language/LangSelector';

class SearchModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false,
            isLoading:false,
            search:""
        };

        this.setSearch = this.setSearch.bind( this );
        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    };
    static contextType = UserContext;
    open() {
        this.setState( { showModal: true }, function () {
        } );
    };

    close() {
        this.setState( { showModal: false } );
    };

    setSearch(e){
        e.preventDefault()
        this.setState({search:e.target.value})
    }

    // const data = useContext(UserContext)
    // const {setSearchBlog, setLoading} = data

    submitForm = async e => {
        e.preventDefault();
        this.setState({isLoading:true})
        searchBlog(this.state.search)
        .then( data => {
            if(data.status){
                this.context.setSearchBlog(data.data)
                this.context.setLoading(false)
                history.push("/search-results")
                this.close()
            }
        }).catch( error => {
            console.log(error)
        });

    };

    render() {
        const {isLoading} = this.state
        return (
            <Fragment>
                <div className="search-toggle">
                    <button onClick={ this.open } type="button" className="btn btn-primary btn-square min-w-auto" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search i-default"></i></button>
                </div>

                <Modal className="modal fade"
                       id="search-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
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
                                            <div className="search-close-toggle">
                                                <button onClick={ this.close } type="button" className="btn btn-primary btn-square min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times i-default"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body modal-body-centered">
                                <form className="search-form" role="search" onSubmit={this.submitForm}>
                                    <div className="search input-group">
                                        <input className="form-control form-control-lg" onChange={this.setSearch} type="text" placeholder="Search" />
                                        <div className="input-group-append">
                                            <ButtonSearch />
                                        </div>
                                    </div>
                                    {isLoading && <p>Searching...</p>}
                                </form>
                                {/* <SearchForm isLoading={isLoading} setSearch={this.setState} submitForm={this.submitForm} /> */}
                            </div>

                            <div className="modal-footer">
                                <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-between w-100">
                                    <div className="modal-text">
                                        <p>© { new Date().getFullYear() } Trinxer - Pharmacy</p>
                                    </div>

                                    {/* <LangSelector /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </Fragment>
        );
    };
};

export default SearchModal;
