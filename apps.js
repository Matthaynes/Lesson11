const list = document.querySelector('#show-list ul');
const forms = document.forms;
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

//add books
const addForm = forms['add-show'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();



 const value = addForm.querySelector('input[type="text"]').value;
 const li = document.createElement('li');
 const showName = document.createElement('span');
 const deleteBtn = document.createElement('span');

 // add text content
 showName.textContent = value;
 deleteBtn.textContent = 'delete';

 //add classes
 showName.classList.add('name');
 deleteBtn.classList.add('delete');
 
 // append to DOM
 li.appendChild(showName);
 li.appendChild(deleteBtn);
 list.appendChild(li);
 //list.insertBefore(li, list.querySelector('li:first-child'));
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
list.style.display = "none";
  }else{
    list.style.display = "initial";
  }
});
const searchBar = document.forms['search-shows'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const shows = list.getElementsByTagName('li');
  Array.from(shows).forEach(function(show){
const title = show.firstElementChild.textContent;
if(title.toLowerCase().indexOf(term)!=-1){
  show.style.display = "block";
} else {
  show.style.display= "none";
}
})
});
