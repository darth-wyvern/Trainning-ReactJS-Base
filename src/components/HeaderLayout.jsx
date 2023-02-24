import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { List } from 'phosphor-react';
import { Link } from 'react-router-dom';

function HeaderLayout({ route }) {
  const styles = {
    position: 'sticky',
    top: '0',
    left: '0',
    backgroundColor: '#222831',
    zIndex: '1',
    padding: '1rem',
    gap: '1rem',
    boxShadow: '0 3px 4px black'
  };

  return (
    <Flex style={styles}>
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<List size={32} />} variant="outline" />
        <MenuList>
          {route.map((e) => (
            <Link key={e.path} to={e.path}>
              <MenuItem color="blackAlpha.900" key={e.path}>
                {e.component}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default HeaderLayout;
