import { postr } from "../railsapi";
import { NextResponse } from "next/server"

export async function POST(request: Request) {  
  const req=await request.json()
  const form=req
  const res=await postr('users',form)
  if (res.ok){
    return NextResponse.json({success:true})
  }
  return NextResponse.json({ status:'fail'}, { status: 401 })
}