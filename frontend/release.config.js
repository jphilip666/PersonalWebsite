// use semantic-release to manage frontend releases
export default {
  branches: ['main'],
  tagFormat: 'frontend-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
}