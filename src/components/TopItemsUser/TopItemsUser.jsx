import React from 'react'
import { Box, Image, CardBody, UnorderedList, ListItem, Text, Link} from '@chakra-ui/react'

const TopItemsUser = ({ data, type }) => {

  const chooseImageURL = (item) => {
    if (type === "artist") {
      return item.images[2]?.url
    } else if (type === "track") {
      return item.album.images[1]?.url
    } else if (type === "playlist") {
      return item.images[0]?.url
    } else if (type === "podcast") {
      return item.show.images[1]?.url
    }
    return "";
  }

  return (
    <CardBody >
      {data && (
              <UnorderedList display="flex" justifyContent="space-evenly" flexWrap="wrap" gap="var(--spo-gap-xs)">
              {data.items.map((item) => (
                <ListItem key={item.id} display="flex" flexDir="column" gap="var(--spo-gap-s)" alignItems="center" maxW="160px">
                  <Box border="2px" borderStyle="solid" borderColor="var(--spo-color-1)" 
                  p="var(--spo-padding-xs)" borderRadius="var(--spo-primary-br)" w="160px">
                    <Image 
                    src={chooseImageURL(item)} alt={item.name} 
                    w="160px" h="160px"
                    objectFit="cover" borderRadius="var(--spo-primary-br)"
                    />
                  </Box>
                  <Text fontWeight="600" textDecor="underline" textAlign="center">
                    <Link href={item.external_urls?.spotify || item.show.external_urls?.spotify}>{item.name || item.show.name}</Link>
                  </Text>
                  {item.artists &&
                    <Text textAlign="center">
                    {item.artists?.map((artist) => artist.name).join(', ')}
                    </Text>
                  }
                  {item.owner?.display_name ? 
                  <Text>{item.owner?.display_name}</Text> : ""}
                </ListItem>
              ))}
              </UnorderedList>
          )}
    </CardBody>
  )
}

export default TopItemsUser