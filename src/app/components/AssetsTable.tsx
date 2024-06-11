import { data } from '../data';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

export const AssetsTable = () => {
  return (
    <Box 
      overflowX={'auto'} 
      mt={'24px'}
      css={{
        '::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none',
      }}
    >
      <Box minWidth={'350px'}>
        {data.map((item) => (
          <Flex key={item.id} align="center" justify="space-between" mb={'25px'}>
            <Flex align="center" minW={'135px'}>
              <Image src={item.icon} w="24px" h="24px" mr="4" />
              <Box>
                <Text fontWeight="400" fontSize={{base: '14px', md: '16px'}}>{item.name}</Text>
                <Text fontSize={{base: '12px', md: '14px'}} color="gray.500">{item.clusterType}</Text>
              </Box>
            </Flex>
            <Text 
              fontSize={{base: '14px', md: '16px'}} 
              minW={'79px'} 
              textAlign={'left'}
              alignSelf={'flex-start'}
            >
              {item.amount}
            </Text>
            <Box textAlign="left" minW={'107px'}>
              <Text color={item.actionColor} fontSize={{base: '14px', md: '16px'}}>{item.action}</Text>
              <Text fontSize={{base: '12px', md: '14px'}} color="gray.500">{item.time}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}
