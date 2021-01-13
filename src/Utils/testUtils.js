import {mount} from 'enzyme';
import { act } from '@testing-library/react';
/**
 * Function to implement the the find util from jest
 *  @param {string} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByAtrr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

/**
 * reusable wrapper that takes in two props, 
 * Name of the Hooks and any external prop you want to pass
 * And it mount the hook which can then be used for testing purposes
 * @param {function} hook 
 * @param {object} externalProps 
 * @returns {null}
 */
export const renderHook = (hook, externalProps={}) => {
    let results;
    const HookeWrapper = () => {
      results = hook();
      return null;
    };
    act(() => mount(<HookeWrapper/>));
    return results;
  };