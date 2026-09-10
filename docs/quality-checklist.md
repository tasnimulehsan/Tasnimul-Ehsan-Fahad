# Release quality checklist

Before merging portfolio changes:

- `npm ci` succeeds from the committed lockfile.
- `npm run test` completes a production build successfully.
- `npm audit --omit=dev --audit-level=high` reports no high/critical production dependency issues.
- Mobile navigation exposes expanded/collapsed state to assistive technology.
- Keyboard focus remains visible on interactive controls.
- Reduced-motion users are not forced to watch the marquee animation.
- Canonical, robots, sitemap, Open Graph, and structured data remain valid.
- Project cards only look actionable when they have real destinations.
