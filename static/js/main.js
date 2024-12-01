const form = document.getElementsByTagName('form')[0];

//Status and Progress Section
const statusText = document.getElementById('status');
const isRunningText = document.getElementById('is-running');

//Submit Button
const submitBtn = document.getElementById('create-schedules-button')

var getStatusSetInterval;

//Set from select-files-folders.js
var paths = {
    'grades' : '',
    'prefs' : '',
    'seminars' : '',
    'outputFolder' : ''
}

function reset(isForStart, error) {
    if(isForStart) {
        submitBtn.disabled = true;
        getStatusSetInterval = setInterval(get_status, 500);
        statusText.innerText = 'Starting';
        isRunningText.innerText = 'Running...'
        return;
    }

    clearInterval(getStatusSetInterval);
    submitBtn.disabled = false;

    if(error) {
        statusText.innerText = 'Error! Please make sure you selected the right CSV files.';
    } else {
        statusText.innerText = 'Done!';
        isRunningText.innerText = 'Currently not running...'
    }
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

    createSchedulesUntilEnd();
    reset(true);
};

//Sends a request to begin creating schedules and waits for when its done
function createSchedulesUntilEnd() {
    fetch('/create-schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paths)
    })
    .then(response => response.json())
    .then(data => {
        reset(false, data=='error');
    })
    .catch(e => {
        reset(false, true)
    });
}

async function get_status() {
    const response = await fetch('/get-status', {
        method: 'POST',
    });

    data = await response.json();
    statusText.innerText = data;
}