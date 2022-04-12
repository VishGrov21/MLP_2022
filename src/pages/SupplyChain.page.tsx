import { Box } from "@mui/material";
import SConboarding from "components/settings/data-input/SConboarding.component";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const SupplyChain = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {user.isFirstTimeConfig ? <SConboarding /> : <Box />}
    </div>
  );
};

export default SupplyChain;
