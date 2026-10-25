# Nidhi Rajyaguru — Personal Portfolio

A responsive portfolio built with Next.js 16.3.7 (App Router), React 19, TypeScript and Tailwind CSS v4.

The interface adapts the supplied Figma desktop and mobile design: dark surfaces, coloured gradient glows, locally hosted display fonts, metallic buttons, 3D decorative illustrations, a scrolling skills ribbon and rounded project cards.

## Content and structure

- `lib/data.ts`: original personal information, biography, skills, all four projects, education, achievement message and links.
- `app/page.tsx`: Home, About, Skills, Projects, Education, Achievements and Contact, with Navbar and Footer.
- `app/layout.tsx`: metadata, locally hosted fonts and skip navigation.
- `app/globals.css`: shared theme, responsive layouts, interaction states and reduced-motion support.
- `components/`: individual sections, reusable Section wrapper and existing social icons.
- `public/figma/`: original decorative Figma assets and source notes.
- `public/fonts/`: local fonts, source notes and supplied open-font licenses.

Portfolio projects: SkillFull Frontend, QuizChampz, AI Bug Detective and Personal Portfolio. SkillFull is a learning app with frontend UI/UX design and app screen contributions; no screenshot or project links are currently available. Project visuals are explicitly labelled placeholders; they do not pretend to be project screenshots. About statistics are calculated from the content data.

## Local development

Use Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. In Windows PowerShell environments that block npm.ps1, use `npm.cmd` instead of `npm`.

## Validation and production preview

```bash
npm run lint
npm run build
npm start
```

Stop the preview server before rebuilding. Fonts and illustrations are served locally; the build does not need Google Fonts access.

## Responsive behaviour

Desktop uses a split hero and About layout. Mobile places the hero illustration first and the About text before its illustration, following the Figma mobile composition. Tablet layouts adapt the same sections. The mobile menu supports selection, Escape and keyboard focus. Motion respects the operating system's reduced-motion setting.

## Contact and missing links

The contact form is a preview only: it validates fields but never sends or stores messages. Submitting displays an explicit not-sent notice and an email link. Direct email, GitHub and LinkedIn anchors use the existing data.

No resume or project demo URLs have been invented. A resume link is shown only when supplied in `lib/data.ts`; demo links appear only when populated with HTTP URLs.

## Deployment

The project retains its existing Next.js build and start scripts for later hosting. Before Vercel deployment, verify the real project/social destinations and optionally provide project screenshots, a resume and live-demo links. If message delivery is required, connect and configure an actual email service separately. No deployment has been performed.
