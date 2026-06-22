'useclient'
import "@/app/globals.css";
import e from "../component/perpusreq";
import { completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('daftarreservasi')
const data = [
  ["No", "6vw", "ID Pengajuan", "22vw", "Tgl Pengajuan", "24vw", "Status", "12vw", "Aksi", "10vw"]
];
let u =completetablegenerator(data)
export default function Home() {

  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>Keranjang Perpustakaan Anda</p>
      {e()}<br/>
      <br/>
      {u}
    </main>
  );
}

