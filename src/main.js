function randomGeneral(){
    var length = 4;
    var randomNumber = [];
    for(;length--;){
        randomNumber[length] = Math.floor(Math.random()*10);
    }
    return randomNumber;
}

function validInputAndRandomNumber(randomNumber){
    var regular = /\d/;
    for(var i=0;i<randomNumber.length;i++){
        number = randomNumber[i];
        if(!(number / 10 < 1 && regular.test(number))){
            return false;
        }
        var existNumber = randomNumber.filter((element) => {
            return element == number;
        });
        if (existNumber.length >=2){
            return false;
        }
    };
    return true;
}

function compareInputAndAnswer(inputs,answer){
    var aCount = 0;
    var bCount = 0;
    for(var i=0;i<inputs.length;i++){
        var exitsIndex = answer.indexOf(inputs[i]);
        if(exitsIndex >= 0){
            if(exitsIndex === i){
                aCount++;
            }else{
                bCount++;
            }
        }
    }
    return `${aCount}A${bCount}B`;
}

function buildResultList(inputs,answer){
    var maxStep = 3;
        var step = 0;
        var resultText = '';
        for(var i=0;i<inputs.length;i++){
            if(!validInputAndRandomNumber(inputs[i])){
                resultText += 'illegal input\n';
                step--;
            }else{
                var result = compareInputAndAnswer(inputs[i],answer);
                resultText += result+'\n';
            }
            if(result === '4A0B'){
                resultText += 'Congratulations!\n';
                break;
            }
            step++;
            if(step >= maxStep){
                resultText += 'Fails!\n';
                break;
            }
        }
        return resultText;
}

function gameController(inputs){
    var answer = randomGeneral();

    while(!validInputAndRandomNumber(answer)){
        answer = randomGeneral();
    }
    return buildResultList(inputs,answer);
}

function main(inputs){
    console.log(gameController(inputs));

}