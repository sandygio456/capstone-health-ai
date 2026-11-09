import { NextResponse } from 'next/server';
import { topics } from '../../../lib/content';
export const runtime='nodejs';
export async function POST(request:Request){
 try {
  const body=await request.json(); const question=body?.message;
  if(typeof question!=='string'||question.trim().length<3||question.length>800) return NextResponse.json({error:'Pertanyaan harus 3–800 karakter.'},{status:400});
  const q=question.toLocaleLowerCase('id-ID');
  if(/sesak|kejang|tidak sadar|pingsan|perdarahan hebat|sulit bernapas/.test(q)) return NextResponse.json({answer:'Gejala yang Anda sebutkan dapat memerlukan pertolongan segera. Jangan menunggu jawaban chatbot; segera hubungi layanan gawat darurat atau fasilitas kesehatan terdekat.',topic:'darurat',source:null,matched:true,mode:'demo'});
  const found=topics.find(item=>item.terms.some(t=>q.includes(t)));
  if(!found) return NextResponse.json({answer:'Saya belum memiliki referensi yang cukup untuk pertanyaan tersebut dalam demo ini. Silakan bertanya kepada tenaga kesehatan Puskesmas. Tidak ada jawaban yang direkayasa.',topic:'tidak-terjawab',source:null,matched:false,mode:'demo'});
  return NextResponse.json({answer:found.answer,topic:found.key,source:found.source,matched:true,mode:'demo'});
 } catch {return NextResponse.json({error:'Permintaan tidak valid.'},{status:400})}
}
