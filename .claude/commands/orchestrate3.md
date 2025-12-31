---
command: "/orchestrate3"
category: "Project Orchestration"
purpose: "Execute streamlined 3-agent workflow (Scout-and-Plan → Build → Test-and-Cleanup)"
---

# Orchestrate3 Command - 3-Agent Workflow

Execute the streamlined 3-agent workflow for implementing features, fixing bugs, or completing tasks. This command orchestrates all agents sequentially without doing any work itself.

**Workflow**: Scout-and-Plan → Build → Test-and-Cleanup

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

**Project Root**: `/home/pbrown/aireadypdx`

## CRITICAL: ORCHESTRATION ONLY

**WHEN THE USER TYPES `/orchestrate3`, YOU ARE A CONDUCTOR, NOT A PERFORMER.**

**YOU MUST:**
- Call agents directly via Task tool
- Report agent progress to user
- Read agent outputs
- Summarize results
- Coordinate workflow

**YOU MUST NEVER:**
- Read code files yourself
- Write or edit any code
- Run builds/tests directly
- Create or modify files
- Investigate bugs yourself
- Do ANY implementation work

**Your ONLY job is to call agents via the Task tool and report their results. Nothing more.**

## Usage

```
/orchestrate3 [input]
```

**Input can be:**
- Plain text description: `/orchestrate3 Add testimonials section`
- Github issue: `/orchestrate3 gh issue #17`
- Bug description: `/orchestrate3 Fix navigation not working on mobile`

## Workflow Process

### Input Parsing: Extract Issue Number

**Your Role**:
1. Parse user input for issue number patterns
2. Report to user:
   - If GitHub issue: "Processing GitHub Issue #N (3-agent workflow)"
   - If no issue: "Processing ad-hoc task (3-agent workflow)"

### Phase 1: Scout-and-Plan Agent

**Purpose**: Investigation, analysis, and detailed implementation planning (combined)

**Your Role**:
1. Call Scout-and-Plan agent directly
2. Pass input exactly as provided by user
3. Report: "Scout-and-Plan Agent starting..."
4. Wait for agent to complete
5. **Extract AGENT_RETURN**: Save filename
6. Report: "Scout-and-Plan Agent complete"
7. **If GitHub issue**: Post comment with brief summary

**Scout-and-Plan Task**:
```
Task({
  subagent_type: "scout-and-plan",
  description: "Scout-and-Plan phase - investigation and planning",
  prompt: `**Input**: [pass user's input here]

**Instructions**:
Follow your Scout-and-Plan Agent instructions to investigate and create detailed implementation plan.

**Success**: Plan output file created with complete investigation summary and implementation roadmap`
})
```

### Phase 2: Build Agent

**Purpose**: Execute implementation

**Your Role**:
1. Use Scout-and-Plan's AGENT_RETURN filename (from Phase 1)
2. Call Build agent via Task tool
3. Report: "Build Agent starting..."
4. Wait for Build agent to complete
5. **Extract AGENT_RETURN**: Save filename
6. Report: "Build Agent complete"
7. **If GitHub issue**: Post comment with brief summary

**Build Task**:
```
Task({
  subagent_type: "build",
  description: "Build phase - implementation",
  prompt: `**Input**: Read the Scout-and-Plan agent's output file: .agents/outputs/[PLAN_FILENAME]

**Instructions**:
Follow your Build Agent instructions to execute implementation.
Execute subtasks in order, validate each subtask, fix all warnings.

**Success**: All code created, build output file complete, ready for testing`
})
```

### Phase 3: Test-and-Cleanup Agent

**Purpose**: Validate, fix issues, document completion, commit and push (combined)

**Your Role**:
1. Use Build's AGENT_RETURN filename (from Phase 2)
2. Use Scout-and-Plan's AGENT_RETURN filename (from Phase 1)
3. Call Test-and-Cleanup agent via Task tool
4. Report: "Test-and-Cleanup Agent starting..."
5. Wait for agent to complete
6. **Extract AGENT_RETURN**: Save filename
7. Report: "Test-and-Cleanup Agent complete"
8. **If GitHub issue**: Post comment with brief summary

**Test-and-Cleanup Task**:
```
Task({
  subagent_type: "test-and-cleanup",
  description: "Test-and-Cleanup phase - validation and finalization",
  prompt: `**Inputs**:
- Build agent's output file: .agents/outputs/[BUILD_FILENAME]
- Plan agent's output file: .agents/outputs/[PLAN_FILENAME]
[If GitHub issue: - GitHub issue number: #[number]]

**Instructions**:
Follow your Test-and-Cleanup Agent instructions to validate and finalize workflow.

Run build, lint, visual verification.
Fix any issues found.
Create completion report in completion-docs/.
[If GitHub issue: Update issue with results and close if appropriate]
Git commit and push.

**Success**: All checks passing, zero warnings, workflow documented, git committed, cleanup output file complete`
})
```

### Phase 4: Final Report

**Your Role**:
1. Read cleanup output file
2. Report to user:

```markdown
# 3-Agent Workflow Complete

## Status
Scout-and-Plan → Build → Test-and-Cleanup

## What Was Accomplished
[From cleanup output: summary]

## Files Changed
- Modified: [count]

## Validation
- Build: [PASS/FAIL]
- Lint: [PASS/FAIL]

## Documentation
- Completion Report: `completion-docs/[filename]`

## Git Status
- Commit: [hash]
- Pushed: Yes

## Next Steps
1. Review completion report
2. Test at http://localhost:5173
3. Decide on next task

**Workflow Complete - Awaiting Your Review**
```

## Critical Rules

1. **ORCHESTRATION ONLY - NO DIRECT WORK**
2. **SEQUENTIAL EXECUTION**: Each agent must complete before next starts
3. **REPORT PROGRESS**: Update user on each agent's start/completion
4. **PASS CONTEXT**: Each agent gets what it needs from previous agents
5. **VERIFY OUTPUTS**: Check each agent created its output file before proceeding
6. **FINAL REPORT**: Always provide comprehensive summary at end

## Success Criteria

- All 3 agents executed successfully
- All output files created (.agents/outputs/)
- Completion report in completion-docs/
- Git committed and pushed
- User receives clear final report

## Comparison: 3-Agent vs 5-Agent Workflow

| Aspect | 3-Agent (orchestrate3) | 5-Agent (orchestrate) |
|--------|------------------------|----------------------|
| Agents | Scout-and-Plan, Build, Test-and-Cleanup | Scout, Plan, Build, Test, Cleanup |
| Handoffs | 2 | 4 |
| Output files | 2 | 4 |
| Best for | Simpler tasks, faster iteration | Complex tasks needing detailed audit trail |
