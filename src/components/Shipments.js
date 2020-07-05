import React, { Component } from 'react';
import axios from 'axios';
import ShipmentBlock from './ShipmentBlock';
import Pagination from './Pagination';
import Search from './Search';
import Sorting from './Sorting';

class Shipments extends Component {
    constructor(props) {
        super(props);
        this.state = {shipmentDetail: [],
             currentPage: 1,
             totalPage:0,
             limitPerPage:20,
             currentPageData :[]}
        this.updateShipmentDetail = this.updateShipmentDetail.bind(this);
        
    }
    
    componentDidMount(){
        axios.get(`http://localhost:3001/shipments?_page=${this.state.currentPage}&_limit=${this.state.limitPerPage}`).then((response)=>{
            let totalPage = parseInt(response.data.length / this.state.limitPerPage) + 1;
            this.setState({shipmentDetail: response.data, totalPage})
        })

    }


    renderShipmentBlock(data){
        return (<ShipmentBlock key={data.id} id={data.id} status = {data.status} total={data.total} name={data.name}/>);
    }

    updateShipmentDetail(data){
        this.setState({shipmentDetail : data});
    }

    render() {
        return (
            <div data-test="shipments-container">
                <div>Total Items Showing: {this.state.shipmentDetail.length}</div>
               <Search  handleShipment={this.updateShipmentDetail}/>
               <Sorting handleSortingOfShipment={this.updateShipmentDetail} />
               <div>
                 {this.state.shipmentDetail.map((data)=>this.renderShipmentBlock(data))}
                </div>
              
                <Pagination totalPage= {this.state.totalPage} currentPage={this.state.currentPage} limit={this.state.limitPerPage} handleClick={this.updateShipmentDetail}/>
           </div>
        );
    }
}

export default Shipments;