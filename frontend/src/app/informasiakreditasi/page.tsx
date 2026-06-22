import "@/app/globals.css";
import { completetablegenerator } from "../lib";
import { groupCollapsed } from "console";
import React from "react";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('informasiakreditasi')
export default function Home() {
  let data1 = [
  [
    "AKREDITASI INSTITUSI PERGURUAN TINGGI",
    [
      "Nomor Surat Keputusan",
      "510/SK/BAN-PT/Ak/PT/V/2024",
      "Tanggal Surat Keputusan",
      "7 Mei 2024",
      "Tahun Surat Keputusan",
      "2024",
      "Peringkat",
      "Unggul",
      "Tanggal Kadaluarsa",
      "7 Mei 2029",
      "Status",
      "Masih Berlaku",
      "Unduh",
      ""
    ]
  ],
  [
    "AKREDITASI PROGRAM STUDI PERGURUAN TINGGI",
    [
      "Nomor Surat Keputusan",
      "267/SK/LAM-INFOKOM/Ak/S/IX/2025",
      "Tanggal Surat Keputusan",
      "30-Sep-25",
      "Tahun Surat Keputusan",
      "2025",
      "Peringkat",
      "Unggul",
      "Tanggal Kadaluarsa",
      "30-Sep-30",
      "Status",
      "Masih berlaku",
      "Unduh",
      ""
    ]
  ]
];
  let data2= [
  ["No.",'4vw', "Nomor",'34vw', "Tanggal",'24vw', "Unduh",'10vw'],
  ["1", "267/SK/LAM-INFOKOM/Ak/S/IX/2025", "Selasa, 30 September 2025", <a href='./frieren.jpeg' download="frieren.jpeg"><button style={{marginTop:'1vh',width:'auto',padding:'2vh 1vw 2vh 1vw',border:'1px solid black'}}>Download</button></a>],
  ["2", "8004/SK/BAN-PT/Akred/S/XII/2020", "Rabu, 2 Desember 2020", <a href='./frieren.jpeg' download="frieren.jpeg"><button style={{marginTop:'1vh',width:'auto',padding:'2vh 1vw 2vh 1vw',border:'1px solid black'}}>Download</button></a>]
];
  let u1=[]
  let a=0
  for(let i=0;i<data1.length;i++){
    u1.push(<p key={a} style={{fontWeight:'bold',fontSize:'28px',margin:'1vh 0 1vh 0'}}>{data1[i][0]}</p>)
    a=a+1
    let temp=[]
    for (let j=0;j<data1[i][1].length;j+=2){
      let d2: React.ReactNode=data1[i][1][j+1]
      if (data1[i][1][j]=='Unduh'){
        d2=<button style={{marginTop:'1vh',width:'auto',padding:'2vh 1vw 2vh 1vw',border:'1px solid black'}}>Download</button>
      }
      temp.push(<tr key={a} style={{borderTop:'1px solid black',height:'6vh'}}><th className='bold' style={{textAlign:'left',border:'0'}}>{data1[i][1][j]}</th><td style={{width:'56vw',border:'0'}}><a href='./frieren.jpeg' download="frieren.jpeg">{d2}</a></td></tr>)
      a+=1
    }
    u1.push(<table key={a} style={{border:'0',marginLeft:'1vw',marginBottom:'2vh'}}><tbody>{temp}</tbody></table>)
    a+=1
  }
  let u2=completetablegenerator(data2)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>INFORMASI AKREDITASI PERGURUAN TINGGI DAN PROGRAM STUDI</p>
      {u1}
      {u2}
      <br />
    </main>
  );
}

