exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    // var i;
    // var arrayLength = arr.length;
    // for (i = 0; i < arrayLength; i++) {
    //   if (arr[i] === item) {
    //     return i;
    //   }
    // }
    // return -1;

    // functional answer
    var result = -1;

    _.each(arr, function(i, index) {
      if (item === i && result === -1) {
        result = index;
      }
    });

    return result;
  },

  sum : function(arr) {
    var result = 0;

    var i;
    var arrayLength = arr.length;
    for (i = 0; i < arrayLength; i++) {
      result += arr[i];
    }

    return result;
  },

  remove : function(arr, item) {
    var result = [];

    var i;
    var arrayLength = arr.length;
    for (i = 0; i < arrayLength; i++) {
      if (item !== arr[i]) {
        result.push(arr[i]);
      }
    } 

    return result;
  },

  removeWithoutCopy : function(arr, item) {
    var i;
    var arrayLength = arr.length;
    for (i = 0; i < arrayLength; i++) {
      if (item === arr[i]) {
        arr.splice(i, 1);
        arrayLength = arrayLength - 1;
        i = i - 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice((arr.length - 1), 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var result = arr1.concat(arr2);
    return result;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;

    var i;
    var arrayLength = arr.length;
    for (i = 0; i < arrayLength; i++) {
      if (item === arr[i]) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var seen = {};
    var duplicates = [];

    var i;
    var arrayLength = arr.length;
    for (i = 0; i < arrayLength; i++) {
      if (seen[arr[i]]) {
        seen[arr[i]] = seen[arr[i]] + 1;
      } else {
        seen[arr[i]] = 1;
      }
    }

    var key;
    for (key in seen) {
      if (seen.hasOwnProperty(key) && seen[key] > 1) {
        duplicates.push(parseInt(key));
      }
    }

    return duplicates;
  },

  square : function(arr) {
    // var result = [];

    // _.each(arr, function(item) {
    //   result.push(item * item)
    // });

    // return result;

    // functional answer
    return _.map(arr, function(item) {
      return item * item;
    })
  },

  findAllOccurrences : function(arr, target) {
    var result = [];

    var i;
    var arrayLength = arr.length;
    for (i = 0; i < arrayLength; i++) {
      if (target === arr[i]) {
        result.push(i);
      }
    }
    return result;

  }
};
