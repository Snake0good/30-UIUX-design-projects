var comments = document.getElementById('text-area')


function submitForm() {
    if (comments.value == '') {
        window.alert("Please add a reason...")
    } else {
        window.alert("Thanks for you support! Duly noted :)")
        comments.value = ''
    }    
}