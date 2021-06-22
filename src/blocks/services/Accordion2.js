import React, { useContext, useState } from 'react';
import { Collapse } from '@material-ui/core';

// import AccordionItems from '../../data/services/accordionTwoItems.json';
import UserContext from '../../context';

const Accordion2 = () => {
    const data = useContext(UserContext)
    const {services} = data
    const from = services.length >= 2 ? Math.floor(services.length/2) : 0
    const to = services.length >= 2 ? Math.floor(services.length) :0
    const [open, setOpen] =useState(0);

    const handleClick = ( e ) => {
        let target = e.target.getAttribute( "data-target" );

        if ( open === target) {
            setOpen( "#collapse-0" );
        } else {
            setOpen( target);
        }
    };

    return (
        <div id="accordion-services-1" className="accordion accordion-services">
            { services && services.slice(from, to).map( ( item, key ) =>{
                return(
                    <div key={ key } className={ "card " + ( open === ( "#collapse-" + item.serviceId ) ? "active" : " " ) }>
                        <div className="card-header" id={ "heading-" + item.serviceId }>
                            <button onClick={ (e) => handleClick(e) } className={ "btn btn-lg btn-link stretched-link " + ( open === ( "#collapse-" + item.serviceId ) ? " " : "collapsed" ) }  type="button" data-toggle="collapse" data-target={ "#collapse-" + item.serviceId } aria-expanded="false" aria-controls={ "collapse-" + item.serviceId }>
                                <span className="h4 after">{ item.serviceName }</span>
                                <i className="fas fa-angle-right i-large"></i>
                            </button>
                        </div>
        
                        <Collapse in={ open ===  ( "#collapse-" + item.serviceId)}>
                            <div id={ "collapse-" + item.serviceId } className="collapse show" aria-labelledby={ "heading-" + item.serviceId } data-parent={ "#accordion-services-" + item.serviceId }>
                                <div className="card-body">
                                    <p>{ item.serviceDescription } </p>
            
                                    <p className="card-price">{ item.price }</p>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion2;
