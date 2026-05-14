
import "@/app/globals.css";
import { completetablegenerator } from "../lib";
const data = [
  ["No", "Judul Kegiatan", "T.A.", "Dosen Pembimbing Lapangan Internal", "Tanggal Mulai", "Tanggal Berakhir", "Status", "Aksi"]
];
let u =completetablegenerator(data)
export default function Home() {

  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>DAFTAR KEGIATAN LAPANGAN</p>
      {u}
    </main>
  );
}

