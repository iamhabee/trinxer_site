import React from 'react';
import scriptLoader from 'react-async-script-loader';
import GoogleMapsStyle from './googleMapsStyle';

class Maps extends React.Component {
    constructor( props ) {
        super( props );
        this.mapRef = React.createRef();
        this.map    = null;
    };

    UNSAFE_componentWillReceiveProps( { isScriptLoaded, isScriptLoadSucceed } ) {
        var map;
        var geocoder;

        var address          = ['189 Bedford Ave, Brooklyn, NY 11211, United States'];
        const address_latlng = new window.google.maps.LatLng( 40.7741156, -73.9603525 );

        if ( isScriptLoadSucceed ) {
            map = new window.google.maps.Map( this.mapRef.current, {
                center: address_latlng,
                zoom: 19,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: GoogleMapsStyle
            } );

            var icon = {
                url: 'assets/img/demo/20_img.png',
                size: new window.google.maps.Size( 112, 118 )
            };

            geocoder = new window.google.maps.Geocoder();

            for ( var i = 0; i < address.length; i++ ) {
                geocoder.geocode( { 'address': address[i] }, function( results, status ) {
                    if ( status === 'OK' ) {

                        let marker = new window.google.maps.Marker( {
                            position: results[0].geometry.location,
                            icon: icon
                        } );

                        marker.setMap( map );
                        map.setCenter( results[0].geometry.location );
                    }
                } );
            }

        } else this.props.onError();
    };

    render() {
        return (
            <div id="google-maps" class="footer-no-border" ref={ this.mapRef }></div>
        );
    };
};

export default scriptLoader( ['https://maps.googleapis.com/maps/api/js?key=AIzaSyD9TrJVxlYSCKv8WHGcR2fHTg-Ltx1beWU'] )( Maps );
