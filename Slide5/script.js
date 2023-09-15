const url = 'https://jsonplaceholder.typicode.com/posts/';
function getData() {
  $.ajax({ method: "GET", url: url, dataType: "json" })
    .done(function (data) {
      console.log(data);
    })
    .fail(function (error) {
      console.log(error);
    });
}
getData();
