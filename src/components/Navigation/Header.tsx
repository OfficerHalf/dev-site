/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link, useNavigate } from '@reach/router';
import { routes } from '../../util/routes';
import { Menu } from '../Icons';
import { Drawer } from './Drawer';
import { MenuItem } from '../../../types/nav';
import { useMedia } from 'react-media';
import { Horizontal } from './Horizontal';
import { prefetch } from 'react-static';
import { ThemeContext } from '../../store/ThemeContext';
import { usePageNavigate } from '../../hooks/usePageNavigate';

export const Header: React.FC = props => {
  const navigate = useNavigate();
  const hrefNavigate = usePageNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const { primary, space, typography, queries } = React.useContext(ThemeContext);
  const breakpoints = useMedia({ queries: queries.m });

  const headerStyles = css`
    background-color: ${primary.main};
    color: ${primary.contrast.main};
    padding: 0 ${space.m};
    height: 56px;
    display: flex;
    align-items: center;
    .spacer {
      cursor: initial;
      flex-grow: 1;
    }
  `;

  const navLinkStyle = css`
    font-size: ${typography.title.size};
    font-weight: ${typography.title.weight};
    text-decoration: none;
    &,
    &:active,
    &:hover,
    &:visited {
      color: ${primary.contrast.main};
    }
    &:hover {
      text-decoration: underline;
    }
  `;

  const menuStyle = css`
    width: ${space.l};
    height: ${space.l};
    fill: ${primary.contrast.main};
    cursor: pointer;
    ${queries.e['5']} {
      display: none;
    }
  `;

  React.useEffect(() => {
    prefetch(routes.project.homebrewery.link);
    prefetch(routes.project.alloy.link);
    prefetch(routes.about);
    prefetch(routes.contact);
  }, []);

  React.useEffect(() => {
    if (breakpoints[7]) {
      setDrawerOpen(false);
    }
  }, [breakpoints]);

  const menuItems: MenuItem[] = React.useMemo(
    () => [
      {
        text: 'Projects',
        childItems: [
          { text: 'Alloy', onClick: () => navigate(routes.project.alloy.link) },
          {
            text: 'Homebrewery Markdown Preview',
            onClick: () => navigate(routes.project.homebrewery.link)
          },
          {
            text: 'Pokemon Randomizer',
            onClick: () => hrefNavigate('https://nathan-smith.org/pokemon')
          }
        ]
      },
      {
        text: 'About',
        to: routes.about
      },
      {
        text: 'Contact',
        to: routes.contact
      }
    ],
    [navigate]
  );

  return (
    <header css={headerStyles}>
      <Link css={navLinkStyle} to="/">
        <span>Nathan Smith</span>
      </Link>
      <div className="spacer" />
      {!breakpoints[5] && <Menu css={menuStyle} onClick={() => setDrawerOpen(true)} />}
      {!breakpoints[5] && (
        <Drawer
          css={css`
            ${queries.e['5']} {
              display: none;
            }
          `}
          open={drawerOpen}
          items={menuItems}
          onClose={() => setDrawerOpen(false)}
        />
      )}
      {breakpoints[5] && (
        <Horizontal
          css={css`
            display: none;
            ${queries.e['5']} {
              display: block;
            }
          `}
          items={menuItems}
        />
      )}
    </header>
  );
};
