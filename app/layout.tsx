import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'TumbuhSehat — Edukasi Imunisasi & Gizi Balita', description:'Prototipe edukasi kesehatan balita, jadwal imunisasi, literasi gizi dan analitik kebutuhan informasi.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="id"><body>{children}</body></html>}
