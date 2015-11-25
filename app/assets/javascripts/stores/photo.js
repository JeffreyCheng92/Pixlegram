(function(root){
  var _photos = [];
  var CHANGE_EVENT = "change";

  var resetPhotos = function(photos) {
    _photos = photos;
    PhotoStore.emit(CHANGE_EVENT);
  };

  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _photos.slice(0);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

        case PhotoConstants.PHOTOS_RECEIVED:
          resetPhotos(payload.photos);
          break;
        default:
          // No-op
      }
    }),

  });
})(this);
