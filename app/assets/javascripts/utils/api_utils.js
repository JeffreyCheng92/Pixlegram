ApiUtil = {
  addParam: function(data) {
    FilterActions.addParam(data);
  },

  fetchPhotos: function(data) {
    $.ajax({
      type: 'GET',
      url: '/api/photos',
      query: data,
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
