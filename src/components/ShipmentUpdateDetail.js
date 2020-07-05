import React, { Component } from 'react';
import ShipmentData from './ShipmentData';
import Modal from './Modal';
import axios from 'axios';
import '../css/shipment-detail.css';
import Hello from './Hello';


class ShipmentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:"",
            id: props.match.params.shipmentId,
            isModalOpen: false,
            newShipmentName: ""
            };
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        const path = `http://localhost:3001/shipments?id=${this.state.id}`;
        axios.get(path).then((response)=>{
            this.setState({details: response.data[0] })
        })
    }

    modalOpen(){
        this.setState({
            isModalOpen: true
        });
    }

    modalClose(){
        this.setState({
            isModalOpen: false,
        });
    }

    handleChange(event){
        this.setState({newShipmentName : event.target.value});
        console.log(this.state.newShipmentName);
    }

    handleSave(event){
        event.preventDefault();
        const details = this.state.details;
        details.name = this.state.newShipmentName;

        axios.put(`http://localhost:3001/shipments/${this.state.id}`, details).then((response)=>{
            if(response.status === 200){
                alert("Your data has been updated successfully.");
            }
        })
    }

    
    changeName(name) {
        this.setState({name: name});
        alert(name);
      }
    

    render() {
        const details = this.state.details;
        if (!details) {
            return <h1 className="loading-error">Loading...</h1>;
          }
        return (
            <div className="shipment-datail-container">
                <a href="/">Home</a>
                <h1>Shipment Details</h1>
                <span className="edit" onClick={this.modalOpen}>Click to edit Name</span>
                <ShipmentData label="Name:" value={this.state.details.name}/>
                {/* <Hello name={this.state.details.name} /> */}
                <div className="inline">
                <ShipmentData label="Shipment id:" value={this.state.details.id}/>
                </div>
                <div className="inline">
                <ShipmentData label="Mode of transport:" value={this.state.details.mode.toUpperCase()}/>
                </div>
                <div className="inline">
                <ShipmentData label="Type of shipment:" value={this.state.details.type}/>
                </div>
                <div className="inline">
                <ShipmentData label="Shipment Origin:" value={this.state.details.origin}/>
                </div>
                <ShipmentData label="Shipment destination:" value={this.state.details.destination}/>
                <div className="inline">
                <ShipmentData label="Status:" value={this.state.details.status}/>
                </div>
                <div className="inline">
                <ShipmentData label="User Id:" value={this.state.details.userId}/>
                </div>
                <p className="shipment-detail-label">Cargo :
                </p>
                {
                        details.cargo.map((el,index) => {
                            return (
                                <ul key={index}>
                                <li>{el.type}</li>
                                <li>{el.description}</li>
                                <li>
                                    Volume: {el.volume}m<sup>3</sup>
                                </li>
                                </ul>
                            );
                            })
                        }
                <p className="shipment-detail-label">Services :
                </p>
                {details.services.map((el,index) => {
                    return (
                        <ul key={index}>
                        <li>Type: {el.type}</li>
                        {el.value && <li>Value: {el.value}</li>}
                        </ul>
                    );
                })}

                <Modal  modelStatus={this.state.isModalOpen} handleClose={this.modalClose} handleSave={this.handleSave}
                  value={this.state.details.name}
                    onChange={this.handleChange} placeholder="Enter new Name here..."/>
            </div>
        );
    }
}

export default ShipmentDetail;