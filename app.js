
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const calcDisplay = document.getElementById("calcDisplay");
const historyList = document.getElementById("historyList");

let historyItems = [];




// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText !== "") {
//     const taskId = Date.now().toString();
//     const taskItem = `
//       <li id="${taskId}" data-completed="false">
//         <span>${taskText}</span>
//         <button onclick="toggleCompleted('${taskId}')">Mark Completed</button>
//         <button onclick="deleteTask('${taskId}')">Delete</button>
//       </li>
//     `;
//     taskList.insertAdjacentHTML("beforeend", taskItem);
//     taskInput.value = "";
//   }
// }

// function deleteTask(taskId) {
//   const task = document.getElementById(taskId);
//   task.remove();
// }

// function toggleCompleted(taskId) {
//   const task = document.getElementById(taskId);
//   const completed = task.getAttribute("data-completed");
//   task.setAttribute("data-completed", completed === "false" ? "true" : "false");
// }

// function clearCompleted() {
//   const tasks = taskList.querySelectorAll("li[data-completed='true']");
//   tasks.forEach(task => task.remove());
// }

// function showAll() {
//   const tasks = taskList.querySelectorAll("li");
//   tasks.forEach(task => task.classList.remove("hidden"));
// }

// function showActive() {
//   const tasks = taskList.querySelectorAll("li");
//   tasks.forEach(task => {
//     const completed = task.getAttribute("data-completed");
//     if (completed === "true") {
//       task.classList.add("hidden");
//     } else {
//       task.classList.remove("hidden");
//     }
//   });
// }

// function showCompleted() {
//   const tasks = taskList.querySelectorAll("li");
//   tasks.forEach(task => {
//     const completed = task.getAttribute("data-completed");
//     if (completed === "true") {
//       task.classList.remove("hidden");
//     } else {
//       task.classList.add("hidden");
//     }
//   });
// }


$(document).ready(function() {
  // Function to add a new task
  function addTask() {
    const taskInput = $(".todo-list-input");
    const taskText = taskInput.val().trim();
    if (taskText !== "") {
      const taskItem = `
        <li>
          <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> ${taskText} <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
        </li>
      `;
      $(".todo-list").prepend(taskItem);
      taskInput.val("");
    }
  }

  // Function to delete a task
  $(document).on("click", ".remove", function() {
    $(this).parent().remove();
  });

  // Function to mark a task as completed
  $(document).on("change", ".checkbox", function() {
    const task = $(this).parent().parent();
    task.toggleClass("completed");
  });

  // Function to clear completed tasks
  function clearCompleted() {
    $(".completed").remove();
  }

  // Function to show all tasks
  function showAll() {
    $(".todo-list li").show();
  }

  // Function to show active tasks
  function showActive() {
    $(".todo-list li.completed").hide();
    $(".todo-list li:not(.completed)").show();
  }

  // Function to show completed tasks
  function showCompleted() {
    $(".todo-list li:not(.completed)").hide();
    $(".todo-list li.completed").show();
  }

  // Click event for the "Add" button
  $(".todo-list-add-btn").on("click", addTask);

  // Click event for the "Clear Completed" button
  $(document).on("click", "#clearCompletedBtn", clearCompleted);

  // Click event for the filter buttons
  $(document).on("click", "#showAllBtn", showAll);
  $(document).on("click", "#showActiveBtn", showActive);
  $(document).on("click", "#showCompletedBtn", showCompleted);
});

// ---------------------------------------------------------------------------


// calculator
function calculate() {
  try {
    const result = eval(calcDisplay.value);
    historyItems.push(`${calcDisplay.value} = ${result}`);
    updateHistoryList();
    calcDisplay.value = result;
  } catch (error) {
    calcDisplay.value = "Error";
  }
}

function updateHistoryList() {
  historyList.innerHTML = "";
  for (let i = historyItems.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.innerText = historyItems[i];
    historyList.appendChild(li);
  }
}

// ----------------------------------------------------------------------

// profile
function updateProfile() {
    const userProfilePicture = document.querySelector(".profile-picture img");
    const userName = document.querySelector(".profile-details p:nth-child(1)");
    const userEmail = document.querySelector(".profile-details p:nth-child(2)");
  
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
      profilePicture: "path_to_your_image.jpg" // Replace this with the path to your profile image
    };
  
    userProfilePicture.src = user.profilePicture;
    userName.textContent = `Name: ${user.name}`;
    userEmail.textContent = `Email: ${user.email}`;
  }
  
  updateProfile();
//   ----------------------------------------------------------------------

// Get the input element and the list container
const todoInput = document.getElementById("exampleFormControlInput1");
const listContainer = document.getElementById("list1");

// Add an event listener to the "Add" button
document.querySelector(".btn-primary").addEventListener("click", addTodo);

function addTodo() {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") return;

  const newTodoItem = `
    <ul class="list-group list-group-horizontal rounded-0">
      <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <div class="form-check">
          <input class="form-check-input me-0" type="checkbox" value="" aria-label="..." />
        </div>
      </li>
      <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <p class="lead fw-normal mb-0">${newTodo}</p>
      </li>
      <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div class="d-flex flex-row justify-content-end mb-1">
          <a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo">
            <i class="fas fa-pencil-alt me-3"></i>
          </a>
          <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo" onclick="deleteTodo(this)">
            <i class="fas fa-trash-alt"></i>
          </a>
        </div>
        <div class="text-end text-muted">
          <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
            <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>${getCurrentDate()}</p>
          </a>
        </div>
      </li>
    </ul>
  `;

  // Append the new todo item to the list container
  listContainer.innerHTML += newTodoItem;

  // Clear the input field after adding the todo
  todoInput.value = "";
}

function deleteTodo(deleteButton) {
  const todoItem = deleteButton.closest(".list-group-horizontal");
  todoItem.remove();
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return currentDate.toLocaleDateString('en-US', options);
}
// ---------------------------------------------------------------------------


