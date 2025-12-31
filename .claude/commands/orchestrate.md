---
command: "/orchestrate"
category: "Project Orchestration"
purpose: "Execute complete 5-agent workflow (Scout → Plan → Build → Test → Cleanup)"
---

# Orchestrate Command - 5-Agent Workflow

Execute the complete 5-agent workflow for implementing features, fixing bugs, or completing tasks. This command orchestrates all agents sequentially without doing any work itself.

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

**Project Root**: `/home/pbrown/aireadypdx`

## CRITICAL: ORCHESTRATION ONLY

**WHEN THE USER TYPES `/orchestrate`, YOU ARE A CONDUCTOR, NOT A PERFORMER.**

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
/orchestrate [input]
```

**Input can be:**
- Plain text description: `/orchestrate Add testimonials section`
- Github issue: `/orchestrate gh issue #17`
- Bug description: `/orchestrate Fix navigation not working on mobile`

## Workflow Process

### Input Parsing: Extract Issue Number

**Your Role**:
1. Parse user input for issue number patterns:
   - Issue reference: `/orchestrate #5` → Extract `5`
   - Plain text: `/orchestrate Add dark mode` → No issue number (use timestamp)

2. Report to user:
   - If GitHub issue: "Processing GitHub Issue #5"
   - If no issue: "Processing ad-hoc task"

### Phase 1: Scout Agent

**Purpose**: Investigation and analysis

**Your Role**:
1. Call Scout agent directly
2. Pass input exactly as provided by user
3. Report: "Scout Agent starting..."
4. Wait for Scout agent to complete
5. **Extract AGENT_RETURN**: Save filename
6. Report: "Scout Agent complete"
7. **If GitHub issue**: Post comment with brief summary

**Scout Task**:
```
Task({
  subagent_type: "scout",
  description: "Scout phase - investigation",
  prompt: `**Input**: [pass user's input here]

**Instructions**:
Follow your Scout Agent instructions to investigate and analyze this request.

**Success**: Scout output file created with complete investigation`
})
```

### Phase 2: Plan Agent

**Purpose**: Create detailed implementation plan

**Your Role**:
1. Use Scout's AGENT_RETURN filename (from Phase 1)
2. Call Plan agent via Task tool
3. Report: "Plan Agent starting..."
4. Wait for Plan agent to complete
5. **Extract AGENT_RETURN**: Save filename
6. Report: "Plan Agent complete"
7. **If GitHub issue**: Post comment with brief summary

**Plan Task**:
```
Task({
  subagent_type: "plan",
  description: "Plan phase - implementation plan",
  prompt: `**Input**: Read the Scout agent's output file: .agents/outputs/[SCOUT_FILENAME]

**Instructions**:
Follow your Plan Agent instructions to create detailed implementation plan.

**Success**: Plan output file created with complete implementation roadmap`
})
```

### Phase 3: Build Agent

**Purpose**: Execute implementation

**Your Role**:
1. Use Plan's AGENT_RETURN filename (from Phase 2)
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
  prompt: `**Input**: Read the Plan agent's output file: .agents/outputs/[PLAN_FILENAME]

**Instructions**:
Follow your Build Agent instructions to execute implementation.
Execute subtasks in order, validate each subtask, fix all warnings.

**Success**: All code created, build output file complete, ready for testing`
})
```

### Phase 4: Test Agent

**Purpose**: Validate and fix issues

**Your Role**:
1. Use Build's AGENT_RETURN filename (from Phase 3)
2. Call Test agent via Task tool
3. Report: "Test Agent starting..."
4. Wait for Test agent to complete
5. **Extract AGENT_RETURN**: Save filename
6. Report: "Test Agent complete"
7. **If GitHub issue**: Post comment with brief summary

**Test Task**:
```
Task({
  subagent_type: "test",
  description: "Test phase - validation",
  prompt: `**Inputs**:
- Build agent's output file: .agents/outputs/[BUILD_FILENAME]
- Plan agent's output file: .agents/outputs/[PLAN_FILENAME]

**Instructions**:
Follow your Test Agent instructions to validate and fix issues.
Run build, lint, visual verification.

**Success**: All checks passing, test output file complete, ready for cleanup`
})
```

### Phase 5: Cleanup Agent

**Purpose**: Document completion, finalize

**Your Role**:
1. Use all AGENT_RETURN filenames
2. Call Cleanup agent via Task tool
3. Report: "Cleanup Agent starting..."
4. Wait for Cleanup agent to complete
5. **Extract AGENT_RETURN**: Save filename
6. Report: "Cleanup Agent complete"
7. **If GitHub issue**: Post comment and close if appropriate

**Cleanup Task**:
```
Task({
  subagent_type: "cleanup",
  description: "Cleanup phase - finalization",
  prompt: `**Inputs**:
- Scout agent's output file: .agents/outputs/[SCOUT_FILENAME]
- Plan agent's output file: .agents/outputs/[PLAN_FILENAME]
- Build agent's output file: .agents/outputs/[BUILD_FILENAME]
- Test agent's output file: .agents/outputs/[TEST_FILENAME]
[If GitHub issue: - GitHub issue number: #[number]]

**Instructions**:
Follow your Cleanup Agent instructions to finalize workflow.
Create completion report in completion-docs/.
[If GitHub issue: Update issue with results and close if appropriate]
Git commit and push.

**Success**: Workflow documented, git committed, cleanup output file complete`
})
```

### Phase 6: Final Report

**Your Role**:
1. Read cleanup output
2. Report to user:

```markdown
# 5-Agent Workflow Complete

## Status
Scout → Plan → Build → Test → Cleanup

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

- All 5 agents executed successfully
- All output files created (.agents/outputs/)
- Completion report in completion-docs/
- Git committed and pushed
- User receives clear final report
