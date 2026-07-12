import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ count: 0 });

  const { data } = await supabase
    .from("post_likes")
    .select("count")
    .eq("slug", slug)
    .single();

  return NextResponse.json({ count: data?.count ?? 0 });
}

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  const { data: existing } = await supabase
    .from("post_likes")
    .select("count")
    .eq("slug", slug)
    .single();

  const newCount = (existing?.count ?? 0) + 1;

  const { data, error } = await supabase
    .from("post_likes")
    .upsert({ slug, count: newCount })
    .select("count")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ count: data?.count ?? newCount });
}
