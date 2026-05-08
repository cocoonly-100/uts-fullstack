import "@/app/globals.css";
import { completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator"sirima"
export default function Home() {
   let data=[
  ["No.", "8vw", "Tahun", "12vw", "Tahapan", "14vw", "Status Versi 2", "28vw", "Aksi", "12vw"],
  ["1", "2026", "1", "Aktif", <button key="v2-1">view</button>]
];
    let data2 = [
  ["No.", "8vw", "Tahun", "12vw", "Tahapan", "14vw", "Status", "28vw", "Aksi", "12vw"],
  ["1", "2023", "1", "Aktif", <button key="s-1">view</button>],
  ["2", "2023", "1", "Tidak Aktif", <button key="s-2">view</button>],
  ["3", "2022", "1", "Tidak Aktif", <button key="s-3">view</button>],
  ["4", "2021", "1", "Tidak Aktif", <button key="s-4">view</button>],
  ["5", "2020", "1", "Tidak Aktif", <button key="s-5">view</button>]
];
    let u=completetablegenerator(data)
    let u2=completetablegenerator(data2)
    let st={fontSize:'20px',fontWeight:'bold'}
  return (
    <main>
      <p className='header' style={{marginTop:'1vh',borderBottom:'1px solid black',width:'74vw'}}>PERSYARATAN DISEMINASI</p>
      <br/>
      <p style={st}>Versi Baru (v2)</p>
        {u}
      <br/>
      <p style={st}>Versi Baru (v2)</p>
        {u2}
    </main>
  );
}

