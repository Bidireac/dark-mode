const light = document.getElementById('light');
const dark = document.getElementById('dark');
const background = document.querySelector('body');

function changeBackgroundColor(mood) {
    let choice = mood.srcElement.defaultValue;
    let color = choice == "light" ? "#CACACA" : "#35303c";
    background.style.background = color;
}

light.addEventListener("click", changeBackgroundColor);
dark.addEventListener("click", changeBackgroundColor);
