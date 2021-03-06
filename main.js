// add firebase
firebase.initializeApp({
    apiKey: "AIzaSyCT6Olqns1kus1qwC_v10PDqIXlRloBUBE",
    authDomain: "c17-jquery-auth-4f244.firebaseapp.com",
    databaseURL: "https://c17-jquery-auth-4f244.firebaseio.com",
    storageBucket: "c17-jquery-auth-4f244.appspot.com",
    messagingSenderId: "483267125880"
  })


// login submit
$('form.login').submit((e) => {
   var email = $('input[type="email"]').val()
   var password = $('input[type="password"]').val()

   firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then( () => {
         $('form')[0].reset()
      })

   // prevent form submit from refreshing page
   e.preventDefault()

})

// register button
$('.register-btn').click( (e) => {

})


// register new user
$('form.register').submit( (e) => {

})

// logout button
$('.logout-btn').click( (e) => {
   console.log('bye')
   firebase
      .auth()
      .signOut()
})

// send data
$('.main-page form').submit((e) => {
   var task = $('.main-page form input[type="text"]').val()
   var uid = firebase.auth().currentUser.uid
   $.post(
      `https://c17-jquery-auth-4f244.firebaseio.com/${uid}.json`,
      JSON.stringify({ task: task })
   ).then(console.log)

   e.preventDefault()
})


// if you're logged in or not...

firebase.auth().onAuthStateChanged( () => {
   if (firebase.auth().currentUser !== null) {
      // logged in

      var email = firebase.auth().currentUser.email

   // welcome user and hide login page
      $('.logIn').addClass('hidden')
      $('.main-page').removeClass('hidden')
   // set user name to h1
      $('.main-page h1').text(`Welcome, ${email}`)
   } else {
      // logged out
      $('.logIn').removeClass('hidden')
      $('.main-page').addClass('hidden')
   }
})
