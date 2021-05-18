import React, { Component } from 'react';
import City from './city.jsx';
import { setCities } from '../actions/index.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);