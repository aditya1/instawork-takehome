import React, { useState, useEffect } from 'react'
import { TeamMember } from '../../types'
import { TeamMemberUI } from '../TeamMember/TeamMember'
import { Flex, List, Button, Heading, ListItem, Tooltip, Spacer } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { getMembersList } from '../../lib/api'

const ListPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const members = await getMembersList()
        setTeamMembers(members)
      } catch (error) {
        console.error('Error fetching team members:', error)
      }
    }
    fetchTeamMembers()
  }, [])
  const navigate = useNavigate()
  const onAddClick = () => {
    navigate('/form', { state: { pageType: 'add' } })
  }
  const onEditClick = (member: TeamMember) => {
    navigate('/form', { state: { pageType: 'edit', member } })
  }
  return (
    <Flex padding={'24px'} flexDirection={'column'} maxWidth={'600px'}>
      <Flex flexDirection={'row'}>
        <Heading alignSelf={'flex-start'} gap={'24px'}>
          Team Members
          <Heading color={'GrayText'} size="md">
            You have {teamMembers.length} team members
          </Heading>
        </Heading>
        <Spacer></Spacer>
        <Tooltip label="Add new team member">
          <Button
            alignSelf={'flex-end'}
            colorScheme={'blue'}
            onClick={() => {
              onAddClick()
            }}
          >
            {<AddIcon></AddIcon>}
          </Button>
        </Tooltip>
      </Flex>
      <List padding={'24px'}>
        {teamMembers.map((member) => (
          <ListItem cursor="pointer" key={member.id} onClick={() => onEditClick(member)}>
            <TeamMemberUI member={member} />
            <Spacer border={'1px'} borderColor={'gray'} />
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export { ListPage }
