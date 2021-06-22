import React, { useEffect, useContext } from 'react';
import UserContext from '../../context';

const Loading = ()=> {
    const performTimeConsumingTask = async () => {
        return new Promise( ( resolve ) =>
            setTimeout(
                () => {
                    resolve( 'result' )
                },
                1000
            )
        )
    };

    const data = useContext(UserContext)
    const {loading} = data

    useEffect( () => {
        // Preload data from an external API
        // Preload data using AsyncStorage
        let wait
        var loader = document.getElementsByClassName( 'loading' );
        (async () => {
            wait = await performTimeConsumingTask();
        })()
        if ( !loading && wait !== null ) {
            loader[0].classList.add( 'animated' );
            loader[0].classList.add( 'slideOutRight' );

            // Android check
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf( 'android' ) > -1;

            if ( isAndroid ) {
                console.log(loader)
                // loader[0].style.display( 'none' );
            }
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    // render() {
    return (
        <div className="loading">
            <div className="wrapper h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="loading-content">
                        <div className="logo logo-primary">
                            <img className="animated zoomin" src="/assets/img/placeholder/logo.PNG" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // }
}

export default Loading;
