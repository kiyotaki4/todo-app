const input = document.querySelector('.todo_input')
const addButton = document.querySelector('.add_button')
const downsideBar = document.querySelector('.downside_bar')

// загружаем сохранённые задачи при старте
window.addEventListener('load', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
  savedTasks.forEach(text => createTask(text))
})

// создаёт задачу на экране и (по желанию) сохраняет её
function createTask(text, save = false) {
  const taskDiv = document.createElement('div')
  taskDiv.classList.add('task_div')
  taskDiv.textContent = text

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('delete_button')
  deleteButton.textContent = 'del'

  deleteButton.addEventListener('click', () => {
    taskDiv.remove()
    removeTask(text)
  })

  taskDiv.appendChild(deleteButton)
  downsideBar.appendChild(taskDiv)

  if (save) saveTask(text)
}

// сохраняем задачу в localStorage
function saveTask(text) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.push(text)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// удаляем задачу из localStorage
function removeTask(text) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  const updated = tasks.filter(task => task !== text)
  localStorage.setItem('tasks', JSON.stringify(updated))
}

// при клике на "Add"
addButton.addEventListener('click', () => {
  const taskText = input.value.trim()
  if (taskText === '') return
  createTask(taskText, true)
  input.value = ''
})