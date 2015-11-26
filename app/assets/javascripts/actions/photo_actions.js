PhotoActions = {
  receiveAll: function(photos){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  resetPhotos: function() {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_EMPTY,
    });
  },

  searchPhotos: function(page) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_SEARCH,
      page: page
    });
  },
};
