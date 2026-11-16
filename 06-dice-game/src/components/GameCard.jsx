export const GameCard = ({ titre, sousTitre, badge, children }) => {
  return (
    <section
      className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6
    shadow-sm transition-shadow hover:shadow-md"
    >
      <header
        className="mb-5 flex items-start justify-between border-b border-slate-
    100 pb-4"
      >
        <div>
          <h3
            className="text-base font-black text-slate-900 tracking-
    tight"
          >
            {titre}
          </h3>
          {sousTitre && (
            <p className="mt-0.5 text-xs text-slate-500">{sousTitre}</p>
          )}
        </div>
        {badge && <div>{badge}</div>}
      </header>
      <div className="flex-1 flex flex-col justify-center">{children}</div>
    </section>
  );
};
