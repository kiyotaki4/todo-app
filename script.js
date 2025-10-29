const input = document.querySelector(".todo_input");
const add_button = document.querySelector(".add_button");
const downside_bar = document.querySelector(".downside_bar")

//локал стораге
window.addEventListener('load',()=>{
    const a = JSON.parse(localStorage.getItem('y'))||[]

    a.forEach(jelly=>createTask(jelly.text,jelly.id))
})


//функция кнопки
add_button.addEventListener("click",()=>{
    // console.log("кнопка нажата")
    const input_value = input.value.trim();
    if(input_value === ''){
        console.log('error')
        return;
    }
   
    const id = Date.now()
    createTask(input_value,id);
    saveTask(input_value,id)
    input.value = ''
})
//создание конейтнера задачи и кнопки удаления
const createTask = ((input_value,id,save)=>{
    const append_div = document.createElement('div')
    append_div.classList.add("task_div");
    append_div.textContent = input_value;

    const append_button = document.createElement('button')
    append_button.classList.add("delete_button");
    append_button.textContent = "del"
    append_button.addEventListener("click", ()=>{
        removeTask(id)
        append_div.remove()

    })

    append_div.appendChild(append_button)
    downside_bar.appendChild(append_div)
})
const saveTask = ((input_value,id)=>{
    const a = JSON.parse(localStorage.getItem('y'))||[]
    a.push({text:input_value,id:id,done:false})
    localStorage.setItem("y",JSON.stringify(a))
})
const removeTask = ((id)=>{
    const a = JSON.parse(localStorage.getItem('y'))||[]
    filtered_a = a.filter(y=>y.id!=id)
    localStorage.setItem("y",JSON.stringify(filtered_a))
})