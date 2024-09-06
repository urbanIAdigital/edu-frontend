import { useParams } from "react-router-dom";
import { contratos } from "../constants/data_resp.json";
const DynamicIFrame = () => {
  const { contrato_id } = useParams();
  const contrato = contratos.find(
    (contrato) => contrato.redirect === contrato_id
  );
  return (
    <iframe
      src={contrato?.url}
      height="100%"
      width="100%"
    ></iframe>
  );
};

export default DynamicIFrame;
