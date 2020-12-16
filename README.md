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
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          fetch-depth: 0
      - uses: tophat/commit-watch-action@v1.0
        with:
          github_token: ${{ secrets.GH_TOKEN }}
          artifact_dir: ./artifacts
```

## License

CommitWatch Action is licensed under [Apache License Version 2.0](https://github.com/tophat/commit-watch-action/tree/master/LICENSE).
