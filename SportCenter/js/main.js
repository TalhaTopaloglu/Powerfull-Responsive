//navbarDOM
const navbarDOM = document.querySelector('.navbar');
const menuBtnDOM = document.querySelector('.menu-btn');
let navbarItemsDOM = document.querySelector('.navbar-items');
let navbarLiDOM = document.querySelector('.navbar-item');
//Responsive Menu


menuBtnDOM.addEventListener('click', () => {
    navbarItemsDOM.classList.toggle('menu-display-none')
})

if(window.innerWidth <= 576){
    navbarItemsDOM.classList.add('menu-display-none')
}

//HeaderDOM
const headerDOM = document.querySelector('#header');
//Header Scroll Animation
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    // console.log(window.innerWidth);
    if (scrollTop < 20) {
        headerDOM.style.backgroundColor = 'rgba(53,85,146, 0)';
        if (window.innerWidth <= 992) {
            navbarItemsDOM.style.backgroundColor = 'rgba(53,85,146, 0)';
        }
    } if (scrollTop > 150) {
        headerDOM.style.backgroundColor = 'rgba(53,85,146, 1)';
        if (window.innerWidth <= 992) {
            navbarItemsDOM.style.backgroundColor = 'rgba(53,85,146, 1)';
        }else{
            navbarItemsDOM.style.backgroundColor = 'rgba(53,85,146, 0)';
        }
    }

})

//buttonsDOM
const classButtonsDOM = document.querySelectorAll('.classes-button');
const classesContent = document.querySelector('.classes-info')
//Classes Click Event
classButtonsDOM.forEach((item) => {
    item.addEventListener('click', (e) => {
        let content = "";
        let className = e.target.textContent;

        if (className == 'Yoga') {
            content = `
            <div class="class-info ">
                    <h4>Why are your Yoga?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et aliquid eos, modi cum quae
                        maiores ipsam facere magnam sunt iste consectetur eum cumque rerum magni voluptatibus!
                        Quibusdam, cumque similique.</p>
                    <h4>When Comes Yoga Your Tİme</h4>
                    <ul>
                        <li>Saturday-Sunday:8.00am - 10.00am</li>
                        <li>Moday-Tuesday:10.00am - 12.00pm</li>
                        <li>Wednesday-Friday:3.00pm - 6.00pm</li>
                    </ul>
                </div>
                <div class="class-img">
                    <img width="480" src="img/yoga.jpg" alt="Yoga">
                </div>
                `
        }
        if (className == 'Group') {
            content = `
            <div class="class-img">
            <img width="480" src="img/group.webp" alt="Yoga">
        </div>
            <div class="class-info ">
            <h4>Why are your Group?</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et aliquid eos, modi cum quae
                maiores ipsam facere magnam sunt Clicking generator on the internet.</p>
           <h4>When Comes Group Your Tİme</h4>
            <ul>
                <li>Saturday-Sunday:10.00am - 12.00am</li>
                <li>Moday-Tuesday:12.00am - 02.00am</li>
                <li>Wednesday-Friday:6.00pm - 9.00pm</li>
            </ul>
        </div>`
        }
        if (className == 'Solo') {
            content = `
            <div class="class-info ">
                    <h4>Why are your Solo?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et aliquid eos, modi cum quae
                        maiores ipsam facere magnam.</p>
                    <h4>When Comes Solo Your Tİme</h4>
                    <ul>
                        <li>Saturday-Sunday:2.00pm - 4.00pm</li>
                        <li>Moday-Tuesday:4.00am - 6.00pm</li>
                        <li>Wednesday-Friday:9.00pm - 12.00pm</li>
                    </ul>
                </div>
                <div class="class-img">
                    <img width="480" src="img/solo.jpg" alt="Yoga">
                </div>
                `
        }
        if (className == 'Streching') {
            content = `
            <div class="class-img">
            <img width="480" src="img/stret.webp" alt="Streching">
        </div>
            <div class="class-info ">
            <h4>Why are your Streching?</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam et aliquid eos, modi cum quae
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laboriosam? Aperiam, inventore.
            maiores ipsam facere magnam </p>
           <h4>When Comes Streching Your Tİme</h4>
            <ul>
                <li>Monday-Sunday:8.00am - 10.00am</li>
                <li>Wednesday-Thursday:10.00am - 12.00pm</li>
                <li>Fridaye-Saturday:3.00pm - 6.00pm</li>
            </ul>
        </div>`
        }

        classButtonsDOM.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
        classesContent.innerHTML = content;
    })
})

//inputsDOM
const inputsDOM = document.querySelectorAll('.calculator .inputs input');
let bmiValueDOM = document.querySelector('.bmi-value');
let triangelDOM = document.querySelector('.bmi-triangel');
let height;
let weigth;

triangelDOM.style.left = "6%";
//BMI Calculator
inputsDOM.forEach((item) => {
    item.addEventListener('change', (e) => {
        let value = e.target.value;
        let id = e.target.id;
        if (id == 'height') {
            height = value;
        }
        if (id == 'weigth') {
            weigth = value;
        }
        let bmi = weigth / Math.pow(height / 100, 2);
        bmi = bmi.toFixed(2);
        let inputValue;
        if (bmi && bmi > 0 && bmi < 500) {
            bmiValueDOM.textContent = bmi;
            inputValue = bmiValueDOM.textContent;
        }
        if (inputValue > 0 && inputValue <= 8) {
            triangelDOM.style.left = "7%";
        }
        else if (inputValue > 8 && inputValue <= 18) {
            triangelDOM.style.left = "13%";
        }
        else if (inputValue > 18 && inputValue <= 22) {
            triangelDOM.style.left = "22%";
        }
        else if (inputValue > 22 && inputValue <= 25) {
            triangelDOM.style.left = "30%";
        }
        else if (inputValue > 25 && inputValue <= 27) {
            triangelDOM.style.left = "39%";
        }
        else if (inputValue > 27 && inputValue <= 30) {
            triangelDOM.style.left = "46%";
        }
        else if (inputValue > 30 && inputValue <= 33) {
            triangelDOM.style.left = "55%";
        }
        else if (inputValue > 33 && inputValue <= 35) {
            triangelDOM.style.left = "63%";
        }
        else if (inputValue > 35 && inputValue <= 38) {
            triangelDOM.style.left = "71%";
        }
        else if (inputValue > 38 && inputValue <= 42) {
            triangelDOM.style.left = "79%";
        }
        else if (inputValue > 42) {
            triangelDOM.style.left = "88%";
        }
    })
})













