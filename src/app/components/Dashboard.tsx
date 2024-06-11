'use client'
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { Market } from "./Market/Market"
import { Assets } from "./Assets"
import { TopPerformer } from "./TopPerformer"

export const Dashboard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={{base: "16px", md: '33px'}}
      minH={'100vh'}
    >
      <Box
        maxW="1410px"
        w="100%"
      >
        <Text
          fontSize={{ base: '24px', md: '48px' }}
          fontWeight="500"
          my="50px"
        >
          Dashboard
        </Text>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={'33px'}
          alignItems={'stretch'}
        >
          <Market />
          <Assets />
        </Flex>
        
        <TopPerformer />
      </Box>
    </Box>
  );
}

