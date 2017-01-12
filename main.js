// add firebase
firebase.initializeApp({
    apiKey: "AIzaSyCT6Olqns1kus1qwC_v10PDqIXlRloBUBE",
    authDomain: "c17-jquery-auth-4f244.firebaseapp.com",
    databaseURL: "https://c17-jquery-auth-4f244.firebaseio.com",
    storageBucket: "c17-jquery-auth-4f244.appspot.com",
    messagingSenderId: "483267125880"
  })




$('form').submit((e) => {
   var email = $('input[type="email"]').val()
   // set to h1
   $('.main-page h1').text(`Welcome, ${email}`)
   // hide login page
   $('.logIn').addClass('hidden')
   $('.main-page').removeClass('hidden')
   // prevent form from submitting
   e.preventDefault()

})
