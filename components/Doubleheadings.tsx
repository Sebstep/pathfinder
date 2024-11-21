interface HeadingsProps {
  top: string;
  bottom: string;
  className?: string;
}

export default function Headings({ top, bottom, className = "" }: HeadingsProps) {
  return (
    <div className="flex flex-col text-center w-full mb-8">
      <h2 className="text-xl text-eu-blue tracking-widest font-semibold uppercase">
        {top}
      </h2>
      <h3 className="text-3xl font-semibold leading-snug">{bottom}</h3>
    </div>
  );
}
