const { execSync } = require('child_process')
const path = require('path')
const index = path.resolve(__dirname, 'index.js')

execSync(
    `yarn node ${index}`,
    { stdio: process.env.DEBUG ? 'inherit' : ['ignore', 'ignore', 'inherit'] },
)
