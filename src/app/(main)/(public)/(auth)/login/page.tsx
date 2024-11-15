import { LoginTemplate } from "@/ui/template/auth/LoginTemplate";
import LoginGuard from "./guard/LoginGuard";


export default function LoginPage() {
  return (
    <LoginGuard>
      <LoginTemplate />
    </LoginGuard>
  )
}