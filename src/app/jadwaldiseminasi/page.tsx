import "@/app/globals.css";
import { completetableoonecolumngenerator,completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator"jadwaldiseminasi"
export default function Home() {
    let data = [
  ["ID", "4vw", "Program Studi", "8vw", "Judul Penelitian", "33vw", "Mulai", "8vw", "Selesai", "8vw", "Kuota Peserta", "6vw", "Aksi", "3vw"],
  ["#9958", "Sarjana Manajemen", "Pengaruh Tingkat Pendidikan, Pengalaman Kerja, dan Usia Karyawan Terhadap Kinerja Karyawan di Coffee Shop Restu Bunda Medan", "Kamis, 30 April 2026 15:00:00", "Kamis, 30 April 2026 16:00:00", "50 / 50", <button key="btn1">download</button>],
  ["#10473", "Sarjana Ilmu Hukum", "KEJAHATAN LINGKUNGAN DALAM HUKUM PIDANA INTERNASIONAL: KAJIAN NORMATIF ATAS USULAN \"ECOCIDE\" SEBAGAI KEJAHATAN INTERNASIONAL", "Senin, 04 Mei 2026 14:00:00", "Senin, 04 Mei 2026 15:00:00", "176 / 300", <button key="btn2">download</button>],
  ["#10655", "Sarjana Psikologi", "HUBUNGAN ANTARA SUPERVISOR SUPPORT DENGAN ORGANIZATIONAL CITIZENSHIP BEHAVIOR PADA HOTEL DANAU TOBA INTERNASIONAL MEDAN", "Jum'at, 08 Mei 2026 13:30:00", "Jum'at, 08 Mei 2026 15:00:00", "60 / 60", <button key="btn3">download</button>]
];
    let data2=[
        ["ID", "4vw", "Program Studi", "12vw", "Judul Penelitian", "28vw", "Mulai", "6vw", "Selesai", "8vw", "Presensi", "10vw", "Aksi", "6vw"]
]
    let u=completetablegenerator(data)
    let u2=completetablegenerator(data2)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>JADWAL DISEMINASI</p>
        {u}
      <br/>
      <p className='header' style={{marginTop:'1vh'}}>DAFTAR PRESENSI DISEMINASI</p>
        {u2}
      <br/>
      <button> Panduan Aturan Pelaksanaan Diseminasi Penelitian Revisi 29 April 2019</button><br/>      
    </main>
  );
}

