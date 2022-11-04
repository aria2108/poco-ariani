let toDolist;
let taskList;
let container = document.getElementById("container");
let taskItem;
let delButton;
let listArray = [];
let markAsDone;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0; i < data.length; i++) {
      let item = data[i];
      //console.log(item.title)
      toDolist = document.createElement("ul");
      container.appendChild(toDolist);

      taskList = document.createElement("li");
      toDolist.appendChild(taskList);

      textSpan = document.createElement("span");
      markAsDone = document.createElement("input");
      markAsDone.setAttribute("type", "checkbox");
      markAsDone.className = "done"
      
      markAsDone.addEventListener("change", function (event){
        let li = event.target.parentNode.parentNode
        if (event.target.checked) {
          li.style.textDecoration = "line-through"
        } else {
          li.style.textDecoration = "none"
        }
      })

      toDolist.appendChild(markAsDone);
      taskItem = document.createTextNode(item.title);
      textSpan.appendChild(markAsDone);
      textSpan.appendChild(taskItem);
      taskList.appendChild(textSpan);

      delButton = document.createElement("span");
      delButton.textContent = "\u00D7";
      delButton.className = "close";
      taskList.appendChild(delButton);
      }

      var close = document.getElementsByClassName("close");

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
    
  });


function addNewTask() {
  toDolist = document.createElement("ul");
  container.appendChild(toDolist);

  taskList = document.createElement("li");
  toDolist.appendChild(taskList);

  textSpan = document.createElement("span");
  markAsDone = document.createElement("input");
  markAsDone.setAttribute("type", "checkbox");
  toDolist.appendChild(markAsDone);

  taskItem = document.createTextNode(document.getElementById("new-task").value);
  taskList.appendChild(textSpan);
  textSpan.appendChild(markAsDone);
  textSpan.appendChild(taskItem);


  delButton = document.createElement("span");
  delButton.textContent = "\u00D7";
  delButton.className = "close";
  taskList.appendChild(delButton);

  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
