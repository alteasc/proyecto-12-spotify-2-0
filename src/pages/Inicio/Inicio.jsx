import React from 'react'
import { useGetData } from '../../utils/useGetData'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Image, Highlight, Card, Button, Skeleton } from '@chakra-ui/react'
import TopItemsUser from '../../components/TopItemsUser/TopItemsUser'

const Inicio = () => {

  const { profile, topArtists, topTracks, playlists, podcasts, isLoading } = useGetData()

  return (
    <Box>
      {profile && (
        <Flex justifyContent="space-evenly" alignItems="center" 
        gap="var(--spo-gap-m)"
        p="var(--spo-padding-m)">
          <Heading as="h2" lineHeight={1.8} 
          fontSize={{base: "var(--chakra-fontSizes-xl)", sm: "var(--chakra-fontSizes-2xl)" , md: "var(--chakra-fontSizes-3xl)" }}>
            <Highlight query={profile.display_name}
            styles={{ px: '5', py: '2', rounded: 'full', bg: 'var(--spo-color-1)', color: 'var(--spo-color-5)' }}>
              {`Bienvenid@, ${profile.display_name}`}
            </Highlight>
          </Heading>
          <Box 
          p="var(--spo-padding-xs)"
          border="2px"
          borderStyle="solid" 
          borderColor="var(--spo-color-1)"
          borderRadius="full"> 
            <Image w="150px" borderRadius='full' src={profile.images[0].url} alt={profile.display_name} />
          </Box>
        </Flex>
      )}
      <Card m="var(--spo-margin-s)" boxShadow="0px 0px 33px 4px var(--spo-color-1)" bgColor="none">
        <Heading as="h3" p="var(--spo-padding-l)"
        fontSize={{base: "var(--chakra-fontSizes-xl)", sm: "var(--chakra-fontSizes-2xl)" , md: "var(--chakra-fontSizes-3xl)" }}
        >Tus artistas favoritos del mes son:</Heading>
        <Skeleton isLoaded={!isLoading} startColor='var(--spo-color-2)' endColor='var(--spo-color-4)'>
          <TopItemsUser data={topArtists} type="artist" />
        </Skeleton>
      </Card>
      <Card m="var(--spo-margin-m)" bgColor="none">
        <Heading as="h3" p="var(--spo-padding-l)"
        fontSize={{base: "var(--chakra-fontSizes-xl)", sm: "var(--chakra-fontSizes-2xl)" , md: "var(--chakra-fontSizes-3xl)" }}
        >Tus canciones más escuchadas del mes son:</Heading>
        <Skeleton isLoaded={!isLoading} startColor='var(--spo-color-2)' endColor='var(--spo-color-4)'>
          <TopItemsUser data={topTracks} type="track" />
        </Skeleton>
      </Card>
      <Card m="var(--spo-margin-s)" boxShadow="0px 0px 33px 4px var(--spo-color-1)" bgColor="none">
        <Heading as="h3" p="var(--spo-padding-l)"
        fontSize={{base: "var(--chakra-fontSizes-xl)", sm: "var(--chakra-fontSizes-2xl)" , md: "var(--chakra-fontSizes-3xl)" }}
        >Tus playlists favoritas son:</Heading>
        <Skeleton isLoaded={!isLoading} startColor='var(--spo-color-2)' endColor='var(--spo-color-4)'>
          <TopItemsUser data={playlists} type="playlist" />
        </Skeleton>
        <Button color="var(--spo-color-1)" m="var(--spo-margin-s)" minW="40%" p="var(--spo-padding-l)" whiteSpace="wrap">
            <Link to={"/favs-playlist"}>
            Crea tu playlist con tus canciones favoritas
            </Link>
          </Button>
      </Card>
      <Card m="var(--spo-margin-s)" bgColor="none">
        <Heading as="h3" p="var(--spo-padding-l)"
        fontSize={{base: "var(--chakra-fontSizes-xl)", sm: "var(--chakra-fontSizes-2xl)" , md: "var(--chakra-fontSizes-3xl)" }}
        >Tus podcasts más escuchados son:</Heading>
        <Skeleton isLoaded={!isLoading} startColor='var(--spo-color-2)' endColor='var(--spo-color-4)'>
          <TopItemsUser data={podcasts} type="podcast" />
        </Skeleton>
      </Card>
    </Box>
  )
}

export default Inicio
