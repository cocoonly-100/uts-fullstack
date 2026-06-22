'useclient'
import "@/app/globals.css";
import { completetableoonecolumngenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('spada')
const data = [['',[
  ["Pembuatan akun baru Spada;"],
  ["Username Spada akan sama dengan NIM Anda;"],
  ["Password Spada akan sama dengan Kata Kunci Anda;"],
  ["Sinkronisasi data Username, First Name, Last Name, Password, dan Email."]
]]];
let u =completetableoonecolumngenerator(data)
const normal={margin:'1vh 0 1vh 0'}
export default function Home() {

  return (
    <main>
        <p className='header' style={{marginTop:'1vh'}}>SISTEM PEMBELAJARAN DARING<span style={{color:'#cccccc',fontSize:'14px'}}>SPADA</span></p>
        <p style={normal}>Silakan klik tombol berikut untuk menuju ke situs Spada Unpri:</p>
        <button>Situs Spada</button>
        <p style={normal}>Silakan klik tombol berikut untuk sinkronisasi profil Anda ke Spada Unpri:</p>
        <button>Sinkronisasi Profil Mahasiswa ke Spada</button>
        <p style={normal}>Tombol sinkronisasi diatas, akan melakukan langkah berikut:</p>
        {u}
        <p style={normal}>Tombol sinkronisasi bisa dipakai berulang untuk mereset password Spada menjadi sama dengan kata kunci SIAM Anda, apabila Anda lupa password Spada Anda.</p>    </main>
  );
}

