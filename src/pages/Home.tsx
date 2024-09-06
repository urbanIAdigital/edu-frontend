// src/pages/Home.tsx
import { Box, Container } from '@mui/material';
import { FC } from 'react';
import img from "../assets/EcosistemaDigital_20240826.png"

const Home: FC = () => {
  return (
    <Container maxWidth="md">
      <Box height={500} width={"100%"} mt={3}>
        <img  src={img} style={{objectFit: "contain"}} alt="" width={"100%"} height={650}/>
      </Box>
    </Container>
  );
};

export default Home;
