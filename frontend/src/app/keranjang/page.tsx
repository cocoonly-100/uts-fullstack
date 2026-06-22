'useclient'
import "@/app/globals.css";
import { completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('keranjang')

export default function Home() {
   let data= [
    ["No", "5vw", "ID Eksemplar", "16vw", "Judul Buku", "14vw", "Lokasi Perpustakaan", "24vw", "Status", "8vw", "Aksi", "6vw"]

];
    let u=completetablegenerator(data)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>Keranjang Perpustakaan Anda</p>
      {u}<br/>
      <button>Checkout</button>
    </main>
  );
}

