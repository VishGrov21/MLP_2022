import SupplyMetricsConfig from "components/metricsConfiguration/SupplyMetricsConfig";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const MetricsConfiguration = () => {
  const metricsArr = useSelector((state: RootState) => state.metricsConfig.configuredData);

  return <SupplyMetricsConfig configuredData={metricsArr} />;
};

export default MetricsConfiguration;
