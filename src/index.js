const  { execSync } = require('child_process')
const core = require('@actions/core')
const github = require('@actions/github')
const semverRegex = require('semver-regex')

const _sanitize_version = version =>
    version && semverRegex().test(version) ? version : 'latest'

try {
    const token = core.getInput('github_token', { required: true })
    const artifactDir = core.getInput('artifact_dir')
    const version = _sanitize_version(core.getInput('version'))
    const event = github.context.payload
    const [owner, name] = event.repository.full_name.split('/')

    execSync(`yarn dlx commit-watch@${version}`, {
        stdio: 'inherit',
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
} catch (err) {
    core.setFailed(err.message)
}
