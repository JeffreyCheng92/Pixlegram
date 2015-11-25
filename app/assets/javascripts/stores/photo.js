(function(root){
  var _photos = [];
  var _nextUrl = "";
  var CHANGE_EVENT = "change";

  var resetPhotos = function(photos) {
    _photos = photos;
    PhotoStore.emit(CHANGE_EVENT);
  };

  var emptyPhotos = function() {
    _photos = [];
    PhotoStore.emit(CHANGE_EVENT);
  };

  var setNextPage = function(url) {
    _nextUrl = url;
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
          resetPhotos(payload.photos.data);
          setNextPage(payload.photos.pagination.next_url);
          break;
        case PhotoConstants.PHOTOS_EMPTY:
          emptyPhotos();
          break;
        default:
          // No-op
      }
    }),

  });
})(this);
