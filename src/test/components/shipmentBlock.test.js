import  React from 'react';

import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShipmentBlock from '../../components/ShipmentBlock';

describe("Render <ShipmentBlock/> component", ()=>{

    const props = {
        name: "Test Name",
        id:"Test ID",
        status: "Test Status",
    };

    const wrapper = shallow(<ShipmentBlock {...props} />);

    it("Should render  ShipmentBlock",()=>{
        expect(wrapper.find('[data-test="shipment-block"]').exists()).toBeTruthy();
    })
    
    it("Should check Name value",()=>{
        expect(wrapper.find('.nameValue').text()).toEqual('Test Name');
    })

    it("Should Check  ID value",()=>{
        expect(wrapper.find('.idValue').text()).toEqual('Test ID');
    })

    it("Should Check  Status value",()=>{
        expect(wrapper.find('.statusValue').text()).toEqual('Test Status');
    })
});

