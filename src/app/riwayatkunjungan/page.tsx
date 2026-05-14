'useclient'
import "@/app/globals.css";
import e from "../component/perpusreq";
import { completetablegenerator } from "../lib";
const data = [
  ["No.", "3vw", "Masuk", "28vw", "Keluar", "28vw", "No Loker", "8vw", "Aksi", "7vw"],
  ["1", "Jum'at, 11 Oktober 2024 17:42:10", "Jum'at, 11 Oktober 2024 19:34:50", "60", "-"],
  ["2", "Kamis, 26 September 2024 18:51:13", "Kamis, 26 September 2024 19:28:48", "46", "-"],
  ["3", "Rabu, 18 September 2024 09:25:23", "Rabu, 18 September 2024 10:49:41", "10", "-"]
];
let u =completetablegenerator(data)
export default function Home() {

  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>BUKU TAMU PERPUSTAKAAN</p>
      {e()}<br/>
      <button>Generate Qr Masuk</button>
      {u}
    </main>
  );
}

