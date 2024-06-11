import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"

export const Polygon = () => {
  return (
    <Box
      as="polygon"
      display={{ base: 'block', md: 'none'}}
    >
      <Flex
        width='100%'
        height='60px'
        align='center'
        justify='space-between'
        px={4}
        color='white'
        bg='#13141D'
        borderY='0.2px solid rgba(255, 255, 255, 0.08)'
      >
        <Text fontSize={'16px'}>TVL: $234.567,26</Text>

        <Button
          variant='outline'
          colorScheme="whiteAlpha"
          height={'40px'}
          width={'127px'}
          borderRadius={'40px'}
          border={'1px solid #41B7FF'}
          mr={'0'}
          color={'white'}
          fontSize={'14px'}
        >
          <Flex alignItems={'center'} gap={'2'} justify={'center'}>
            <Text 
              fontWeight={'400'}
              fontSize={'14px'}
            >
              Polygon
            </Text>
            <Spacer />
            <Image src="./image/arrow-down.svg" />
          </Flex>
          
        </Button>
      </Flex>
    </Box>
  )
}