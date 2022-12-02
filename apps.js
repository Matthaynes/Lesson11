const list = document.querySelector('#book-list ul');
const forms = document.forms;
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

//add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();



 const value = addForm.querySelector('input[type="text"]').value;
 const li = document.createElement('li');
 const bookName = document.createElement('span');
 const deleteBtn = document.createElement('span');

 // add text content
 bookName.textContent = value;
 deleteBtn.textContent = 'delete';

 //add classes
 bookName.classList.add('name');
 deleteBtn.classList.add('delete');
 
 // append to DOM
 li.appendChild(bookName);
 li.appendChild(deleteBtn);
 list.appendChild(li);
 //list.insertBefore(li, list.querySelector('li:first-child'));
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    
  }
}