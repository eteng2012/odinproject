import './style.css';
import restaurant from './restaurant.jpeg';
import profile from './profile.jpeg';
import icon_1 from './icon-1.jpeg';
import icon_2 from './icon-2.jpeg';
import icon_3 from './icon-3.jpeg';
import output from './output.txt';
import social_1 from './social_1.jpeg';
import social_2 from './social_2.jpeg';
import social_3 from './social_3.jpeg';

function home() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    // Add home element
    const home = document.createElement('div');
    home.classList.add('home');

    // Add Header
    const header = document.createElement('div');
    header.classList.add('header')
    header.textContent = "Pastel Plates"
    home.appendChild(header);

    // Add Body
    const body = document.createElement('div');
    body.classList.add('body');

    // Add Image
    const img = document.createElement('img');
    img.src = restaurant;
    body.appendChild(img);

    // Add Text
    const text = document.createElement('div');
    text.classList.add('text');
    const div1 = document.createElement('div');
    div1.textContent = "Welcome to Pastel Plates~";
    text.appendChild(div1);
    const div2 = document.createElement('div');
    div2.textContent = "The yummiest meals this side of the color spectrum!";
    text.appendChild(div2);
    body.appendChild(text);

    home.appendChild(body);
    content.appendChild(home);
}

function about() {
    const icon_array = [icon_1, icon_2, icon_3];
    // BRACKETS FOR ARRAY!!!
    const content = document.querySelector('#content');
    content.innerHTML = "";

    // Add about element
    const about = document.createElement('div');
    about.classList.add('about');

    // Add Header
    const header = document.createElement('div');
    header.classList.add('header')
    header.textContent = "Our History"
    about.appendChild(header);

    // Add grid element

    const grid = document.createElement('div');
    grid.classList.add('grid');

    // Add elements in grid

    for (let i = 0; i < 3; i++) {

        const gridItem = document.createElement('div');
        
        // Add a class to the new div
        gridItem.classList.add(`grid-item`);
        // This is for different class for each item
        //gridItem.classList.add(`grid-item-${i}`);
        const img_container = document.createElement('div');
        img_container.classList.add('img_container')
        const img = document.createElement('img');
        img.src = icon_array[i];
        img_container.appendChild(img);
        gridItem.appendChild(img_container);

        const text = document.createElement('text');
        text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos tempora, magni, ducimus minima excepturi facere nobis inventore officiis assumenda expedita architecto soluta? Eos repudiandae porro perferendis mollitia, soluta repellat.";
        gridItem.appendChild(text);

        grid.appendChild(gridItem);
    }

    about.appendChild(grid);
    content.appendChild(about);
}

function menu() {
    const icon_array = [icon_1, icon_2, icon_3];
    const item_array = ['Pizza', "Sandwiches", "Desserts"];
    // BRACKETS FOR ARRAY!!!
    const content = document.querySelector('#content');
    content.innerHTML = "";

    // Add about element
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Add Header
    const header = document.createElement('div');
    header.classList.add('header')
    header.textContent = "Our Menu"
    menu.appendChild(header);

    // Add grid element

    const grid = document.createElement('div');
    grid.classList.add('grid');

    // Add elements in grid

    for (let i = 0; i < 3; i++) {

        const gridItem = document.createElement('div');
        
        // Add a class to the new div
        gridItem.classList.add(`grid-item`);
        // This is for different class for each item
        //gridItem.classList.add(`grid-item-${i}`);
        const img_container = document.createElement('div');
        img_container.classList.add('img_container')
        const img = document.createElement('img');
        img.src = icon_array[i];
        img_container.appendChild(img);
        gridItem.appendChild(img_container);

        const text = document.createElement('div');
        text.classList.add("text");
        const text_1 = document.createElement('div');
        const text_2 = document.createElement('div');
        text_1.textContent = item_array[i];
        text_2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos tempora, magni, ducimus minima excepturi facere nobis inventore officiis assumenda expedita architecto soluta? Eos repudiandae porro perferendis mollitia, soluta repellat.";
        text.appendChild(text_1);
        text.appendChild(text_2);
        gridItem.appendChild(text);

        grid.appendChild(gridItem);
    }

    menu.appendChild(grid);
    content.appendChild(menu);
}

function contact() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    // Add about element
    const contact = document.createElement('div');
    contact.classList.add('contact');

    // Add Header
    const header = document.createElement('div');
    header.classList.add('header')
    header.textContent = "Contact Us!"
    contact.appendChild(header);

    const social_icons = [social_1, social_2, social_3];
    const social_text = ["X/Twitter", "Instagram", "Tiktok"];
    const grid = document.createElement("div");
    grid.classList.add("grid");

    const form = document.createElement("form");
    form.action = output;
    form.method = "post";

    const label = document.createElement("label");
    label.for = "feedback";
    label.textContent = "Please Give us Feedback!"
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "feedback";
    input.name = "feedback";
    input.required = true;
    form.appendChild(input);

    const button_div = document.createElement("div");
    button_div.classList.add("button_div");
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit Feedback"
    button.addEventListener("click", (event) => { event.preventDefault(); input.value = ""; });
    // Use .value, not innerHTML or textContent
    button_div.appendChild(button);
    form.appendChild(button_div);

    grid.appendChild(form);

    for (let i=0; i<3; i++) {
        const social = document.createElement("div");
        social.classList.add("social");
        const img = document.createElement('img');
        img.src = social_icons[i];
        social.appendChild(img);
        const text = document.createElement('div');
        text.textContent = `Follow us on ${social_text[i]}`;
        social.appendChild(text);

        grid.appendChild(social);
    }
    contact.appendChild(grid);
    content.appendChild(contact);
}

home();
const buttons = document.querySelectorAll('button');
const home_button = buttons[0];
home_button.addEventListener("click", () => { home() });
const about_button = buttons[1];
about_button.addEventListener("click", () => { about() });
const menu_button = buttons[2];
menu_button.addEventListener("click", () => { menu() });
const contact_button = buttons[3];
contact_button.addEventListener("click", () => { contact() });