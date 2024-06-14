interface ButtonLightGreenProps {
  name: string;
  type?: "submit" | "reset" | "button";
}

export default function ButtonLightGreen(props: ButtonLightGreenProps) {
  return (
    <>
      <button
        className=" bg-lightGreen-primary hover:bg-lightGreen-hover py-2 px-2 w-buttonSize rounded-md transition-all"
        type={props.type}
      >
        {props.name}
      </button>
    </>
  );
}
