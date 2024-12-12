"""Starts the Flask app. Is run by the exe"""
#import os
#import sys
import webbrowser
import threading
from threading import Timer
from flask import Flask
from routes import routes
from monitor_heartbeat import monitor_heartbeat

app = Flask(__name__)
app.register_blueprint(routes)

def open_browser():
    webbrowser.open_new('http://127.0.0.1:5000')

if __name__ == "__main__":
    Timer(1, open_browser).start()
    threading.Thread(target=monitor_heartbeat, daemon=True).start()
    app.run()

#ethan filip