import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {
  StyledMenu,
  StyledList,
  itemStyles,
  StyledTrigger,
  StyledCaret,
  StyledLink,
  StyledContentC,
  StyledIndicator,
  StyledArrowB,
  StyledViewport,
  ContentList,
  ListItem,
  LinkTitle,
  LinkText,
  ViewportPosition,
  StyledNavigationMenuLink,
} from '../../stitches.config';
import { violet, mauve } from '@radix-ui/colors';
import { styled, keyframes } from '@stitches/react';

import { chakra, Box, Flex, Button, Text } from '@chakra-ui/react';

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
);

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrowB />
  </StyledIndicator>
));

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContentC;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

const ContentListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,

          '&:hover': { backgroundColor: mauve.mauve3 },
        }}
      >
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);

const ContentListItemCallout = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    const router = useRouter();

    return (
      <ListItem css={{ gridRow: 'span 4' }}>
        <NavigationMenuLink
          {...props}
          href="/revision-regnskab"
          ref={forwardedRef}
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: `linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%);`,
            borderRadius: 6,
            padding: 25,
          }}
        >
          {router.locale === 'da' ? (
            <Box>
              <LinkTitle
                css={{
                  fontSize: 18,
                  color: 'white',
                  marginTop: 16,
                  marginBottom: 7,
                }}
              >
                Revision & Regnskab
              </LinkTitle>
              <LinkText
                css={{
                  fontSize: 14,
                  color: mauve.mauve4,
                  lineHeight: 1.3,
                }}
              >
                Vores arbejde tilfører tillid og kvalitet til din virksomhed.
              </LinkText>
            </Box>
          ) : (
            <Box>
              <LinkTitle
                css={{
                  fontSize: 18,
                  color: 'white',
                  marginTop: 16,
                  marginBottom: 7,
                }}
              >
                Auditing & Accounting
              </LinkTitle>
              <LinkText
                css={{
                  fontSize: 14,
                  color: mauve.mauve4,
                  lineHeight: 1.3,
                }}
              >
                Our work adds trust and quality to your business.
              </LinkText>
            </Box>
          )}
        </NavigationMenuLink>
      </ListItem>
    );
  }
);

const ContentListItemCalloutB = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <ListItem css={{ gridRow: 'span 4' }}>
      <NavigationMenuLink
        {...props}
        href="/karriere"
        ref={forwardedRef}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%);`,
          borderRadius: 6,
          padding: 25,
        }}
      >
        <Box>
          <LinkTitle
            css={{
              fontSize: 18,
              color: 'white',
              marginTop: 16,
              marginBottom: 7,
            }}
          >
            Karriere
          </LinkTitle>
          <LinkText
            css={{
              fontSize: 14,
              color: mauve.mauve4,
              lineHeight: 1.3,
            }}
          >
            Udforsk vores karrieresite, og lær os bedre at kende.
          </LinkText>
        </Box>
      </NavigationMenuLink>
    </ListItem>
  )
);

const ContentListItemCalloutC = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    const router = useRouter();

    return (
      <ListItem
        css={{
          gridRow: 'span 1',
          listStyleType: 'none',
          padding: '20px 35px 20px 20px',
        }}
      >
        <NavigationMenuLink
          {...props}
          href="/raadgivning"
          ref={forwardedRef}
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: `linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%);`,
            borderRadius: 6,
            padding: 25,
          }}
        >
          <Box>
            <LinkTitle
              css={{
                fontSize: 18,
                color: 'white',
                marginTop: 16,
                marginBottom: 7,
              }}
            >
              Rådgivning
            </LinkTitle>
            <LinkText
              css={{
                fontSize: 14,
                color: mauve.mauve4,
                lineHeight: 1.3,
              }}
            >
              {router.locale === 'da'
                ? 'Har du brug for økonomisk rådgivning?'
                : 'Are you in need of financial consulting?'}
            </LinkText>
          </Box>
        </NavigationMenuLink>
      </ListItem>
    );
  }
);

// MAKE ROUTING WORK WITH NEXT ROUTER
const NextLink = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <StyledNavigationMenuLink active={`${isActive}`} {...props} />
    </Link>
  );
};

export const HeaderNavigationMenu = () => {
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {router.locale === 'da' ? (
              <Link href="/revision-regnskab">
                <a>Revision & Regnskab</a>
              </Link>
            ) : (
              <Link href="/auditing-accounting">
                <a>Auditing & Accounting</a>
              </Link>
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="one">
              <ContentListItemCallout />
              {router.locale === 'da' ? (
                <ContentListItem
                  href="/revision-regnskab/"
                  title="Revision & Regnskab"
                >
                  Vores arbejde tilfører tillid og kvalitet til din virksomhed.
                </ContentListItem>
              ) : (
                <ContentListItem
                  href="/auditing-accounting/"
                  title="Auditing & Accounting"
                >
                  Our work adds trust and quality to your business.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  href="/revision-regnskab/skat-moms"
                  title="SKAT & Moms"
                >
                  Vi hjælper med at holde overblik i dine skattemæssige forhold.
                </ContentListItem>
              ) : (
                <ContentListItem
                  href="/auditing-accounting/tax-vat"
                  title="Tax & VAT"
                >
                  We help you keep an overview of your tax matters.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  href="/revision-regnskab/erhvervsservice"
                  title="Erhvervsservice"
                >
                  Overlad bogholderiet til Erhvervsservice og brug energien på
                  det, du er bedst til.{' '}
                </ContentListItem>
              ) : (
                <ContentListItem
                  href="/auditing-accounting/business_service"
                  title="Business Service"
                >
                  Leave the bookkeeping to Business Service and use the energy
                  on what you do best.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  href="/revision-regnskab/digitalisering"
                  title="Digitalisering"
                >
                  Konsulenter med specialviden inden for koblingen mellem
                  digitalisering og virksomhedsdrift.
                </ContentListItem>
              ) : (
                <ContentListItem
                  href="/auditing-accounting/digitization"
                  title="Digitization"
                >
                  Consultants with specialist knowledge in the coupling between
                  digitization and business operations.
                </ContentListItem>
              )}
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {router.locale === 'da' ? (
              <Link href="/raadgivning">
                <a>Rådgivning</a>
              </Link>
            ) : (
              <Link href="/consulting">
                <a>Consulting</a>
              </Link>
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentListItemCalloutC />
            <ContentList layout="two">
              {router.locale === 'da' ? (
                <ContentListItem
                  title="Andelsbolig- og ejerforeninger"
                  href="/raadgivning/andelsbolig-og-ejerforeninger"
                >
                  Vi er eksperter i de regnskabsmæssige forhold i andelsbolig-
                  og ejerforeninger.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Cooperative housing and owner associations"
                  href="/consulting/cooperative-housing-and-owner-associations"
                >
                  We are experts in the accounting matters of co-operative
                  housing and owner associations.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Due Diligence"
                  href="/raadgivning/due-diligence"
                >
                  Vi hjælper dig fra de indledende overvejelser til den endelige
                  handel.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Due Diligence"
                  href="/consulting/due-diligence"
                >
                  We help you from the initial considerations to the final one
                  trade.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Fast ejendom"
                  href="/raadgivning/fast-ejendom"
                >
                  Vi rådgiver helt ned til mindste detalje i alle typer af faste
                  ejendom.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Real estate"
                  href="/consulting/real-estate"
                >
                  We advise right down to the smallest detail in all types of
                  real estate.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Finansiel rådgivning"
                  href="/raadgivning/finansiel-raadgivning"
                >
                  Vi kan rådgive om fremskaffelse og placering af likviditet.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Financial advisory"
                  href="/consulting/financial_advisory"
                >
                  We can advise on the acquisition and placement of liquidity.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Generationsskifte"
                  href="/raadgivning/generationsskifte"
                >
                  Vi bistår og rådgiver i planlægningen og gennemførslen af
                  generationsskifte af virksomheder.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Generational change"
                  href="/consulting/generational-change"
                >
                  We assist and advise in the planning and implementation of
                  generational change of companies.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Internationale forhold"
                  href="/raadgivning/internationale-forhold"
                >
                  Vi kan rådgive dig, om hvordan du skal forholde dig til
                  internationale forhold.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="International relations"
                  href="/consulting/international-relations"
                >
                  We can advise you on how to approach international relations.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Iværksætteri og opstart af virksomed"
                  href="/raadgivning/ivaerksaetteri-opstart-af-virksomhed"
                >
                  Vi kan sikre dig en god start på din rejse som ejerleder.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Entrepreneuship and Business Startup"
                  href="/consulting/entrepreneuship-and-business-startup"
                >
                  We can ensure you get a good start on your journey as an
                  owner-manager.
                </ContentListItem>
              )}

              {router.locale === 'da' ? (
                <ContentListItem
                  title="Rekonstruktion, insolvens og konkurs"
                  href="/raadgivning/rekonstruktion-insolvens-konkurs"
                >
                  Vi assisterer vi dig i rekonstruktion, insolvens og
                  konkursrelaterede sager.
                </ContentListItem>
              ) : (
                <ContentListItem
                  title="Reconstruction, insolvency and bankruptcy"
                  href="/consulting/rekonstruktion-insolvency-bankruptcy"
                >
                  We assist you in reconstruction, insolvency and
                  bankruptcy-related cases.
                </ContentListItem>
              )}
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {router.locale === 'da' ? (
            <NextLink href="/partnere">Partnere</NextLink>
          ) : (
            <NextLink href="/partners">Partners</NextLink>
          )}
        </NavigationMenuItem>

        {router.locale === 'da' && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/karriere">Karriere</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ContentList layout="one">
                <ContentListItemCalloutB />
                <ContentListItem href="/karriere/" title="Karriere">
                  Udforsk vores karrieresite, og lær os bedre at kende.
                </ContentListItem>
                <ContentListItem
                  href="/karriere/karrieremuligheder"
                  title="Karrieremuligheder"
                >
                  En arbejdsplads med fokus på udvikling og trivsel.
                </ContentListItem>
                <ContentListItem
                  href="/karriere/ledige-stillinger"
                  title="Ledige stillinger"
                >
                  Se vores ledige stillinger.
                </ContentListItem>
                <ContentListItem
                  href="/karriere/revisortrainee"
                  title="Revisortrainee"
                >
                  Kickstart din karriere hos os, og skab muligheder for resten
                  af livet.
                </ContentListItem>
              </ContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {router.locale === 'da' && (
          <NavigationMenuItem>
            <NextLink href="/nyheder">Nyheder</NextLink>
          </NavigationMenuItem>
        )}

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};

export default HeaderNavigationMenu;
