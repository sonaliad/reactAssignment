import React, { Component } from 'react';
import axios from 'axios';

class Sorting extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const selectedValue = event.target.value;
        if(selectedValue.length === 0) return;
        axios.get(`http://localhost:3001/shipments`).then((response)=>{
            const sortedValue = this.sort(selectedValue, response.data);
            this.props.handleSortingOfShipment(sortedValue);
        })
    }
    sort(selectedValue, data){
        if(selectedValue.length === 0) return data;
        let selectedValueArray = selectedValue.split('-');
        
        let sortingKey = selectedValueArray[0];
        let sortingMethod = selectedValueArray[1], sortedData=[];
        if(sortingMethod === "asc"){
              sortedData= data.slice().sort((a, b) => {
                if (b[sortingKey] > a[sortingKey]) {
                  return -1;
                }
                if (b[sortingKey] < a[sortingKey]) {
                  return 1;
                }
                return 0;
              });
        }else{
            sortedData= data.slice().sort((a, b) => {
                if (a[sortingKey] > b[sortingKey]) {
                  return -1;
                }
                if (a[sortingKey] < b[sortingKey]) {
                  return 1;
                }
                return 0;
              });
        }
    
        return sortedData;

    }

    render() {
        return (
            <div className="select-container">
                <span>Sort by: </span>
                <select onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="name-asc">Name Ascending</option>
                    <option value="id-asc">Id Ascending</option>
                    <option value="name-des">Name Descending </option>
                    <option value="id-des">Id Descending </option>
                </select>
          </div>
        );
    }
}

export default Sorting;