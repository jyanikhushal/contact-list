


// Welcome Page Fuctionality..
const visitorPage = document.querySelector('.welcomePage')
const visitorNameBtn = document.querySelector('#visitorNameBtn')
const visitorName = document.querySelector('#visitorName')
const formTitle = document.querySelector('#formTitle')

function showVistorPage(){
    setTimeout(()=> visitorPage.style.opacity = 1,2000)
}
showVistorPage()

visitorName.onclick = function(){
    this.style.border = '2px solid #a6e9f5';
}

visitorNameBtn.addEventListener('click', enterName)
    function enterName(e){
        e.preventDefault()
        let visitorBtn = e.target;
        let vName = visitorBtn.parentElement.children[1].value

        if(visitorName.value === ''){
            visitorPage.style.opacity = 1;
            visitorName.style.border = '2px solid red'

        }else{
            visitorPage.style.display = 'none';
          formTitle.innerHTML = `Hey ${vName}, Add Your Contacts`
        }
    }



// selecting the dom ..................
const inputName = document.querySelector('#nameInput')
const inputNumber = document.querySelector('#numberInput')
const addBtn = document.querySelector('#addcontactBtn')
const contactList = document.querySelector('.contactList')
const msg = document.querySelector('.message')


inputNumber.addEventListener('click', function(){
    this.style.border = '2px solid #a6e9f5'
})
inputName.addEventListener('click', function(){
    this.style.border = '2px solid #a6e9f5'
})



// adding an eventlistener to the button ...........
addBtn.addEventListener('click', addcontactToList)
function addcontactToList(event){
    // preventing the form to submit...
    event.preventDefault();
    let btn = event.target;
    let contactName = btn.parentElement[0].value;
    let contactNumber = btn.parentElement[1].value;

    // checking if the value is not put - to alert a warning message...
    if(inputName.value === '' || inputNumber.value === ''){
        msg.classList.add('active')
       setTimeout(()=> msg.remove(), 3000)
       inputName.style.border = '2px solid red'
       inputNumber.style.border = '2px solid red'
    }
    //if the values/ the fields are filled, then add the information... 
    else{
        let newcontact = document.createElement('div')
        newcontact.classList.add('contact')
        newcontact.innerHTML = `<span class="contactName">${contactName}</span>
        <span class="contactNumber">${contactNumber}</span>
        `
        let deleteBtn = document.createElement('div')
        deleteBtn.classList.add('deletecontact')
        deleteBtn.innerHTML = `<i class='bx bx-x'></i>`
        newcontact.append(deleteBtn)
    // appending the new element to the main elemeny(contactList...
        contactList.append(newcontact)
        

      
        const newText = document.querySelector('.contactListTitle')
        newText.innerText = 'Added contact(s)'

        deleteBtn.onclick = function(){
            newcontact.classList.add('fall')
            newcontact.addEventListener('transitionend', function(){
                newcontact.remove()
            })
      }

        // Clear the fields...
        inputName.value = '';
        inputNumber.value = '';
        inputName.style.border = 'none';
        inputNumber.style.border = 'none';

        
    }
    
}







