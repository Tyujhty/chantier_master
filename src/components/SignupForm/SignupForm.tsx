import { useFormik } from "formik";
import * as yup from "yup";
import InputBasic from "../../components/FormComponents/Input";
import ButtonDarkBlue from "../../components/Buttons/ButtonDarkBlue";

export default function SignupForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    firstname: yup.string().required("Champ requis"),
    lastname: yup.string().required("Champ requis"),
    email: yup.string().required("Champ requis"),
    password: yup.string().required("Champ requis"),
    confirmPassword: yup
      .string()
      .label("Confirmer le mot de passe")
      .required("Champ requis")
      .oneOf(
        [yup.ref("password"), " "],
        "Les mots de passe ne sont pas identiques"
      ),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
      <InputBasic
        htmlFor="firstname"
        labelName="Prénom"
        type="text"
        placeholder="Jean"
        name="firstname"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      <InputBasic
        htmlFor="lastname"
        labelName="Nom"
        type="text"
        placeholder="Doe"
        name="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
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
      <InputBasic
        htmlFor="confirmPassword"
        labelName="Confirmer le mot de passe"
        type="password"
        name="confirmPassword"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      <div className="flex flex-col items-center gap-4">
        <ButtonDarkBlue name="S'inscrire" type="submit" />
        <div className="flex flex-col text-center gap-2">
          <small>
            Déjà un compte ? <a href="/signin">Connectez-vous !</a>
          </small>
        </div>
      </div>
    </form>
  );
}
