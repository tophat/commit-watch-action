const  { execSync } = require('child_process')
const core = require('@actions/core')
const github = require('@actions/github')
const semverRegex = require('semver-regex')

const SUPPORTED_EVENTS = ['pull_request', 'pull_request_target']

const _sanitizeVersion = version =>
    version && semverRegex().test(version) ? version : 'latest'

try {
    const token = core.getInput('github_token', { required: true })
    const artifactDir = core.getInput('artifact_dir')
    const version = _sanitizeVersion(core.getInput('version'))

    if (!SUPPORTED_EVENTS.includes(event.context.eventName)) {
        throw new Error(`Event type not one of ${SUPPORTED_EVENTS.join(', ')}.`)
    }

    const event = github.context.payload
    const [owner, name] = event.repository.full_name.split('/')

    try {
        execSync(`yarn dlx commit-watch@${version}`, {
            stdio: ['ignore', process.stdout, process.stderr],
            env: {
                COMMITWATCH_GITHUB_TOKEN: token,
                COMMIT_WATCH_OUTPUT_DIR: artifactDir,
                CI_REPO_OWNER: owner,
                CI_REPO_NAME: name,
                CI_COMMIT_SHA: event.pull_request.head.sha,
                CI_BASE_BRANCH: `origin/${event.pull_request.base.ref}`,
                ...(process.env || {}),
            },
        })
    } catch (err) {/* can ignore since we have a separate status check */}
} catch (err) {
    core.setFailed(err.message)
}
