import "@/app/globals.css";
import {completetablegenerator} from '@/app/lib'
export default function Home() {
  let data = [
  ["No.",'2vw', "Dokumen",'8vw',"Pemilik",'14vw', "Nomor",'14vw', "Tanggal",'10vw', "Judul",'20vw','Aksi','4vw'],
  ["1", "Sertifikat", "Badan Akreditasi Nasional Perguruan Tinggi", "510/SK/BAN-PT/Ak/PT/V/2024", "Selasa, 7 Mei 2024", "Sertifikat Akreditasi Perguruan Tinggi Universitas Prima Indonesia",'-'],
  ["2", "Keputusan", "Badan Akreditasi Nasional Perguruan Tinggi", "510/SK/BAN-PT/Ak/PT/V/2024", "Selasa, 7 Mei 2024", "Keputusan Akreditasi Perguruan Tinggi Universitas Prima Indonesia",'-'],
  ["3", "Sertifikat", "Badan Akreditasi Nasional Perguruan Tinggi", "395/SK/BAN-PT/Ak.KP/PT/V/2023", "Selasa, 30 Mei 2023", "Sertifikat Akreditasi Universitas Prima Indonesia Belum dilihat",'-'],
  ["4", "Keputusan", "Badan Akreditasi Nasional Perguruan Tinggi", "395/SK/BAN-PT/Ak.KP/PT/V/2023", "Selasa, 30 Mei 2023", "Keputusan Akreditasi Institusi Universitas Prima Indonesia Belum dilihat",'-'],
  ["5", "Sertifikat", "Badan Akreditasi Nasional Perguruan Tinggi", "1541/SK/BAN-PT/Ak.Ppj/PT/IX/2022", "Selasa, 27 September 2022", "Sertifikat Akreditasi Institusi Universitas Prima Indonesia Belum dilihat",'-'],
  ["6", "Keputusan", "Badan Akreditasi Nasional Perguruan Tinggi", "1541/SK/BAN-PT/Ak.Ppj/PT/IX/2022", "Selasa, 27 September 2022", "Keputusan Akreditasi Institusi Universitas Prima Indonesia Belum dilihat",'-'],
  ["7", "Sertifikat", "Badan Akreditasi Nasional Perguruan Tinggi", "3606/SK/BAN-PT/Akred/PT/X/2017", "Selasa, 10 Oktober 2017", "Sertifikat Akreditasi AIPT Belum dilihat",'-']
]
  let u=completetablegenerator(data)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>DOKUMEN AKADEMIK </p>
      {u}
      <br />
    </main>
  );
}

