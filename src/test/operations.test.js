/**
 * @jest-environment jsdom
 */

 import Operations from '../operations';

 describe('Testing for adding items', () => {
  test('Add 1 item to list', () => {
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

  test('Add 2 items to list', () => {
    localStorage.clear()
    document.body.innerHTML = 
    '<div>' +
    '  <ul id="list"></li>' +
    '</div>';

    const data = {
      index: 0,
      description: 'This is just a sample',
      completed: false
    };
    const data1 = {
      index: 1,
      description: 'This is just another sample',
      completed: false
    };
    Operations.addToList(data);
    Operations.addToList(data1);
    const tasks = document.querySelectorAll('#list li');
    expect(tasks).toHaveLength(2);
  })
 });