exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var closure = function(val) {
      return function() {
        return fn(val);
      };
    };

    return _.map(arr, function(item) {
      return closure(item);
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments : function() {
    var args = Array.prototype.slice.call(arguments);

    return _.reduce(args, function(memo, argument) {
      return memo + argument;
    }, 0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args1 = Array.prototype.slice.call(arguments);
    args1.shift();

    return function() {
      var args2 = Array.prototype.slice.call(arguments);
      var totalArgs = args1.concat(args2);
      return fn.apply(null, totalArgs);
    }
  },

  curryIt : function(fn) { 
    // function applyArguments(fn, arguments) {
    //   return fn.apply(null, arguments);
    // }

    // function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
    //   return function (currentArgument) {
    //     accumulatedArguments.push(currentArgument);

    //     var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

    //     if (allArgumentsProvided) {
    //       return applyArguments(fn, accumulatedArguments);
    //     } else {
    //       return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
    //     }
    //   };
    // }

    // return getArgumentAccumulator([], fn.length);
  }
};
