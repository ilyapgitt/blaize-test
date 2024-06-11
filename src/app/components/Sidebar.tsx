import { Box } from "@chakra-ui/react"

export const Sidebar = () => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      width={'212px'}
      minH={'130vh'}
      height={'100%'}
      bg={'#13141d'}
      p='4'
      pt={'16'}
      borderRight={'1px solid #23242b'}
    >

    </Box>
  )
}