import React, { useState } from 'react'
import { AddEditPageProps, TeamMember } from '../../types'
import { Form, Select, Button } from '../styled'
import { FormControl, Input, FormLabel, Flex, Spacer, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const AddPage: React.FC<AddEditPageProps> = ({ onSave }) => {
  const [member, setMember] = useState<TeamMember>({
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    role: 'Regular',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setMember({ ...member, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Member details', member)
    onSave(member)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex width={'450px'} direction={'column'} maxWidth={'720px'} padding={'30px'}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input name="firstName" placeholder="First Name" value={member.firstName} onChange={handleChange} />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input name="lastName" placeholder="Last Name" value={member.lastName} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Phone number" value={member.phoneNumber} onChange={handleChange} />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type={'email'} name="email" placeholder="Email" value={member.email} onChange={handleChange} />
        </FormControl>
        <Select name="role" onChange={handleChange} value={member.role}>
          <option value="Regular">Regular</option>
          <option value="Admin">Admin</option>
        </Select>
        <Button type="submit">Save</Button>
      </Flex>
    </Form>
  )
}

export default AddPage
