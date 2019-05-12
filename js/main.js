const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const $inputs = document.getElementsByTagName('input');


function validate(){
    let isOk = false;
    Array.from($inputs).forEach(item => {
        validateInput(item,isOk);
        item.addEventListener('keypress', () => item.classList.remove('is-invalid'))
    });
    console.log(isOk);    
}

function validateInput(item,isOk){
    if (item.value === "") {
        item.classList.add('is-invalid');
        isOk = false
    } else 
    isOk = true
}
