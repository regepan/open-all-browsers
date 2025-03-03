#!/usr/bin/env node
const { openUrlInBrowsers } = require('../lib/openBrowsers');

const url = process.argv[2];

if (!url) {
    console.error("Usage: oal <URL>");
    process.exit(1);
}

openUrlInBrowsers(url);
