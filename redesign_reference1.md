# Agent Project Configuration Reference

## Project Files

**AGENT.md** · Loaded every single session.
Project overview, tech stack, coding conventions, architecture notes, hard rules, and safety boundaries. Under 200 lines — every line earns its space.

**AGENT.local.md** · Personal overrides. Never committed.
Your machine-specific paths, personal preferences, and experimental rules. Gitignored. Stacks on top of AGENT.md — never replaces it.

**AGENTS.md** · The team roster. Who does what.
Defines every subagent's role, capabilities, and handoff protocol. The agent reads this before delegating. Prevents overlap. Keeps multi-agent sessions coordinated.

**.mcp.json** · MCP server integrations. Shared via git.
Connects the agent to GitHub, Notion, Slack, Gmail, PostgreSQL, Jira, and 200+ tools.

**settings.json** · Permissions, tools, and hooks config.
Defines what the agent can read, write, and execute. Allow and deny lists. Hook events wired here. Committed to git — personal overrides go in settings.local.json.

**rules/\*.md** · Modular rule files. Loaded on demand.
Each .md is a focused rule module — code style, API conventions, testing standards, PR format. Keeps AGENT.md lean by externalizing detail that only loads when relevant.

**commands/\*.md** · Custom slash commands for your project.
Each .md becomes a /project:command-name. Supports $ARGUMENTS for user input. Perfect for PR reviews, deploys, and scaffolding. Type / in chat to see all commands.

**skills/\<name\>/SKILL.md** · Auto-triggered by task context.
Not a single file — a directory per skill. The description field is the routing rule. Loads only when the agent recognizes the task. One job per Skill. Keeps context lightweight.

**agents/\*.md** · Specialized subagents with isolated context.
Own system prompt, own tools, own permissions. Runs in a separate context window — research without polluting main session. Invoke with @agent-name.

**hooks/\*.sh** · Event-driven scripts. 100% enforcement.
Make sure the agent does something deterministically via shell commands — not LLM interpretation. PreToolUse blocks. PostToolUse reacts. Exit 0 = allow. Exit 2 = block.

**memory/\*.md** · Persistent memory across all sessions.
Project context, architectural decisions, and progress logs the agent reads between sessions. Compensates for context loss in long projects. Commit to git — the whole team benefits.

**workflows/\*.md** · Multi-step task blueprints.
Each .md defines a repeatable workflow — feature build, bug fix, code review cycle. The agent follows the blueprint step by step. Combines Skills, Subagents, and Hooks in sequence.

---

## Workflow Orchestration

**1. Plan Mode Default**
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

**2. Subagent Strategy**
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

**3. Self-Improvement Loop**
- After ANY correction from the user: update tasks/lessons.md with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

**4. Verification Before Done**
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

**5. Demand Elegance (Balanced)**
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

**6. Autonomous Bug Fixing**
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

---

## Task Management

1. **Plan First:** Write plan to tasks/todo.md with checkable items
2. **Verify Plan:** Check in before starting implementation
3. **Track Progress:** Mark items complete as you go
4. **Explain Changes:** High-level summary at each step
5. **Document Results:** Add review section to tasks/todo.md
6. **Capture Lessons:** Update tasks/lessons.md after corrections

---

## Core Principles

- **Simplicity First:** Make every change as simple as possible. Impact minimal code.
- **No Laziness:** Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact:** Only touch what's necessary. No side effects with new bugs.
