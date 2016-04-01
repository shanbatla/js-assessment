exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var defer = $.Deferred();
    
    setTimeout(function() {
      defer.resolve(value);
    }, 0);

    setTimeout(function() {
      defer.reject(value);
    }, 0);
    
    return defer.promise();
  },

  manipulateRemoteData : function(url) {
    var defer = $.Deferred();

    $.ajax(url).then(function(data) {
      var result = [];
      _.each(data.people, function(person) {
        result.push(person.name)
      });
      result.sort();
      defer.resolve(result);
    });

    return defer.promise();
  }
};
