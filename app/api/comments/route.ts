import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json([]);

  const { data, error } = await supabase
    .from("comments")
    .select("id, name, message, created_at")
    .eq("post_slug", slug)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

export async function POST(req: NextRequest) {
  const { slug, name, message } = await req.json();

  if (!slug || !name?.trim() || !message?.trim())
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  if (name.length > 50 || message.length > 500)
    return NextResponse.json({ error: "Too long" }, { status: 400 });

  const { data, error } = await supabase
    .from("comments")
    .insert({ post_slug: slug, name: name.trim(), message: message.trim() })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
