<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    //この下にwhile文を書いてください
    $i = 0;
    while (++$i <= 100) {
      if ($i % 2 == 0){
        echo $i.'<br>';
      }
    }
  ?>

</body>
</html>
