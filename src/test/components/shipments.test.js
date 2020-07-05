import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Shipments from '../../components/Shipments';


describe('Render Shipments Component', ()=>{
    const component = shallow(<Shipments />);
    const wrapper = component.find('[data-test="shipments-container"]');

    it('Should render Shipment Container without errors', ()=>{
        expect(wrapper.length).toBe(1);
    })

    it('Should render Search Container without errors', ()=>{
        expect(wrapper.find('Search').exists()).toBe(true); 
    })

    it('Should render Sorting Container without errors', ()=>{
        expect(wrapper.find('Sorting').exists()).toBe(true);
    })

    it('Should render Pagination Container without errors', ()=>{
        expect(wrapper.find('Pagination').exists()).toBe(true);
    })
})

