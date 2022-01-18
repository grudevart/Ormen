document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.incorrectQ1').forEach(function(incorrects1) {
    incorrects1.addEventListener('click', function() {
        resultQ1.textContent = 'Incorrect'
        this.style.backgroundColor = "red";
        })
    });
    let correct1 = document.querySelector('.correctQ1');
     correct1.addEventListener('click', function() {
        resultQ1.textContent = 'Correct!';  
        correct1.style.backgroundColor = "lightgreen";
        })
        document.querySelectorAll('.incorrectQ2').forEach(function(incorrects2) {
            incorrects2.addEventListener('click', function() {
                resultQ2.textContent = 'Incorrect'
                this.style.backgroundColor = "red";
                })
            });
            let correct2 = document.querySelector('.correctQ2');
             correct2.addEventListener('click', function() {
                resultQ2.textContent = 'Correct!';  
                correct2.style.backgroundColor = "lightgreen";
                })  
    let check = document.getElementById("submit");
    check.addEventListener('click', function() {
        if(answerField.value == "1 2 3 4 5"){
            submitResult.textContent = 'Corrrect!';
            answerField.style.backgroundColor = "lightgreen";
            }
        else{
            submitResult.textContent = 'Incorrect!';
            answerField.style.backgroundColor = "red";
            }
});
});