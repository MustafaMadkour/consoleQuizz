// invoke the all quiz in a function
(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    // create method to view questions
    Question.prototype.viewQuest = function() {
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ":" + this.answers[i]);
        };
    }
    
     // check the correct answer
     Question.prototype.checkAnswer = function(ans){
         if (ans === this.correct){
             console.log("This is the correct answer.");
         }else {
             console.log("Wrong answer, Try again.");
         }
     }
    
    var q1 = new Question(
        "Which was the first purely object oriented programming language developed?", 
        ["Java","C++","SmallTalk","Kotlin"],
        2
    );
    var q2 = new Question(
        "Which of the following best defines a class?", 
        ["Parent of an object","Instance of an object","Blueprint of an object","Scope of an object"],
        1
    );
    var q3 = new Question(
        "What is the additional feature in classes that was not in structures?", 
        ["Data members","Member functions","Static data allowed","Public access specifier"],
        1
    );
    var q4 = new Question(
        "Which is not feature of OOP in general definitions?", 
        ["Code reusability","Modularity","Duplicate/Redundant data","Efficient Code"],
        2
    );
    var q5 = new Question(
        "Pure OOP can be implemented without using class in a program.", 
        ["True","False"],
        1
    );

    
    var questions = [q1,q2,q3,q4,q5];
    
    function nextQuest(){
        // display random question
        var n = Math.floor(Math.random()*questions.length);
        questions[n].viewQuest();
    
        var answer = prompt("Please select the correct answer.");
    
        
        if (answer !== "exit"){
            questions[n].checkAnswer(parseInt(answer)); 
            nextQuest();
        };
    }
    //view a random question again
    nextQuest();
})();