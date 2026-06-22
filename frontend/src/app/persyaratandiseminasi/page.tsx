import "@/app/globals.css";
import { completetableoonecolumngenerator,completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('persyaratandiseminasi')
export default function Home() {
    let data = [
  ["No.",'3vw', "Informasi",'12vw', "Penjelasan",'44vw', "Data",'8vw', "Aksi",'3vw'],
  ["1", "Peserta Diseminasi Penelitian", "Harus mengikuti minimal 2 sebagai peserta diseminasi penelitian.", "0", <button>download</button>],
  ["2", "Peserta Kegiatan Mahasiswa", "Harus mengikuti minimal 4 kali sebagai peserta kegiatan mahasiswa.", "2", <button>download</button>],
  ["3", "Kompetensi Bahasa Inggris", "Harus mencapai nilai keseluruhan kompetensi Bahasa Inggris minimal B1- pada platform Altissia.", "Belum terdaftar", <button>download</button>],
  ["4", "Status Proposal Penelitian", "Status Proposal Penelitian harus berstatus disahkan Dekanat.", "Belum terdaftar", <button>download</button>],
  ["5", "Status Laporan Penelitian", "Status Laporan Penelitian harus berstatus disahkan Dekanat.", "Belum terdaftar", <button>download</button>],
  ["6", "Status Publikasi Penelitian", "Status Publikasi Penelitian harus berstatus disahkan Dekanat.", "Belum terdaftar", <button>download</button>],
  ["7", "Bebas Pustaka", "Status Bebas Pustaka harus berstatus disahkan Kepala Perpustakaan.", "Belum diajukan", <button>download</button>],
  ["8", "Bebas Keuangan", "Status Bebas Keuangan harus berstatus disahkan Kepala Bagian Administrasi Keuangan.", "Belum diajukan", <button>download</button>],
  ["9", "Bebas Kesehatan", "Status Bebas Kesehatan harus berstatus disahkan Kepala Bagian Administrasi Kesehatan.", "Belum diajukan", <button>download</button>],
  ["10", "Bebas Akademik", "Status Bebas Akademik harus berstatus disahkan Program Studi.", "Belum diajukan", <button>download</button>]
];
let data2 = [['',[
  ["Silakan klik tombol kompilasi untuk mengkalkulasi persyaratan diseminasi;"],
  ["Setiap perubahan data pada item persyaratan diseminasi memerlukan proses kompilasi ulang."]
]]];
    let u=completetablegenerator(data)
    let u2=completetableoonecolumngenerator(data2)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PERSYARATAN DISEMINASI</p>
      <button> Persyaratan Diseminasi</button><br/>
      <button> Kompilasi</button>
        <br/>{u}<br/>
      <div style={{width:'74vw',background:'#ffbbcc',borderRadius:'4px',padding:'1vh 1vw 1vh 1vw'}}>
        <p>PERHATIAN :</p>
        {u2}
      </div>
    </main>
  );
}

