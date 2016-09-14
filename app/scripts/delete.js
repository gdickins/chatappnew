import $ from 'jquery';

function clearAPI() {
  console.log('clearing');
  $.ajax({
    url: 'http://tiny-za-server.herokuapp.com/collections/gabeChat/',
    type: 'GET',
    success: function(response){
      response.forEach(function(user){
        $.ajax({
          url: 'http://tiny-za-server.herokuapp.com/collections/gabeChat/' + user._id,
          type: 'DELETE',
          contentType: 'application/json',
          success: function(response) {
            console.log('DELETED', user._id);
          }
        });
      });
    }
  });
}

export default clearAPI;
