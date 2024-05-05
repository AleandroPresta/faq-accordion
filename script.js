const icons = document.querySelectorAll('.more-icon');
let toggles = [true, false, false, false];

for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    let toggle = toggles[i];
    icon.addEventListener("click", function() {
        toggle = !toggle;
        if(toggle) {
            icon.src = './assets/images/icon-minus.svg';
        } else {
            icon.src = './assets/images/icon-plus.svg';
        }
    });
}