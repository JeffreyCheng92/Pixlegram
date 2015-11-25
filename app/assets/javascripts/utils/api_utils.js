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
};
