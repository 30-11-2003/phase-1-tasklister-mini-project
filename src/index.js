document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector('form').addEventListener('submit',e)=
    e.preventDefault()
    console.log(e.target.new_description.value)
  
  }
);


function buildToDo(todo){
  let p= document.createElement("p");
  let btn = document.createElement ("button");
  btn.addEventListener('click',(handleDelete)=>{
    p.textContent= todo
    btn.textContent='x'
    document.querySelector('#create-task-form').appendChild(p)

  let dropdown =document.createElement("select")
dropdownValues.forEach((value, index) => {
  const option = document.createElement('option');
  option.value = `high priority${index + 1}`; // Assign a unique value to each option
  option.value = `medium${index + 1}`;
  option.value = `low${index + 1}`;
  option.text = value;
  dropdown.appendChild(option);

  dropdown.value[0].style.color="green";
  dropdown.value[1].style.color="yellow";
  dropdown.value[2].style.color="red";
  dropdown.sort()
});



function handleDelete (e){
  e.target.parentNode.remove()
  
}



document.createElement('form').addEventListener(submit, ()=>
form.textContent="user"

   
  )
