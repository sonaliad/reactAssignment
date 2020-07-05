import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShipmentData from '../../components/ShipmentData';

describe('Render ShipmentData Component', () => {
  const props = {
    label: 'Test label',
    value: 'Test value',
  };

  const wrapper = shallow(<ShipmentData {...props} />);

  it('renders ShipmentData container', () => {
    expect(wrapper.find('.shipment-data-container').exists()).toBeTruthy();
  });

  it('renders ShipmentData Label', () => {
    expect(wrapper.find('.shipment-data-label').text()).toEqual('Test label');
  });

  it('renders ShipmentData Value', () => {
    expect(wrapper.find('.shipment-data-value').text()).toEqual('Test value');
  });
});
