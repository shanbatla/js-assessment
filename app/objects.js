exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate : function(obj) {
    var result = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(key + ': ' + obj[key]);
      }
    }

    return result;
  }
};
