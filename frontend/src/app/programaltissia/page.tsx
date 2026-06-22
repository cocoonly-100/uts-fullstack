import "@/app/globals.css";
import { completemegatablegenerator, completetablegenerator ,completetableoonecolumngenerator} from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator('programaltissia')

function buttongenerator(data){
    return <button style={{background:'#cccccc',margin:'1.5vh 0 1.5vh 0'}}>{data}</button>
}
export default function Home() {
let tabledata2=[
    ["No.",'3vw',
     "Gelombang",'8vw',
     "Tanggal Pendaftaran Remedial",'22vw',
    "Aktivisasi Mulai",'12vw', "Sampai",'6vw',
     "Tanggal Pembayaran",'16vw',
      "Item#",'5vw']
]
let tabledata1=[['',[
                "Pendaftaran Platform Altissia Tahun 2026 Gelombang 41 dibuka mulai hari Rabu, 01 April 2026 00:00:00 sampai hari Kamis, 30 April 2026 23:59:59;",
                "Pendaftaran hanya bisa dilakukan apabila telah dilakukan pembayaran Platform Altissia di bagian keuangan;",
                "Untuk melakukan pendaftaran, silakan klik tombol Daftar Platform Altissia;",
                "Apabila pendaftaran berhasil, maka Anda sudah terdaftar pada gelombang bersangkutan;",
                "Pendaftaran resmi ke Platform Altissia untuk mendapatkan akun Altissia akan dilakukan paling lama sampai hari Kamis, 07 Mei 2026 23:59:59;",
                "Setelah didapatkan akun Altissia, laman ini akan otomatis berubah menjadi laman aktivasi akun Altissia, dan untuk selanjutnya silakan ikuti pengarahan pada laman baru tersebut."

            ]]]
let tabledata3=[['',[
                "Pendaftaran Remedial Platform Altissia Tahun 2026 Gelombang 41 dibuka mulai hari Rabu, 01 April 2026 00:00:00 sampai hari Kamis, 30 April 2026 23:59:59;",
                "Pendaftaran hanya bisa dilakukan apabila telah dilakukan pembayaran Remedial Platform Altissia di bagian keuangan;",
                "Untuk melakukan pendaftaran remedial, silakan klik tombol Daftar Remedial Platform Altissia;",
                "Apabila pendaftaran berhasil, maka Anda sudah terdaftar pada gelombang bersangkutan;",
                "Pendaftaran resmi ke Platform Altissia untuk mengaktifkan kembali akun Altissia akan dilakukan paling lama sampai hari Kamis, 07 Mei 2026 23:59:59;",
                "Akun Platform Altissia akan aktif kembali sekitar satu bulan mulai dari hari Kamis, 07 Mei 2026 23:59:59;"
]]]
let d1=completetableoonecolumngenerator(tabledata1)
let d2=completetablegenerator(tabledata2)
let d3=completetableoonecolumngenerator(tabledata3)
let data1 = [
    [
        "PLATFORM ALTISSIA",
        [
            buttongenerator('Daftar Platform Altissia'),
            "Catatan:",
            d1,
        ]
    ],
    [
        "REMEDIAL PLATFORM ALTISSIA",
        [
            d2,
            buttongenerator('Daftar Remedial Platform Altissia'),
            "Catatan:",
            d3
        ]
    ]
];
  let u=completemegatablegenerator(data1)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PLATFORM ALTISSIA</p>
      {u}
    </main>
  );
}

