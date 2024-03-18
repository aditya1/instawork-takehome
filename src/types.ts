export interface TeamMember {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  role: 'regular' | 'admin'
  isAdmin?: boolean
}
