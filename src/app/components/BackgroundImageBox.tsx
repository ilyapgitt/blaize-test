import { Box } from "@chakra-ui/react";

export const BackgroundImageBox = ({ children }: { children: any }) => {
  return ( 
    <Box
      position="relative"
      minH="100vh"
      _after={{
        content: '""',
        backgroundImage: "url('./image/bg-pattern.png')", 
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%", 
        height: "100%", 
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  )
}