// import {v4 as uuidV4} from 'uuid'

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole); // a function take a function as parameter

type ByeFunction = (a: string) => void;
function sayBye(fn: ByeFunction){
    fn("Goodbye!")
}

// type Task = { id:string, title: string, completed: boolean, createdAt: Date};
type Task = { title: string, completed: boolean, createdAt: Date};

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tbody = document.querySelector<HTMLTableElement>("tbody")

form?.addEventListener("submit", e => {
    e.preventDefault()

    if (input?.value == "" || input?.value == null) return

    const newTask: Task = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    }

    addListItem(newTask)
    addItemtoTable(newTask)
    input.value = ""
})

function addItemtoTable(task: Task){
    const row = document.createElement("tr")
    const contentCell = document.createElement("td")
    // const statusCell = document.createElement("td")
    contentCell.append(task.title)
    row.append(contentCell)
    tbody?.append(row)
}

function addListItem(task: Task){
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}
