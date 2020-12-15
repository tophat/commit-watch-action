# CommitWatch GitHub Action

[![GitHub license](https://img.shields.io/github/license/tophat/commit-watch-action)](https://github.com/tophat/commit-watch-action/blob/master/LICENSE) [![Slack workspace](https://slackinvite.dev.tophat.com/badge.svg)](https://opensource.tophat.com/slack)

## Overview

GitHub action for [Commit Watch](https://github.com/tophat/commit-watch).

## Getting Started

Requires yarn to be installed, which is installed by default in `ubuntu-latest`.

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    uses: tophat/commit-watch-action@v1.0
    with:
      github-token: ${{ secrets.GH_TOKEN }}
      artifact-dir: ./artifacts
```

## License

CommitWatch Action is licensed under [Apache License Version 2.0](https://github.com/tophat/commit-watch-action/tree/master/LICENSE).
