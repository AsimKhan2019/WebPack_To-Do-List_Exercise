/**
 * @jest-environment jsdom
 */

 import Operations from '../operations';
 import Storage from '../storage';

 describe('Updating the description', () => {
  test('Update value', () => {

    document.body.innerHTML = '<div>'
    + '  <ul id="list"></li>'
    + '</div>';
    
    const data = {
      index: 0, 
      description: 'This is just a test',
      completed: false
    };

    Operations.addToList(data);
    const getData = document.querySelector("#list li");
    const inputId = getData.children[1];
    const newData = "This is updated";
    inputId.value = newData;

    Operations.updateValue(inputId);
    Operations.getTaskList();

    const item = Storage.getData('taskList');
    expect(item[0].description).toBe(newData);
  })
 });

 describe('Updating the completed status', () => {
  test('Update status', () => {
    localStorage.clear();

    document.body.innerHTML = '<div>'
    + '  <ul id="list"></li>'
    + '</div>';
    
    const data = {
      index: 0, 
      description: 'This is just a test',
      completed: false
    };

    Operations.addToList(data);
    const getData = document.querySelector("#list li");
    const inputId = getData.children[0];
    inputId.checked = true;

    Operations.cbxHandler(inputId);
    Operations.getTaskList();

    const item = Storage.getData('taskList');
    expect(item[0].completed).toBe(true);
  })
 });