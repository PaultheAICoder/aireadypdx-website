---
command: "/analyze-issue-completion"
category: "Issue Management"
purpose: "Deep dive investigation of GitHub issues to determine completion status and closure readiness"
---

# Analyze Issue Completion Command

Conduct comprehensive investigation of GitHub issues to determine completion status, identify blockers, and take appropriate closure/follow-up actions.

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

**Project Root**: `/home/pbrown/aireadypdx`

## Usage

```
/analyze-issue-completion [issue-numbers...]
```

**Examples:**
```
/analyze-issue-completion 5
/analyze-issue-completion 5 7 8 9
/analyze-issue-completion #5 #7 #8
```

## Investigation Process

For each issue provided, conduct a comprehensive analysis:

### 1. Current Status Analysis

**GitHub Investigation:**
- Read issue via `gh issue view [number]`
- Review all issue comments for status updates
- Identify linked issues

**Local Documentation Review:**
- Search `completion-docs/` for completion reports mentioning the issue
- Search `.agents/outputs/` for agent output files related to the issue
- Check git log for commits mentioning the issue number

**Status Determination:**
- Calculate completion percentage (0-100%)
- Identify current phase: Not Started / In Progress / Blocked / Complete
- Document blocking issues (if any)

### 2. Implementation Status Review

**Code Changes:**
- Use `git log --grep="#[issue-number]"` to find related commits
- Check if implementation matches issue acceptance criteria

**Validation:**
- Build status: `npm run build`
- Lint status: `npm run lint`

### 3. Closure Assessment

**Closure Decision Matrix:**

| Status | Criteria | Action |
|--------|----------|--------|
| **CLOSE** | 100% complete, build+lint pass | Close with completion comment |
| **NEEDS_WORK** | 80-99% complete | Create follow-up issue, close parent |
| **DECOMPOSE** | Large scope | Create phase issues, close parent |
| **BLOCKED** | Cannot proceed | Document blocker, keep open |
| **INCOMPLETE** | <80% complete | Keep open, update with status |

### 4. Deliverables

Create a report:

```markdown
# Issue Completion Analysis Report

**Analysis Date**: [YYYY-MM-DD]
**Issues Analyzed**: [count]

---

## Issue #[NUMBER]: [Title]

### Summary
- **Status**: [Open/Closed]
- **Completion Percentage**: [0-100%]
- **Current Phase**: [Not Started / In Progress / Blocked / Complete]

### Work Completed
[Summary of what has been implemented]

### Closure Recommendation
**Decision**: [CLOSE / NEEDS_WORK / DECOMPOSE / BLOCKED / INCOMPLETE]
**Rationale**: [Why this decision]

---

## Overall Summary

### Issues Ready to Close
- Issue #[NUMBER]: [Title]

### Issues Needing Follow-Up
- Issue #[NUMBER]: [Title] - [what's needed]

### Issues Blocked
- Issue #[NUMBER]: [Title] - [blocker]
```

Save report to: `.claude/reports/issue-analysis-[YYYY-MM-DD].md`

### 5. Follow-Up Actions

After creating the report, take appropriate actions:

**For Issues Ready to Close:**
```bash
gh issue close [number] --comment "Issue Analysis Complete - Closing

This issue has been analyzed and determined to be 100% complete.

**Completion Summary:**
[Brief summary]

Closing as complete."
```

**For Issues Needing Follow-Up Work:**
1. Create new follow-up issue for remaining work
2. Comment on parent issue with follow-up link
3. Close parent issue

**For Issues to Decompose:**
1. Create child issues for each work phase
2. Update parent issue with decomposition
3. Close parent issue

**For Blocked Issues:**
```bash
gh issue comment [number] --body "Issue Analysis - Currently Blocked

**Blocking Issue(s):**
- [description]

Keeping this issue open. Will revisit after blocker is resolved."
```

## Critical Rules

1. **DO NOT close issues prematurely**: Only close issues that are 100% complete
2. **DO NOT make assumptions**: Read actual code and documentation
3. **DO provide evidence**: Include commit hashes, file paths in analysis
4. **DO create follow-up issues**: Better to have tracked issues than undocumented work
5. **DO update issue comments**: Always comment before closing

## Output Format

After completing all actions:

```markdown
# Issue Completion Analysis Complete

**Issues Analyzed**: [count]

## Actions Taken

### Closed Issues
- #[number]: [Title] - [reason]

### Follow-Up Issues Created
- #[new-number] (from #[parent]): [Title]

### Issues Kept Open
- #[number]: [Title] - [reason]

## Summary
- **Issues Closed**: [count]
- **Follow-Up Issues Created**: [count]
- **Report Location**: `.claude/reports/issue-analysis-[date].md`
```
