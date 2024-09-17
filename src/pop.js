document.getElementById("convert-btn").addEventListener("click", () => {
    // Get the input IST time
    const istTimeInput = document.getElementById("ist-time").value;
    if (!istTimeInput) {
        alert('Please enter a valid IST time.');
        return;
    }

    // Create a Date object from the input (IST is UTC+5:30)
    const istDate = new Date(istTimeInput + ':00+05:30'); // append +05:30 for IST

    // Convert IST to CET
    const cetDate = istDate.toLocaleString('en-GB', {
        timeZone: 'Europe/Berlin',
        timeZoneName: 'short'
    });

    // Convert IST to US Eastern Time (EST)
    const estDate = istDate.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        timeZoneName: 'short'
    });

    // Display the converted times
    document.getElementById("cet-time").innerText = `CET: ${cetDate}`;
    document.getElementById("est-time").innerText = `EST: ${estDate}`;
});
