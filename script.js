const input = document.querySelector(".todo_input");
const add_button = document.querySelector(".add_button");
const downside_bar = document.querySelector(".downside_bar")
add_button.addEventListener("click",()=>{
    // console.log("кнопка нажата")
    const input_value = input.value.trim();
    if(input_value === ''){
        console.log('error')
        return;
    }
    const append_div = document.createElement('div')
    append_div.classList.add("task_div");
    append_div.textContent = input_value;

    const append_button = document.createElement('button')
    append_button.classList.add("delete_button");
    append_button.textContent = "del"
    append_button.addEventListener("click", ()=>{
        console.log("click clack")
        append_div.remove()
    })

    append_div.appendChild(append_button)
    downside_bar.appendChild(append_div)
    input.value = ''
})