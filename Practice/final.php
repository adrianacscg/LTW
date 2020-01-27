<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="game.css">
</head>
<body>

    
    <section id="form_result">

        <?php

        $grade = $_GET['grade'];

        echo "<h2 id='grade'>".$grade."</h2>";

        if($grade <= 5){
            $sentence = "Really??? -.-";
        }
        elseif($grade > 5 && $grade <= 10){
            $sentence = "Well that's mean, after all the work I had :(";
        }
        elseif($grade > 10 && $grade <=13){
            $sentence = "I can totally have more than that";
        }
        elseif($grade > 13 && $grade <=15){
            $sentence = "That's not too bad I guess..";
        }
        elseif($grade > 15 && $grade <=17){
            $sentence = "I'm going to try :D";
        }
        elseif($grade > 17 && $grade <=19){
            $sentence = "That would be awesome :D";
        }
        else{
            $sentence = "I wish, thank you :D";
        }

        echo "<h2 id='sentence'>".$sentence."</h2>";

        ?>

    </section>

    <h2 id="end" class="hidden">THE END</h2>
    <script type="text/javascript" src="final.js"></script>
    <script src="snow.js"></script>
</body>
</html>
