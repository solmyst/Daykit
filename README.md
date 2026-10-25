# Daykit

A working, privacy-first utility website with 29 tools, responsive layouts, light/dark appearance, search, favorites, recent tools, downloads, and file handoffs.

## Run

Node 22.12+ (validated on Node 26), npm:

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Production output is `dist/`. All runtime dependencies are bundled and served from the same origin. There is no backend, external analytics, font service, or file-upload API. The private Sites deployment may require the owner’s hosting authentication; Daykit itself has no registration.

## Architecture

- `src/catalog.js`: tool metadata, category collections, tags, and search. Add discoverable tools here only after their processing is implemented.
- `src/engines.js`: pure validated text, arithmetic, encoding, and PCM WAV functions.
- `src/files.js`: PDF and canvas image processors; imports PDF libraries only when needed.
- `src/pdf.worker.js`: PDF tasks run off the main thread; leaving the workspace terminates the worker.
- `src/workspace.jsx`: consistent input/settings/result UI and native media processing. For a larger release, split its tool-family panels into independently loaded components.
- `src/main.jsx`: navigation, favorites, recent tools, theme, search, and privacy disclosure.
- `src/styles.css`: responsive design tokens and layout.
- `scripts/seo.mjs`: build-time metadata, canonicals, structured data, route HTML, sitemap, and robots.
- `tests/`: Node unit suites and dev-only browser verification pages. These test pages are not included in the production build.

Heavy PDF, QR, and CSV code is lazy-loaded. The main production JS bundle is approximately 81 KB gzipped (before final small metadata/UI refinements); the PDF engine is a separate worker dependency. No API keys are needed.

## Functional scope

PDF: merge, extract/reorder selected pages, rotate, images to PDF. Image: compress, proportional resize, JPG/PNG/WebP conversion. Text/documents: word count, case conversion, cleanup, sorting, text to PDF, CSV to JSON. Developer: JSON, Unicode Base64, URL encoding, SHA-256, UUID v4. Calculators: percentage, units, calendar-date difference, average/median. Productivity: QR codes, cryptographic passwords, focus timer, downloadable notes. Media: audio trim, audio to WAV, video frame to PNG.

## Privacy and security

Files and text stay in browser memory. Only theme and tool IDs are persisted in localStorage. Object URLs are revoked on replacement/unmount. Notes and passwords are not persisted. React renders text safely; JSON is parsed rather than evaluated. Password generation uses Web Crypto with rejection sampling. Files have size/count/type checks and decoders validate actual content. Security headers are declared in `public/_headers`; hosting header enforcement must be verified for any alternate host.

## Limits

- File tasks: 50 MB combined; images: 25 MB; multi-file tasks: 30 files; PDF output: at most 1,000 pages.
- Raster images: 40 megapixels; output width up to 8,192 pixels. Animated inputs become still images and metadata is not preserved. JPG flattens transparency to white.
- Audio: 10 minutes, 16-bit PCM WAV export. Codec support depends on the browser; decoding can resample audio to the device AudioContext rate.
- Video: browser-playable local files; frame capture only.
- Text to PDF: Latin-1, 200,000 characters, A4 pages. Text tools: two million characters. QR input: 1,500 UTF-8 bytes.
- PDF signatures, complex interactive forms, and document-level metadata are not guaranteed to survive page-copy operations. Inspect outputs before relying on them.
- Numeric tools use JavaScript floating-point arithmetic; they are everyday utilities, not arbitrary-precision accounting tools.
- Desktop browser verification was performed in the Chromium-based in-app browser. Responsive widths are tested in actual browser frames; real iOS/Safari and Android device validation remains a release-hardening task.

Read `RESEARCH.md` for evidence, product decisions, and expansion gates. Read `VERIFICATION.md` for tests and known coverage boundaries.
