export interface TeamMember {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  role: 'Regular' | 'Admin'
  isAdmin?: boolean
}

export interface ListPageProps {
  //teamMembers: TeamMember[]
  //onEditClick: (id: string) => void
  //onAddClick: () => void
}

export interface AddEditPageProps {
  onSave: (member: TeamMember) => void
  memberData?: TeamMember // For EditPage, optional because AddPage won't receive this prop
  onDelete?: (id: string) => void // Optional, only for EditPage
}
