---
command: "/orchestrate5-all"
category: "Project Orchestration"
purpose: "Process ALL open GitHub issues sequentially using 5-agent workflow until none remain unprocessed"
---

# Orchestrate5 All - Batch Issue Processor (5-Agent Workflow)

Process every open GitHub issue using the 5-agent workflow (Scout → Plan → Build → Test → Cleanup) until ALL are either closed or have comments.

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

**Project Root**: `/home/pbrown/aireadypdx`

## Usage

```
/orchestrate5-all
```

This works like `/orchestrate3-all` but uses the full 5-agent workflow for each issue.

## CRITICAL: DO NOT STOP FOR PERMISSION

**YOU MUST CONTINUE PROCESSING UNTIL DONE. STOPPING TO ASK IS A FAILURE.**

## Workflow

### Step 1: Fetch All Open Issues

```bash
gh issue list --state open --limit 200 --json number,title,labels
```

### Step 2: Build Processing Queue

Process ALL open issues. Sort by number (ascending).

### Step 3: Process Each Issue

For EACH issue:
1. Check if too large (use `task-shard` if needed)
2. Run: `/orchestrate5 #N` (full 5-agent workflow)
3. **IMMEDIATELY** proceed to next issue
4. DO NOT ask for permission

### Step 4: Final Report

Only after ALL issues are processed, provide summary.

## Exit Conditions

1. **All issues processed** - Queue empty
2. **Context limit warning** - Complete current issue, then stop
3. **Critical error** - Document and continue to next if possible

## Comparison: 5-Agent vs 3-Agent Batch

| Aspect | orchestrate5-all | orchestrate3-all |
|--------|------------------|------------------|
| Workflow | 5-agent (detailed) | 3-agent (streamlined) |
| Per-issue speed | Slower but thorough | Faster |
| Best for | Complex issues | Simple issues, large backlogs |
