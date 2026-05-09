import "@/app/globals.css";
import { metadatagenerator } from "../metadata";
export const metadata=metadatagenerator("proposalpenelitian")
export default function Home() {
  return (
    <main>
      <p className='header' style={{marginTop:'1vh'}}>PROPOSAL PENELITIAN</p>
      <button> Panduan Proposal Penelitian Revisi 29 April 2019</button>
    </main>
  );
}

