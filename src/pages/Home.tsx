// src/pages/Home.tsx
import { Box, Container } from "@mui/material";
import { FC } from "react";
import img from "../assets/EcosistemaDigital_20240826.png";
// import {
//   ArcgisLegend,
//   ArcgisMap,
//   ArcgisSearch,
// } from "@arcgis/map-components-react";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets",
});

const Home: FC = () => {
  // return (
  //   <Box width={"100%"} height={1000}>
  //     <ArcgisMap
  //       style={{ width: "100%", height: "500px" }}
  //       itemId="a98b2efb943d4f0c92a1b01703002c71"
  //       onArcgisViewReadyChange={(event: any) => {
  //         console.log("MapView ready", event);
  //       }}
  //     >
  //       <ArcgisSearch position="top-right"></ArcgisSearch>
  //       <ArcgisLegend position="bottom-left"></ArcgisLegend>
  //     </ArcgisMap>
  //   </Box>
  // );
  return (
    <Container maxWidth="md">
      <Box height={500} width={"100%"} mt={3}>
        <img
          src={img}
          style={{ objectFit: "contain" }}
          alt=""
          width={"100%"}
          height={650}
        />
      </Box>
    </Container>
  );
};

export default Home;
