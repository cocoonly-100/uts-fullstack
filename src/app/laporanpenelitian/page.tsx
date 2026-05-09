import "@/app/globals.css";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator("laporanpenelitian")
export default function Home() {
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>LAPORAN PENELITIAN</p>
      <button> Panduan LAPORAN Penelitian Revisi 29 April 2019</button>
    </main>
  );
}

