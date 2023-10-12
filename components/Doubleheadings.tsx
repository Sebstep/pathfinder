export default function Headings(props: { top: string; bottom: string }) {
  return (
    <div className="flex flex-col text-center w-full mb-8">
      <h3 className="text-sm text-blue-500 tracking-widest font-medium text-center mb-1">
        {props.top}
      </h3>
      <h2 className="text-3xl font-medium">
        {props.bottom}
      </h2>
    </div>
  );
}
