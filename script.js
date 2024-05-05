const icons = document.querySelectorAll('.more-icon');
const paragraphs = document.querySelectorAll(".more-text");
let toggles = [true, false, false, false];

const text0 = 'Frontend Mentor offers realistic coding challanges to help \
developers improve thier frontend coding skills with projects in \
HTML, CSS and JavaScript. It\'s suitable for all levels and ideal for \
portfolio building.';

const text1 = 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free \
option providing access to a range of projects suitable for all skill levels.';

const text2 = 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent \
way to showcase your skills to potential employers!';

const text3 = 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help \
channel where you can ask questions and seek support from other community members.';

for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    const paragraph = paragraphs[i];
    let toggle = toggles[i];
    icon.addEventListener("click", function() {
        toggle = !toggle;
        if(toggle) {
            icon.src = './assets/images/icon-minus.svg';
            if(i == 0) {
                paragraph.textContent = text0;
            }
            if(i == 1) {
                paragraph.textContent = text1;
            }
            if(i == 2) {
                paragraph.textContent = text2;
            }
            if(i == 3) {
                paragraph.textContent = text3;
            }
        } if (!toggle) {
            icon.src = './assets/images/icon-plus.svg';
            paragraph.textContent = "";
        }
    });
}