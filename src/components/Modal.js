import React, { Component } from 'react';
import '../css/modal.css';

class Modal extends Component {

    render() {
        return (
            <div className={this.props.modelStatus? "show-modal modal-container": "hide-modal modal-container"}>
            <div className={this.props.modelStatus? "show-modal modal": "hide-modal modal"}>
                <div className="modal-body">
                <input type="text" className="text-input" placeholder={this.props.placeholder} onChange={this.props.onChange}/>
                <input type="button" value="Save" className="btn btn-save" onClick={this.props.handleSave}/> 
                <input type="button" value="Close" className="btn btn-close" onClick={this.props.handleClose}/>
                </div> 
            </div>
            </div>
        );
    }
}

export default Modal;