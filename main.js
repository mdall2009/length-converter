var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("keyup", myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;



    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.001;   
    }else if(inputTypeValue === "meter" && resultTypeValue ==="Centimeter"){
        result.value = Number(input.value) * 100;   
    }else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        result.value = input.value;    
    }


    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;   
    }else if(inputTypeValue === "kilometer" && resultTypeValue ==="Centimeter"){
        result.value = Number(input.value) * 100000;   
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
        result.value = input.value;    
    }
    

    
    if(inputTypeValue === "Centimeter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.00001;   
    }else if(inputTypeValue === "Centimeter" && resultTypeValue ==="meter"){
        result.value = Number(input.value) * 0.01;   
    }else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
        result.value = input.value;    
    }
    


}