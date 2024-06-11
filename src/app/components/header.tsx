import { Box, Flex, Button, Image, Text, Spacer } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box>
      {/* Mobile header */}
      <Box as='header' display={{ base: 'block', md: 'none' }}>
        <Flex
          as='nav'
          justifyContent="space-between"
          alignItems='center'
          px='16px' py='13px'
        >
          {/* Mobile menu */}
          <Button bg='transparent' border='none' px='0'>
            <Image src="/image/burger-btn.png" height='24px' width='24px' />
          </Button>

          {/* Mobile logo */}
          <Box w='52px'>
            <Image src="/image/mobile-logo.svg" alt="logo" height='50px' />
          </Box>

          {/* Connect button for mobile */}
          <Button
            variant='outline'
            colorScheme="whiteAlpha"
            width='75px'
            height='27px'
            fontSize='12px'
            borderRadius='40px'
            borderColor='#00FF73'
            px='0'
            fontWeight='400'
          >
            Connect
          </Button>
        </Flex>
      </Box>

      {/* Desktop header */}
      <Box
        as='header'
        display={{ base: 'none', md: 'flex' }}
        h='134px'
        bg='linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)'
        border={'1px solid #23242b'}
        px={{base: '16px', md: '70px'}} 
        // py='13px'
        alignItems='center'
        justifyContent={'center'}
      >
        <Flex maxW={'1920px'} width={'100%'}>
          {/* Desktop logo */}
          <Box flex='1'>
            <Image src="/image/desktop-logo.svg" alt="logo" height='58px' width={'182px'}/>
          </Box>

          {/* Desktop buttons */}
          <Flex gap={'20px'}>
            <Button
              variant='outline'
              colorScheme="whiteAlpha"
              height={'54px'}
              width={'184px'}
              borderRadius={'40px'}
              border={'1px solid #41B7FF'}
              mr={'0'}
              color={'white'}
              fontSize={'16px'}
            >
              <Flex
                alignItems={'center'}
                justifyContent="space-between"
                width="100%"
              >
                <Text
                  fontWeight={'400'}
                >
                  Polygon
                </Text>
                <Image src="./image/arrow-down.svg" h={'18px'} />
              </Flex>

            </Button>
            <Button
              height="54px"
              width="184px"
              color="white"
              borderRadius="40px"
              bgGradient={'linear(to-tr, #FF6F4F, #FF01DD, #5C5CFF, #14E1E2 ,#41b7ff)'}
            >
              Connect wallet
            </Button>
          </Flex>



        </Flex>
      </Box>
    </Box>
  );
};
