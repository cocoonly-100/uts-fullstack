import "@/app/globals.css";
import { completetableoonecolumngenerator,completenoheadertablegenerator, tablegenerator } from "../lib";
let a=0
function buttongenerator(data){
    a=a+1
    return <button key={a} style={{background:'#cccccc',border:'1px solid black'}}>{data}</button>
}
export default function Home() {
let btn=[buttongenerator('Download Transkrip Akademik Sementara'),
        buttongenerator('Download Temporary Academic Transcript')]
let data1=[
    ['','24vw','','50vw'],
    ["Program Studi", "Teknik Informatika - Fakultas Sains dan Teknologi"],
    ["Nomor Induk Mahasiswa", "27182837378"],
    ["Nama Mahasiswa", "Beryl"],
    ["Jumlah Kredit", "63"],
    ["Jumlah Mutu", "246.0"],
    ["Indeks Prestasi Kumulatif (IPK)", "3.9"],
    ["Diproses pada", "Senin, 27 April 2026 21:56:47"]
]
let data2=[
    ["No.", "2vw", "Sem.", "3vw", "Kode", "10vw", "Mata Kuliah", "33vw", "N", "3vw", "NH", "2vw", "R", "2.2vw", "RH", "2.2vw", "I", "1vw", "IH", "2vw", "H", "1.5vw", "A", "2.2vw", "K", "2vw", "M", "3vw"],
    ["1", "1", "TIF1104", "Kalkulus", "85.9", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["2", "1", "TIF1107", "Pengantar Statistika", "85.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["3", "1", "TIF1111", "Fisika Instrumensi", "82.8", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["4", "1", "TIF1201", "Pengantar Teknologi Informasi", "81.6", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["5", "1", "TIF1202", "Algoritma Pemrograman", "100.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["6", "1", "TIF1203", "Praktikum Algoritma Pemrograman", "100.0", "A", "", "", "", "", "A", "4.0", "1", "4.0"],
    ["7", "1", "TIF1205", "Sistem Digital", "83.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["8", "1", "TIF1206", "Organisasi dan Arsitektur Komputer", "86.5", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["9", "1", "TIF1207", "Aplikasi Komputer", "90.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["10", "1", "TIF1409", "Jaringan Komputer", "93.6", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["11", "1", "TIF1410", "Praktikum Jaringan Komputer", "94.0", "A", "", "", "", "", "A", "4.0", "1", "4.0"],
    ["12", "2", "TIF2111", "Pemrograman Visual", "98.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["13", "2", "TIF2112", "Praktek Pemrograman Visual", "98.0", "A", "", "", "", "", "A", "4.0", "1", "4.0"],
    ["14", "2", "TIF2114", "Matematika Diskrit", "80.9", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["15", "2", "TIF2301", "Rekayasa Perangkat Lunak", "73.0", "B", "", "", "", "", "B", "3.0", "2", "6.0"],
    ["16", "2", "TIF2405", "Struktur Data", "92.2", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["17", "2", "TIF2406", "Metode Numerik", "91.3", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["18", "2", "TIF2607", "Multimedia", "80.9", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["19", "2", "TIF2609", "Pemodelan Basis Data", "82.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["20", "2", "TIF2610", "Praktek Pemodelan Basis Data", "82.0", "A", "", "", "", "", "A", "4.0", "1", "4.0"],
    ["21", "2", "TIF2611", "Statistik dan Analisis Data", "77.6", "B", "", "", "", "", "B", "3.0", "2", "6.0"],
    ["22", "2", "TIF3205", "Sistem Operasi", "92.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["23", "3", "MKU602002", "Pancasila", "96.5", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["24", "3", "TIF3205", "Pengantar Kecerdasan Buatan", "82.2", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["25", "3", "TIF3206", "Pengenalan Pola", "82.0", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["26", "3", "TIF3208", "Pemrograman Mobile", "88.8", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["27", "3", "TIF3402", "Pengantar Ilmu Data (Data Science)", "84.9", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["28", "3", "TIF3403", "Pemrograman Berorientasi Objek", "92.5", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["29", "3", "TIF3404", "Praktikum Pemrograman Berorientasi Objek", "92.0", "A", "", "", "", "", "A", "4.0", "1", "4.0"],
    ["30", "3", "TIF3407", "Server Administration", "93.4", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["31", "3", "TIF3413", "Project Teknik Informatika", "91.2", "A", "", "", "", "", "A", "4.0", "1", "4.0"],
    ["32", "3", "TIF3501", "Interaksi Manusia Komputer", "79.0", "B", "", "", "", "", "B", "3.0", "2", "6.0"],
    ["33", "3", "TIF3506", "Manajemen Proyek TI", "82.5", "A", "", "", "", "", "A", "4.0", "2", "8.0"],
    ["34", "3", "TIF3817", "Machine Learning", "97.2", "A", "", "", "", "", "A", "4.0", "3", "12.0"]
]
let data3=[['',[
    "Transkrip Akademik Sementara disusun berdasarkan informasi dari Kartu Studi yang telah mempunyai status Disetujui dan Jadwal Perkuliahan yang berstatus Ditutup",
    "Penjelasan singkatan: N = Nilai, NH = Nilai Huruf, R = Remedial, RH = Remedial Huruf, I = Intensif, IH = Intensif Huruf, H = Huruf, A = Angka, K = Kredit, M = Mutu."
]]]
let u=completenoheadertablegenerator(data1)
let tablehead2=[]
let table2=[]
let u2=completetableoonecolumngenerator(data3)
tablegenerator(data2,tablehead2,table2)
  return (
    <main>
     <div style={{display:'flex'}}>
        {btn}</div>
      <p className='header' style={{marginTop:'1vh'}}>TRANSKRIP AKADEMIK SEMENTARA</p>
      {u}<br/>
      <table style={{marginTop:'1vh'}}>
        <thead>
          <tr style={{fontWeight:'bold',height:'6vh'}}>
            {tablehead2}
          </tr>
        </thead>
        <tbody>
          {table2}
          <tr>
            <td colSpan={12} style={{textAlign:'right',fontWeight:'bold'}} >Total Kredit & Mutu	</td>
            <td style={{textAlign:'center',fontWeight:'bold'}} >63</td>
            <td style={{textAlign:'center',fontWeight:'bold'}} >246.0</td>
          </tr>
          <tr>
            <td colSpan={12} style={{textAlign:'right',fontWeight:'bold'}} >Indeks Prestasi Kumulatif (IPK)</td>
            <td colSpan={2} style={{textAlign:'center',fontWeight:'bold'}} >3.9</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{width:'74vw',background:'#99aaee',padding:'1vh 1vw 1vh 1vw'}}>
        <p>Catatan:</p>
        {u2}
      </div>
    </main>
  );
}

