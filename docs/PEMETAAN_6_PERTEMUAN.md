# Keterlacakan enam pertemuan ke fitur website

| Pertemuan | Ringkasan dokumen yang diberikan | Implementasi pada starter |
|---|---|---|
| 1 | Ide capstone, persoalan layanan kesehatan, pembagian peran, teknologi aplikasi web/AI | Halaman beranda, pembagian modul dan readme pengembangan |
| 2 | RAG dokumen resmi, cek jadwal, hitung gizi, dashboard; rancangan Laravel + FastAPI | Chat demo, form jadwal, form BMI edukatif, dashboard lokal; integrasi RAG masih rancangan |
| 3 | Proses bisnis AS-IS / TO-BE, survei awal indikatif, kebutuhan FR/NFR, privasi dan aktor | Alur tugas publik dan dashboard demo, pemberitahuan privasi dan keterbatasan |
| 4 | Kebutuhan KF-01 s.d. KF-06, KNF, batasan usia 0–5, evaluasi faithfulness, SUS | Halaman chat, jadwal, gizi, analitik, pustaka, responsif; belum memenuhi klaim performa/validasi |
| 5 | Proposal, kebutuhan stakeholder, skenario evaluasi, solusi terintegrasi | Panduan tes & dokumentasi UTS; belum tersedia hasil evaluasi lapangan |
| 6 | F1 chatbot, F2 jadwal, F3 status gizi, F4 agregat; NF1–NF4; rancangan pengguna→frontend→backend→database→AI | Navigation dan modul demo sesuai F1–F4; backend terbatas API aturan, database/AI sungguhan belum aktif |

## Catatan perbedaan teknologi
Rancangan pertemuan 2/6 mengarah pada Laravel, FastAPI dan MySQL/PostgreSQL. Starter Next.js dipilih untuk kemudahan deployment di Vercel, **merupakan adaptasi arsitektur**, bukan implementasi stack rancangan yang identik. Jika dosen mengharuskan Laravel, pertahankan source Laravel dan deploy di hosting PHP; Vercel dipakai hanya untuk frontend Next.js atau proxy dengan backend terpisah.
