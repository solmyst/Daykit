# Daykit: research and launch decisions

Research date: 25 October 2026. This is desk research of official product catalogs and policies, not an independent traffic ranking or a user-interview study. “Everyday favorites” is an editorial selection; Daykit does not claim measured adoption or fabricated user counts.

## What existing products do well

| Platform | Observed strengths | Friction and opportunity |
| --- | --- | --- |
| [iLovePDF](https://www.ilovepdf.com/features) | Clear task names, specialized PDF tools, batch operations, organized file workflows. | [Free processing is limited; workflows, ad-free use, and broader access are paid](https://www.ilovepdf.com/pricing). A simpler local workflow can serve frequent small tasks without upload latency or daily quotas. |
| [Smallpdf](https://smallpdf.com/pricing) | Cohesive document suite, conversion, editing, signatures, and cross-device support. | The free plan lists limited downloads; stronger compression, OCR, and expanded capabilities are in paid plans. Make operational limits explicit before the user invests effort. |
| [TinyWow](https://tinywow.com/tools) | Broad searchable coverage across PDFs, images, writing, and video. | [Its privacy page describes server uploads and deletion after processing](https://tinywow.com/your-data). Different policy pages describe advertising inconsistently, so advertising status is not treated as settled. Distinguish local processing from eventual server deletion. |
| [123Apps](https://123apps.com/) | Dedicated audio/video editors alongside conversion and PDF tools; tasks are recognizable at a glance. | A single cross-category workspace and explicit codec/output details can reduce the mental cost of moving between tasks. This is a design inference, not a claim that competitors lack every such feature. |

Repeated catalog coverage makes merge/extract PDFs, image resizing/conversion, and audio/video transformations credible starting points. It does not prove a precise popularity order. Text counting, JSON formatting, encoding, calculations, and QR codes add low-cost, locally computable use cases for students, office workers, and developers.

## Product hypothesis

People return when a small task takes less time than finding a new site. The differentiator is a consistent, searchable, private workspace with usable output, not the largest headline tool count.

The release has 29 real tools. The homepage highlights eight: PDF merge, image compression, word count, image conversion, PDF extraction, image resize, JSON formatting, and QR generation. Category views and search reveal the full catalog. Documents and Student are cross-cutting collections, so users can find tasks in the way they think about them.

## UX decisions

- Quiet green, warm neutral surfaces, restrained tool-specific colors, and familiar outlined icons. The decorative illustration is built from CSS/SVG; no stock imagery or external font request is needed.
- Persistent desktop navigation; compact mobile navigation and horizontally scrolling category chips. Every tool has a dedicated, shareable URL.
- Search matches names, descriptions, categories, and task synonyms. Favorites and recently opened tool IDs remain on the device.
- A consistent input → settings → result flow. Validate unsupported files and sizes early; show actionable errors without discarding valid inputs.
- Downloadable results stay visible. Compatible PDF/image outputs can be passed directly to another tool without saving and selecting again.
- No analytics, advertising, file upload endpoint, tool account, subscription, or usage quota. Hosting access control remains separate from the application.

## Initial boundaries

PDF merge/extract/rotate and image/text-to-PDF are supported. This release does not claim OCR, PDF compression, existing PDF text editing, password removal, Office fidelity conversion, video transcoding, or AI writing. These are not represented by nonfunctional catalog cards.

Image tools accept JPG/PNG/WebP, preserve aspect ratio, and export those formats when supported. Compression is lossy quality/resize control, with actual before/after sizes; it cannot guarantee a reduction. Audio exports PCM WAV from browser-supported inputs. Video captures a frame; it does not trim or re-encode a video. Text-to-PDF is explicitly limited to Latin-1 characters. Notes are transient unless downloaded.

## Expansion sequence and acceptance gates

1. **Validate the launch:** observe 5–8 users across office work, study, and development performing PDF merge, image resize, finding a tool, and downloading a result. Measure task completion, time, wrong turns, and interpretation of the privacy copy with consent. Do not add tracking silently.
2. **Deepen existing workflows:** PDF thumbnails/reordering, batch image export, more unit families, secure offline persistence with explicit opt-in. Require realistic fixtures, cancellation, memory bounds, and mobile tests before listing new tools.
3. **Advanced processing:** evaluate OCR and PDF rendering in workers; test multilingual fixtures and low-memory mobile devices. Assess WASM video processing against startup cost, memory, licensing, and codec coverage before shipping.
4. **Office conversions:** only add with a fidelity-tested engine. If a server becomes necessary, disclose processing location, retention, and limits before file selection and require explicit consent to upload.

No ongoing expansion automation is configured. The repository is organized to support deliberate releases rather than displaying future features as if they already work.
