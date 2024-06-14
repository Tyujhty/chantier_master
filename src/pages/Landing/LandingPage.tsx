import ButtonDarkBlue from "../../components/Buttons/ButtonDarkBlue";
import ButtonLightGreen from "../../components/Buttons/ButtonLightGreen";

export default function LandingPage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-evenly gap-6 px-4">
        <div className="flex flex-col items-center gap-20">
          <img
            src="./src/assets/logo/logo_landing.svg"
            alt="Logo chantier master"
            className="xs:w-maxLogoSize"
          />

          <p className="text-center">
            A sint nulla a iure quia eos. Eum nulla totam voluptatem. Ducimus ea
            quia et. Aspernatur quis magni et facere laudantium doloremque
            excepturi culpa.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <ButtonLightGreen name="Se connecter" />
          <ButtonDarkBlue name="S'enregistrer" />
        </div>
      </div>
    </>
  );
}
