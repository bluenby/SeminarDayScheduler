heartbeatInterval = setInterval(send_heartbeat, 1000)

function send_heartbeat() {
    fetch('/heartbeat-check-in', {
        method: 'POST',
    })
    //Error means app timed out
    .catch((error) => {
        clearInterval(heartbeatInterval);

        while (true) {
            alert("The app has timed out. Please close this tab and reopen the application.");
        }
    });
}