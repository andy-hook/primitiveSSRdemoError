import { Box } from '@chakra-ui/react';

import Header from '../components/header/Header';
import { PartnersAPICall } from '../lib/partners';

export const getStaticProps = async () => {
  // Search -> Search for partners
  const searchData = await PartnersAPICall();

  return {
    props: {
      searchData,
    },
  };
};

const Home = ({ searchData }: { searchData: any }) => {
  return (
    <Box>
      <Header searchData={searchData} />

      {/* <Grid
        templateAreas={`
                  "main"
                  "testimonials"
                  "news"
                  "contact"
                  "footer"`}
        h="100%"
      >
        <GridItem area={'main'} className="main-relative">
          <chakra.img
            display={{ base: 'block', lg: 'none' }}
            src={'/ck.jpg'}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />

          <Flex
            className="container"
            align={{ base: undefined, md: 'center' }}
            h={{ base: undefined, md: 'calc(100vh - 123px)' }}
          >
            <SimpleGrid columns={1}>
              <Box
                layerStyle="frontpage"
                maxW={{ lg: '28.5rem', xl: '43.5rem' }}
              >
                <ReactMarkdown>
                  {pageData.translations[locale].body}
                </ReactMarkdown>
              </Box>
              <Box layerStyle="frontpage">
                <Stack
                  direction={{ base: 'column', xl: 'row' }}
                  maxW={{ lg: '28.5rem', xl: '43.5rem' }}
                  spacing="md"
                >
                  <Flex align="flex-end" justify="center">
                    <Box
                      className="slogan"
                      maxW={{ lg: '28.5rem', xl: '45rem' }}
                    >
                      <ReactMarkdown>
                        {pageData.translations[locale].slogan}
                      </ReactMarkdown>
                    </Box>
                  </Flex>
                  <Box>
                    <Flex
                      h="100%"
                      align="flex-end"
                      justify="center"
                      mt={{ base: '4', xl: '-3' }}
                    >
                      <Box
                        mb={{ base: '12', md: '6' }}
                        textAlign={{ base: 'center', xl: 'left' }}
                        maxW={{ md: '28.5rem', xl: '45rem' }}
                      >
                        <ReactMarkdown>
                          {pageData.translations[locale].contact}
                        </ReactMarkdown>

                        <chakra.a
                          href="tel:+4533301515"
                          py="4"
                          px="6"
                          bg="brand.mainColor"
                          color="white"
                          borderRadius="none"
                          boxShadow="lg"
                          fontSize="sm"
                          fontWeight="400"
                          _hover={{
                            bg: 'rgb(48,53,60)',
                          }}
                        >
                          +45 33 30 15 15
                        </chakra.a>
                      </Box>
                    </Flex>
                  </Box>
                </Stack>
              </Box>
            </SimpleGrid>
          </Flex>
        </GridItem>

        {router.locale === 'da' && (
          <GridItem
            area={'testimonials'}
            bg="brand.altColor"
            className="main-relative"
          >
            <SimpleGrid columns={1}>
              <Box
                position="relative"
                right={{
                  base: '0px',
                  lg: '80px',
                  xl: '50px',
                  '2xl': '0',
                }}
              >
                <Container maxW={{ base: 'xs', md: 'md', xl: '2xl' }}>
                  <Testimonials testimonialsData={testimonialsData} />
                </Container>
              </Box>
            </SimpleGrid>
          </GridItem>
        )}

        {router.locale === 'da' && (
          <GridItem area={'news'} className="main-relative">
            <Box
              my="20"
              className="container"
              display={{ base: 'none', '2xl': 'block' }}
            >
              <FrontpageNews frontpageNewsData={frontpageNewsData} />
            </Box>
            <Box my="20" display={{ base: 'block', '2xl': 'none' }}>
              <MobileNewsCarousel frontpageNewsData={frontpageNewsData} />
            </Box>
          </GridItem>
        )}

        <GridItem area={'contact'} className="main-relative" bg="white">
          <Box mb="20" className="container">
            <Contact contactData={contactData} />
          </Box>
        </GridItem>

        <Box
          display={{ base: 'none', '2xl': 'block' }}
          className="before-footer"
        />

        <GridItem area={'footer'} bg="brand.altColor">
          <Footer footerData={footerData} />
        </GridItem>
      </Grid> */}
    </Box>
  );
};

export default Home;
