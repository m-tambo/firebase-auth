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
