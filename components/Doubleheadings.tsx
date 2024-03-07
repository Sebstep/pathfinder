export default function Headings(props: { top: string; bottom: string }) {
  return (
    <div className="flex flex-col text-center w-full mb-8">
      <h2 className="text-l text-eu-blue tracking-widest font-medium text-center mb-1">
        {props.top}
      </h2>
      <h3 className="text-3xl font-medium">{props.bottom}</h3>
    </div>
  );
}
