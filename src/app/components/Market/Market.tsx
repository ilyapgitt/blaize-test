import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { MarketItem } from "./MarketItem"
import { MarketSchedule } from "./MarketSchedule"
import { TimeButtonGroup } from "./TimeButton"

export const Market = () => {
  return (
    <Box
      px={'16px'}
      bg={'#13141D'}
      w={'100%'}
      maxWidth={'929px'}
      borderRadius={'16px'}
      border={'1px solid #393A41'}
      py={'24px'}
      flex={'1'}
    >
      <Text
        color={'#fdfcfc'}
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight={'500'}
      >
        Market overview
      </Text>
      <Text
        fontSize={{ base: '14px', md: '16px' }}
        color={'rgba(253, 252, 252, 0.5)'}

      >
        Prices value updates
      </Text>

      <Flex justifyContent={'space-between'} align={'center'}>
        <Flex
          my={'16px'}
          align={'center'}
        >
          <MarketItem
            image={'./image/ellipses/ellipse-eth.svg'}
            headText={'ETH-CORE'}
            subtext={'Ethereum'}
          />
          <Spacer />
          <MarketItem
            image={'./image/ellipses/ellipse-poly.svg'}
            headText={'Poly'}
            subtext={'Polygon'}
          />
          <Spacer />
          <MarketItem
            image={'./image/ellipses/ellipse-game.svg'}
            headText={'Poly Gaming'}
            subtext={'Polygon'}
          />
          <Spacer />
          <Button
            display={{ base: 'none', md: 'flex' }}
            gap="5px"
            width="99px"
            height="43px"
            borderRadius="40px"
            background="#13141d"
            color="white"
            border="1px solid rgba(255, 255, 255, 0.16)"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="./image/add-icon.svg" />
            <Text>Add</Text>
          </Button>
        </Flex>
        <Box display={{ base: 'none', md: 'block' }}>
          <TimeButtonGroup widthBtn="204px" heightBtn="43px" />
        </Box>
      </Flex>
      <Box>
        <MarketSchedule />
        <Box display={{ base: 'block', md: 'none' }}>
          <TimeButtonGroup widthBtn="100%" heightBtn="32px" />
        </Box>
      </Box>
    </Box>
  )
}