import { Box, Text } from "@chakra-ui/react"
import { AssetsTable } from "./AssetsTable"

export const Assets = () => {
  return (
    <Box
      px={'16px'}
      bg={'#13141D'}
      w={'100%'}
      maxW={{base: '100%', md:'450px'}}
      borderRadius={'16px'}
      border={'1px solid #393A41'}
      pt={'24px'}
      flex={'1'}
    >
      <Text
        color={'#fdfcfc'}
        fontSize={'20px'}
        fontWeight={'500'}
        display={{base: 'block', md: 'none'}}
      >
        Assets
      </Text>
      <Text
        color={'#fdfcfc'}
        fontSize={'30px'}
        fontWeight={'500'}
        display={{base: 'none', md: 'block'}}
      >
        Recent Activities
      </Text>
      <AssetsTable />
    </Box>
  )
}