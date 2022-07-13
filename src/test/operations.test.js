/**
 * @jest-environment jsdom
 */

 import Operations from '../operations';
 //import addDatatoList from '../index';

 describe('Testing for adding items', () => {
  test('Add items to list', () => {
    document.body.innerHTML = 
    '<div>' +
    '  <ul id="list"></li>' +
    '</div>';

    const data = {
      index: 0,
      description: 'This is just a sample',
      completed: false
    };
    Operations.addToList(data);
    const tasks = document.querySelectorAll('#list li');
    expect(tasks).toHaveLength(1);
  })
 });