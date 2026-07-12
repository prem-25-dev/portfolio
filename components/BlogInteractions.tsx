"use client";

import { useState, useEffect } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function BlogInteractions({ slug }: { slug: string }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const likeKey = `liked-${slug}`;

  useEffect(() => {
    setLiked(localStorage.getItem(likeKey) === "1");

    Promise.all([
      fetch(`/api/likes?slug=${slug}`).then((r) => r.json()),
      fetch(`/api/comments?slug=${slug}`).then((r) => r.json()),
    ]).then(([likesData, commentsData]) => {
      setLikes(likesData.count ?? 0);
      setComments(Array.isArray(commentsData) ? commentsData : []);
      setLoading(false);
    });
  }, [slug, likeKey]);

  async function handleLike() {
    if (liked) return;
    setLiked(true);
    setLikes((l) => l + 1);
    localStorage.setItem(likeKey, "1");
    await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
  }

  async function handleComment(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name, message }),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setName("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
    setSubmitting(false);
  }

  return (
    <div className="mt-16 border-t border-line pt-10">
      {/* Like button */}
      <button
        onClick={handleLike}
        disabled={liked || loading}
        className={`mb-12 flex items-center gap-2 rounded-full border px-5 py-2 font-mono text-tag transition-all ${
          liked
            ? "cursor-default border-accent bg-accent/10 text-accent"
            : "border-line text-muted hover:border-accent hover:text-accent"
        }`}
      >
        <Heart size={14} fill={liked ? "currentColor" : "none"} aria-hidden="true" />
        {loading ? "—" : likes} {likes === 1 ? "like" : "likes"}
      </button>

      {/* Comments section */}
      <h3 className="mb-6 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
        <MessageCircle size={13} aria-hidden="true" />
        {loading ? "—" : comments.length} {comments.length === 1 ? "comment" : "comments"}
      </h3>

      {/* Form */}
      <form onSubmit={handleComment} className="mb-10 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
          required
          className="rounded border border-line bg-surface px-4 py-2.5 font-mono text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <textarea
          placeholder="Leave a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          required
          rows={3}
          className="resize-none rounded border border-line bg-surface px-4 py-2.5 font-mono text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.7rem] text-muted">{message.length}/500</span>
          <div className="flex items-center gap-3">
            {submitted && (
              <span className="font-mono text-[0.7rem] text-accent">Posted!</span>
            )}
            <button
              type="submit"
              disabled={submitting || !name.trim() || !message.trim()}
              className="flex items-center gap-2 bg-accent px-5 py-2 font-mono text-tag text-bg transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Send size={13} aria-hidden="true" />
              {submitting ? "Posting…" : "Post"}
            </button>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <div className="flex flex-col gap-6">
        {!loading && comments.length === 0 && (
          <p className="font-mono text-tag text-muted">No comments yet. Be the first.</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="flex flex-col gap-1 border-b border-line pb-6 last:border-0 last:pb-0">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-medium text-primary">{c.name}</span>
              <span className="font-mono text-[0.7rem] text-muted">
                {new Date(c.created_at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary/80">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
