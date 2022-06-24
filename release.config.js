module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/ahmadmusair/try-reactjs-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: "build",
      },
    ],
  ],
};
