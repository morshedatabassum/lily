# Morsheda Tabassum — Curriculum Vitae

A single-page CV built with HTML, CSS and vanilla JavaScript. It is responsive, supports light and dark themes, and prints to a clean A4 PDF.

## Project structure

```
.
├── index.html            # CV content
├── css/
│   └── style.css         # Layout, theming and print styles
├── js/
│   └── main.js           # Theme toggle, PDF export, image fallbacks
└── assets/
    └── images/
        └── profile.jpg   # Profile photo
```

## Viewing the CV

Open `index.html` in any modern browser. No build step or server is required. For live reload while editing, use the VS Code **Live Server** extension.

## Exporting to PDF

1. Click **Download PDF** in the top-right corner.
2. In the print dialog, choose **Save as PDF**, set paper size to **A4**, and enable **Background graphics**.

The page always prints in the light theme, whatever theme is showing on screen.

## Editing

| To change…              | Edit                                              |
| ----------------------- | ------------------------------------------------- |
| Text, education, skills | `index.html`                                      |
| Colours and fonts       | the variables at the top of `css/style.css`       |
| Profile photo           | replace `assets/images/profile.jpg` (3:4 portrait) |

### Adding a signature

Save a signature image with a transparent background as `assets/images/signature.png`. Until the file exists, the CV shows only the signature line.

## Features

- CSS Grid layout, stacking into a single column on small screens
- Light and dark themes that follow the system setting and remember the viewer's choice
- A4 print stylesheet with backgrounds preserved
- Semantic, accessible markup with visible focus states
- Respects the `prefers-reduced-motion` setting
