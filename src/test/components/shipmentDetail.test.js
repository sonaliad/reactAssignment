import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShipmentDetail from '../../components/ShipmentDetail';

describe("Should render <ShipmentDetail /> Component", ()=>{
    const props = {
        match: {
          params: {
            shipmentId: 'S1000',
          }
        },
      };

    const testDetails = {
        "id": "S1023",
        "name": "New spring collection(2019)",
        "cargo": [
          {
            "type": "Furniture",
            "description": "300 Tables",
            "volume": "20"
          },
          {
            "type": "Furniture",
            "description": "1500 Chairs",
            "volume": "15"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Ningbo port",
        "services": [
          {
            "type": "customs"
          },
          {
            "type": "insurance",
            "value": "100"
          }
        ],
        "total": "3000",
        "status": "ACTIVE",
        "userId": "U1002"
      };

    const component = shallow(<ShipmentDetail {...props}/>);   
    component.setState({details: testDetails});
    let wrapper = component.find(".shipment-datail-container");        
    it('Should render ShipmentDetail component without errors', ()=>{
        expect(wrapper.length).toBe(1);
    })

    describe("Should not render <ShipmentDetail /> Component", ()=>{
        const component = shallow(<ShipmentDetail {...props}/>);   
        let wrapper = component.find(".loading-error");     
        it('Should not render ShipmentDetail component', ()=>{
            expect(wrapper.length).toBe(1);
        })
    });

})