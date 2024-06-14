import SignupForm from "../../components/SignupForm/SignupForm";

export default function SignupPage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-evenly gap-6 px-4">
        <img
          src="./src/assets/logo/logo.svg"
          alt="Logo chantier master"
          className=" w-logoSizeSignin xs:w-maxLogoSize"
        />
        <h1 className="text-4xl">Inscription</h1>
        <SignupForm />
      </div>
    </>
  );
}
