import "./style.css";
import plus_img from "./images/plus.svg"

function initDefaults() {
    // Skeleton
    const body = document.querySelector("body");
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    const main = document.createElement("div");
    main.classList.add("main");
    body.appendChild(sidebar);
    body.appendChild(main);

    // Custom Deletes
    const custom_menu = document.createElement("div");
    custom_menu.classList.add("custom_menu");
    custom_menu.textContent = "Delete";
    body.appendChild(custom_menu);

    // Brings up custom context menu on right-click
    var target_element = null;
    // Default is nothing right-clicked
    document.addEventListener("contextmenu", (event) => {
        target_element = event.target;
        console.log(target_element);
        while (target_element.nodeName != 'BODY') {
            if (target_element.classList.contains('deletable')) {
                event.preventDefault();
                custom_menu.style.top = `${event.clientY}px`;
                custom_menu.style.left = `${event.clientX}px`;
                custom_menu.style.display = 'block';
                // IMPORTANT to break as keeps target_element on target
                break;
            }
            target_element = target_element.parentElement;
        }
    });

    // Closes context menu on left click
    document.addEventListener("click", (event) => {
        if (!event.target.closest('.custom_menu')) {
            custom_menu.style.display = 'none';
        }
    });

    // Allows elements with .deletable class to be deleted
    // Need forEach to access each element in NodeList of elements
    document.querySelector('.custom_menu').addEventListener('click', () => {
        
        if (target_element) {
            target_element.remove();
            custom_menu.style.display = 'none';
        }
    });
}

// Sidebar has groups with projects in them, Main Page has tasks with phases with todos in them
// Groups, Projects, Tasks, Phases, and Todos all deletable

// Sidebar Functions

function addProject(group, project_name) {
    const project = document.createElement("button");
    const text = document.createElement("input");
    text.setAttribute('readonly', 'true');
    text.value = project_name;
    project.appendChild(text);
    project.classList.add("project", "deletable");

    // Allows text content editing when double click
    text.addEventListener('dblclick', () => {
        text.removeAttribute('readonly');
        text.focus();
        // Focuses input onto project so user doesn't need to click again
        text.select();
        // Selects all text in project name
    });

    // Stops text content editing when click away
    text.addEventListener('blur', () => {
        text.setAttribute('readonly', 'true');
    });

    group.appendChild(project);
}

function addGroup(group_name, project_name) {
    const sidebar = document.querySelector(".sidebar");

    const group = document.createElement("div");
    group.classList.add("group", "deletable");

    const label = document.createElement("div");
    label.classList.add("label");

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = group_name;

    label.appendChild(text);

    const add = document.createElement("button");
    add.classList.add("add");
    add.addEventListener("click", () => { addProject(group, "Untitled") });
    
    const plus = document.createElement("img");
    plus.classList.add("plus");
    plus.src = plus_img;

    add.appendChild(plus);
    label.appendChild(add);

    group.appendChild(label);

    addProject(group, project_name);

    sidebar.appendChild(group);
}

// Main Page Functions

function addTask(task_name, phase_name) {
    const main = document.querySelector(".main");
    
    const task = document.createElement("div");
    task.classList.add("task", "deletable");
    main.appendChild(task);
    
    const label = document.createElement("div");
    label.classList.add("label");

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = task_name;

    label.appendChild(text);

    const add = document.createElement("button");
    add.classList.add("add");
    
    const plus = document.createElement("img");
    plus.classList.add("plus");
    plus.src = plus_img;

    add.appendChild(plus);
    label.appendChild(add);

    task.appendChild(label);

    const phase = document.createElement("div");
    phase.classList.add("phase", "deletable");
    task.appendChild(phase);

    const div = document.createElement("div");
    div.textContent = phase_name;
    phase.appendChild(div);

    const todo = document.createElement("button");
    todo.classList.add("todo", "deletable");
    phase.appendChild(todo);
}

function defaultSetup() {
    initDefaults();
    addGroup("My Tasks", "Home");
    addTask("Furniture", "Not Done");
    addTask("Gardening", "Not Done");
}

defaultSetup();