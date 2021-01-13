import React from 'react';
import { MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import App from './App';
import { findByAtrr } from './Utils/testUtils';
import HomePage from './Pages/HomePage';

const setup = (pathName="/") => {
    return mount(
        <MemoryRouter initialEntries={[`${pathName}`]}>
          <App/>
        </MemoryRouter>
    )
}

describe('Testing the App Component', () => {
    let wrapper;

    test('App componet is rendered',() => {
        wrapper = setup();
        let component = findByAtrr(wrapper, 'component-layout');
        expect(component.length).toBe(1);
    })
    test('Route(/) displays HomePage', () => {
        wrapper = setup();
       expect(wrapper.find(HomePage)).toHaveLength(1);
    });
   
});