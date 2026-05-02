import "@/app/globals.css";
import { tablegenerator } from "../lib";

let data = [
  [],
  ["≤ 31 Agustus 2026 ≤ 31 August 2026 ≤ 2026年8月31日", "10 Jam / Hours / 小时", "5 Jam / Hours / 小时", "5 Jam / Hours / 小时", "5 Jam / Hours / 小时"],
  ["≤ 28 Februari 2027 ≤ 28 February 2027 ≤ 2027年2月28日", "50 Jam / Hours / 小时", "20 Jam / Hours / 小时", "20 Jam / Hours / 小时", "40 Jam / Hours / 小时"],
  ["> 28 Februari 2027 > 28 February 2027 > 2027年2月28日", "100 Jam / Hours / 小时", "50 Jam / Hours / 小时", "50 Jam / Hours / 小时", "75 Jam / Hours / 小时"]
];
export default function e(){
    let hs={fontWeight:'bold',textAlign:'center',background:'#eeeeee',border:'1px solid black'}
    let bb={border:'1px solid black'}
    let h=[]
    let b=[]
    let u=tablegenerator(data,h,b)

    
    return(
        <div>
        <table>
            <tbody style={{textAlign:'center'}}>
                <tr style={hs}>
                    <th rowSpan={2} style={{width:'10vw',border:'1px solid black'}}>
                    Tanggal Wisuda
                    Graduation Date
                    毕业日期
                    </th>
                    <th colSpan={4} style={{border:'1px solid black'}}>
                        Minimal Jam Kunjungan / Minimum Visit Hours / 最少访问时数
                    </th>
                </tr>
                <tr style={hs}>
                    <th style={{width:'22vw',border:'1px solid black'}}>Diploma & Sarjana / Diploma & Bachelor / 学士</th>
                    <th style={{width:'14vw',border:'1px solid black'}}>Profesi / Professional / 专业</th>
                    <th style={{width:'14vw',border:'1px solid black'}}>Magister / Master / 硕士</th>
                    <th style={{width:'14vw',border:'1px solid black'}}>Doktor / Doctoral / 博士</th>
                </tr>
                {b}
            </tbody>
        </table>
        <br/><br/>
        <div style={{fontWeight:'bold',padding:'1vh 1vw 1vh 1vw',background:'#eeeeee'}}>
            <p style={{lineHeight:'30px'}}>Total kunjungan keseluruhan Anda : 3 jam 54 menit</p>
            <p style={{lineHeight:'30px'}}>Total konversi kunjungan dari peminjaman : 0 jam 0 menit.</p>
            <p style={{color:'red',lineHeight:'20px'}}>Peminjaman buku dapat dikonversi menjadi jam kunjungan. Perhitungan: 1 hari = 0 jam, 2 hari = 1 jam, 3 hari = 2 jam, dan seterusnya. Hasil konversi akan otomatis ditambahkan ke total jam kunjungan Anda.</p>
        </div>
        </div>
    )
}