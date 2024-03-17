import { TeamMember } from '../types'

export const getMembersList = async (): Promise<TeamMember[]> => {
  const response = await fetch('http://127.0.0.1:8000/api/team-members/', {})
  if (!response.ok) {
    throw new Error('Failed to fetch team members')
  }
  const data = await response.json()
  const members: TeamMember[] = data.map((entry: any) => {
    return {
      id: entry.id.toString(),
      firstName: entry.first_name,
      lastName: entry.last_name,
      phoneNumber: entry.phone_number,
      email: entry.email,
      role: entry.role,
      isAdmin: entry.role === 'admin' ? true : undefined,
    }
  })
  return members
}

export const createMember = async (data: TeamMember): Promise<Response> => {
  const payLoad = {
    first_name: data.firstName,
    last_name: data.lastName,
    phone_number: data.phoneNumber,
    email: data.email,
    role: data.role,
  }
  try {
    const response = await fetch('http://127.0.0.1:8000/api/team-members/', {
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    throw new Error('Failed to create a new team member')
  }
}

export const updateMember = async (data: TeamMember): Promise<Response> => {
  const payLoad = {
    first_name: data.firstName,
    last_name: data.lastName,
    phone_number: data.phoneNumber,
    email: data.email,
    role: data.role,
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/team-members/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(payLoad),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    throw new Error('Failed to update team member')
  }
}

export const deleteMember = async (data: TeamMember): Promise<Response> => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/team-members/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    throw new Error('Failed to delete team member')
  }
}
