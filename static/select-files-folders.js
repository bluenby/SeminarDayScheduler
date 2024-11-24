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
    paths['grades'] = await selectFileAndGetPath();
    gradesLabel.innerText = paths['grades'];
});

//
//Prefs
//

const prefsUploadButton = document.getElementById('prefs-upload-button');
const prefsLabel = document.getElementById('prefs-label');

prefsUploadButton.addEventListener('click', async () => {
    paths['prefs'] = await selectFileAndGetPath();
    prefsLabel.innerText = paths['prefs'];
});

//
// Seminars
//

const seminarsUploadButton = document.getElementById('seminars-upload-button');
const seminarsLabel = document.getElementById('seminars-label');

seminarsUploadButton.addEventListener('click', async () => {
    paths['seminars'] = await selectFileAndGetPath();
    seminarsLabel.innerText = paths['seminars'];
});

//
// Output Dir
//

const outputFolderUploadButton = document.getElementById('output-folder-upload-button');
const outputFolderLabel = document.getElementById('output-folder-label');

outputFolderUploadButton.addEventListener('click', async () => {
    paths['outputFolder'] = await selectFolderAndGetPath();
    outputFolderLabel.innerText = paths['outputFolder'];
});