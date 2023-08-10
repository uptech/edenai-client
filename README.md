# edenai-client

TypeScript library for interacting with Eden AI

## Installation

Currently the library is not published to npm, so you need to install it from github.

```bash
npm i github:Uptech/edenai-client
```

## Github Workflows/Actions

If you use any type of Github action or workflow, you can use the following as a template to authenticate the installation of dependencies.

Add the associated secrets (`SSH_PRIVATE_KEY`, `PERSONAL_ACCESS_TOKEN_GITHUB_TOKEN`) to your Github's repository settings under Settings > Secrets > Actions > Repository Secrets.

Note: You may also want to add the above secrets to the Dependabot Secrets in Github as well.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Setup SSH
        uses: webfactory/ssh-agent@v0.5.4
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

      - name: 'Installing Packages'
        run: npm ci
        env:
          GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN_GITHUB_TOKEN }}
```

## Usage

```typescript
// 1. Create the Client with proper configuration that was provided to you from Eden AI.
edenAiClient.auth('EDEN_AI_TOKEN')

// 2. Create a text moderation query
const response = await edenAPI.text_moderation_create({
  providers: 'microsoft',
  text: 'Some inappropriate text',
})
```

## Releasing

Make sure to bump the version in the `package.json` file and then run `npm i` to update the `package-lock.json` file, then you can commit and push changes up to Github, and run `npm update @viva/i2c` on the consuming project to update the library.

### Release Process

As part of the release process you should:

1. Update the version in `package.json` ie: `X.X.X`, run `npm install`, & commit the changes
   - 🔥 Leave any relevant `changelog` notes if you forgot to!
2. Create the tag ie: `git tag X.X.X`
3. Generate the `CHANGELOG.md` via `npm run changelog` & commit the changes
   - If you forgot to add your change notes to previous commits, now is your last chance! You can rebase and reword the package.json change commit message to include some relevant notes. Then run `git tag -d X.X.X` to remove the old tag, then run `git tag X.X.X`, then you can run `npm run changelog` again to generate the changelog with the new notes.
4. Push up commits and tags `git push` & `git push --tags`
5. Create the release in Github <https://github.com/Viva-Equity/i2c-client-ts/releases/new>

### CHANGELOG.md

We are using Git Cl on this project via: <https://github.com/uptech/git-cl>

Check out the above repository for installation notes.

#### Generating and Updating the CHANGELOG.md

```shell
npm run changelog
```
