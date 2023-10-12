export default function Headings(props: { top: string; bottom: string }) {
  return (
    <div className="flex flex-col text-center w-full mb-8">
      <h3 className="text-xs text-blue-500 tracking-widest font-medium text-center mb-1">
        {props.top}
      </h3>
      <h2 className="sm:text-3xl text-2xl font-medium title-font">
        {props.bottom}
      </h2>
    </div>
  );
}
