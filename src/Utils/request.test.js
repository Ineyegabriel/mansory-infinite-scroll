import moxios from 'moxios'
import {testFetch} from './request';
import DUMMY_DATA from './dummyData';
import {renderHook} from './testUtils';

/**
 * In this test I am using moxios library to mock api call in conjuction 
 * with the testFetch API, and previous mentioned the request.js file. testFetch function is
 * solely for testing. and I testing listing for the status code of 200in this case to validate that 
 * the fetch was succesful.
 */

describe('Testing Axios Fetch Call', () => {
    let wrapper
    beforeEach(() => {
        moxios.install();
        wrapper = renderHook(testFetch);
    });
    
    afterEach(() => {
        moxios.uninstall();
    });
    test('Successfully fetched data', () => {
        
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: DUMMY_DATA
              });
        });
        const {status} = wrapper;
        expect(wrapper.status).toBe(status)
    });
});
