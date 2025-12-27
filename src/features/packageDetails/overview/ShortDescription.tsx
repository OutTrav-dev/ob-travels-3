import RichHtml from "@/src/components/RichHtml";


export default function ShortDescription({
  html,
  text,
}: {
  html?: string;
  text?: string;
}) {
  if (!html && !text) return null;
  return (
    <div className="mb-5 text-[14px] text-slate-600 leading-7">
      <RichHtml html={html} textFallback={text} />
    </div>
  );
}