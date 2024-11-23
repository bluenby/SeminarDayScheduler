from flask import Flask
from app.routes import routes
import webbrowser

app = Flask(__name__)
app.register_blueprint(routes)

webbrowser.open('http://127.0.0.1:5000')
if __name__ == "__main__":
    app.run(debug=True)