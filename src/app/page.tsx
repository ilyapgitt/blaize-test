'use client'

import { Box, Flex, Link } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Polygon } from "./components/Polygon";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { BackgroundImageBox } from "./components/BackgroundImageBox";

export default function Home() {
  return (
    <Box>
      <Header />
      <Flex>
        <Sidebar />
        <Box width={'100%'} >
          <Polygon />
          <BackgroundImageBox>
            <Dashboard />
          </BackgroundImageBox>
        </Box>
      </Flex>
    </Box>
  );
}
