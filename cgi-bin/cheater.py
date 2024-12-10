import os 
import cgi
import subprocess

form = cgi.FieldStorage()
context_dir = form.getvalue('course')

print('Content-type: text/html\n')
print('<?doctype html>')
print('<html><head>')
print(f"<title>MEM Cheater - {context_dir}</title>")
print('</head><body>')

current_directory = os.getcwd()

if context_dir is None:
    print("<h1>Course not selected</h1>")
    # TODO list courses
    print("</body></html>")
    exit(0)


directory = current_directory + "/" + context_dir
files = os.listdir(directory) 
for file in files:
    if(file.endswith(".png")):
        print(f"<fieldset style=\"margin-bottom: 40px;\"><legend>{file}</legend>")
        print(f"<img src=\"../{context_dir}/{file}\"></br>")
        base, ext = os.path.splitext(file)
        txt_file_path = f"{directory}/{base}.txt"
        if(not os.path.exists(txt_file_path)):
            result = subprocess.run(["tesseract", f"{file}", f"{base}"], capture_output=True, text=True, cwd=directory)
        
        if(os.path.exists(txt_file_path)):
            with open(txt_file_path, 'r', encoding="utf-8") as file: 
                content = file.read() 
                print(f"<code>{content}</code>")

        print("</fieldset>")

print('</body></html>')