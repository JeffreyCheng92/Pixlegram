(function(root){
  _params = {};
  var CHANGE_EVENT = "change";

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return $.extend(true, {}, _params);
    },

    add: function(data) {
      var params = Object.keys(data);
      params.forEach(function(key) {
        _params[key] = data[key];
      });
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case FilterConstants.ADD_PARAMS:
          FilterStore.add(payload.data);
          break;
        case FilterConstants._:
          break;

        default:
          // No-op
      }
    }),
  });
})(this);
