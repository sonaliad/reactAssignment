import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';


describe('Render <App/> Component', ()=>{
    const component = shallow(<App />);
    const wrapper = component.find('.main-container');

    it('Should render App component without errors', ()=>{
        expect(wrapper.length).toBe(1);
    })
})

