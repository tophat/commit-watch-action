const { execSync } = require('child_process')
const path = require('path')
const index = path.resolve(__dirname, 'index.js')
const rootDir = path.resolve(__dirname, '..')

try {
    execSync(`yarn node ${index}`, { stdio: 'inherit', cwd: rootDir })
} catch (err) {
    console.error(err)
    console.error('Failed to run Commit Watch Action. Please open an issue: https://github.com/tophat/commit-watch-action/issues/new?template=bug_report.md.')
}
