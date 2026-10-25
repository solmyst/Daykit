# Release verification

25 October 2026. Tests were performed against the local application in the Chromium-based Codex in-app browser; responsive checks used same-origin browser frames with explicitly set CSS viewport widths.

## Automated checks

- `npm test`: 11 passing test groups covering page ranges, Unicode text, JSON errors, Base64/URL round-trips, known SHA-256 output, UUID shape/uniqueness, password bounds, quoted CSV/error cases, arithmetic/date/unit checks, WAV headers/sample values, and catalog search.
- `/tests/browser.html` on the development server: 25 passing browser checks. Generated PDF fixtures are loaded back to inspect page count, dimensions, order, and rotation. PNG/JPG/WebP outputs are decoded to verify format/dimensions. WAV is decoded back through Web Audio to verify duration, channels, and samples. Includes invalid file/range/content cases, QR construction, and text engine execution in the browser.
- Homepage axe-core WCAG 2 A/AA and 2.1 AA checks: no violations or horizontal overflow at 320, 768, 1024, and 1440 px, in both appearances after fixes.
- Nine representative workspace types at 320 and 1440 px: no axe violations or horizontal overflow in dark appearance (18 combinations). Includes PDF, image, JSON, calculation, QR, timer, notes, audio, and video.
- Production dependency audit: zero known vulnerabilities at the time checked. This is a dependency advisory check, not a security certification.

## UI and output verification

- Search synonym “combine” returns Merge PDF.
- Favorites save a tool and display it in the favorites view.
- Mobile navigation opens, moves focus into its panel, and selects the Calculators category.
- Malformed JSON produces a readable error; replacing it with valid JSON produces a downloadable file. The downloaded file was parsed independently.
- Two 2-page PDFs merge through the background worker. The actual downloaded PDF was parsed and has four pages. Passing the result to extraction produces a new PDF.
- A 320 × 180 PNG resizes to an 80-pixel-wide JPG, then passes directly into Images to PDF and produces a downloadable document.
- A 2-second audio fixture trims from 0.5 to 1.5 seconds. Independent ffprobe inspection reports a 1.000000-second downloaded WAV.
- A frame captured at 1 second from a generated MP4 downloads as a 320 × 180 PNG, confirmed with ffprobe.
- Percentage UI returns 30 for 15% of 200.
- QR UI produces a downloadable PNG for a known URL.
- Focus timer starts, counts down, pauses, and resets to 25:00.
- Appearance, privacy dialog, download links, and tool-navigation states inspected in the browser.

## Fixed during verification

Low-contrast secondary text; narrow-screen overflow; dark appearance root colors; offscreen mobile navigation remaining keyboard-focusable; empty image/media src warnings; PDF-worker production module format; unsupported WebP-to-PDF handoff; explicit zero image width; arithmetic overflow handling; canonical trailing-slash route matching.

## Limits of this evidence

This is not an exhaustive compatibility or penetration test. Real iOS/Safari, Android, assistive-technology use, enormous/malformed-file fuzzing, and long-running mobile memory tests remain unverified. Automated accessibility checks do not establish complete WCAG conformance. PDF signatures/forms and Office fidelity are outside this release's promises. Audio/video codec availability varies by browser. QR creation is checked, but camera scanning across devices has not been tested.

Re-run the Node suites with `npm test`. Start `npm run dev` and open the dev-only test HTML pages for the browser suites. `npm run build` creates production assets and 30 route HTML files with metadata. Test pages and sample inputs are excluded from production.
