const data={
    '20241semester1':['krs','krs 2024 semester 1'],
    '20242semester2':['krs','krs 2024 semester 2'],
    'bantuan':['bantuan','bantuan untuk murid'],
    'caribuku':['cari buku','cari buku perpustakaan'],
    'daftarkegiatan':['kegiatan','daftar kegiatan unpri'],
    'daftarreservasi':['reservasi','daftar reservasi buku'],
    'diseminasipenelitian': [
    'Diseminasi Penelitian',
    'Halaman diseminasi penelitian mahasiswa dan dosen'
  ],

  'dokumenakademik': [
    'Dokumen Akademik',
    'Halaman dokumen akademik mahasiswa'
  ],

  'informasiakreditasi': [
    'Informasi Akreditasi',
    'Halaman informasi akreditasi universitas dan program studi'
  ],

  'informasifakultassainsdanteknologi': [
    'Informasi Fakultas Sains dan Teknologi',
    'Halaman informasi Fakultas Sains dan Teknologi'
  ],

  'informasiprogramstudi': [
    'Informasi Program Studi',
    'Halaman informasi program studi'
  ],

  'jadwaldiseminasi': [
    'Jadwal Diseminasi',
    'Halaman jadwal diseminasi penelitian'
  ],

  'kegiatanmahasiswa': [
    'Kegiatan Mahasiswa',
    'Halaman kegiatan mahasiswa universitas'
  ],

  'keranjang': [
    'Keranjang',
    'Halaman keranjang pengguna'
  ],

  'laporanpenelitian': [
    'Laporan Penelitian',
    'Halaman laporan penelitian'
  ],

  'pengumuman': [
    'Pengumuman',
    'Halaman pengumuman kampus dan akademik'
  ],

  'permohonan': [
    'Permohonan',
    'Halaman permohonan layanan mahasiswa'
  ],

  'persyaratandiseminasi': [
    'Persyaratan Diseminasi',
    'Halaman persyaratan diseminasi penelitian'
  ],

  'presensiharian': [
    'Presensi Harian',
    'Halaman presensi harian mahasiswa'
  ],

  'profilmahasiswa': [
    'Profil Mahasiswa',
    'Halaman profil mahasiswa'
  ],

  'programaltissia': [
    'Program Altissia',
    'Halaman program Altissia'
  ],

  'proposalpenelitian': [
    'Proposal Penelitian',
    'Halaman proposal penelitian mahasiswa dan dosen'
  ],

  'publikasipenelitian': [
    'Publikasi Penelitian',
    'Halaman publikasi hasil penelitian'
  ],

  'riwayatkunjungan': [
    'Riwayat Kunjungan',
    'Halaman riwayat kunjungan pengguna'
  ],

  'sertifikasikompetensi': [
    'Sertifikasi Kompetensi',
    'Halaman sertifikasi kompetensi mahasiswa'
  ],

  'sirima': [
    'SIRIMA',
    'Halaman sistem informasi akademik mahasiswa'
  ],

  'sistempelayananmahasiswa': [
    'Sistem Pelayanan Mahasiswa',
    'Halaman sistem pelayanan mahasiswa'
  ],

  'slowpage': [
    'Slow Page',
    'Halaman pengujian performa sistem'
  ],

  'spada': [
    'SPADA',
    'Halaman sistem pembelajaran daring'
  ],

  'transkripakademiksementara': [
    'Transkrip Akademik Sementara',
    'Halaman transkrip akademik sementara mahasiswa'
  ],

  'ubahkatakunci': [
    'Ubah Kata Kunci',
    'Halaman untuk mengubah kata sandi atau kata kunci akun'
  ]
}

export function metadatagenerator(x){
    return({'title':data[x][0],'description':data[x][1]})
}