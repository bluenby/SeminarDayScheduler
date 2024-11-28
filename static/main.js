const form = document.getElementsByTagName('form')[0];

//Status and Progress Section
const progressBar = document.getElementsByTagName('progress')[0];
const statusText = document.getElementById('status');
const notRunningText = document.getElementById('not-running');
const progressSectionHiddenContainer = document.getElementById('progress-section-hidden-container');

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
        progressSectionHiddenContainer.classList.remove('hide');
        notRunningText.classList.add('hide');
        return;
    }

    console.log('e')
    clearInterval(getStatusSetInterval);
    notRunningText.classList.remove('hide');
    submitBtn.disabled = false;

    if(error) {
        statusText.innerText = 'Error!';
    } else {
        progressBar.value = 100;
        statusText.innerText = 'Done!';
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