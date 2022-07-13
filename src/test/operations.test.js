/**
 * @jest-environment jsdom
 */

 //import { addToList, getTaskList } from '../operations';
 import addDatatoList from '../index';

 describe('Testing for adding items', () => {
  test('Add items to list', () => {
    const data = {
      index: 0,
      description: 'This is just a sample',
      completed: false
    };
    addDatatoList();
    expect(getTaskList()).toHaveLength(1);
  })
 });