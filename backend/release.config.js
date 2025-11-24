// use semantic-release to manage backend releases
module.exports = {
  branches: ['main'],
  tagFormat: 'backend-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
}