window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};
//Basic setter function. Essentially just a thin wrapper around the internal storage's setItem function.
LocalStorageManager.prototype.store = function(key, value) {
  this.storage.setItem(key, value);
}
//Basic getter function. Just a wrapper around the internal storage's getItem function.
LocalStorageManager.prototype.get = function(key) {
  return this.storage.getItem(key);
}
/*DEPRECATED: This functionality has been added to the standard getter function. Expect a result or undefined when a requested item does not exist.
//Returns an item if it exists, 0 otherwise. Good for use when you aren't sure an item exists.
LocalStorageManager.prototype.seek = function(key) {
  return this.storage.getItem(key) || 0;
}
*/
