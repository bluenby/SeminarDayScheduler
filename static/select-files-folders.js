async function selectFileAndGetPath() {
    try {
        const response = await fetch('/select-file', {
            method: 'POST',
        });
    
        const data = await response.json();
        return data;
    } catch(e) {
        console.error(e);
    }
}

async function selectFolderAndGetPath() {
    try {
        const response = await fetch('/select-folder', {
            method: 'POST',
        });
    
        const data = await response.json();
        return data;
    } catch(e) {
        console.error(e);
    }
}

//
//Grades
//

const gradesUploadButton = document.getElementById('grades-upload-button');
const gradesLabel = document.getElementById('grades-label');

gradesUploadButton.addEventListener('click', async () => {
    path = await selectFileAndGetPath();

    if(path) {
        paths['grades'] = path;
        gradesLabel.innerText = path;
    }
});

//
//Prefs
//

const prefsUploadButton = document.getElementById('prefs-upload-button');
const prefsLabel = document.getElementById('prefs-label');

prefsUploadButton.addEventListener('click', async () => {
    path = await selectFileAndGetPath();

    if(path) {
        paths['prefs'] = path;
        prefsLabel.innerText = path;
    }
});

//
// Seminars
//

const seminarsUploadButton = document.getElementById('seminars-upload-button');
const seminarsLabel = document.getElementById('seminars-label');

seminarsUploadButton.addEventListener('click', async () => {
    path = await selectFileAndGetPath();

    if(path) {
        paths['seminars'] = path;
        seminarsLabel.innerText = path;
    }
});

//
// Output Dir
//

const outputFolderUploadButton = document.getElementById('output-folder-upload-button');
const outputFolderLabel = document.getElementById('output-folder-label');

outputFolderUploadButton.addEventListener('click', async () => {
    path = await selectFolderAndGetPath();

    if(path) {
        paths['outputFolder'] = path;
        outputFolderLabel.innerText = path;
    }
});