(function(root){
  var _photos = [];
  var _nextUrl = "";
  var _searchSession = "";
  var CHANGE_EVENT = "change";
  var _photoCollection = [];

  var resetPhotos = function(photos) {
    _photos = photos;
    _photoCollection = _photoCollection.concat(photos);
    PhotoStore.emit(CHANGE_EVENT);
  };

  var emptyPhotos = function() {
    _photos = [];
    emptyCollection();
    PhotoStore.emit(CHANGE_EVENT);
  };

  var emptyCollection = function() {
    _photoCollection = [];
    _nextUrl = "";
    _searchSession = "";
  };

  var setNextPage = function(url, searchSession) {
    _nextUrl = url;
    _searchSession = searchSession;
  };

  root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _photos.slice(0);
    },

    nextUrl: function() {
      return _nextUrl;
    },

    searchSession: function() {
      return _searchSession;
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
          if (_searchSession !== payload.photos.search_session) {
            emptyCollection();
          }
          resetPhotos(payload.photos.data);
          setNextPage(payload.photos.pagination.next_url, payload.photos.search_session);
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
