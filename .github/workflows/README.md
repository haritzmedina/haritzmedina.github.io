# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated checks and security scanning.

## Workflows

### CI (`.github/workflows/ci.yml`)
**Triggers:** Push/PR to master/main branches
- **Lint:** Runs ESLint and Prettier checks
- **Build:** Validates production build
- **Security:** npm audit for vulnerabilities

### CodeQL Analysis (`.github/workflows/codeql-analysis.yml`)
**Triggers:** Push/PR + weekly (Wednesdays 3:00 UTC)
- Advanced security analysis
- Detects vulnerabilities and code quality issues

### OSSAR (`.github/workflows/ossar-analysis.yml`)
**Triggers:** Push/PR + monthly (1st day 4:00 UTC)
- Microsoft open-source static analysis
- Uploads results to Security tab

## Manual Runs

Trigger workflows manually from Actions tab → select workflow → "Run workflow"

## Security Reports

View results in:
- **Security** tab → Code scanning alerts
- **Actions** tab → workflow run summaries
