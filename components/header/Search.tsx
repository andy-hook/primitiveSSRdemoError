import { chakra, Flex, Icon, Tooltip } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { TbUserPlus } from 'react-icons/tb';
import { ImNewspaper } from 'react-icons/im';

import { Group } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';

import { useRouter } from 'next/router';

const Search = ({ searchData }: { searchData: any }) => {
  const router = useRouter();
  const url = 'https://ck.directus.app/assets/';

  function SpotlightControl() {
    const spotlight = useSpotlight();
    return (
      <Group position="center">
        <Flex align="center">
          <Tooltip
            label={router.locale === 'da' ? 'Søg' : 'Search'}
            color="white"
            fontSize="md"
          >
            <Icon
              as={SearchIcon}
              cursor="pointer"
              onClick={spotlight.openSpotlight}
            />
          </Tooltip>
        </Flex>
      </Group>
    );
  }

  function ImgAvatar({ src }: { src: string }) {
    return (
      <picture>
        <chakra.img src={src} alt="test" w="75px" clipPath="circle()" />
      </picture>
    );
  }

  // console.log(typeof searchData);

  const actions: SpotlightAction[] = [
    {
      title: 'Forside',
      description: 'Gå til forsiden',
      onTrigger: () => (window.location.href = '/'),
      icon: <AiFillHome size={18} />,
    },
    {
      title: 'Partnere',
      description: 'Læs alt om vores partnere',
      onTrigger: () => (window.location.href = '/partnere'),
      icon: <FaUserFriends size={18} />,
    },
    {
      title: 'Ledige stillinger',
      description: 'Se vores ledige stillinger',
      onTrigger: () => (window.location.href = '/karriere/ledige-stillinger'),
      icon: <TbUserPlus size={20} />,
    },

    // NYHEDER
    {
      title: 'Nyheder',
      description: 'De seneste nyheder fra din revisor',
      onTrigger: () => (window.location.href = '/nyheder'),
      icon: <ImNewspaper size={20} />,
    },

    // REVISION OG REGNSKAB
    {
      title: 'Revision & Regnskab',
      group: 'Revision & Regnskab',
      onTrigger: () => (window.location.href = '/revision-regnskab'),
    },
    {
      title: 'SKAT & Moms',
      group: 'Revision & Regnskab',
      onTrigger: () => (window.location.href = '/revision-regnskab/skat-moms'),
    },
    {
      title: 'Erhvervsservice',
      group: 'Revision & Regnskab',
      onTrigger: () =>
        (window.location.href = '/revision-regnskab/erhvervsservice'),
    },
    {
      title: 'Digitalisering',
      group: 'Revision & Regnskab',
      onTrigger: () =>
        (window.location.href = '/revision-regnskab/digitalisering'),
    },
  ];

  const searchActions = searchData.map((partner: any) => {
    return {
      title: partner.name,
      description: partner.translations[0].title,
      onTrigger: () =>
        (window.location.href = `${router.basePath}/partnere/${partner.slug}`),
      icon: <ImgAvatar src={url + partner.thumbnail} />,
    };
  });

  actions.push(searchActions);

  // Merge arrays
  const finalActions = actions.concat(searchActions);

  return (
    <SpotlightProvider
      actions={finalActions}
      limit={3}
      closeOnActionTrigger={true}
      searchIcon={<SearchIcon />}
      searchPlaceholder={router.locale === 'da' ? 'Søg' : 'Search'}
      shortcut={['mod + P', 'mod + K', 'mod + space', '/']}
      nothingFoundMessage={
        router.locale === 'da' ? 'Intet fundet...' : 'Nothing found...'
      }
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
};

export default Search;
