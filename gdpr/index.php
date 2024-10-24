<html>
    <head>
        <style>
            body {
                font-family: sans-serif;
                background-color: #1E1E1E;
                color: #D4D4D4;
            }
            legend {
                font-size: 18pt;
            }
            fieldset {
                margin-top: 20pt;
                border-width: 2pt 2pt 2pt 2pt;
                background-color: #252526;
            }
            
        </style>
    </head>

    <body>

<?php

$dir = new DirectoryIterator(dirname(__FILE__) . "/img");

foreach ($dir as $fileinfo) {
    if ($fileinfo->isDot() || $fileinfo->getExtension() == "txt" ) {
        continue;
    }

    ?>
        <fieldset>
            <legend><?php print($fileinfo->getBasename()); ?></legend>
            <img src="img/<?php print($fileinfo->getBasename()); ?>">
    <?php


    $pure = $fileinfo->getBasename($fileinfo->getExtension());
    $text_file = "img/" . $pure . "txt";

    if (file_exists($text_file)) {
        ?><p><?php print(file_get_contents($text_file)); ?></p><?php
    }

    ?>
    </fieldset>
    <?php

}

?>

</body>
</html>