# Panduan Jawaban UTS — Seminar Capstone Project

**Kelompok 11** — Naufal Aditya Putra (2303045018), Muhammad Irsyad (2303045047), Sandy Gio Alanza (2303045010).  
**Judul:** AI Agent Edukasi Kesehatan: Chatbot RAG Imunisasi dan Gizi Balita serta Dashboard Analitik di Puskesmas.  
**Studi kasus:** Puskesmas Kelurahan Penggilingan, Jakarta Timur.  
**Status:** Prototype website, belum implementasi AI RAG dan tool medis tervalidasi.

## Soal 1 (10%) — Masalah, data, stakeholder, hubungan fitur
Kendala utama adalah akses informasi imunisasi dan gizi balita di luar jam layanan, pertanyaan rutin yang berulang, serta belum tersedianya ringkasan kebutuhan informasi yang mudah ditinjau petugas. Pada dokumen Pertemuan 4 disebut survei pendahuluan **14 orang tua/pengasuh balita** tanggal 28 September–6 Oktober 2026; **50%** pernah terlambat imunisasi atau tidak mengetahui jadwalnya, **42,9%** kesulitan menilai berat/tinggi, dan **50%** menggunakan media sosial sebagai sumber. Angka itu indikatif, bukan representatif; beberapa data lain masih perlu konfirmasi mitra. Pengguna utama: orang tua/pengasuh, kader posyandu, bidan/ahli gizi, pengelola/admin. Masalah dijawab melalui chatbot edukasi, penjadwalan, pengukuran tumbuh kembang, dan dashboard topik. Pada starter, sejumlah fungsi medis masih berupa simulasi yang perlu validasi.

## Soal 2 (10%) — URL dan demo dari awal sampai akhir
**URL hasil deployment:** [ISI SETELAH DEPLOY, JANGAN MENGARANG URL]. Mulai dari Beranda → Asisten edukasi → ketik “Apa manfaat imunisasi?” → lihat respons, label simulasi, dan kandidat rujukan → pilih Jadwal imunisasi dan masukkan tanggal lahir → lihat perhitungan usia → pilih Pemantauan gizi dan input data contoh → lihat BMI dengan pembatasan interpretasi → buka Analitik untuk melihat kategori pertanyaan tersimpan dalam browser → Referensi → Pengujian UTS. Tidak ada login demo karena fitur petugas belum menerapkan autentikasi. Jangan mengklaim sudah ada fitur akses staf.

## Soal 3 (10%) — Arsitektur dan teknologi
Starter menggunakan Next.js 15, React 19, TypeScript, CSS tanpa UI kit, satu endpoint serverless `/api/chat`, serta localStorage untuk *ringkasan topik* di browser. Alurnya: browser → UI → API Next.js → pemetaan kata kunci → respons edukasi → browser menambah log kategori lokal. Dipilih untuk kemudahan development di VS Code dan deployment di Vercel. Ini **adaptasi** dari rancangan asal Laravel/FastAPI/MySQL yang belum diimplementasikan. Tidak ada RAG, vector DB, LLM, DB produksi, autentikasi peran, atau z-score. Batas domain: edukasi balita usia 0–5 tahun; tidak melakukan diagnosis atau resep.

## Soal 4 (15%) — Demonstrasi lima fitur
Tunjukkan (1) chat imunisasi, (2) respons penolakan pertanyaan tidak terjawab, (3) form usia berdasarkan tanggal lahir, (4) BMI edukatif dengan validasi form, dan (5) dashboard topik agregat per browser. Tambahan: pustaka referensi dan daftar uji. Jelaskan bahwa “jadwal vaksin personal” dan “klasifikasi z-score resmi” belum lulus implementasi, jadi bukan fitur selesai.

## Soal 5 (15%) — Minimal sepuluh skenario
Dokumen `RENCANA_PENGUJIAN.csv` memiliki 13 skenario untuk diuji secara manual: alur valid/tidak valid, kondisi darurat, kategori topik, penyimpanan lokal, dan responsif. Lakukan tiap skenario di localhost dan URL Vercel; isi kolom hasil aktual/status/tanggal/tautan bukti **setelah** menjalankannya. Ambil screenshot perangkat mobile dan desktop serta layar saat error/hasil tidak sesuai. Checklist web bukan pengganti bukti pengujian.

## Soal 6 (15%) — Bug dan retest
Jangan mengarang bug yang ditemukan. Catat tiap bug aktual dengan kolom ID, versi, perangkat, langkah reproduksi, hasil diharapkan, hasil aktual, prioritas kritis/sedang/ringan, perbaikan, pengujian ulang dan link screenshot. Contoh risiko untuk diperiksa (belum dinyatakan sebagai bug): input tanggal saat perubahan zona waktu, kata kunci medis yang ambigu, localStorage browser yang dinonaktifkan, dan layar kecil saat keyboard terbuka.

## Soal 7 (15%) — Keamanan, keandalan, akurasi AI
Telah tersedia validasi panjang pertanyaan 3–800 karakter di API, batas input kalkulator, larangan tanggal lahir masa depan, pembatasan konten darurat dasar, fallback ketika jawaban tidak diketahui, serta tidak menyimpan teks chat dan identitas. Perlu pengembangan: autentikasi RBAC, rate limit, pengujian prompt injection, logging aman, referensi RAG halaman, evaluasi faithfulness, validasi dokter/bidan/ahli gizi, dan pengujian akurasi terhadap standar. Karena chatbot sekarang bukan LLM, jangan mengklaim telah menguji akurasi AI. Bahkan deteksi darurat berbasis kata kunci masih sangat terbatas.

## Soal 8 (10%) — Kontribusi personal dan evaluasi
**Isi sesuai kontribusi nyata tiap mahasiswa.** Contoh format jawaban pribadi: “Saya menangani [nama modul], mengubah [file/komponen], menguji [skenario], dan memperbaiki [bug] dengan bukti commit [tautan]. Hambatan teknis terbesar adalah [masalah konkret], yang kami atasi melalui [langkah].” Sertakan riwayat commit, tangkapan layar, dan dokumentasi kerja tiap anggota. Hasil saat ini berupa demo UI/API; prioritas menuju seminar akhir adalah retrieval RAG tervalidasi, database, RBAC, z-score, jadwal imunisasi resmi, uji usability dan evaluasi lapangan.

## Checklist sebelum presentasi
- [ ] Isi URL Vercel aktif dan uji dari perangkat lain
- [ ] Masukkan repositori GitHub aktual
- [ ] Jalankan 13 skenario dan lampirkan screenshot hasil aktual
- [ ] Catat bug nyata dan langkah pengujian ulang
- [ ] Jelaskan dengan jujur fitur demo vs fitur terintegrasi
- [ ] Dokumentasikan kontribusi masing-masing dari tiga anggota
- [ ] Minta validasi dosen dan tenaga kesehatan untuk aturan medis
