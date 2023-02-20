
////////////get element of dom/////////////////////////////////

const usernameInputElem = document.querySelector('#username-input')
const firstnameInputElem = document.querySelector('#firstname-input')
const lastnameInputElem = document.querySelector('#lastname-input')
const submitbtn = document.querySelector('#submit-btn')
const usernameMessage = document.querySelector('#username-message')
const firstnameMessage = document.querySelector('#firstname-message')
const lastnameMessage = document.querySelector('#lastname-message')

///////set event on inputs /////////////////

usernameInputElem.addEventListener('keypress' , (event) => {

       if(event.target.value.lenght < 3){
        usernameMessage.innerHTML = 'username is not valid'
        usernameMessage.classList.remove('valid-message')
        usernameMessage.classList.add('invalid-message')   
        usernamevalid = false
       }else{
        usernameMessage.innerHTML = 'username is valid'
        usernameMessage.classList.add('valid-message')
        usernameMessage.classList.remove('invalid-message') 
        usernamevalid = true
       }
       console.log('did type');
})

firstnameInputElem.addEventListener('keypress' , (event) => {

       if(event.target.value.lenght < 3){
       firstnameMessage.innerHTML = 'firstname is not valid'
       firstnameMessage.classList.remove('valid-message')
       firstnameMessage.classList.add('invalid-message')
       firstnamevalid = false 
      }else{
       firstnameMessage.innerHTML = 'firstname is valid'
       firstnameMessage.classList.add('valid-message')
       firstnameMessage.classList.remove('invalid-message') 
       firstnamevalid = true 
      }
      console.log('did type');
})

lastnameInputElem.addEventListener('keypress' , (event) => {

      if(event.target.value.lenght < 3){
      lastnameMessage.innerHTML = 'lastname is not valid'
      lastnameMessage.classList.remove('valid-message')
      lastnameMessage.classList.add('invalid-message')   
      lastnamevalid = false
     }else{
      lastnameMessage.innerHTML = 'lastname is valid'
      lastnameMessage.classList.add('valid-message')
      lastnameMessage.classList.remove('invalid-message') 
      lastnamevalid = true
     }
     console.log('did type');
})


////////////////helpful var to chek the inputs are valid or not//////////////

let usernamevalid , firstnamevalid , lastnamevalid = null


////////////////set event on btn//////////

submitbtn.addEventListener('click' , (event) => {

    event.preventDefault()

    if(firstnamevalid && lastnamevalid && usernamevalid) {

        let newUserData = {
            firstName: firstnameInputElem.value,
            lastName: lastnameInputElem.value,
            userName: usernameInputElem.value,
            profile: 'content/img/banana.png',
        }
        fetch('http://localhost:3000/api/users/' , {
            method: 'POST',
            headers: {
               "Content-type": "application/JSON"
            },
            body: JSON.stringify.newUserData
        }).then(res => {
            console.log(res)
            clearinput()
        })
    }else{
        alert('not true')
    }

})


////////function for making inputs empty afetr registering/////////////////

function clearinput  () {
    usernameInputElem.value = ''
    firstnameInputElem.value = ''
    lastnameInputElem.value = ''

    usernameInputElem.focus()
}