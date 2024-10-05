import { user} from "@/utils/auth";
import { redirect } from "next/navigation";
import { useLocale } from "next-intl";
import Login from '@/components/login/Login';

const LoginPage = () => {

  const locale = useLocale()
  const user1 = user
  if(user1){
    redirect(`/${locale}/`)
  }
  
  return (
    <Login/>
  );
};

export default LoginPage;
