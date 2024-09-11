document.getElementById('onButton').addEventListener('click', function() {
    // Simulate activating security features
    updateStatus('ON', 'System is ON. Security features are now active.');
    showAlert('Security features activated.');
    // Example API call to activate security features (pseudo-code)
    // fetch('/api/security/activate', { method: 'POST' });
});

document.getElementById('offButton').addEventListener('click', function() {
    // Simulate deactivating security features
    updateStatus('OFF', 'System is OFF. Security features are now inactive.');
    showAlert('Security features deactivated.');
    // Example API call to deactivate security features (pseudo-code)
    // fetch('/api/security/deactivate', { method: 'POST' });
});

function updateStatus(status, message) {
    const statusElement = document.getElementById('statusMessage');
    statusElement.textContent = status;
    statusElement.style.color = status === 'ON' ? '#00ff00' : '#ff0000'; // Green for ON, Red for OFF
}

function showAlert(message) {
    alert(message); // Simple alert to indicate status
}
