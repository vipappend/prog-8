<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    $str = "progate";

    //strlenを用いて$strの長さをechoしてください
    echo strlen($str).'<br>';
    
    $array = array('HTML', 'CSS', 'PHP');

    //countを用いて$arrayの要素数をechoしてください
    echo count($array).'<br>';

    //randを用いて10から15までのランダムな数字をechoしてください
    echo rand(10,15).'<br>';

  ?>

</body>
</html>
