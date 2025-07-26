export default function Contributor(props: any) {
  return (
    <div className="border-1 m-4 p-2">
        <h1 className="text-(--primary)">
            {props.name}
        </h1>
        <h4 className='py-2 text-sm underline'>
            {props.role}
        </h4>
        <p>
            {props.about}
        </p>
    </div>
  );
}