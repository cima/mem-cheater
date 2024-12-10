# MEM-cheater

## Pre requisities
- Python 3
- [Tesseract](https://github.com/tesseract-ocr/tesseract/releases)
   - Install anywhere
   - Update runCheaterServer.bat so it points to folder with installed tesseract
- Firefox

## 1. Collect Screenshots
Screnshots with correct answers.

1. Open desired course in browser (tested with firefox)
2. press F12
3. Select *Console*
4. Paste below expression in the promt line (the verry bottom white space)
```
:screenshot --selector "[class*='uu-coursekit-question-t'][class*='-white-frame-result'],[class*='uu-coursekit-question-t'][class*='white-frame-answer-correct']"
```
5. Progress throu course to next question
6. Select any answer (randomly)
7. If not correct click show corect answers
8. Execute command from step 4 in console
    - If executed before can be recalled by pressing arrow up.
9. Repeat from step 5.
10. Create directory in the root of this project in a form {anything}/img
11. Copy screenshots from your download directory to folder from step 10.

## 2. Use correct answers

1. Run the server by [runCheaterServer.bat](runCheaterServer.bat)
2. Open the correct answer gallery in ana browser from http://localhost:8000/cgi-bin/cheater.py?course={anything}/img where {anything} is name of the intermediate folder from step 1.10
3. From the course in one window copy any part of the question (no matter if question or part of answer)
4. In memcheater window (from step 2.2) press Ctrl+F and paste the text copied in step 2.3
5. Window automatically scrolls towards the screenshot with correct answer

# Technical details

## Screenshots
```
:screenshot --selector "[class*='uu-coursekit-question-t'][class*='-white-frame-result'],[class*='uu-coursekit-question-t'][class*='white-frame-answer-correct']"
```

## Tessereact OCR

Download tesseract from https://github.com/tesseract-ocr/tesseract/releases

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