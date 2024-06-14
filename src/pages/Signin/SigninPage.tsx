import SigninForm from "../../components/SigninForm/SigninForm";

export default function SigninPage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-evenly px-4">
        <img
          src="./src/assets/logo/logo.svg"
          alt="Logo chantier master"
          className=" w-logoSizeSignin xs:w-maxLogoSize"
        />
        <h1 className="text-4xl">Connexion</h1>
        <SigninForm />
      </div>
    </>
  );
}
