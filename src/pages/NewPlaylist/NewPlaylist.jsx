import React, { useContext, useReducer, useRef, useState } from 'react'
import { TokenContext } from '../../providers/TokenProvider'
import { PLAYLIST_INITIAL_STATE, playlistReducer } from '../../utils/reducer'
import { getDataSearch, toggleLikeAndTracks } from '../../utils/actions'
import { Box, Input, InputRightElement, Button, InputGroup, Heading, Text, UnorderedList, ListItem, Image, Skeleton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Link } from '@chakra-ui/react'

const FavsPlaylist = () => {

  const textInput = useRef(null)
  const { token } = useContext(TokenContext)
  const [state, dispatch] = useReducer(playlistReducer, PLAYLIST_INITIAL_STATE)
  const { isOpen, onOpen, onClose } = useDisclosure()


  const { search, dataSearch, likeTracks, tracksPlaylist, isLoading } = state

  const printValue = () => {
    const inputValue = textInput.current?.value
    if (inputValue) {
      getDataSearch(dispatch, token, inputValue)
    }
  }

  return (
    <Box minH="100vh">
      <InputGroup w="80vw" m="var(--spo-margin-l)">
        <Input variant='filled' type="text"
        placeholder='Busca tu canción' _placeholder={{ color: 'var(--spo-color-1)' }}
        ref={textInput} />
        <InputRightElement w="30vw">
          <Button w="35vw" bg='var(--spo-color-2)' color="var(--spo-color-5)" 
          onClick={printValue} _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out"
          }}>Mostrar</Button>
        </InputRightElement>
      </InputGroup>
      <Button color="var(--spo-color-1)" m="var(--spo-margin-l)" onClick={onOpen} w="170px"
      _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out"
          }}>Ver playlist</Button>
      {dataSearch && (
        <Box>
          <Heading m="var(--spo-margin-l)">Tu búsqueda es:</Heading>
          <UnorderedList display="flex" flexDir="column" gap="var(--spo-gap-m)">
            {dataSearch.tracks.items.map((item) => (
              <Skeleton isLoaded={!isLoading} startColor='var(--spo-color-2)' endColor='var(--spo-color-4)' fadeDuration={4}>
              <ListItem display="flex" alignItems="center" 
              gap={{ base: "var(--spo-gap-s)",  sm: "var(--spo-gap-s)", md: "var(--spo-gap-xl)"}}
              key={item.id}>
                <Button bg="none" sx={{ 
                    width: "unset !important",
                    maxWidth: "unset !important",
                    minWidth: "unset !important"
                  }} onClick={() => toggleLikeAndTracks(dispatch, item, state)}>
                  <Image sx={{ 
                    width: "unset !important",
                    maxWidth: "unset !important",
                    minWidth: "unset !important"
                  }} boxSize="30px" src={likeTracks[item.id] ? "../src/assets/corazon-1.png" : "../src/assets/corazon.png" } />
                </Button>
                <Image boxSize={{base:"35px", sm: "50px", md: "70px"}}
                src={item.album.images[0].url} alt={item.name}  />
                <Text marginEnd="var(--spo-margin-m)">
                  {item.artists.map((artist) => artist.name).join(", ")} - {item.name}
                </Text>
              </ListItem>
              </Skeleton>
            ))}
          </UnorderedList>
        </Box>
      )}
      <Box m="var(--spo-margin-l)">
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader m="var(--spo-margin-l)" 
            borderBottomWidth='1px'>Tus canciones favoritas son:</DrawerHeader>
            <DrawerBody>
              {tracksPlaylist.length === 0 ? (
              <Text m="var(--spo-margin-l)">Todavía no has añadido canciones a tu playlist.</Text>
              ) : (
              <UnorderedList display="flex" flexDir="column" gap="var(--spo-gap-m)">
              {tracksPlaylist.map((track) => (
              <ListItem display="flex" alignItems="center" 
              gap={{ base: "var(--spo-gap-s)",  sm: "var(--spo-gap-s)", md: "var(--spo-gap-xl)"}}
              key={track.id}>
                <Image boxSize={{base:"35px", sm: "50px", md: "70px"}} src={track.album.images[0].url} alt={track.name}  />
                <Text textDecor="underline">
                  <Link href={track.external_urls.spotify}>{track.artists.map((artist) => artist.name).join(', ')} - {track.name}</Link>
                </Text>
              </ListItem>
              ))}
              </UnorderedList>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  )
}

export default FavsPlaylist