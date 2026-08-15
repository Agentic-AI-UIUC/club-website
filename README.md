# Agentic AI @ UIUC — Club Website

The official website for **Agentic AI @ UIUC**, the largest AI club at the
University of Illinois Urbana-Champaign. The site presents the club's 12-week
lecture and workshop curriculum, a project archive pulling together the club's
in-house (Agentic-AI-UIUC) and open-source (OpenAgents-Illinois) GitHub work,
the current and alumni exec board, and how to join (Discord + signup form).

Built as a plain static site — five HTML pages sharing one stylesheet, no
framework and no build step.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page — hero, ticker, what-we-do, stats, schedule teaser |
| `events.html` | Full 12-week Fall 2026 lecture + workshop schedule |
| `projects.html` | Past work (video feature, LinkedIn spotlights) + filterable project archive |
| `team.html` | Current exec and alumni exec |
| `join.html` | Discord link + membership signup form |
| `styles.css` | Shared design tokens and styles |
| `assets/team/` | Exec headshots |

## Setup

No dependencies beyond a browser. Fonts (Anton, Archivo, JetBrains Mono) load
from Google Fonts, and the YouTube embed on the projects page needs network
access — everything else is fully local.

## Usage

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Deployment: any static host works (Vercel, GitHub Pages, Netlify). On Vercel,
import the repo with framework preset **Other** and no build command — the
repo root is the output.

### Editing content

- **Schedule** — edit the `.week` blocks in `events.html`.
- **Projects** — add a card in `projects.html` under `#proj-grid` with a
  `data-cat` matching a filter button.
- **Team** — add a `.person` block in `team.html`; drop the headshot in
  `assets/team/`.
- **Join links** — the Discord invite URL and form endpoint in `join.html` are
  placeholders (`#`) to be pointed at the real invite and a Formspree/Google
  Form endpoint.
