import { NextRequest, NextResponse } from "next/server";

const ID_PATTERN = /^[\w-]+$/;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const width = request.nextUrl.searchParams.get("w") ?? "640";

  if (!id || !ID_PATTERN.test(id)) {
    return NextResponse.json({ error: "Invalid photo id" }, { status: 400 });
  }

  const upstream = await fetch(
    `https://lh3.googleusercontent.com/d/${id}=w${width}`,
    { next: { revalidate: 86400 } }
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: "Photo not found" }, { status: 404 });
  }

  const bytes = await upstream.arrayBuffer();

  return new NextResponse(bytes, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "image/jpeg",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
