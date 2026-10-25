import {pdfProcess,textPdf} from './files.js';
self.onmessage=async({data})=>{try{const blob=data.id==='text-to-pdf'?await textPdf(data.text):await pdfProcess(data.id,data.files,data.option);self.postMessage({blob});}catch(error){self.postMessage({error:error.message||'This PDF could not be processed.'});}};
