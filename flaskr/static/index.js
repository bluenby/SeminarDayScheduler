function dragAttemptOver1File() {
    alert("Please only upload 1 CSV file per section.");
}



//
//Grades
//

const gradesUploadContainer = document.getElementById('grades-upload-container');
const gradesFileInput = document.getElementById('grades');
const gradesLabel = document.getElementById('grades-label');

gradesUploadContainer.addEventListener('click', () => {
    gradesFileInput.click();
});

//User dragged and dropped a file
gradesUploadContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  
  const files = e.dataTransfer.files;

  if(files.length > 1) {
    dragAttemptOver1File();
    return;
  }

  //Add file to <input> element
  gradesFileInput.files = files;
  //Update file label
  //TO-DO: Make request to server for the directory of the file
  gradesLabel.innerText = files[0].name;
  gradesUploadContainer.classList.remove('dragover');
});

//Visual
gradesUploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    gradesUploadContainer.classList.add('dragover');
});

//Visual
gradesUploadContainer.addEventListener('dragleave', () => {
    gradesUploadContainer.classList.remove('dragover');
});

//Fires when the user clicks to select a file
gradesFileInput.addEventListener('change', (e) => {
    //Update file label
    //TO-DO: Make request to server for the directory of the file
    gradesLabel.innerText = e.target.files[0].name;
});

//
//Prefs
//

const prefsUploadContainer = document.getElementById('prefs-upload-container');
const prefsFileInput = document.getElementById('prefs');
const prefsLabel = document.getElementById('prefs-label');

prefsUploadContainer.addEventListener('click', () => {
    prefsFileInput.click();
});

//User dragged and dropped a file
prefsUploadContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  
  const files = e.dataTransfer.files;

  if(files.length > 1) {
    dragAttemptOver1File();
    return;
  }

  //Add file to <input> element
  prefsFileInput.files = files;
  //Update file label
  //TO-DO: Make request to server for the directory of the file
  prefsLabel.innerText = files[0].name;
  prefsUploadContainer.classList.remove('dragover');
});

//Visual
prefsUploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    prefsUploadContainer.classList.add('dragover');
});

//Visual
prefsUploadContainer.addEventListener('dragleave', () => {
    prefsUploadContainer.classList.remove('dragover');
});

//Fires when the user clicks to select a file
prefsFileInput.addEventListener('change', (e) => {
    //Update file label
    //TO-DO: Make request to server for the directory of the file
    prefsLabel.innerText = e.target.files[0].name;
});

//
// Seminars
//

const seminarsUploadContainer = document.getElementById('seminars-upload-container');
const seminarsFileInput = document.getElementById('seminars');
const seminarsLabel = document.getElementById('seminars-label');

seminarsUploadContainer.addEventListener('click', () => {
    seminarsFileInput.click();
});

//User dragged and dropped a file
seminarsUploadContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  
  const files = e.dataTransfer.files;

  if(files.length > 1) {
    dragAttemptOver1File();
    return;
  }

  //Add file to <input> element
  seminarsFileInput.files = files;
  //Update file label
  //TO-DO: Make request to server for the directory of the file
  seminarsLabel.innerText = files[0].name;
  seminarsUploadContainer.classList.remove('dragover');
});

//Visual
seminarsUploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    seminarsUploadContainer.classList.add('dragover');
});

//Visual
seminarsUploadContainer.addEventListener('dragleave', () => {
    seminarsUploadContainer.classList.remove('dragover');
});

//Fires when the user clicks to select a file
seminarsFileInput.addEventListener('change', (e) => {
    //Update file label
    //TO-DO: Make request to server for the directory of the file
    seminarsLabel.innerText = e.target.files[0].name;
});

//
// Output Dir
//

const outputDirUploadContainer = document.getElementById('output-dir-upload-container');
const outputDirFileInput = document.getElementById('output-dir');
const outputDirLabel = document.getElementById('output-dir-label');

outputDirUploadContainer.addEventListener('click', () => {
    outputDirFileInput.click();
});

//User dragged and dropped a file
outputDirUploadContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  
  const files = e.dataTransfer.files;

  if(files.length > 1) {
    dragAttemptOver1File();
    return;
  }

  //Add file to <input> element
  outputDirFileInput.files = files;
  //Update file label
  //TO-DO: Make request to server for the directory of the file
  outputDirLabel.innerText = files[0].name;
  outputDirUploadContainer.classList.remove('dragover');
});

//Visual
outputDirUploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    outputDirUploadContainer.classList.add('dragover');
});

//Visual
outputDirUploadContainer.addEventListener('dragleave', () => {
    outputDirUploadContainer.classList.remove('dragover');
});

//Fires when the user clicks to select a file
outputDirFileInput.addEventListener('change', (e) => {
    //Update file label
    //TO-DO: Make request to server for the directory of the file
    outputDirLabel.innerText = e.target.files[0].name;
});