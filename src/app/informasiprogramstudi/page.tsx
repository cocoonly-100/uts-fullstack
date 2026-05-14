import "@/app/globals.css";
import { completetableoonecolumngenerator } from "../lib";
import { completetablegenerator } from "../lib";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator(informasiprogramstudi)
export default function Home() {
  let data1 = [
  [
    "VISI",
    [
      "Menjadi Program studi yang menghasilkan lulusan dengan keunggulan dalam bidang Data Science, Intelligent System, dan Computer Vision berbasis Sosio-Technopreneurship yang inovatif dan adaptif pada tahun 2030."
    ]
  ],
  [
    "MISI",
    [
      "Menyelenggarakan pendidikan yang berkualitas di bidang Teknik Informatika terutama dalam bidang Data Science, Intelligent System dan Computer Vision berbasis Socio-Technopreneurship.",
      "Melaksanakan penelitian yang inovatif dan aplikatif di bidang Teknik Informatika.",
      "Melaksanakan pengabdian kepada masyarakat berbasis hasil penelitian yang berkontribusi pada penyelesaian permasalahan masyarakat.",
      "Meningkatkan kerja sama nasional dan internasional dalam pengembangan pendidikan, penelitian dan pengabdian kepada masyarakat.",
      "Menghasilkan lulusan yang berkompetensi, adaptif terhadap perkembangan teknologi, dan memiliki jiwa kewirausahaan berbasis teknologi informasi."
    ]
  ],
  [
    "TUJUAN",
    [
      "Menghasilkan lulusan yang inovatif, komunikatif dan adaptif;",
      "Menghasilkan lulusan yang profesional dan mampu bersaing di dunia kerja tingkat nasional sesuai dengan standard Kerangka Kualifikasi Nasional Indonesia (KKNI);",
      "Menghasilkan riset dan publikasi, serta meningkatkan kualitas hidup masyarakat dan daya saing bangsa dalam bidang ilmu Teknik Informatika;",
      "Menghasilkan lingkungan akademik yang kondusif dan mampu bersikap profesional;",
      "Terjalinnya berbagai kerjasama antara program studi Teknik Informatika dengan instansi pemerintah dan swasta pada tingkat nasional;",
      "Menghasilkan lulusan berjiwa technopreneurship, kreatif dan inovatif dalam membangun produk teknologi yang berorientasi pada masa depan;"
    ]
  ],
  [
    "STRUKTUR ORGANISASI PROGRAM STUDI",
    [
      "Ketua Program Studi"," Dr. Yennimar, S.Pd., M. Kom.",
      "Sekretaris Program Studi"," Syarifah Atika, S.Kom., M.Kom."
    ]
  ],
];
  let data2 = [
  ["No.",'4vw', "NIDN",'10vw', "Nama",'60vw'],
  ["1", "126127905", "Dr. Abdi Dharma, S.Kom., M.Kom., FITPM, FITAR, AITSP, MCF, MTCNA, MTCRE"],
  ["2", "124038402", "Mawaddah Harahap, S.Kom., M.Kom."],
  ["3", "117098503", "Allwin M. Simarmata, S.Kom., M.Kom."],
  ["4", "112029001", "Yanti Rambe, S.Pd., M.Pd."],
  ["5", "123098801", "Saut Dohot Siregar, S.Pd., M.Pd."],
  ["6", "102058305", "Amir Mahmud Husein, S.Kom., M.Kom."],
  ["7", "119018302", "Hendra Handoko Syahputra Pasaribu, S.Kom., M.Kom."],
  ["8", "117108204", "Dwi Astuti, S.H., M.Kn."],
  ["9", "112039201", "Reyhan Achmad Rizal, S.T., M.Kom."],
  ["10", "129118604", "Aninda Muliani, S.Kom., M.Kom."],
  ["11", "125038204", "Dr. Yennimar, S.Pd., M. Kom."],
  ["12", "129078504", "Fadhillah Azmi, S.Pd., M.Kom."],
  ["13", "103119201", "Tansa Trisna Astono Putri, S.Kom., M.T.I."],
  ["14", "129049101", "Insidini Fawwaz, S.Kom., M.Kom."],
  ["15", "126128002", "Christnatalis HS, S.Kom., M.Kom."],
  ["16", "127059401", "Bayu Angga Wijaya, S.Kom., M.Kom."],
  ["17", "120079004", "Amir Saleh, S.Pd., M.Kom."],
  ["18", "103059102", "Adya Zizwan Putra, S.Kom., M.Kom."],
  ["19", "127078703", "Juliansyah Putra Tanjung, S.T., M.Kom."],
  ["20", "127127801", "Achmad Ridwan, S.T., M.Si."],
  ["21", "122119201", "N.Priya Dharshinni, S.Kom., M.Kom."],
  ["22", "125049001", "Rudolfo Rizki Damanik, S.T., M.T."],
  ["23", "108078702", "Amalia, S.Si., M.Si."],
  ["24", "127049402", "Rico Wijaya Dewantoro, S.Kom., M.Kom., MCF, MTCNA, MTCRE"],
  ["25", "123039102", "Arif Hamied Nababan, S.Kom., M.T.I."],
  ["26", "105119301", "Sumita Wardani, S.Kom., M.Kom."],
  ["27", "111108401", "Nelly Astuti Hasibuan, S.Kom., M.Kom."],
  ["28", "113069201", "Dr. Adli Abdillah Nababan, S.Kom., M.Kom."],
  ["29", "19127104", "Andreas P. Perangin-Angin, S.Si., M.Si."]
];
  let u1=completetableoonecolumngenerator(data1)
  let u2=completetablegenerator(data2)
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PROGRAM STUDI TEKNIK INFORMATIKA</p>
      {u1}
      <p style={{height:'10vh',fontSize:'32px',fontWeight:'bold',margin:'3vh 0 0 1vw'}}>DOSEN TETAP</p>
      {u2}
      <br />
    </main>
  );
}

