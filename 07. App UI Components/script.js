const availBtn = document.getElementById('availability')
const popoverContent = document.getElementById('popover-content')

availBtn.addEventListener('click', () => {
    if (popoverContent.style.opacity == 1) {
        popoverContent.style.opacity = 0
    } else {
        popoverContent.style.opacity = 1
    }
})


$('#calendar').datepicker({
    language: "en", 
    calendarWeeks: false, 
    todayHighlight: false
  });