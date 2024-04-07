import { NextRequest, NextResponse } from "next/server";
import { verifyjwt } from "./src/app/lib/verifytoken";

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    const isLoggedIn = token && (await verifyjwt(token));

    if (isLoggedIn) {
      return NextResponse.next();
    } else {
      throw new Error("invalid user.");
    }
  } catch (error) {
    return NextResponse.redirect("http://localhost:3000/error");
  }
}

export const config = {
  matcher: ["/home", "/products"]
};
