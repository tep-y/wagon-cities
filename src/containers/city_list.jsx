import React, { Component } from 'react';
import City from './city.jsx';


class CityList extends Component {
  componentWillMount() {
    //something
  }
  
  render() {
    return(
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />
        })}
      </div>
    );
  }
}

export default CityList;