import ConfigManagerScreen from "components/settings/config-lead/ConfigManagerScreen.component";
import OnBoardingScreen from "components/settings/config-lead/OnBoardingScreen.component";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const ConfigLead = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {user.isFirstTimeConfig ? <OnBoardingScreen /> : <ConfigManagerScreen />}
    </div>
  );
};

export default ConfigLead;
