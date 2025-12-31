---
command: "/bug"
category: "Issue Management"
purpose: "Create GitHub issue for bug reports"
---

# Bug Command - Create GitHub Issue

Automatically create a GitHub issue for bug reports with intelligent input parsing.

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

## Usage

```bash
# Simple bug description
/bug Navigation menu doesn't close on mobile after clicking a link

# Browser console error
/bug TypeError: Cannot read properties of undefined
at App.jsx:45

# Build error
/bug npm run build fails with "Module not found" error
```

## Issue Creation Process

When you call `/bug`, this command will:

1. **Parse your input** - Detect error type or description
2. **Extract details** - Get error messages, file locations
3. **Create GitHub issue** with:
   - **Title**: Clear bug summary
   - **Label**: `bug` (automatically added)
   - **Body**: Detailed issue with error information
4. **Display confirmation** - Show the created issue URL

## GitHub Issue Format

```markdown
# <Bug summary>

## Reported Issue
**What's broken**: <What the user sees>
**Expected behavior**: <What should happen>
**Severity**: <Critical/High/Medium/Low>

## Error Details
**Error Message**: <Exact error if provided>
**Location**: <file.jsx:123 if known>

## How to Reproduce
1. <Step-by-step reproduction>
2. <Include specific conditions>
3. <Result: error, visual bug, etc.>

## Investigation Notes
- Files likely affected: src/App.jsx, src/App.css
- Related sections: [list]

## Next Steps
- Investigate root cause
- Ensure minimal, surgical fix
- Verify build + lint pass after fix
```

## Severity Guidelines

- **Critical**: Site crashes, major layout broken, contact form not working
- **High**: Core section broken, navigation issues
- **Medium**: Visual bug with workaround, minor layout issue
- **Low**: Edge case, minor cosmetic issue

## Workflow

1. **Report Bug**: `/bug <description or error>`
2. **Issue Created**: GitHub issue appears with label `bug`
3. **Investigate**: Use `/orchestrate3 gh issue #N` to diagnose and fix
4. **Complete**: Cleanup agent closes issue and commits

## Bug
$ARGV

When executed, this command will create an issue using:

```bash
gh issue create \
  --title "$ARGV" \
  --body "## Reported Issue
**What's broken**: [describe from input]
**Expected behavior**: [what should happen]
**Severity**: [estimate]

## Error Details
$ARGV

## How to Reproduce
1. [Step-by-step]

## Investigation Notes
- Files likely affected: src/App.jsx, src/App.css, src/index.css
- Check browser console for errors
- Check build output for warnings

## Next Steps
- Investigate root cause (not just symptom)
- Ensure minimal, surgical fix
- Verify build + lint pass" \
  --label bug
```
