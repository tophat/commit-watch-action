const { execSync } = require('child_process')
const path = require('path')
const index = path.resolve(__dirname, 'index.js')

execSync(`yarn node ${index}`, { stdio: 'inherit', env: process.env })
