const button_add = document.querySelector(".Button-Add")
const Input = document.querySelector(".Input_first")
const Lu = document.getElementById("Task")

Array_list = []

const Show_li = (() => {

  let NovaLi = ``

  Array_list.forEach((element, index) => {

    NovaLi = NovaLi + `<li class="Tasks ${Array_list[index].Complete}">

  <button class="rocket-icon ${Array_list[index].Complete}" onclick="Rocket_button (${index})" > <i class="fa-solid fa-rocket"></i></button>

  <button class="trash_Icon" onclick="Trash_button ( ${index} )" ><i class="fa-solid fa-trash"></i></button>

<p id= "${Array_list[index].Complete}" > ${element.Task} </p>
  </li>`



  })
  Lu.innerHTML = NovaLi
})

const Array_object = () => {


  Array_list.push({
    Task: Input.value,
    Complete: false

  })
  Show_li()
}

const Trash_button = ((index) => {
  Array_list.splice(index, 1)

  Show_li()
})


const Rocket_button = ((index) => {
  Array_list[index].Complete = !Array_list[index].Complete
  console.log(Array_list[index])

  Show_li()
})

button_add.addEventListener('click', Array_object)