let name = "", sex = "", date = "";
let dateNow = moment();

let container = document.querySelector('.container');
let letReg = document.querySelector('.let_reg');
let greeting = document.querySelector('.greeting');
let krest = document.querySelector('.krest');
let warning = document.querySelector('.warning');

let btnReestr = document.querySelector('.btn_reestr');
let btnSubmit = document.querySelector('.btn_submit');
let inpName = document.querySelector('.inp_name');
let inpSex = document.querySelector('.inp_sex');
let inpDate = document.querySelector('.inp_date');
let inp1 = document.querySelector('.inp1');

function sleep(n) {
    for (let i=1; i< n*100000000; i++) {
        i = i*10/10;
    }
}

function enterReg() {  
    container.style.display = "block";
    letReg.style.display = "none";

}

function closeReg() {  
    container.style.display = "none";
    letReg.style.display = "block";
    greeting.style.display ='none';
}

function showWarning(str) {
    warning.style.display = "block";
    warning.innerHTML = str;
}

function hideWarning() {
    warning.style.display = "none";
}

function changeSex() {
    let sex = inpSex.value;
    switch (sex) {
        case '1':
            inp1.style.display = "none";
            hideWarning();
            break;
        
        case '2': 
            inp1.style.display = "block";
            hideWarning();
            break;
        
        case '3': 
            inp1.style.display = "none";
            showWarning('У дівчат вік не питаємо');
        
    }
}

function submit() {
    let flag = true;
    name = inpName.value;
    sex = inpSex.value;
    date = inpDate.value;
    let dateBirthday = moment(date);
    let years = dateNow.diff(dateBirthday, 'year');

    if ( !name || sex === '1') flag = false;
    if ( sex === '2' && date === "") flag = false; 
    if (sex === '2' && (years > 120 || years < 3)) flag = false;

    if (!flag) {
        showWarning('Правильно введіть усі необхідні дані !');
        setTimeout(hideWarning, 2000);  
        return;
    }

    if (sex === '2') {
     //   console.log(1);
        showWarning('Ваш вік - ' + String(years));
     //   console.log(2);
     //   sleep(10); 
     //   console.log(3);

    }
 
    if (sex === '3') {
        showWarning('Вам стільки років, на скільки Ви себе почуваєте !');
    //    setTimeout(hideWarning, 5000);  
    }   


 //   container.style.display = "none";  
    greeting.style.display = "block";
    if (sex === '2' && years < 18) { 
    greeting.innerHTML = name + ", Вам ще рано заходити на наш сайт !";
    } else {
    greeting.innerHTML = name + ", вітаємо Вас на на нашому сайті !";    
    }
}


btnReestr.addEventListener('click', enterReg);
krest.addEventListener('click', closeReg);
btnSubmit.addEventListener('click', submit);
inpSex.addEventListener('change', changeSex);



