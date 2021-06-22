import React from 'react';

import ClientsData from '../../data/clients/clientsData';

const HomeAboutClients = () => {
    return (
        <div id="clients">
            <div className="wrapper">
                <div className="clients">
                    <div className="clients-items">
                        { ClientsData && ClientsData.map ( ( item, key ) => {
                            return (
                                <div key={ key } className="clients-item">
                                    <div className="clients-item-content">
                                        <img src={ item.imgSrc } alt={ item.alt } />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutClients;
