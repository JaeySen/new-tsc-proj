"use strict";
// import {v4 as uuidV4} from 'uuid'
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole); // a function take a function as parameter
function sayBye(fn) {
    fn("Goodbye!");
}
const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-title");
const tbody = document.querySelector("tbody");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const newTask = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(newTask);
    addItemtoTable(newTask);
    input.value = "";
});
function addItemtoTable(task) {
    const row = document.createElement("tr");
    const contentCell = document.createElement("td");
    // const statusCell = document.createElement("td")
    contentCell.append(task.title);
    row.append(contentCell);
    tbody === null || tbody === void 0 ? void 0 : tbody.append(row);
}
function addListItem(task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
