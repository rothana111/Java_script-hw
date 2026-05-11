function showAlert(msg){
    alert("Information:" + msg);
}

//short hand function 
const showAlert2=()=>{
    alert(" nice to meet you  ");
}

function addition(num1,num2,num3)
{
    return num1+num2+num3;
}

function pass_fail(score){
    let result='Fail'
    if (score>=60){
        result='Pass';
    }
    
    return result;
}

function GenerateAddition(num1,num2,num3){
    document.getElementById("resultArea1").innerHTML= "Result:" + addition(num1,num2,num3);
}

function GenerateResult(score){
    document.getElementById("resultArea2").innerHTML= "Result:" + pass_fail(score);

}
