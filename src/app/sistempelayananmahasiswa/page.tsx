import "@/app/globals.css";
import { completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator(sistempelayananmahasiswa)
export default function Home() {
  let data=[['Nomor','18vw','Permohonan','30vw','Status','13vw','Aksi','11vw']]
  let data2=['Tambah Permohonan Baru','Permohonan Dalam Proses','Permohonan Tutup','Panduan']
  let u=completetablegenerator(data)
  let u2=[]
  let a=0
  for(let i=0;i<data2.length;i++){
    u2.push(<button key={a} style={{width:'auto',padding:'1vh 1vw 1vh 1vw',border:'1px solid black',marginRight:'0.6vw',borderRadius:'6px'}}>{data2[i]}</button>)
    a=a+1
  } 
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>SISTEM PELAYANAN MAHASISWA</p>
      <div style={{display:'flex',marginBottom:'3vh'}}>{u2}</div>
      <p style={{fontWeight:'bold',fontSize:'24px'}}>DAFTAR PERMOHONAN YANG SEDANG DIPROSES</p>
      {u}
      <br />
    </main>
  );
}

