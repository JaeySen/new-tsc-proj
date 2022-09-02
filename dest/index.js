"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-title");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const task = {
        id: (0, uuid_1.v4)(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
});
