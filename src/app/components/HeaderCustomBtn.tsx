import { Button } from "@chakra-ui/react"

export const HeaderCustomBtn = () => {
  return (
    <Button
    display={{ base: 'block', md: 'none' }}
    variant='outline'
    colorScheme="whiteAlpha"
    width='75px'
    height='27px'
    fontSize='12px'
    borderRadius='40px'
    position="relative"
    bg="transparent"
    _hover={{ bg: "transparent" }}
    _focus={{ boxShadow: "none" }}
    _active={{ bg: "transparent" }}
    _before={{
      content: '""',
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      borderRadius: "40px",
      background: "linear-gradient(90deg, #21DBB9, #00FF73)",
      zIndex: -1,
    }}
    _after={{
      content: '""',
      position: "absolute",
      top: "2px",
      left: "2px",
      right: "2px",
      bottom: "2px",
      borderRadius: "40px",
      background: "black",  // Цвет фона кнопки
      zIndex: -2,
    }}
    >
      Connect
    </Button>
  )
}