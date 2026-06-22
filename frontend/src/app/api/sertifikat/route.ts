import { getr } from "../railsapi";
import { NextResponse } from "next/server"
const route='sertifikats'
export async function GET(request:Request){
  const res=await getr(route)
  if (res.ok){
    const data=await res.json()
    console.log(data)
    return NextResponse.json(data)
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}