const form = document.getElementsByTagName('form')[0];

const progressSectionHidden = document.getElementById("progress-section-hidden")

//Status and Progress Section
const statusText = document.getElementById('status');
const isRunningText = document.getElementById('is-running');

//Submit Button
const submitBtn = document.getElementById('create-schedules-button')

var getStatusInterval;

//Set from select-files-folders.js
var paths = {
    'grades' : '',
    'prefs' : '',
    'seminars' : '',
    'outputFolder' : ''
}


function attemptFormSubmission() {
    for (let key in paths) {
        if (!paths.hasOwnProperty(key)) {
            continue;
        }

        if(paths[key] == '') {
            alert('Please select all the required CSV files and an output folder.')
            return;
        }
    }

    start();
};

function start() {
    progressSectionHidden.classList.remove("hide");
    submitBtn.disabled = true;
    isRunningText.innerText = 'Processing...'

    statusText.innerText = 'Starting';
    statusText.classList.remove("success");
    statusText.classList.remove("error");

    //Send request to make schedules and reset once the process has finished
    fetch('/create-schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paths)
    })
    .then(response => response.json())
    .then(data => {
        end_and_reset(data=='error');
    })
    .catch((error) => {
        end_and_reset(true)
    });

    //Begin monitoring status of schedule creation
    getStatusInterval = setInterval(get_status, 100);
}

function end_and_reset(error) {
    clearInterval(getStatusInterval);
    submitBtn.disabled = false;

    isRunningText.innerText = 'Not processing...'

    if(error) {
        statusText.innerText = 'An error occured while making schedules! Please make sure you selected the right CSV files.';
        statusText.classList.add("error");
    } else {
        statusText.innerText = 'Successfully created schedules!';
        statusText.classList.add("success");
    }
}

async function get_status() {
    const response = await fetch('/get-status', {
        method: 'POST',
    });

    data = await response.json();
    statusText.innerText = data;
}