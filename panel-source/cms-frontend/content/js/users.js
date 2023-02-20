

///////////geting elment from dom/////////////////////
const usersWrapper = document.querySelector('.users-wrap')
const removeModal = document.querySelector('.remove-modal')

///////flag/////////////////////////////////////////
let mainUserId = null


///////set load event on window for geting api //////////////
window.addEventListener('load' , getAllUsers)

function getAllUsers () {
    fetch(' localhost:3000/api/users')
    .then(res => res.json())
    .then(data =>  {
        usersWrapper.innerHTML = ""
        data.forEach(user => {
            usersWrapper.insertAdjacentHTML('beforeend' , `<div class="user-box">
            <div class="user-box_left">
                <img src="${user.profile}" class="user-profile-box" alt="">
                <div class="user-detail">
                    <h1 class="user-id">
                        <span>${ user.userName} <!-- username --> </span>
                        <span class="user-history"> ${user.createdadd}<!-- history --> </span>
                    </h1>
                    <h3 class="user-name">${user.fristName} ${user.lastName}<!-- user name (first name and last name) --> </h3>
                </div>
            </div>

            <div class="user-btns-group">
                <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                <button class="user-edit-btn">
                    edit
                </button>
                <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                <button onclick="showModal('${user._id}')" class="user-remove-btn">
                    remove
                </button>
            </div>
        </div>`)
        });
    })
}



/////////function for showing modal//////////////////

function showModal (userID) {
console.log(userID);
mainUserId = userID
removeModal.classList.add('visible')

}


//////////////function for closing modal///////////////

function closemodal() {
    removeModal.classList.remove('visible')
     
}


///function for removing user from dom with api /////////////////////
function removeuser() {
    fetch(`http://localhost:3000/api//users/${mainUserId}` , {
        method: 'DELETE'
    }).then(res => {
        console.log(res)
         closemodal()
         getAllUsers()
    })
   
}