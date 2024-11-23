import tkinter as tk
from tkinter import filedialog
from flask import Blueprint, request, jsonify, render_template
import main;

routes = Blueprint('routes', __name__)


@routes.route("/")
def index():
    return render_template('index.html')

@routes.route('/create-schedules', methods=['POST'])
def create_schedules():
    data = request.get_json()
    outputFolder = data['outputFolder']
    del data['outputFolder']

    main.init(data, outputFolder)

    if main.status.currentLog != 'Success':
        return jsonify('error')

    return jsonify('success')

@routes.route('/get-status', methods=['POST'])
def poll_status():
    return jsonify(main.status.currentLog)

@routes.route('/select-file', methods=['POST'])
def select_file():
    root = tk.Tk()
    #Hides tkinter window
    root.withdraw()

    #Bring file dialog to front
    root.wm_attributes('-topmost', 1)
    file_path = filedialog.askopenfilename(title='Select a CSV file', filetypes = (("Comma Separated Values","*.csv"),))

    #Delete the invisible tk window
    root.quit()
    root.destroy()

    #Return file path
    return jsonify(file_path)

@routes.route('/select-folder', methods=['POST'])
def select_folder():
    root = tk.Tk()
    #Hides tkinter window
    root.withdraw()

    #Bring file dialog to front
    root.wm_attributes('-topmost', 1)
    folder_path = filedialog.askdirectory(title='Select an output folder')

    #Delete the invisible tk window
    root.quit()
    root.destroy()

    #Return file path
    return jsonify(folder_path)