import { Box, Flex, Image, Text } from "@chakra-ui/react"

interface MarketItemProps {
  image: string;
  headText: string;
  subtext: string;
}

export const MarketItem: React.FC<MarketItemProps> = ({image, headText, subtext}) => {
  return (
    <Box mr={'25px'}>
      <Flex alignItems="baseline">
        <Image src={image} w={'10px'} mr={'4px'} />
        <Box>
          <Text
            fontWeight={'500'}
            fontSize={{base:'14px', md: '16px'}}
            lineHeight={'1'}
          >
            {headText}
          </Text>
          <Text
            fontWeight={'400'}
            fontSize={'12px'}
            color={'#4e4f56'}
            lineHeight={'1'}
            pt={'4px'}
          >
            {subtext}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}