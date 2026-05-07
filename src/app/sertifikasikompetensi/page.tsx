import "@/app/globals.css";
import { completetablegenerator} from "../lib";

export default function Home() {
  let tabledata1=[
      ["No.", "3vw", "#.", "3vw", "Jenis", "12vw", "Judul", "12vw", "Nomor", "12vw", "Pembukaan", "8vw", "Penutupan Akhir", "8vw", "Status", "6vw", "Kuota Daftar", "4vw", "Aksi", "6vw"],
      ["6", "#86", "Sertifikasi Non BNSP", "Corporate Finance Institute (CFI)", "07/SKPI/LSP.UNPRI/2021", "2026-04-20", "2026-05-04", "Aktif", "25", "Daftar"],
      ["9", "#64", "Sertifikasi Non BNSP", "Computational Thinking (CT)", "05/SKPI/LSP.UNPRI/2021", "2026-04-20", "2026-04-29", "Tidak Aktif", "102", "Daftar"],
      ["10", "#79", "Sertifikasi Non BNSP", "Microsoft Certifiet Fundamentals (MCF)", "06/SKPI/LSP.UNPRI/2021", "2026-04-20", "2026-05-04", "Aktif", "71", "Daftar"],
      ["13", "#80", "Sertifikasi Non BNSP", "Computational Thinking (CT)", "05/SKPI/LSP.UNPRI/2021", "2026-04-20", "2026-05-04", "Aktif", "121", "Daftar"]
  ]
  let tabledata2=[
    ["No.", "4vw", "#", "4vw", "Jenis", "14vw", "Judul", "14vw", "Number", "12vw", "Status", "10vw", "Status Program", "10vw", "Aksi", "6vw"]
  ]
  let d1=completetablegenerator(tabledata1)
  let d2=completetablegenerator(tabledata2)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PANDUAN PENGGUNAAN SISTEM INFORMASI AKADEMIK MAHASISWA</p>
      {d1}
      <p className='header' style={{marginTop:'1vh'}}>DAFTAR PROGRAM SERTIFIKASI KOMPETENSI YANG TELAH DI AMBIL</p>
        {d2}
    </main>
  );
}

