import { useGetImageHelper } from "./helpers";
import { renderHook } from './testUtils';
describe.only("Testing useGetImageHelperHooks", () => {

  test("Total initial value", () => {
    const results =  renderHook(useGetImageHelper);
    expect(results.total).toEqual(0);
  });
  test("Image initial value", () => {
    const results =  renderHook(useGetImageHelper);
    expect(results.images).toEqual([]);
  });

  test("getAllImages is returned as a function",  () => {
    const results =  renderHook(useGetImageHelper);
    expect(results.getAllImages).toBeInstanceOf(Function);
  });

  test("Images are be being returned as an array",  () => {
    const results =  renderHook(useGetImageHelper);
    expect(results.images).toBeInstanceOf(Array);
  });
});
