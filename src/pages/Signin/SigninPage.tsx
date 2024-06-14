import ButtonLightGreen from "../../components/Buttons/ButtonLightGreen";
import InputBasic from "../../components/FormComponents/Input";

export default function SigninPage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-evenly gap-6 px-4">
        <img
          src="./src/assets/logo/logo.svg"
          alt="Logo chantier master"
          className=" w-logoSizeSignin xs:w-maxLogoSize"
        />
        <h1 className="text-4xl">Connexion</h1>
        <div className="flex flex-col gap-6">
          <InputBasic
            htmlFor="email"
            labelName="Email"
            placeholder="exemple@mail.fr"
            type="email"
          />
          <InputBasic
            htmlFor="password"
            labelName="Mot de passe"
            type="password"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <ButtonLightGreen name="Se connecter" />
          <div className="flex flex-col text-center gap-2">
            <small>
              Mot de passe oublie ?{" "}
              <a href="/">Réinitialiser votre mot de passe</a>
            </small>
            <small>
              Pas encore de compte ? <a href="/signup">Inscrivez-vous !</a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
