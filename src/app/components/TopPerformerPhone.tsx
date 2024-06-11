import { Box, Button, Flex, Image, Text, Link, border, Spacer } from "@chakra-ui/react"

export const TopPerformerPhone = () => {
  return (
    <Box maxW={'1410px'} w={'100%'} display={{ base: 'block', md: 'none' }}>
      <Flex
        border={'1px solid #4D4E59'}
        direction={'column'}
        borderRadius={'24px'}
        position={'relative'}
        backgroundImage={'./image/back.svg'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        px={'16px'}
        py={'50px'}
      >
        <Flex>
          <Image
            src={'./image/performer.png'}
            w={'79px'}
            h={'79px'}
            mr={'15px'}
          />
          <Flex gap={'10px'} align={'center'}>
            <Text fontSize={'20px'} fontWeight={'500'}>
              DHV / QUICK
            </Text>
            <Link>
              <Image src="./image/question.png" w={'21px'} h={'22px'} />
            </Link>
          </Flex>

        </Flex>
        <Box>
          <Flex gap={'3px'} mt={'10px'}>
            <Text fontSize={'12px'} bg={'#13141D'} border={'1px solid rgba(255, 255, 255, 0.16)'} borderRadius={'100px'} px={'10px'} py={'5px'}>
              QuickSwap
            </Text>
            <Spacer />
            <Text fontSize={'12px'} display={'flex'} border={'1px solid rgba(255, 255, 255, 0.16)'} borderRadius={'100px'} px={'10px'} py={'5px'} pr={'3px'}>
              Volatility: <span style={{ color: '#00FF73', marginLeft: '5px' }}>Low</span>
            </Text>
            <Spacer />
            <Text fontSize={'12px'} display={'flex'} border={'1px solid rgba(255, 255, 255, 0.16)'} borderRadius={'100px'} px={'10px'} py={'5px'}>
              Risk: <span style={{ color: '#FC4E7E', marginLeft: '5px' }}>High</span>
            </Text>
          </Flex>


          <Flex alignItems={'center'} justifyContent={'space-between'} mt={'15px'}>
            <Box textAlign="center" mr={4}>
              <Text fontSize={'14px'}>Your rewards:</Text>
              <Text fontSize={'16px'} fontWeight={'500'} lineHeight={'133%'} color={'#00ff73'}>$10,678.12</Text>
            </Box>
            <Button
              variant='outline'
              colorScheme="whiteAlpha"
              height={'35px'}
              width={'120px'}
              borderRadius={'40px'}
              border={'1px solid #41B7FF'}
              color={'white'}
              fontSize={'13px'}
              fontWeight={'400'}
            >
              Claim Rewards
            </Button>
          </Flex>

        </Box>
        <Spacer />


        <Flex flexDirection={'column'} mt={'20px'} gap={'15px'}>

          <Box display={'flex'} alignItems={'center'} textAlign={'right'}>
            <Flex gap={'2'}>
              <Text fontSize={'14px'} fontWeight={'500'} color={'#4d4e59'}>APY</Text>
              <Link>
                <Image src="./image/question.png" w={'21px'} h={'22px'} />
              </Link>
            </Flex>
            <Spacer />
            <Box>
              <Text fontSize={'14px'}>199.11%</Text>
              <Text fontSize={'12px'} fontWeight={'400'} color={'rgba(253, 252, 252, 0.5)'}>APR: 257.84%</Text>
            </Box>
          </Box>

          <Box display={'flex'} alignItems={'center'}>
            <Text fontSize={'14px'} fontWeight={'500'} color={'#4d4e59'}>TVL</Text>
            <Spacer />
            <Box textAlign={'right'}>
              <Text fontSize={'14px'}>$124,235.00</Text>
              <Text fontSize={'12px'} fontWeight={'400'} color={'rgba(253, 252, 252, 0.5)'}>Total Value Locked</Text>
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'}>

            <Text fontSize={'14px'} fontWeight={'500'} color={'#4d4e59'}>Your Deposits</Text>

            <Spacer />
            <Box textAlign={'right'}>
              <Text fontSize={'14px'}>$124,235.00</Text>
              <Text fontSize={'12px'} fontWeight={'400'} color={'rgba(253, 252, 252, 0.5)'}>0.557890 DHV / QUICK </Text>
            </Box>
          </Box>
        </Flex>

        <Box display={'flex'} gap={'27px'} justifyContent={'center'} mt={'35px'}>
          <Button
            height="50px"
            width="179px"
            color="#fdfcfc"
            borderRadius="40px"
            bgGradient={'linear(to-tr, #FF6F4F, #FF01DD, #5C5CFF ,#41b7ff)'}
          >
            Stake
          </Button>
          <Button
            height="50px"
            width="179px"
            bg={'transparent'}
            border={'1px solid #FF6F4F'}
            color="#fdfcfc"
            borderRadius="40px"
          >
            Unstake
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}