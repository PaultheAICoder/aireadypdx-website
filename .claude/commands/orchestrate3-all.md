---
command: "/orchestrate3-all"
category: "Project Orchestration"
purpose: "Process ALL open GitHub issues sequentially using 3-agent workflow until none remain unprocessed"
---

# Orchestrate3 All - Batch Issue Processor (3-Agent Workflow)

Process every open GitHub issue using the 3-agent workflow (Scout-and-Plan → Build → Test-and-Cleanup) until ALL are either closed or have comments.

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

**Project Root**: `/home/pbrown/aireadypdx`

## CRITICAL: ORCHESTRATION ONLY

**YOU ARE A CONDUCTOR, NOT A PERFORMER.**

**YOU MUST:**
- Run `/orchestrate3 #N` for each issue via SlashCommand tool
- Use `task-shard` agent for issues that are too large
- Update GitHub issues with brief progress comments
- Report progress between issues

**YOU MUST NEVER:**
- Read code files yourself
- Write or edit any code
- Run tests directly
- Create or modify source files
- Investigate bugs yourself

## CRITICAL: DO NOT STOP FOR PERMISSION

**YOU MUST CONTINUE PROCESSING UNTIL DONE. STOPPING TO ASK IS A FAILURE.**

- "Should I continue?" = WRONG
- "Do you want me to process the next issue?" = WRONG
- Automatically proceed to next issue = CORRECT
- Only stop when ALL issues processed = CORRECT

## Workflow

### Step 1: Fetch All Open Issues

```bash
gh issue list --state open --limit 200 --json number,title,labels
```

### Step 2: Build Processing Queue

Process ALL open issues. Sort by number (ascending). Report:
```
Found X open issues to process: #A, #B, #C, ...
```

### Step 3: Process Each Issue

For EACH issue in the queue:

1. Report: `Starting issue #N (M of Z remaining)`

2. **Check issue size** - Read the issue title/body briefly:
   ```bash
   gh issue view #N --json title,body,labels
   ```

3. **If issue appears too large** (multiple distinct features, estimated >4 hours):
   - Use the `task-shard` agent to break it into smaller sub-issues
   - After sharding, the original issue will be closed
   - Continue to next issue in queue

4. **If issue is appropriately sized**:
   - Run: `/orchestrate3 #N` (3-agent workflow)

5. When `/orchestrate3` completes, **IMMEDIATELY** proceed to next issue
6. DO NOT wait for user input
7. DO NOT ask if you should continue

### Step 4: Final Report (ONLY when ALL issues done)

```markdown
# Batch Processing Complete (3-Agent Workflow)

## Summary
- Total issues processed: Z
- Closed: X
- Sharded into sub-issues: S
- Blocked (needs manual intervention): Y

## Issues Processed
| Issue | Status | Notes |
|-------|--------|-------|
| #1    | Closed | Updated hero section |
| #2    | Sharded | Split into #5, #6 |
...

## Next Steps
[Any remaining work or issues that need manual attention]
```

## Exit Conditions (ONLY these are acceptable)

1. **All issues processed** - Queue empty
2. **Context limit warning** - Complete current issue, then stop
3. **Critical unrecoverable error** - Document and continue to next issue if possible

## Anti-Patterns (NEVER DO THESE)

1. Stop after arbitrary number of issues
2. Ask "should I continue?"
3. Wait for user confirmation between issues
4. Summarize progress and pause
5. Read code files directly (let agents do it)

## The Prime Directive

**Your job is not done until all open issues are closed.**

Process. Continue. Repeat. Only stop when finished.
