/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import jsonData from 'images/feiras.json';
import icon from 'images/kiosk.png';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends PureComponent {
  propTypes = {
    google: PropTypes.object,
  };

  renderPlaces = () => {
    const markets = jsonData.feirasLivres.feira;
    return markets.map(feira => (
      <Marker
        icon={icon}
        name={feira.nome}
        position={{
          lat: feira.latitude,
          lng: feira.longitude,
        }}
      />
    ));
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: -23.5549959,
          lng: -46.6663233,
        }}
      >
        {this.renderPlaces()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsR0d20T3627788bm0OYfTA1qXecsE5o8',
})(MapContainer);
