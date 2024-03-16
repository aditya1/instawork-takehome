import React from 'react'
import type { FC } from 'react'
import { TeamMember } from '../../types'
import { Flex, Avatar, Box, Text, Badge, border } from '@chakra-ui/react'

export interface TeamMemberProps {
  member: TeamMember
}
export const TeamMemberUI: FC<TeamMemberProps> = (props: TeamMemberProps) => {
  const { member } = props
  return (
    <Flex border={'1px'} padding={'10px'} width={'fit-content'} borderRadius={'4px'}>
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
