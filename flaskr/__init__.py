from flask import Flask
from flask import render_template
import webbrowser

app = Flask(__name__)

# idk if i need this yet but this will just open up the app
#webbrowser.open('http://127.0.0.1:5000')

@app.route("/")
def index():
    return render_template('index.html')