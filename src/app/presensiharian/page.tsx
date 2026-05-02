import "@/app/globals.css";
import {completetablegenerator} from '@/app/lib'



export default function Home() {
  const data=[
    ['No.','4vw',
      'Jadwal Perkuliahan','30vw',
      'Ruang Kelas','8vw',
      'Target Jam','8vw',
      'Target Dosen','12vw',
      'Realisasi Dosen','12vw'
    ],
    ['1','Semester 3 MALAM A - Computer Vision - Syarifah Atika, S.Kom., M.Kom. - Sarjana Teknik Informatika - #86148','3211','17:30 - 18:30','Syarifah Atika, S.Kom., M.Kom.','Syarifah Atika, S.Kom., M.Kom.'],
    ['2','Semester 3 MALAM A - Project Data Science - Juliansyah Putra Tanjung, S.T., M.Kom. - Sarjana Teknik Informatika - #86150','3211','18:30 - 19:30','Juliansyah Putra Tanjung, S.T., M.Kom.','Juliansyah Putra Tanjung, S.T., M.Kom.'],
  ]
  let u=completetablegenerator(data)

  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PRESENSI HARIAN SENIN, 5 AGUSTUS 2025</p>
      {u}<br />
      <p>Untuk informasi lebih lengkap mengenai Sistem Presensi harian dan tata cara pengambilan foto mulai dan foto selesai , tolong tanyakan kepada prodi</p>
    </main>
  );
}
