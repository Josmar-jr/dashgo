import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { Stack } from '@chakra-ui/layout';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiContactsLine}>Dashboard</NavLink>
        <NavLink icon={RiDashboardLine}>Usuários</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiGitMergeLine}>Formulários</NavLink>
        <NavLink icon={RiInputMethodLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  );
}
