import { useAuth } from "app/public/hooks/useAuth";
import { StarbucksButton } from "../StarbucksButton";

export const LogoutButton = () => {

  const {doLogOut} = useAuth();
  return (
    <div onClick={doLogOut}>
      <StarbucksButton type="outline" text="Log Out" to="/login" />
    </div>
  );
};
