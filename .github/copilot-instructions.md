## Quick orientation

This repository is a small static website built with a lightweight client-side MVC and a Gulp-based build pipeline. The important entry points and patterns an AI agent needs to know to be productive are listed below.

### Big picture
- **Client-side MVC**: code in `app/scripts/` uses CommonJS modules bundled by webpack. `app/scripts/main.js` creates a `Controller` (in `app/scripts/lib/Controller.js`) which wires up `Model` and `View` (`app/scripts/lib/Model.js`, `app/scripts/lib/View.js`). The `Model` loads HTML templates from `app/templates/{lang}/{page}.html` via `fetch()`.
- **Build flow**: Gulp tasks (see `gulpfile.js`) compile SASS, bundle JS with webpack into `.tmp/scripts`, generate `modernizr.js`, then `useref`/minify into `dist` for production.

### Developer workflows (commands)
- Install: `npm install` (requires Node >=16). `postinstall` will install `node-sass` as needed.
- Development server / live reload: `npm start` (runs `gulp serve`, default port 9000). Source files in `app/` are watched; webpack writes bundles to `.tmp/scripts` and BrowserSync serves from `.tmp` + `app`.
- Test server: `npm run serve:test` (sets `NODE_ENV=test` and runs gulp serve specialized for `test/`). Tests are run by opening the served `test/index.html` (mocha specs are in `test/spec/`).
- Production build: `npm run build` (sets `NODE_ENV=production` and runs the `build` pipeline producing `dist/`).

### Project-specific conventions and patterns
- Entry points: `app/scripts/*.js` are webpack entry files. Modules under `app/scripts/lib/` use `module.exports` / `require()` conventions.
- Templates: HTML fragments are under `app/templates/{en_GB,es_ES}/`. `Model.pages` (in `app/scripts/lib/Model.js`) maps logical page IDs (`home`, `aboutme`, etc.) to template filenames; `Model.getPageURI(page)` constructs `templates/{lang}/{file}`.
- Language selection: language cookie name is `lang`; `Model.setUserLanguage()` creates the cookie and then the app reloads. Default fallback is `en_GB`.
- View container: content is injected into element id `main-container` (see `View.container`). Background images are selected from `app/images/{small,medium,big}` depending on screen size logic in `View.calculateBackgroundSize()`.
- Live edit pattern: edit source files under `app/` (SASS in `app/styles/`, templates in `app/templates/`, JS in `app/scripts/`), then verify in the dev server. Webpack/Babel and Gulp handle transpilation.

### Integration points & external deps
- Node/npm packages: see `package.json` for devDependencies — key ones: `gulp`, `webpack`, `babel-loader`, `gulp-dart-sass`, `browser-sync`, `eslint`, `mocha`.
- CDN/external JS: index.html references cookieconsent and Google Analytics via remote scripts; bootstrap & jQuery are included from `node_modules` during build.
- Generated artifacts: `modernizr.js` is generated into `.tmp/scripts` via `modernizr.json` and `gulpfile.js`'s `modernizr()` task.

### What to change and where (examples)
- Add a new static page: create `app/templates/{en_GB,es_ES}/yourpage.html` and add a mapping key in `Model.pages` (in `app/scripts/lib/Model.js`).
- Add images: put them under `app/images/{small,medium,big}/` and reference by filename; `View` will select size automatically.
- Add JS behavior: create/modify modules under `app/scripts/lib/` and require them from an entry in `app/scripts/*.js`. Re-run `npm start` to verify live updates.

### Debugging tips
- To reproduce the dev environment exactly: run `NODE_ENV=development npm start` (Windows: use `cross-env` via npm script `start`).
- When editing JS, check `.tmp/scripts` for webpack output and open browser devtools for source maps (webpack inline source maps are enabled when `args.sourcemaps` is used).
- HTML/template issues: the app injects fragments into `#main-container`; ensure templates are valid fragments (no duplicate root `<html>` tags).

### Notes for AI agents
- Prefer editing the source under `app/` not files under `.tmp/` or `dist/`.
- Use concrete file examples in suggestions (e.g., `app/scripts/lib/Model.js`, `app/templates/en_GB/home.html`, `gulpfile.js`) and reference the live/dev commands above.
- Avoid changing build infrastructure unless necessary; small feature work should be achievable by editing templates, styles, or the `lib` modules.

If any of these sections are unclear or you'd like more detail (test commands, specific lines to change, or a short migration plan), tell me which area to expand.
