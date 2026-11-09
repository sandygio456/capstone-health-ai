# TumbuhSehat — Capstone Health AI (Prototipe UTS)

Website responsif untuk Capstone Project Kelompok 11, disusun dari dokumen Pertemuan 1–6 dan lembar UTS Seminar Capstone Project 2026/2027.

## Persyaratan
- Node.js 20.9 atau lebih baru (disarankan Node.js 22 LTS)
- VS Code
- npm dan Git

## Menjalankan di VS Code
1. Ekstrak ZIP dan buka folder `Capstone_Health_AI_Vercel` di VS Code.
2. Buka **Terminal > New Terminal**.
3. Jalankan:
   ```bash
   npm install
   npm run dev
   ```
4. Buka **http://localhost:3000**.
5. Untuk memeriksa build produksi: `npm run build` lalu `npm start`.

## Deploy ke Vercel
1. Buat repositori GitHub dan unggah seluruh isi folder (jangan unggah `node_modules` atau `.env`).
2. Di dashboard Vercel pilih **Add New > Project**, import repositori GitHub.
3. Framework terdeteksi sebagai **Next.js**, root directory tetap direktori proyek.
4. Klik **Deploy**; setelah sukses dapatkan alamat `https://<nama-proyek>.vercel.app`.
5. Uji `/api/chat` lewat halaman chatbot, formulir, dan tampilan seluler pada URL produksi.
6. Bila domain khusus diperlukan, atur di **Project Settings > Domains**.

## Arsitektur prototipe dan keterbatasan
- Next.js App Router, React, TypeScript, CSS responsif, serverless API route `/api/chat`.
- Endpoint chat memakai klasifikasi keyword deterministik dan contoh jawaban. **Bukan** LLM, embedding, vector DB, RAG, atau referensi resmi yang telah disahkan.
- Respons menandai kandidat referensi; belum memiliki kutipan halaman atau retrieval sungguhan.
- Dashboard menyimpan **hanya kategori dan tanggal pertanyaan** dalam localStorage browser, bukan database bersama; nilai berubah antar-browser/perangkat.
- Tanggal lahir dan pengukuran berat/tinggi tidak disimpan ataupun dikirim ke server.
- Kalkulator BMI hanya alat bantu demonstrasi matematika. **Bukan kalkulator status gizi balita / z-score.** Penilaian memerlukan tabel LMS standar WHO/Kemenkes, pengukuran dan validasi tenaga kesehatan.
- Jadwal imunisasi menampilkan **tonggak usia edukatif saja**, bukan daftar dosis dan bukan rekomendasi personal resmi.
- Dashboard dan dokumen adalah prototipe terbuka, bukan sistem administrasi terautentikasi. Jangan memasukkan data kesehatan anak yang nyata ke dalam demo.
- Belum ada login RBAC, unggah/validasi dokumen, indexing PDF, backend Python/FastAPI, PostgreSQL/MySQL, audit log terpusat, ataupun database produksi.

## Pengembangan menuju MVP sesungguhnya
1. Validasi dokumen dan jadwal imunisasi oleh bidan Puskesmas serta versi pedoman resmi.
2. Integrasikan kalkulator z-score menggunakan **tabel LMS menurut indikator, usia, jenis kelamin, dan metode pengukuran**, diverifikasi bersama ahli gizi.
3. Bangun backend FastAPI di hosting yang mendukung layanan Python jangka panjang jika diperlukan; expose HTTPS endpoint aman yang dipanggil Next.js server-only, jangan panggil model langsung dari browser.
4. Tambahkan basis data (Postgres/MySQL managed), autentikasi RBAC petugas, validasi publikasi, consent, minimisasi data, rate limiting, monitoring dan audit.
5. Implementasikan ingestion dokumen → chunking → embedding → vector DB → retrieval → perakitan jawaban dengan rujukan halaman, abstention, dan review manusia.
6. Uji ≥50 pertanyaan, ≥20 kasus tool, usability SUS, respons lintas perangkat sesuai target dalam proposal; laporkan nilai aktual tanpa klaim yang belum terbukti.

## Isi dokumen
- `docs/UTS_JAWABAN_DAN_DEMO.md`: jawaban panduan 8 soal UTS berbasis proyek dan catatan demonstrasi.
- `docs/RENCANA_PENGUJIAN.csv`: 13 skenario uji yang harus dieksekusi dan dilengkapi hasil aktual/bukti.
- `docs/PEMETAAN_6_PERTEMUAN.md`: hubungan tiap pertemuan dengan implementasi.

## Catatan kejujuran akademik
Dokumen menyatakan studi kasus pada Puskesmas Kelurahan Penggilingan; jangan menganggap aplikasi telah memperoleh izin, terhubung ke sistem Puskesmas, atau telah memvalidasi konten medis sebelum tersedia bukti. UTS meminta URL, source code, bukti tes dan kontribusi pribadi; semua harus diisi dari pekerjaan dan hasil eksekusi nyata.
