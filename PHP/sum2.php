<!DOCTYPE html>
<html>
    <head>
        <title>Form Result</title>
        <meta charset="UTF-8">
    </head>
    <body>

        <?php 

        $num1 = $_GET['num1'];
        $num2 = $_GET['num2'];
        $sum = $num1+$num2;
        echo "<h1>The sum of $num1 + $num2 is: $sum</h1>";

        echo "<a href='form2'><h2>Go back</h2><a/>";

        echo "<img src='https://i.pinimg.com/originals/4f/54/29/4f5429df5ea6361fa8d3f08dfcdccdf9.jpg' height=400px; alt='humm'>";

        ?>

    </body>

</html>