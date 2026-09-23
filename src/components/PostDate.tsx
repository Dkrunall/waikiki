import { formatPostDate, getPostDate } from "@/lib/posts";

export default function PostDate({ slug }: { slug: string }) {
  const date = getPostDate(slug);
  return (
    <>
      <div className="h-px w-8 bg-brand-beige/30" />
      <time dateTime={date} className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">
        {formatPostDate(date)}
      </time>
    </>
  );
}
