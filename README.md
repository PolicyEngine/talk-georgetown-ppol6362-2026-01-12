# PPOL 6362: Inequality and Public Policy - PolicyEngine Guest Lecture

Guest lecture for Georgetown McCourt School of Public Policy.

## Presentation

**Title**: Simulating tax and transfer policies' inequality impacts with PolicyEngine
**Course**: PPOL 6362 - Inequality and Public Policy
**Date**: January 12, 2026
**Location**: Georgetown McCourt School of Public Policy
**Professor**: Dr. Laura Blessing

### Speakers

| Speaker | Role |
|---------|------|
| Max Ghenis | CEO |
| Daphne Hansell | Research Analyst |

### Topics Covered

- Introduction to PolicyEngine
- How microsimulation works
- Analyst choices in measuring inequality (connects to course readings)
- Data sources: tax records vs. surveys
- Modeling tax and benefit policies
- Measuring impacts on households, budgets, poverty, and inequality
- Live demonstration of the PolicyEngine web app

## Viewing the Slides

Visit: https://policyengine.github.io/talk-georgetown-ppol6362-2026-01-12

Or run locally:
```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the slides.

## Project Structure

```
├── slideshows/
│   └── georgetown-2026/
│       ├── config.ts            # Slideshow configuration
│       └── slides/              # Individual slide components
├── components/                   # Shared slide components
├── lib/                         # Utilities
└── public/                      # Static assets
```

## Deployment

Automatically deployed to GitHub Pages when changes are pushed to main.
