export default class Storage {
  static saveData(dataObj) {
    const dataString = JSON.stringify(dataObj);
    localStorage.setItem('taskList', dataString);
  }

  static getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}