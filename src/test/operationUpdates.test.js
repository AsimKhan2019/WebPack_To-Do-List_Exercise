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
      completed: false,
    };

    Operations.addToList(data);
    const getData = document.querySelector('#list li');
    const inputId = getData.children[1];
    const newData = 'This is updated';
    inputId.value = newData;

    Operations.updateValue(inputId);
    Operations.getTaskList();

    const item = Storage.getData('taskList');
    expect(item[0].description).toBe(newData);
  });

  test('Update 2 values', () => {
    localStorage.clear();

    document.body.innerHTML = '<div>'
    + '  <ul id="list"></li>'
    + '</div>';

    const data = {
      index: 0,
      description: 'This is just a test',
      completed: false,
    };
    const data1 = {
      index: 1,
      description: 'Anything',
      completed: false,
    };

    Operations.addToList(data);
    Operations.addToList(data1);
    const getData = document.querySelectorAll('#list li');
    const inputId0 = getData[0].children[1];
    const inputId1 = getData[1].children[1];
    inputId0.value = 'This is updated';
    inputId1.value = 'This is not updated';

    Operations.updateValue(inputId0);
    Operations.updateValue(inputId1);
    Operations.getTaskList();

    const item = Storage.getData('taskList');
    expect(item[0].description + item[1].description).toBe('This is updatedThis is not updated');
  });
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
      completed: false,
    };

    Operations.addToList(data);
    const getData = document.querySelector('#list li');
    const inputId = getData.children[0];
    inputId.checked = true;

    Operations.cbxHandler(inputId);
    Operations.getTaskList();

    const item = Storage.getData('taskList');
    expect(item[0].completed).toBe(true);
  });
});

describe('Clearing all completed', () => {
  test('Update status', () => {
    localStorage.clear();

    document.body.innerHTML = '<div>'
    + '  <ul id="list"></li>'
    + '</div>';

    const data = {
      index: 0,
      description: 'This is just a test',
      completed: true,
    };
    const data1 = {
      index: 1,
      description: 'This is just a test',
      completed: true,
    };
    const data2 = {
      index: 2,
      description: 'This is just a test',
      completed: false,
    };

    Operations.addToList(data);
    Operations.addToList(data1);
    Operations.addToList(data2);

    Operations.removeFromList();
    const item = Storage.getData('taskList');
    expect(item[0].completed).toBe(false);
  });

  test('Update status', () => {
    localStorage.clear();

    document.body.innerHTML = '<div>'
    + '  <ul id="list"></li>'
    + '</div>';

    const data = {
      index: 0,
      description: 'This is just a test',
      completed: false,
    };
    const data1 = {
      index: 1,
      description: 'This is just a test',
      completed: true,
    };
    const data2 = {
      index: 2,
      description: 'This is just a test',
      completed: false,
    };

    Operations.addToList(data);
    Operations.addToList(data1);
    Operations.addToList(data2);

    Operations.removeFromList();
    const item = Storage.getData('taskList');
    expect(item[0].completed && item[1].completed).toBe(false);
  });
});