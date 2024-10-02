# Contributing

Hi there, thanks for checking out our repo!

Scoobie is a component library for SEEK documentation sites.

While third-party contributions are certainly welcome,
this library has minimal value if you aren't committed to our [design system] and [development toolkit].

SEEKers: this repo is public,
so don't commit or post anything that isn't ready for the entire world to see.

## Getting started

Scoobie is documented through its [README](/README.md) and [Storybook site].
We maintain [release notes] on GitHub,
and distribute it as an [npm package].

### I want to discuss or report something

[Submit an issue] if you have a question, feature request or bug report.

If you work at SEEK, [#indirect] is your friend.

### I want to contribute a change

Feel free to [create a pull request] for trivial fixes and improvements.

For more substantial features, please [submit an issue] first.
This lets us evaluate whether the feature fits the direction of the project and discuss possible approaches.

## Development

### Prerequisites

We depend on upstream tooling like **[sku]** that are predominantly tested on macOS and Linux.
If you're on Windows, we recommend the [Windows Subsystem for Linux].

First, some JavaScript tooling:

- Node.js LTS
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
git remote add fork git@github.com:your-username/scoobie.git
git push --set-upstream fork your-branch-name
```

A maintainer will get to your pull request and review the changes.
If all is well, they will merge your pull request into master.

### Testing

Start a local [Storybook] server to preview your changes:

```shell
yarn storybook:start
```

While the Storybook server is running,
you can run visual regression tests with [Loki]:

```shell
yarn loki:test
```

If you meant to make visual changes,
you can update the Loki snapshots:

```shell
yarn loki:update
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

### Creating a changeset

We use [Changesets] to manage package releases.
You'll see a 🦋 bot gliding around pull requests.

You should write a changeset if you are changing the public Scoobie interface,
which includes:

- Top-level exports from [src/index.ts](/src/index.ts)
- Top-level exports from [webpack/index.js](/webpack/index.js)
- Bundled configuration files [types.d.ts](/types.d.ts) and [typography.ts](/typography.ts)
- [npm dependencies](/package.json)

On the other hand,
a changeset is not necessary for:

- Documentation like the [README](README.md)
- Internal refactoring that preserves the existing interface
- [npm dev dependencies](https://github.com/seek-oss/scoobie/blob/master/package.json)

```shell
yarn changeset
```

The Changesets CLI is interactive and follows [semantic versioning]:

- Patch release `0.0.X`: fixes or tweaks to existing functionality
- Minor release `0.X.0`: new, backwards-compatible functionality
- Major release `X.0.0`: backwards-incompatible modification

The Changesets CLI will generate a Markdown file under [.changeset](https://github.com/seek-oss/scoobie/tree/master/.changeset),
which you should include in your pull request.
It doesn't need to be part of the same commit as the rest of your changes.
Feel free to manually edit this file to include more details about your change.

### Publishing a release

When a pull request with a changeset is merged,
our CI workflow will create a new `Version Packages` PR.
The changesets are used to infer the next semantic version and to update the [changelog].

This PR may be left open to collate multiple changes into the next version.
A maintainer will merge it once ready,
and our [release](https://github.com/seek-oss/scoobie/blob/master/.github/workflows/release.yml) GitHub Actions workflow will publish the associated GitHub release and npm package version.

### Publishing a prerelease

Prereleases can be created on demand via [seek-oss/changesets-snapshot].

Run the [Snapshot workflow] in GitHub Actions to publish a new snapshot version to npm.

<https://www.npmjs.com/package/scoobie?activeTab=versions>

[#indirect]: https://seekchat.slack.com/channels/indirect
[changelog]: CHANGELOG.md
[changesets]: https://github.com/atlassian/changesets
[create a pull request]: https://github.com/seek-oss/scoobie/compare
[design system]: https://github.com/seek-oss/braid-design-system
[development toolkit]: https://github.com/seek-oss/sku
[fork the repo]: https://github.com/seek-oss/scoobie/fork
[loki]: https://loki.js.org/
[npm package]: https://www.npmjs.com/package/scoobie
[release notes]: https://github.com/seek-oss/scoobie/releases
[seek-oss/changesets-snapshot]: https://github.com/seek-oss/changesets-snapshot
[semantic versioning]: https://semver.org/
[sku.config.js]: https://github.com/seek-oss/scoobie#skuconfigjs
[sku]: https://github.com/seek-oss/sku
[snapshot workflow]: https://github.com/seek-oss/scoobie/actions/workflows/snapshot.yml
[squash our commits]: https://github.blog/2016-04-01-squash-your-commits/
[storybook site]: https://seek-oss.github.io/scoobie/
[storybook]: https://storybook.js.org/
[submit an issue]: https://github.com/seek-oss/scoobie/issues/new/choose
[windows subsystem for linux]: https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux
