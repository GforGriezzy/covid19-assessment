<?php 
session_start();
if(! isset($_SESSION['is_login']))
{
  header('location:index.php');
}
?>
<!doctype html>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Assessment</title>
    <link rel="stylesheet" type="text/css" href="Style.css">
</head>
<body>
    <div class="grid">
        <div id="quiz">
            <h1>Covid - 19 Assessment</h1>
            <hr style="margin-bottom: 20px">

            <p id="question"></p>

            <div class="buttons">
                <button id="btn0"><span id="choice0"></span></button>
                <button id="btn1"><span id="choice1"></span></button>
                
            </div>

            <hr style="margin-top: 50px">
            <footer>
                <p id="progress">Question x of y</p>
                <P id="progress">Hi <?php echo $_SESSION['nama']; ?></p>
                
            </footer>
        </div>
    </div>

<script src="quiz.js"></script>
<script src="question.js"></script>
<script src="app.js"></script>
</body>
</html>
