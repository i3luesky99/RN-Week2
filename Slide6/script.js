const url = "https://jsonplaceholder.typicode.com/posts/";
$.ajax({
  url: url,
  beforeSend: function (xhr) {
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
  },
}).done(function (data) {
  if (console && console.log) {
    console.log("Data :", data.slice(0, 100));
  }
});
