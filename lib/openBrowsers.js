// lib/openBrowsers.js
const { exec } = require('child_process');

function openUrlInBrowsers(url) {
    const browsers = [
        'Google Chrome',
        'Safari',
        'Firefox',
        'Microsoft Edge'
    ];

    browsers.forEach(browser => {
        const command = `open -a "${browser}" "${url}"`;
        exec(command, (err) => {
            if (err) {
                console.error(`Error opening ${browser}:`, err);
            }
        });
    });
}

module.exports = { openUrlInBrowsers };
