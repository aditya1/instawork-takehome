import React from 'react'
import { ListPageProps } from '../../types'
import { TeamMemberUI } from '../TeamMember/TeamMember'
import { Flex, List, Button, Heading, ListItem, Tooltip } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const ListPage: React.FC<ListPageProps> = ({ teamMembers }) => {
  const navigate = useNavigate()
  const onAddClick = () => {
    navigate('/add')
  }
  return (
    <Flex flexDirection={'column'} maxWidth={'600px'}>
      <Heading>Team Members ({teamMembers.length})</Heading>
      <Tooltip label="Add new team member">
        <Button
          alignSelf={'flex-end'}
          onClick={() => {
            onAddClick()
          }}
        >
          {<AddIcon></AddIcon>}
        </Button>
      </Tooltip>
      <List padding={'24px'}>
        {teamMembers.map((member) => (
          <ListItem key={member.id} onClick={() => console.log('Clicking edit')}>
            <TeamMemberUI member={member} />
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export { ListPage }
