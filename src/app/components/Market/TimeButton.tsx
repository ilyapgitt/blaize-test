import { Box, Button, ButtonGroup, Spacer } from "@chakra-ui/react"
import { useState } from "react"

interface ButtonStyle {
  widthBtn: string;
  heightBtn: string;
}

export const TimeButtonGroup: React.FC<ButtonStyle> = ({widthBtn, heightBtn}) => {
  const [ selected, setSelected ] = useState('1W')

  const handleSelect = (range: string) => {
    setSelected(range)
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      p='1'
      borderRadius={'40px'}
      width={widthBtn}
      border={'1px solid #333'}
      height={heightBtn}
    >
        {['1D', '1W', '1M', '1Y'].map((range) => (
          <Button
            key={range}
            onClick={() => handleSelect(range)}
            bg={selected === range ? '#00FF73' : 'transparent'}
            color={selected === range ? '#101119' : '#4c4c53'}
            borderRadius={selected === range ? '40px' : '40px'}
            width={'25%'}
            height={'26px'}
            fontWeight={'500'}
            fontSize={'14px'}
          >
            {range}
          </Button>
          
        ))}
    </Box>
  )
}