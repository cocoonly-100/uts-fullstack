'use client'
import "@/app/globals.css";
import { metadatagenerator } from "../metadata";
const data=[
    ['DATA VERIFIKASI',[
        'Email','email','Nama Ayah','ayah','Nama Ibu','ibu'
    ]],
    ["KATA KUNCI BARU",['Kata Kunci Baru','pwd','Konfirmasi Kata Kunci Baru','pwdconfirm']]
]
export default function Home() {
    let u=[]
    let a=0
    for (let i=0;i<data.length;i++){
        u.push(<tr key={a}><td style={{fontSize:'36px',width:'68vw',border:'0',borderBottom:'1px solid #bbbbbb',}} >{data[i][0]}</td></tr>)
        a+=1
        for (let j=0;j<data[i][1].length;j+=2){
            u.push(<tr key={a}><td style={{border:'0'}}>{data[i][1][j]}</td></tr>)
            a+=1
            u.push(<tr key={a}><td style={{border:'0'}}><input id={data[i][1][j+1]} style={{width:'40vw',borderRadius:'5px',border:'1px solid #888888'}}></input></td></tr>)
            a+=1
        }
    }
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>Hi Filbert Leisan,</p>
      <ul style={{ listStyleType: 'circle' ,marginLeft:'2vw'}}>
        <li>Silakan ubah kata kunci Anda dengan mengisi bagian verifikasi terlebih dahulu dan dilanjutkan dengan kata kunci baru.</li>
        <li>Apabila verifikasi gagal, silakan hubungi Bagian Administrasi Umum untuk melakukan pengecekan data verifikasi Anda.</li>
      </ul><br/>
      <div style={{background:'#eeeeee',padding:'1vh 1vw 1vh 1vw',width:'73vw'}}>
        {u}<br/>
        <button>simpan</button>
      </div>
    </main>
  );
}

