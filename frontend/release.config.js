// use semantic-release to manage frontend releases
module.exports = {
  branches: ['main'],
  tagFormat: 'frontend-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
}