# Contributing

Hi there, thanks for checking out our repo!

**seek-datadog-custom-metrics** defines a common interface for sending Datadog custom metrics from Node.js runtime environments.
It's a general-purpose package, so third-party contributions are more than welcome.

SEEKers: this repo is public,
so don't commit or post anything that isn't ready for the entire world to see.

## Table of contents

- [Getting started](#getting-started)
  - [I want to discuss or report something](#i-want-to-discuss-or-report-something)
  - [I want to contribute a change](#i-want-to-contribute-a-change)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Git workflow](#git-workflow)
  - [Testing](#testing)
- [Releases](#releases)
  - [Creating a changeset](#creating-a-changeset)
  - [Publishing a release](#publishing-a-release)
  - [Publishing a prerelease](#publishing-a-prerelease)

## Getting started

**seek-datadog-custom-metrics** is documented through its [README](/README.md).
We maintain [release notes] on GitHub,
and distribute it as an [npm package].

### I want to discuss or report something

[Submit an issue] if you have a question, feature request or bug report.

If you work at SEEK, [#typescriptification] is your friend.

### I want to contribute a change

Feel free to [create a pull request] for trivial fixes and improvements.

For more substantial features, please [submit an issue] first.
This lets us evaluate whether the feature fits the direction of the project and discuss possible approaches.

## Development

### Prerequisites

We depend on upstream tooling like **[skuba]** that are predominantly tested on macOS and Linux.
If you're on Windows, we recommend the [Windows Subsystem for Linux].

First, some JavaScript tooling:

- Node.js 12+
- Yarn 1.x

Next, install npm dependencies:

```shell
yarn install
```

### Git workflow

We use [GitHub flow](https://guides.github.com/introduction/flow/).

Create a new branch off of the latest commit on master:

```shell
git fetch origin
git switch --create your-branch-name origin/master
```

Develop, [test](#testing) and commit your changes on this branch.
(Make sure to use a [semantic commit message](#writing-a-semantic-commit-message).)

```shell
git add --all
git commit
```

Finally, push your branch to GitHub and [create a pull request]:

```shell
git push --set-upstream origin your-branch-name
```

If you don't have push access,
you may need to [fork the repo] and push there instead:

```shell
git remote add fork git@github.com:your-username/datadog-custom-metrics.git
git push --set-upstream fork your-branch-name
```

A maintainer will get to your pull request and review the changes.
If all is well, they will merge your pull request into master.

### Testing

You may find it easier to develop alongside unit tests:

```shell
yarn test --watch
```

Format your code once you're happy with it:

```shell
yarn format
```

We run linting and testing in CI,
but consider running these commands locally for a faster feedback loop:

```shell
yarn lint
yarn test
```

## Releases

### Writing a semantic commit message

Consider whether you are making a visible change to the public **seek-datadog-custom-metrics** interface,
which includes:

- Top-level exports from [src/index.ts](/src/index.ts)
- [npm dependencies](/package.json)

A release is not necessary for:

- Documentation like the [README](/README.md)
- Internal refactoring that preserves the existing interface
- [npm dev dependencies](/package.json)

We use **[semantic-release]** to manage package releases.
Commits should follow the [Conventional Commits] spec for [semantic versioning]:

- No release

  ```text
  chore(scope): Update documentation
  ```

- Patch release `0.0.X`: fixes or tweaks to existing functionality

  ```text
  fix(scope): Squash a bug
  ```

- Minor release `0.X.0`: new, backwards-compatible functionality

  ```text
  feat(scope): Add a feature
  ```

- Major release `X.0.0`: backwards-incompatible modification

  ```text
  fix(scope): Close security holes

  BREAKING CHANGE: We deleted all our code.
  ```

  Note that the `fix` type could be anything;
  the `BREAKING CHANGE:` prefix in the commit body is what determines the release as major.

Specifying a scope makes it easy to eyeball which part of **seek-datadog-custom-metrics** a change relates to:

```text
chore(docs): Update README

fix(CloudWatchClient): Improve tag sanitisation
```

### Publishing a release

When a pull request is merged,
our [release](/.github/workflows/release.yml) GitHub Actions workflow will publish the associated GitHub release and npm package version.

We [squash our commits],
so the merged commit itself needs to have a [semantic commit message](#writing-a-semantic-commit-message).

### Publishing a prerelease

We currently have limited support for prereleases on the `beta` [dist-tag].
This can only be performed by a maintainer.

Simply push changes to the `beta` branch on GitHub.

[#typescriptification]: https://seekchat.slack.com/channels/typescriptification
[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0-beta.2/
[create a pull request]: https://github.com/seek-oss/datadog-custom-metrics/compare
[dist-tag]: https://docs.npmjs.com/cli/dist-tag
[fork the repo]: https://github.com/seek-oss/datadog-custom-metrics/fork
[npm package]: https://www.npmjs.com/package/seek-datadog-custom-metrics
[release notes]: https://github.com/seek-oss/datadog-custom-metrics/releases
[semantic versioning]: https://semver.org/
[semantic-release]: https://github.com/semantic-release/semantic-release
[skuba]: https://github.com/seek-oss/skuba
[squash our commits]: https://github.blog/2016-04-01-squash-your-commits/
[submit an issue]: https://github.com/seek-oss/datadog-custom-metrics/issues/new/choose
[windows subsystem for linux]: https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux
