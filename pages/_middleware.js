import { NextRequest, NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  res.cookie("CONTEXT", process.env.CONTEXT_NAME);
  //TEst
  return res;
}
