
fetch("user.JSON")
.then(response => response.json())
.then(data => console.log(data))