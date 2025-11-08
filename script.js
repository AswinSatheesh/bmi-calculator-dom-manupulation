const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

const button = document.querySelector('.button');
const result = document.querySelector('.result');

button.addEventListener('click', function(){
    let weightVal = Number(weight.value);
    let heightVal = Number((height.value) * (height.value));
    let finalRes =  weightVal/heightVal; 
    let Result;
    if(finalRes < 18.5){
        Result = result.textContent = `UnderWeight`
    }else if(finalRes > 18.5 && finalRes < 24.9){
        Result = result.textContent = `Normal Weight`
    }
    else if(finalRes > 25.0 && finalRes < 29.9){
         Result = result.textContent = `OverWeight`
    }
    else if(finalRes > 30.0 && finalRes < 34.9){
        Result = result.textContent = `Obesity(Class I)`
    }
     else if(finalRes > 35.0 && finalRes < 39.0){
        Result = result.textContent = `Obesity(Class II)`
    }
    else if(finalRes > 40.0){
        Result = result.textContent = `Obesity(Class III)`
    }

    let config = [{
        weight : weightVal,
        height : heightVal,
        result : Result
    }]

    console.log(config);

    let existingPaylod = JSON.parse(localStorage.getItem('payload')) || [];

    let newpayload = {id : Date.now() , data : config}; 
    existingPaylod.push(newpayload)

    localStorage.setItem('payload',JSON.stringify(existingPaylod));
    window.location.reload()
}
)


const recent = document.querySelector('.recent');

const localStData = JSON.parse(localStorage.getItem('payload'));
console.log(localStData)

let arr = [];

if(localStData){
    arr = localStData;
}

console.log(arr);

// const mypara = document.querySelector('.mypara');

arr.map((val,index)=>{
   let div = document.createElement('div');
   div.classList.add('recentBox')
   recent.appendChild(div);

//    ----------------------
    let para = document.createElement('p');
    para.classList.add('para');
    div.appendChild(para);

    para.textContent = `Weight : ${val.data[0].weight} Height : ${val.data[0].height} Result : ${val.data[0].result}`
})



const recentBtn = document.querySelector('.clearBtn');

recentBtn.addEventListener('click',function(){
    // localStorage.clear(); //it will clear all the local storage items
    localStorage.removeItem('payload');
    window.location.reload();
})