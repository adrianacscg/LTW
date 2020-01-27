<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="game.css">
</head>
<body>

    
    <section id="form_result">
    <?php
    $name = $_GET['name'];
    
    echo "<h1 id='itsYou'>Oh, it's ".$name."!</h1>";


    
        
    if($name == "rui" || $name == "Rui"){
        $sentence = "Welcome maninho :D";
    }
    elseif($name == "Tiago" || $name == "tiago" || $name == "chuchu" || $name == "chuchuzinho" || $name == "palomita"){
        $sentence = "I missed you palomita ^^";
    }
    elseif($name == "mariza" || $name == "Mariza" || $name == "Mãe" || $name == "mãe"){
        $sentence = "Olá Mamãe :D";
    }
    else{
        $sentence = "Welcome stranger :)";
    }
    
    
    echo "<h2 id='welcomeYou'>".$sentence."</h2>";

    ?>

    </section>
    <img class="hidden" id="hat" src="pngs/hat.png">
    <img class="hidden" id="maiorball" src="pngs/maiorball.png">
    <img class="hidden" id="mediumball" src="pngs/mediumball.png">
    <img class="hidden" id="others" src="pngs/others.png">
    <img class="hidden" id="smallball" src="pngs/smallball.png">
    <img class="hidden" id="snowman" src="pngs/snowman.png">
    
    <section id="game" class="hidden">
        <h2>We are going to play a game now</h2>
        <div id="game_zone" class="hidden"></div>
        <h2 id="gameover" class="hidden">Game Over</h2>
        <h3 id="tryagain" class="hidden">Try Again</h3>

    </section>
    <section id="final" class="hidden">
        <h2>How much do you think I'll have in the LTW exam?</h2>
        <form action="final.php" method="get">
            <input name="grade" id="ageInputId" type="range" min="0" max="20" step="1" required oninput="ageOutputId.value = ageInputId.value">
            <output name="ageOutputName" id="ageOutputId" for="ageInputId">20</output>
            <input type="submit" id="sure" value = "U sure?">
        </form>
        
    </section>
    <script type="text/javascript" src="form.js"></script>
    <script src="snow.js"></script>
</body>
</html>