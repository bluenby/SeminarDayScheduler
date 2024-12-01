function send_heartbeat() {
    fetch('/heartbeat-check-in', {
        method: 'POST',
    });
}

setInterval(send_heartbeat, 1000)