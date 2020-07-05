import React, { Component } from 'react';
import "../css/shipment-block.css";
class ShipmentBlock extends Component {
    render() {
        return (
            <div  data-test="shipment-block" className={`shipment-block ${this.props.status.toLocaleLowerCase()}`}>
                <div className="name-container">
                    <span>Name:</span> 
                    <span className="nameValue">{this.props.name}</span>
                 </div>
                 <div className="id-container">
                    <span>ID:</span> 
                    <span className="idValue">{this.props.id}</span>
                 </div>
                <div className="status-container">
                    <span>Status:</span> 
                    <span className="statusValue">{this.props.status}</span>
                </div>
                <div className="more-details-container">
                   <a href={`/shipments/${this.props.id}`} className="more-details-link">View Details</a>
                </div>
            </div>
        );
    }
}

export default ShipmentBlock;