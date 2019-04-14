import React, { Component } from 'react'
import query from 'query-string';

class LocationUtils extends Component {
  state = {
    params: null
  }

  componentDidMount() {
    const params = query.parse(this.props.location.search);
    this.setState({'params': params});
  }

  render () {
    const params = this.state.params;
    return (
      <div>
        Params : 
        { (params !== null) 
          ? Object.keys(params).map((key, i) => <span key={i}>{key}={params[key]}|</span> )
          : null
        }
      </div>
    )
  }
}

export default LocationUtils;
