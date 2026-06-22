import "@/app/globals.css";
import { completetableoonecolumngenerator } from "../lib";
import Link from 'next/link';
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('bantuan')
export default function Home() {
    let m={color:'blue'}
    let data=[['',[
  <div>Silakan download file berikut: <Link href='#' style={m}>Panduan Penggunaan Sistem Informasi Akademik Mahasiswa rev. 17 Mei 2013</Link> dan buka dengan menggunakan PDF Reader di komputer Anda.</div>,
  <div>Silakan download file berikut: <Link href='#' style={m}>Panduan Penggunaan Sistem Pelayanan Mahasiswa rev. 03 September 2014</Link> dan buka dengan menggunakan PDF Reader di komputer Anda.</div>,
  <div>Silakan download file berikut: <Link href='#' style={m}>Panduan Penggunaan Sistem Informasi Akademik Mahasiswa rev. 27 Mei 2016</Link> dan buka dengan menggunakan PDF Reader di komputer Anda.</div>,
  <div>Apabila Anda belum mempunyai PDF Reader, silakan download dan install file berikut: <Link href='#' style={m}>FoxIt PDF Reader</Link></div>
]]]
    let u=completetableoonecolumngenerator(data)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PANDUAN PENGGUNAAN SISTEM INFORMASI AKADEMIK MAHASISWA</p>
      {u}
    </main>
  );
}

