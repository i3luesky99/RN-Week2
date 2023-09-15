const url = "https://jsonplaceholder.typicode.com/posts/";
const xhr = new XMLHttpRequest();
xhr.open("GET", url + "/2", true);
xhr.onload = function () {
  const users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);
