import React from 'react'
import { TeamMember } from '../../types'
import { Form, Button } from '../styled'
import {
  FormControl,
  Input,
  FormLabel,
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Heading,
  FormErrorMessage,
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { createMember, updateMember, deleteMember } from '../../lib/api'

const FormPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pageType } = location.state || ''
  const { member } = location.state || {}
  console.log('Member state:', member)
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    control,
  } = useForm<TeamMember>({ mode: 'onBlur', defaultValues: member })

  const onSubmit = async (data: TeamMember) => {
    if (pageType === 'add') {
      const response = await createMember(data)
      if (response.ok) {
        navigate('/')
      }
    }
    if (pageType === 'edit') {
      const response = await updateMember(data)
      if (response.ok) {
        navigate('/')
      }
    }
  }

  const onDelete = async () => {
    console.log('Inside onDelete callback')
    const member: TeamMember = getValues()
    const response = await deleteMember(member)
    if (response.ok) {
      navigate('/')
    }
  }

  const getHeading = () => {
    if (pageType === 'add') return 'Add a team member'
    else if (pageType === 'edit') return 'Edit team member'
  }

  const getSubHeading = () => {
    if (pageType === 'add') return 'Set name, email, phone number and role.'
    else if (pageType === 'edit') return 'Edit name, email, phone number and role'
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={'16px'} width={'450px'} direction={'column'} maxWidth={'720px'} padding={'30px'}>
        <Heading as="h1" size="lg">
          {getHeading()}
          <Heading size="sm" color={'gray'}>
            {getSubHeading()}
          </Heading>
        </Heading>
        <FormControl isInvalid={!!errors.firstName}>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First Name" {...register('firstName', { required: true })} />
          {errors.firstName && <FormErrorMessage>This field is required</FormErrorMessage>}
        </FormControl>
        <Spacer />
        <FormControl isInvalid={!!errors.lastName}>
          <FormLabel>Last name</FormLabel>
          <Input placeholder="Last Name" {...register('lastName', { required: true })} />
        </FormControl>
        <FormControl isInvalid={!!errors.phoneNumber}>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="123-456-7890"
              {...register('phoneNumber', {
                required: 'This is required',
                pattern: {
                  value: /^\d{3}-\d{3}-\d{4}$/,
                  message: 'Invalid phone number',
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type={'email'}
            placeholder="email@example.com"
            {...register('email', {
              required: 'This is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </FormControl>
        <Spacer border={'1px'} borderColor={'lightgray'}></Spacer>
        <Heading as="h4" size={'md'}>
          Role
        </Heading>
        <FormControl isInvalid={!!errors.role}>
          <FormLabel htmlFor="role">Role</FormLabel>
          <Controller
            name="role"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup onChange={onChange} value={value}>
                <Radio value="regular">Regular - Can't delete members</Radio>
                <Spacer border={'1px'} borderColor={'lightgray'}></Spacer>
                <Radio value="admin">Admin - Can delete members</Radio>
              </RadioGroup>
            )}
          />
          {errors.role && <FormErrorMessage>This field is required</FormErrorMessage>}
        </FormControl>
        <Flex direction="row" justifyContent="flex-end">
          <Button name="save" type="submit">
            Save
          </Button>
          {pageType === 'edit' && (
            <Button type="button" name="delete" onClick={() => onDelete()}>
              Delete
            </Button>
          )}
        </Flex>
      </Flex>
    </Form>
  )
}

export default FormPage
