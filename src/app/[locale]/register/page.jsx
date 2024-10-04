import { redirect } from "next/navigation";
import { user } from "@/utils/auth";
import { useLocale } from "next-intl";
import Register from "@/components/register/Register";


const RegisterPage = () => {
  const locale = useLocale();
  const user1 = user;

  if (user1) {
    redirect(`/${locale}/`);
  }

  return (
    <div>
      <Register /> 
    </div>
  );
};

export default RegisterPage;
