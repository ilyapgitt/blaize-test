'use client'
import { Box, Button, Flex, Image, Text, Link, border, Spacer } from "@chakra-ui/react"
import { TopPerformerPhone } from "./TopPerformerPhone"

export const TopPerformer = () => {
  return (
    <Box mb={'40'}>
      <Text
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight="500"
        my="30px"
      >
        Top performer
      </Text>
      {/* Desktop */}
      <Box maxW={'1410px'} w={'100%'} display={{ base: 'none', md: 'block' }}>
        <Flex
          border={'1px solid #4D4E59'}
          borderRadius={'24px'}
          position={'relative'}
          backgroundImage={'./image/back.svg'}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          px={'24px'}
          py={'50px'}
        >
          <Image
            src={'./image/performer.png'}
            maxW={'183px'}
            maxH={'190px'}
          />
          <Box>
            <Flex gap={'10px'} align={'center'}>
              <Text fontSize={'24px'} fontWeight={'500'}>
                DHV / QUICK
              </Text>
              <Link>
                <Image src="./image/question.png" w={'21px'} h={'22px'} />
              </Link>
            </Flex>
            <Flex gap={'3px'} mt={'10px'}>
              <Text fontSize={'12px'} bg={'#13141D'} border={'1px solid rgba(255, 255, 255, 0.16)'} borderRadius={'100px'} px={'10px'} py={'5px'}>
                QuickSwap
              </Text>
              <Text fontSize={'12px'} display={'flex'} border={'1px solid rgba(255, 255, 255, 0.16)'} borderRadius={'100px'} px={'10px'} py={'5px'} pr={'3px'}>
                Volatility: <span style={{ color: '#00FF73', marginLeft: '5px' }}>Very Low</span>
              </Text>
              <Text fontSize={'12px'} display={'flex'} border={'1px solid rgba(255, 255, 255, 0.16)'} borderRadius={'100px'} px={'10px'} py={'5px'}>
                Risk: <span style={{ color: '#FC4E7E', marginLeft: '5px' }}>Very High</span>
              </Text>
            </Flex>

            <Text fontSize={'18px'} mt={'15px'}>Your rewards:</Text>
            <Flex>
              <Text fontSize={'24px'} fontWeight={'500'} lineHeight={'133%'} color={'#00ff73'}>$10,678.12</Text>
              <Flex
                gap={'7px'}
                ml={'5px'}
                border={'1px solid rgba(255, 255, 255, 0.16)'}
                borderRadius={'100px'}
                bg={'#13141d'}
                px={'8px'}
              >
                <Image w={'16px'} src="./image/reward1.svg" />
                <Image w={'16px'} src="./image/reward2.svg" />
                <Image w={'16px'} src="./image/reward3.svg" />
              </Flex>
            </Flex>
            <Text
              fontSize={'16px'}
              color={'rgba(253, 252, 252, 0.5)'}
              fontWeight={'400'}
            >
              Accumulated rewards
            </Text>
          </Box>
          <Spacer />

          <Flex alignItems={'center'} gap={'20px'}>
            <Box textAlign={'center'}>
              <Text fontSize={'24px'} fontWeight={'500'} color={'#4d4e59'}>APY</Text>
              <Flex justifyContent={'center'} alignItems={'center'} gap={'5px'}>
                <Text fontSize={'24px'}>199.11%</Text>
                <Link>
                  <Image src="./image/question.png" w={'21px'} h={'22px'} />
                </Link>
              </Flex>
              <Text fontSize={'16px'} fontWeight={'400'} color={'rgba(253, 252, 252, 0.5)'}>APR: 257.84%</Text>
            </Box>

            <Box textAlign={'center'}>
              <Text fontSize={'24px'} fontWeight={'500'} color={'#4d4e59'}>TVL</Text>
              <Text fontSize={'24px'}>$124,235.00</Text>
              <Text fontSize={'16px'} fontWeight={'400'} color={'rgba(253, 252, 252, 0.5)'}>Total Value Locked</Text>
            </Box>

            <Box textAlign={'center'}>
              <Text fontSize={'24px'} fontWeight={'500'} color={'#4d4e59'}>Your Deposits</Text>
              <Text fontSize={'24px'}>$124,235.00</Text>
              <Text fontSize={'16px'} fontWeight={'400'} color={'rgba(253, 252, 252, 0.5)'}>0.557890 DHV / QUICK </Text>
            </Box>
          </Flex>
          <Spacer />

          <Box display={'flex'} flexDirection={'column'} gap={'27px'} justifyContent={'center'}>
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
      <TopPerformerPhone />
    </Box>
  )
}