FilterActions = {
  addParam: function(data) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.ADD_PARAMS,
      data: data
    });
  },
};
