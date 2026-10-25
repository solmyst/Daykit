export const categories = ['All tools','PDF','Documents','Image','Text','Converters','Developer','Calculators','Student','Productivity','Audio & video'];
const tool = (id,name,category,description,icon,kind,tags=[]) => ({id,name,category,description,icon,kind,tags});
export const tools = [
 tool('merge-pdf','Merge PDF','PDF','Bring multiple PDFs together in one neat document.','Files','pdf',['combine','join','documents']),
 tool('compress-image','Compress image','Image','Smaller files. Beautiful images. Find the right balance.','ImageDown','image',['reduce','optimize','jpeg']),
 tool('word-counter','Word counter','Text','Count words, characters, and reading time instantly.','Type','text',['essay','student','count']),
 tool('image-converter','Image converter','Converters','Turn images into JPG, PNG, or WebP in seconds.','RefreshCw','image',['jpeg','convert','photo']),
 tool('split-pdf','Extract PDF pages','PDF','Keep just the pages you need, in your chosen order.','Scissors','pdf',['split','remove','reorder']),
 tool('resize-image','Resize image','Image','The right dimensions for wherever your image goes.','Expand','image',['scale','photo']),
 tool('json-formatter','JSON formatter','Developer','Format, validate, and untangle your JSON.','Braces','text',['beautify','minify','validate']),
 tool('qr-generator','QR code generator','Productivity','Make a scannable code for a link or a little text.','QrCode','qr',['url','share']),
 tool('rotate-pdf','Rotate PDF','PDF','Turn every page to the right orientation.','RotateCw','pdf'),
 tool('images-to-pdf','Images to PDF','PDF','Collect your JPG and PNG images into a PDF.','FileImage','pdf',['jpg','png','documents']),
 tool('text-to-pdf','Text to PDF','Converters','Create a clean, paginated document from plain text.','FileText','text',['document','write']),
 tool('case-converter','Case converter','Text','Switch between uppercase, lowercase, and title case.','CaseSensitive','text'),
 tool('clean-text','Clean text','Text','Trim extra spaces and remove repeated lines.','Eraser','text',['deduplicate','whitespace']),
 tool('sort-lines','Sort lines','Text','Put a list in alphabetical or reverse order.','ListOrdered','text'),
 tool('base64','Base64 encode / decode','Developer','Encode or decode UTF-8 text safely.','Binary','text'),
 tool('url-encoder','URL encode / decode','Developer','Prepare text for URLs, or make it readable again.','Link','text'),
 tool('sha256','SHA-256 hash','Developer','Generate a one-way fingerprint of your text.','Fingerprint','text'),
 tool('uuid','UUID generator','Developer','Create cryptographically random version 4 IDs.','Code','text'),
 tool('password','Password generator','Productivity','Generate strong passwords, right on your device.','KeyRound','text'),
 tool('csv-json','CSV to JSON','Converters','Turn a CSV with headers into structured JSON.','Table','text',['spreadsheet','data']),
 tool('percentage','Percentage calculator','Calculators','Find a percentage, a share, or percentage change.','Percent','calc'),
 tool('unit-converter','Unit converter','Calculators','Convert length, mass, and temperature precisely.','Ruler','calc'),
 tool('date-difference','Date difference','Calculators','Count the days between two calendar dates.','CalendarDays','calc'),
 tool('average','Average calculator','Student','Find the mean, median, minimum, and maximum.','ChartNoAxesColumn','text',['statistics','math']),
 tool('focus-timer','Focus timer','Productivity','Make space for focused work, one session at a time.','Timer','timer',['pomodoro','student']),
 tool('notes','Quick notes','Productivity','A quiet place to think. Save your notes as a text file.','NotebookPen','notes',['student','write']),
 tool('audio-trim','Trim audio','Audio & video','Keep the part you need and export it as a WAV file.','AudioLines','audio',['cut','mp3','wav']),
 tool('audio-wav','Audio to WAV','Converters','Convert browser-supported audio to uncompressed WAV.','Music2','audio',['mp3','sound']),
 tool('video-frame','Video to image','Audio & video','Capture a frame from your video as a PNG image.','Video','video',['snapshot','thumbnail'])
];
export const popularIds=['merge-pdf','compress-image','word-counter','image-converter','split-pdf','resize-image','json-formatter','qr-generator'];
export function searchTools(query,category='All tools'){const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);return tools.filter(t=>(category==='All tools'||t.category===category||(category==='Documents'&&['text-to-pdf','images-to-pdf','csv-json','notes'].includes(t.id))||(category==='Student'&&t.tags.includes('student')))&&terms.every(q=>[t.name,t.description,t.category,...t.tags].join(' ').toLowerCase().includes(q)));}
