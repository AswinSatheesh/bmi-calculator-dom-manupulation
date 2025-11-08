const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

const button = document.querySelector('.button');
const result = document.querySelector('.result');

button.addEventListener('click', function(){
    let weightVal = Number(weight.value);
    let heightVal = Number((height.value) * (height.value));
    let finalRes =  weightVal/heightVal; 
    if(finalRes < 18.5){
        result.textContent = `UnderWeight : ${finalRes}`
    }else if(finalRes > 18.5 && finalRes < 24.9){
        result.textContent = `Normal Weight : ${finalRes}`
    }
    else if(finalRes > 25.0 && finalRes < 29.9){
        result.textContent = `OverWeight : ${finalRes}`
    }
    else if(finalRes > 30.0 && finalRes < 34.9){
        result.textContent = `Obesity(Class I) : ${finalRes}`
    }
     else if(finalRes > 35.0 && finalRes < 39.0){
        result.textContent = `Obesity(Class II) : ${finalRes}`
    }
    else if(finalRes > 40.0){
        result.textContent = `Obesity(Class III) : ${finalRes}`
    }
})