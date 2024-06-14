interface ButtonLightGreenProps {
  name: string;
}

export default function ButtonLightGreen(props: ButtonLightGreenProps) {
  return (
    <>
      <button className=" bg-lightGreen-primary hover:bg-lightGreen-hover py-2 px-2 w-buttonSize rounded-md transition-all ">
        {props.name}
      </button>
    </>
  );
}
