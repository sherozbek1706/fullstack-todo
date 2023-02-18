let todoLists = document.querySelector(".todo-list");
let form = document.querySelector(".form");

const renderTodo = () => {
  data.forEach((elem) => {
    const { id, checker, title } = elem;

    let div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
      <div class="checker"><span class=""><input type="checkbox" ${checker}></span></div>
      <span>${title}</span>
      <a href="#" class="float-right remove-todo-item"><i class="icon-close"></i></a>
    `;
    console.log(div);
    todoLists.append(div);
  });
};
renderTodo();



