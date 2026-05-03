import "@/app/globals.css";
import { completetableoonecolumngenerator } from "../lib";
export default function Home() {
  let data = [
  [
    "IZIN",
    [
      "Berdasarkan Surat Keputusan Rektor Universitas Prima Indonesia Nomor: 146/SK/REK/UNPRI/IX/2005 pada hari Rabu, 21 September 2005 tentang Pembentukan Fakultas Sains dan Teknologi di Universitas Prima Indonesia."
    ]
  ],
  [
    "VISI",
    [
      "Menjadi fakultas yang unggul dalam bidang Technopreneurship yang Inovatif, Adaptif dan berdaya saing internasional pada tahun 2030."
    ]
  ],
  [
    "MISI",
    [
      "Menyelenggarakan proses pendidikan dan pengajaran dengan sistem kurikulum nasional dan internasional untuk menghasilkan lulusan yang mampu di bidang technopreneurship yang inovatif dan adaptif",
      "Menyelenggarakan riset dan publikasi dalam bidang sains dan teknologi",
      "Berperan aktif dalam pelayanan kepada masyarakat pada bidang sains dan teknologi",
      "Melakukan kerja sama dengan berbagai pihak di tingkat lokal, nasional, regional, maupun internasional",
      "Meningkatkan tata kelola guna penguatan akuntabilitas, penataan struktur organisasi yang efisien, efektif serta transparan"
    ]
  ],
  [
    "TUJUAN",
    [
      "Menghasilkan lulusan yang mampu di bidang Technopreneurship yang inovatif, adaptif;",
      "Menghasilkan riset dan publikasi pada bidang teknologi dan ilmu komputer;",
      "Meningkatkan kepercayaan masyarakat dalam pelayanan dibidang teknologi dan ilmu komputer;",
      "Menghasilkan berbagai kerjasama untuk meningkatkan sarana pelaksanaan Tri Dharma Perguruan Tinggi;",
      "Terwujudnya tata kelola guna penguatan akuntabilitas, penataan struktur organisasi yang efisien, efektif, transparan, dan akuntabel."
    ]
  ],
  [
    "STRUKTUR ORGANISASI",
    [
      "Dekan",
      "Prof. Ir. Bhakti Alamsyah, MT., Ph.D.",
      "Wakil Dekan 1",
      "Dr. Mardi Turnip, S.Kom., M.Kom.",
      "Wakil Dekan 2",
      "Dr. Siti Aisyah, S.Kom., M.Kom.",
      "Wakil Dekan 3",
      "Dhanny Rukmana Manday, S.T., M.T."
    ]
  ]
];
  let u=completetableoonecolumngenerator(data)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>DOKUMEN AKADEMIK </p>
      {u}
      <br />
    </main>
  );
}

