// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { autologin } from './app/api/login/route'
export const runtime = 'nodejs'
export default async function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname
  console.log("hi")
  if (path.match(/\.(css|js|jpg|jpeg|png|gif|svg|ico|webp)$/)) {
    return NextResponse.next()
  }
  if (path.startsWith('/_next')) {
    return NextResponse.next()
  }
  if (path.startsWith('/public')) {
    return NextResponse.next()
  }
  const publicPaths = ['/login', '/register', '/api/login', '/api/register']
  if (publicPaths.some(p => path.startsWith(p))) {
    return NextResponse.next()
  }
  const cookie=request.cookies
  const response=await autologin(cookie)
  if (response.success){
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('nim', response.nim)
    requestHeaders.set('name', response.name)
    requestHeaders.set('semester', response.semester)
    const res= NextResponse.next({
      request: {headers: requestHeaders}
    })
    if (response.setjwt){
      res.cookies.set('jwt',response.jwt,response.jwtprop)
    }
    return res
  }
  return NextResponse.redirect(new URL('/login', request.url))
}