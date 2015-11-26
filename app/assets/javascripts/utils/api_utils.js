ApiUtil = {
  addParam: function(data) {
    FilterActions.addParam(data);
  },

  fetchPhotos: function(query) {
    $.ajax({
      type: 'GET',
      url: '/api/photos',
      data: query,
      dataType: "json",
      success: function(photos){
        PhotoActions.receiveAll(photos);
      },
      error: function() {
        debugger;
      }
    });
  },

  resetPhotos: function() {
    PhotoActions.resetPhotos();
  },

  nextPhotos: function() {
    $.ajax({
      type: 'GET',
      url: '/api/next',
      data: { url: PhotoStore.nextUrl(),
              searchSession: PhotoStore.searchSession() },
      dataType: "json",
      success: function(photos) {
        PhotoActions.receiveAll(photos);
      },
      error: function() {
        debugger;
      }
    });
  },

  searchPhotos: function(page) {
    PhotoActions.searchPhotos(page);
  },

};
