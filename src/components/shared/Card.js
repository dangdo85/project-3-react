import {
    Box,
    Badge,
    Image,
    others
  } from '@chakra-ui/react';
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
import MyProfileComments from './MyProfileComments';


function Card(props) {

   const {post} = props
  
    return (
      <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' m="2">
        <Image maxH="xs" w="100%" src={post.image}/>
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            
            {/* <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box> */}
          </Box>
  
          <Box
            mt='1'
            mb="2"
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {post.title}
          </Box>
  
          <Box maxH="10rem" overflowY={"scroll"}>
            <Box as='span' color='gray.600' fontSize='sm'>
              {post.caption}
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
 
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {post.likes} likes
            </Box>
          </Box>

          <Badge mt="2" mr="1" borderRadius='full' px='2' colorScheme='teal'>
              {"Edit"}
            </Badge>
            <Popover>
            <PopoverTrigger>
            <Badge role='button' mt="2" borderRadius='full' px='2' colorScheme='teal'>
            {"View Comments"}
          </Badge>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Comments</PopoverHeader>
              <PopoverBody>
                <Box>
                <MyProfileComments comments={post.comments}/>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          
        </Box>
      </Box>
    )
  }

export default Card