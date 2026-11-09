export const references = [
 {id:'KIA',title:'Buku Kesehatan Ibu dan Anak (Buku KIA)',publisher:'Kementerian Kesehatan RI',status:'Referensi calon — validasi petugas diperlukan',url:'https://ayosehat.kemkes.go.id/'},
 {id:'IMUN',title:'Informasi imunisasi rutin',publisher:'Kementerian Kesehatan RI',status:'Referensi calon — versi jadwal perlu diverifikasi',url:'https://ayosehat.kemkes.go.id/'},
 {id:'WHO',title:'WHO Child Growth Standards',publisher:'World Health Organization',status:'Referensi calon — tabel LMS belum diintegrasikan',url:'https://www.who.int/tools/child-growth-standards'}
];
export const topics = [
 {key:'imunisasi',terms:['imunisasi','vaksin','bcg','polio','campak','dpt'],title:'Informasi imunisasi',answer:'Imunisasi membantu membangun perlindungan anak terhadap penyakit tertentu. Jenis dan waktu pemberian harus mengikuti jadwal imunisasi resmi yang berlaku, dengan mempertimbangkan catatan imunisasi anak. Untuk memastikan dosis yang diperlukan atau yang terlewat, konsultasikan Buku KIA kepada petugas Puskesmas.',source:'IMUN'},
 {key:'mpasi',terms:['mpasi','makanan pendamping','makan anak','menu'],title:'Pemberian MPASI',answer:'MPASI umumnya diperkenalkan pada usia sekitar enam bulan sambil melanjutkan ASI. Tekstur, frekuensi, dan ragam makanan perlu disesuaikan dengan perkembangan anak. Bila anak sulit makan atau terdapat kekhawatiran pertumbuhan, diskusikan dengan tenaga gizi.',source:'KIA'},
 {key:'gizi',terms:['gizi','berat','tinggi','stunting','pertumbuhan','kurus'],title:'Pertumbuhan dan gizi',answer:'Pemantauan pertumbuhan balita memerlukan pengukuran berat serta panjang atau tinggi badan yang tepat, kemudian dibandingkan dengan standar pertumbuhan menurut usia dan jenis kelamin. Satu angka berat atau BMI saja tidak cukup untuk menentukan status gizi balita. Pengukuran dan interpretasi sebaiknya dikonfirmasi ke tenaga kesehatan.',source:'WHO'}
];
export const demoMilestones = [
 {month:0,label:'Saat lahir',detail:'Contoh edukasi: segera periksa Buku KIA dan riwayat vaksin bayi baru lahir.'},
 {month:2,label:'Usia 2 bulan',detail:'Contoh edukasi: terdapat rangkaian imunisasi bayi pada masa awal kehidupan.'},
 {month:6,label:'Usia 6 bulan',detail:'Contoh edukasi: pantau kelanjutan imunisasi sesuai jadwal resmi yang berlaku.'},
 {month:9,label:'Usia 9 bulan',detail:'Contoh edukasi: periksa kebutuhan imunisasi pada periode ini di Buku KIA.'},
 {month:18,label:'Usia 18 bulan',detail:'Contoh edukasi: tanyakan imunisasi lanjutan kepada petugas berdasarkan catatan anak.'}
];
