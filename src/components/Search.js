import React, { Component } from 'react';
import axios from 'axios';
import "../css/search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleClick(event){

        axios.get(`http://localhost:3001/shipments?id=${this.state.value}`).then((response)=>{
            this.props.handleShipment(response.data);
        })
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="search by ID" className="search text-input" onChange={this.handleChange}/>
                <input type="button" className="btn btn-blue search" value="Search" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Search;