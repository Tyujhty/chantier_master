interface ButtonDarkBlueProps {
  name: string;
  type?: "submit" | "reset" | "button";
}

export default function ButtonDarkBlue(props: ButtonDarkBlueProps) {
  return (
    <>
      <button
        className=" bg-darkBlue-primary hover:bg-darkBlue-hover text-primary-white py-2 px-2 w-buttonSize rounded-md transition-all "
        type={props.type}
      >
        {props.name}
      </button>
    </>
  );
}
