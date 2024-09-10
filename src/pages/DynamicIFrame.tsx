import { useParams } from "react-router-dom";
import { contratos } from "../constants/data_resp.json";
import { Box } from "@mui/material";
import defaultBg from "../assets/Fondo_V3.png";

const DynamicIFrame = () => {
  const { contrato_id } = useParams();
  const contrato = contratos.find(
    (contrato) => contrato.redirect === contrato_id
  );
  return (
    <>
      {contrato?.url ? (
        <iframe
          src={contrato?.url}
          height="100%"
          width="100%"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      ) : (
        <Box
          component={"img"}
          src={defaultBg}
          sx={{ objectFit: "contain" }}
          height={"100%"}
        />
      )}
    </>
  );
};

export default DynamicIFrame;
