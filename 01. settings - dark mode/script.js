const dark = document.getElementById('dark-change')
const containerBox = document.getElementById('container-settings')
const sliderRing = document.getElementsByClassName('slider')
const settingHref = document.getElementById('settings-href')


dark.addEventListener('change', (event) => {
    document.body.classList.toggle('dark-mode')
    containerBox.classList.toggle('box-ring')
    settingHref.classList.toggle('dark')


    var i;
    for (let i = 0; i<sliderRing.length; i++) {
        sliderRing[i].classList.toggle('grey-ring')
    }
})