import { Box, Flex, Spacer } from '@chakra-ui/react';

import { HeaderNavigationMenu } from '../header/HeaderConfig';
import { NavigationMenuDemo } from '../header/HeaderConfigDemo';

const Header = ({ searchData }: { searchData: any }) => {
  return (
    <header>
      <nav>
        <Flex
          className="container"
          py="4"
          mb={{ base: '2', lg: '0' }}
          // zIndex="500"
        >
          <Box w={{ lg: '28.5rem', xl: '45rem' }}></Box>
          <Spacer display={{ base: 'block', xl: 'block' }} />

          {/*MY Header  */}
          <Box>
            <HeaderNavigationMenu />
          </Box>

          {/*  DEMO HEADER */}
          <NavigationMenuDemo />
        </Flex>
      </nav>
    </header>
  );
};

export default Header;
{
  /* <Flex display={{ base: 'none', xl: 'block' }}>
  <Box className={`${router.pathname === '/' ? 'fpHeader' : undefined}`}>
    <HeaderNavigationMenu />
  </Box>
</Flex>; */
}
