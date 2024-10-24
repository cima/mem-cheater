# Screenshots

```
:screenshot --selector "[class*='uu-coursekit-question-t'][class*='-white-frame-result'],[class*='uu-coursekit-question-t'][class*='white-frame-answer-correct']"
```

# Tessereact OCR
Copy screenshot names

and paste them in an ocr.bat file e.g. like below (with the chcp 65001)

```
PATH="C:\Program Files\Tesseract-OCR";%PATH%
chcp 65001
Snímek obrazovky 2022-12-17 v 19.00.15.png
Snímek obrazovky 2022-12-17 v 19.00.05.png
Snímek obrazovky 2022-12-17 v 18.59.47.png
Snímek obrazovky 2022-12-17 v 18.59.32.png
```


replace

```
(.+?)\.png
```

by

```
tesseract -l ces "$1.png" "$1"
```

so you end up with file like

```
chcp 65001
tesseract "Snímek obrazovky 2022-12-17 v 19.00.15.png" "Snímek obrazovky 2022-12-17 v 19.00.15"
tesseract "Snímek obrazovky 2022-12-17 v 19.00.05.png" "Snímek obrazovky 2022-12-17 v 19.00.05"
tesseract "Snímek obrazovky 2022-12-17 v 18.59.47.png" "Snímek obrazovky 2022-12-17 v 18.59.47"
tesseract "Snímek obrazovky 2022-12-17 v 18.59.32.png" "Snímek obrazovky 2022-12-17 v 18.59.32"
```

execute the ocr.bat file in the same direcotry as those screenshots.

https://codetoprosper.com/tesseract-ocr-for-windows