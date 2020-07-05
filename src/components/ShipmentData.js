import React, { Component } from 'react';
import '../css/shipment-data.css';


class ShipmentData extends Component {

     
    render() {
        return (
            
                <div className="shipment-data-container">
                     <label className="shipment-data-label">{this.props.label}</label>
                     <span className="shipment-data-value">{this.props.value}</span>
                     
                </div>
               
        );
    }
}

export default ShipmentData;