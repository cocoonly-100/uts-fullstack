import "@/app/globals.css";
import {databawahkrs} from "../data";
import { completekrsgeneration} from "../lib";

export default function Home() {
const datadirikrs=[
  ['','20vw','','54vw'],
  ["Status", "Disetujui"],
  ["Perubahan terakhir", "Kamis, 03 Juli 2025 18:21:53"],
  ["Nomor Kartu Studi", "#321828"],
  ["Program Studi", "Sarjana Teknik Informatika - Fakultas Sains dan Teknologi"],
  ["Nomor Induk Mahasiswa", "27182837378"],
  ["Nama Mahasiswa", "Beryl"],
  ["Tahun Ajaran / Tahapan", "2024 / 2"],
  ["Semester", "2"],
  ["Dosen Pembimbing Akademik", "Dr. Yennimar, S.Pd., M. Kom."],
  ["Jumlah Kredit", "20"],
  ["Jumlah Mutu", "76.0"],
  ["Indeks Prestasi Semester (IPS)", "3.8"]
];
const tabledata = [
  ["No", "3vw", "Mata Kuliah", "21vw", "Spada", "5vw", "(30%) UTS", "4vw", "(10%) Presensi", "5vw", "(20%) Tugas", "4vw", "(40%) UAS", "4vw", "N", "4vw", "NH", "2vw", "R", "2vw", "RH", "3vw", "I", "1vw", "IH", "2vw", "H", "2vw", "A", "2vw", "K", "1vw", "M", "2vw", "S", "1vw"],
  ["1", "TIF2111 - Pemrograman Visual", "-", "100", "100", "100", "95", "98.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["2", "TIF2112 - Praktek Pemrograman Visual", "-", "100", "100", "100", "95", "98.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "1", "4.0", "-"],
  ["3", "TIF2301 - Rekayasa Perangkat Lunak", "-", "70", "100", "70", "70", "73.0", "B", "-", "-", "-", "-", "-", "B", "3.0", "2", "6.0", "-"],
  ["4", "TIF3205 - Sistem Operasi", "-", "90", "100", "95", "90", "92.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["5", "TIF2607 - Multimedia", "-", "75", "94", "85", "80", "80.9", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["6", "TIF2405 - Struktur Data", "-", "88", "100", "95", "92", "92.2", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["7", "TIF2609 - Pemodelan Basis Data", "-", "80", "100", "80", "80", "82.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["8", "TIF2610 - Praktek Pemodelan Basis Data", "-", "80", "100", "80", "80", "82.0", "A", "-", "-", "-", "-", "-", "A", "4.0", "1", "4.0", "-"],
  ["9", "TIF2114 - Matematika Diskrit", "-", "75", "100", "80", "85", "83.5", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["10", "TIF2406 - Metode Numerik", "-", "81", "100", "91", "97", "91.3", "A", "-", "-", "-", "-", "-", "A", "4.0", "2", "8.0", "-"],
  ["11", "TIF2611 - Statistik dan Analisis Data", "-", "75", "87", "74", "79", "77.6", "B", "-", "-", "-", "-", "-", "B", "3.0", "2", "6.0", "-"]
];
let tabledata2=[['',[
  ["Anda SUDAH terdaftar untuk mengikuti Ujian Tengah Semester;"],
  ["Anda SUDAH terdaftar untuk mengikuti Ujian Akhir Semester;"],
  ["Mulai T.A. 2019/1 proses status kartu studi cukup sampai Disetujui saja, kartu studi tidak perlu lagi diubah statusnya menjadi Ditutup, dan proses pembuatan Kartu Studi baru cukup dengan syarat semua kartu studi harus berstatus Disetujui / Cuti / Non Aktif."]
]]];

let u=completekrsgeneration(datadirikrs,tabledata,tabledata2,databawahkrs)

return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>KARTU STUDI SEMESTER 2</p>
      {u}
    </main>
  );
}

