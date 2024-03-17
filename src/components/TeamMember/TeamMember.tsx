import React from 'react'
import type { FC } from 'react'
import { TeamMember } from '../../types'
import { Flex, Avatar, Box, Text, Badge, border, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export interface TeamMemberProps {
  member: TeamMember
}
export const TeamMemberUI: FC<TeamMemberProps> = (props: TeamMemberProps) => {
  const { member } = props

  return (
    <Flex padding={'10px'} width={'350px'}>
      <Avatar name={`${member.firstName} ${member.lastName}`} />
      <Box ml="3">
        <Text fontWeight="bold">
          {`${member.firstName} ${member.lastName}`}
          <Badge ml="1" colorScheme="green">
            {member.role}
          </Badge>
        </Text>
        <Text fontSize="sm">{member.email}</Text>
        <Text fontSize="sm">{member.phoneNumber}</Text>
      </Box>
    </Flex>
  )
}
