'use strict'


function onMenuBtn() {
    doDarkScreen()
    document.body.classList.toggle('menu-open')
}


function onRead() {
    document.querySelector('.screen').addEventListener('click', onCloseModal);
    doDarkScreen()
    document.body.classList.toggle('modal-show')
    var elContent = document.querySelector('.modal-content');
    elContent.innerHTML =
        `<h2 class="modal-title">Join us to get access to the latest stories!</h2>
         <form onsubmit="onSubmit(event)" class="modal-form flex algin-items-center">
            <label for="email">Your email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <button>Go</button>
         </form>`
}

function onSubmit(ev) {
    var elContent = document.querySelector('.modal-content');
    elContent.innerHTML =
        `<p class="modal-tnx-mess"> 
            Thank you!<br/>
            From now, you will receive all the latest stories by email
         <p>`
}
function onCloseModal() {
    document.body.classList.toggle('modal-show')
    doDarkScreen()
    document.querySelector('.screen').removeEventListener('click', onCloseModal);
}

function doDarkScreen() {
    document.body.classList.toggle('dark-screen')
}

function onDropdown() {
    document.body.classList.toggle('show-dorp');
}
