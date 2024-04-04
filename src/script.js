function getModule(){
    var userNumber = document.getElementById("userInput").value;
    if (userNumber == false) {
        var numberModule = "Insira um valor válido!"
    } 
    else if(isNaN(userNumber)){
        var numberModule = "Insira um número!"
    }
    else {
        var numberModule = Math.abs(userNumber);
    }
    document.getElementById("moduleResult").innerHTML = numberModule;
}