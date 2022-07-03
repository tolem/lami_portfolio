import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import {GiGiftOfKnowledge, GiHumanPyramid, GiHumanTarget} from 'react-icons/gi'

const ResearchList = () => {
  return (
    <List spacing={3}>
  <ListItem>
    <ListIcon as={GiGiftOfKnowledge} color='gray.600' />
    Knowledge Management
  </ListItem>
  <ListItem>
    <ListIcon as={GiHumanPyramid} color='gray.600' />
    Human Information Seeking
  </ListItem>
  <ListItem>
    <ListIcon as={GiHumanTarget} color='gray.600' />
    Human Computer Interaction (Accessibility) 
  </ListItem>
  {/* You can also use custom icons from react-icons */}
</List>
  )
}

export default ResearchList