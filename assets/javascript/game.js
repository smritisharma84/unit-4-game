
 $(document).ready(function() {

    var winCount = 0;
    var lossCount = 0;
    var score = 0;
    
        var randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    
        $("#randomNumber").text("Random Number: " + randomNum);
        $("#totalScore").text(score);
        $("#wins").text("Wins: " + winCount);
        $("#losses").text("Losses: " + lossCount);
    
        var crystalImages = ["./assets/images/red.png", "./assets/images/blue.png" , "./assets/images/yellow.png" , "./assets/images/green.png"];
        
        function startGame() {
            for (var i = 0; i < crystalImages.length; i++) {
    
            var image = $('<img>');
    
            image.addClass('dummyImage');
    
            image.attr ({'src': crystalImages[i], 'data-crystalvalue': Math.floor(Math.random()*(12-1)+1)});

    
            $("#crystals").append(image);
    
            }
        }
    
        startGame();
        
        $(".dummyImage").on("click", function () {
    
            var crystalValue = ($(this).data("crystalvalue"));
    
            score = score + crystalValue;
    
            $("#totalScore").text(score);
    
            if (score === randomNum) {
                winCount++;
                $("#wins").text("Wins:" + " " + winCount);
                $("#result").text("WINNER!");
    
            }else if (score > randomNum) {
                lossCount++;
                $("#losses").text("Losses:" + " " + lossCount);
                $("#result").text("You Lose!");
            }
            if (score === randomNum || score > randomNum) {
                // Select new random number
                randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
                score = 0;
                $("#randomNumber").text("Random Number: " + randomNum);
                $("#totalScore").text(score);
        
    
                
            }
    
        });
    
    });
    
    
    
    