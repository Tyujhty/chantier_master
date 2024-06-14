import { useFormik } from "formik";
import * as yup from "yup";
import ButtonLightGreen from "../../components/Buttons/ButtonLightGreen";
import InputBasic from "../../components/FormComponents/Input";
export default function SigninForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Champ requis"),
    password: yup.string().required("Champ requis"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-14">
      <div className="flex flex-col gap-6">
        <InputBasic
          htmlFor="email"
          labelName="Email"
          placeholder="exemple@mail.fr"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <InputBasic
          htmlFor="password"
          labelName="Mot de passe"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <ButtonLightGreen name="Se connecter" type="submit" />
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
    </form>
  );
}
