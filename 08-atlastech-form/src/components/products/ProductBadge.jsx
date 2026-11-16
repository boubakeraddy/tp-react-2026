export default function ProductBadge({ etat, tag }) {
  return (
    <>
      <span className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full shadow-sm">
        {tag}
      </span>
      <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        {etat}
      </span>
    </>
  );
}
