import "@/app/globals.css";
import { metadatagenerator } from "../metadata";
import { data } from "./[id]/data";
import Link from "next/link";
export const metadata=metadatagenerator('pengumuman')

export default function Home() {

    let proc=[]
    let head=['PENGUMUMAN UNIVERSITAS','PENGUMUMAN PROGRAM STUDI','BERITA SAINS DAN TEKNOLOGI']
    let a=0
    for (let i=0;i<head.length;i++){
        proc.push(<p key={a}className='bold' style={{fontSize:'36px',margin:'2vh 0 3vh 0'}}>{head[i]}</p>)
        a=a+1
        if (i<2){
            for(let j=0;j<data[i].length;j++){
                proc.push(<p key={a}style={{borderTop:'1px solid black',width:'74vw',padding:'1vh 0 1vh 0'}}>
                    <span className='bold' style={{margin:'0 2vw 0 2vw'}}>{j+1}</span>
                    {data[i][j].title}
                    </p>)
                    a=a+1
                proc.push(<p key={a}style={{borderTop:'1px solid black',width:'69.5vw',marginLeft:'4.5vw',padding:'1vh 0 1vh 0'}}>
                    <span className='bold' style={{marginLeft:'0.5vw',padding:'3px',background:'#aa6644',color:'#ffffff',borderRadius:'3px'}}>{data[i][j].date}</span>
                    <Link href={`/pengumuman/${data[i][j].id}`}>
                        <button style={{marginLeft:'1vw',background:'#999999',border:'1px solid black'}}>Press me</button>
                    </Link>
                    </p>)
                    a=a+1
            }
        }else{
            for(let j=0;j<data[i].length;j++){
                proc.push(<p key={a}style={{borderTop:'1px solid black',width:'74vw',padding:'1vh 0 0.5vh 0',color:'#4477bb'}}>
                    <span className='bold' style={{margin:'0 2vw 0 0.5vw'}}>{data[i][j][0]}</span>
                    </p>)
                    a=a+1
                if (data[i][j][1]!=''){
                    proc.push(<p key={a}style={{width:'auto',padding:'0.5vh 0 1vh 0',marginLeft:'0.5vw',borderRadius:'3px'}}>{data[i][j][1]}
                        </p>)
                        a=a+1
                }
            }
        }
    }
    return (
        <main >
        <div style={{width:'74vw',background:'#99ccff',padding:'2vh 0 2vh 1vw',borderRadius:'4px'}}>
            <p style={{color:'#4466ff',fontWeight:'bold',fontSize:'34px'}}>"Invest Before You Receive"</p>
            <p style={{fontSize:'12px',color:'#4466ff',marginTop:'2vh'}}>Abdi Dharma</p>
        </div>
        {proc}
        </main>
    );
}
