---
command: "/orchestrate5"
category: "Project Orchestration"
purpose: "Execute complete 5-agent workflow (Scout → Plan → Build → Test → Cleanup)"
---

# Orchestrate5 Command - 5-Agent Workflow

This is an alias for `/orchestrate`. Execute the complete 5-agent workflow for implementing features, fixing bugs, or completing tasks.

**Workflow**: Scout → Plan → Build → Test → Cleanup

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

**Project Root**: `/home/pbrown/aireadypdx`

## Usage

```
/orchestrate5 [input]
```

See `/orchestrate` for full documentation. This command behaves identically.

## Quick Reference

**Agents in sequence:**
1. **Scout** - Investigate and analyze
2. **Plan** - Create detailed implementation plan
3. **Build** - Execute implementation
4. **Test** - Validate and fix issues
5. **Cleanup** - Document, commit, push

**When to use 5-agent vs 3-agent:**
- Use `/orchestrate5` for complex tasks needing detailed audit trail
- Use `/orchestrate3` for simpler tasks and faster iteration
