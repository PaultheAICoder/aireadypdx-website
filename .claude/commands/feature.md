---
command: "/feature"
category: "Issue Management"
purpose: "Create GitHub issue for new features"
---

# Feature Command - Create GitHub Issue

Automatically create comprehensive GitHub issue for new features.

**Project**: AI Ready PDX - Marketing website (React 18 + Vite + CSS)

## Usage

```bash
# Quick feature creation from description
/feature Add testimonials section with client quotes

# Interactive feature creation (with questions)
/feature
```

## Interactive Feature Creation

When you call `/feature` without arguments, you'll be asked clarifying questions:

1. **What's the feature about?** - Brief summary
2. **Which section?** - New section or modify existing?
3. **What content is needed?** - Text, images, etc.

## Issue Creation Process

When you call `/feature`, this command will:

1. **Ask clarifying questions** (unless description provided)
2. **Create detailed GitHub issue** with:
   - **Title**: Feature name
   - **Label**: `enhancement` (automatically added)
   - **Body**: Comprehensive issue with requirements
3. **Display confirmation** - Show the created issue URL

## GitHub Issue Format

```markdown
# <Feature name>

## Feature Description
<Purpose and value>

## Requirements

### Content Requirements
- [ ] Text content specified
- [ ] Images/assets identified

### Technical Requirements
- [ ] JSX structure in src/App.jsx
- [ ] CSS styles in src/App.css
- [ ] Responsive on mobile/tablet/desktop

## Affected Files
- `src/App.jsx` - Add/modify JSX
- `src/App.css` - Add/modify styles
- `src/index.css` - If new CSS variables needed
- `public/` - If new images needed

## Acceptance Criteria
- [ ] Feature visible and functional
- [ ] Build passes: `npm run build`
- [ ] Lint passes: `npm run lint`
- [ ] Responsive on all screen sizes
- [ ] Follows existing design patterns

## Notes
- Estimated complexity: <Small/Medium/Large>
- Follow existing section patterns in App.jsx
```

## Feature Complexity Guidelines

### Small Feature (<2 hours)
- Text content changes
- Simple CSS tweaks
- Minor section adjustments
- **Examples**: Update copy, adjust spacing, add icon

### Medium Feature (2-4 hours)
- New section with content
- Responsive adjustments
- Animation additions
- **Examples**: Add testimonials, new FAQ items, pricing update

### Large Feature (4+ hours - should be phased)
- Major layout changes
- Multiple new sections
- Significant interactivity
- **Examples**: Full redesign, new multi-step form, major restructure

If you estimate more than 4 hours, consider splitting into phases.

## Workflow

1. **Create Feature**: `/feature` or `/feature <description>`
2. **Answer Questions**: Clarify feature scope (if interactive)
3. **Issue Created**: GitHub issue appears with label `enhancement`
4. **Plan & Build**: Use `/orchestrate3 gh issue #N` to implement
5. **Complete**: Cleanup agent closes issue and commits

## Feature
$ARGV

When executed, this command will create an issue using:

```bash
gh issue create \
  --title "$ARGV" \
  --body "## Feature Description
$ARGV

## Requirements

### Content Requirements
- [ ] Text content specified
- [ ] Images/assets identified (if needed)

### Technical Requirements
- [ ] JSX structure in src/App.jsx
- [ ] CSS styles in src/App.css
- [ ] Responsive on mobile/tablet/desktop

## Affected Files
- \`src/App.jsx\` - Add/modify JSX
- \`src/App.css\` - Add/modify styles
- \`src/index.css\` - If new CSS variables needed
- \`public/\` - If new images needed

## Acceptance Criteria
- [ ] Feature visible and functional
- [ ] Build passes: \`npm run build\`
- [ ] Lint passes: \`npm run lint\`
- [ ] Responsive on all screen sizes
- [ ] Follows existing design patterns (see other sections in App.jsx)

## Notes
- Estimated complexity: [Small/Medium/Large]
- Follow existing section patterns in App.jsx
- Use CSS variables from index.css for colors" \
  --label enhancement
```
