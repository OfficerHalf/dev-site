/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';
import Tippy, { TippyProps } from '@tippyjs/react';
import { Body } from '../Typography';

type TooltipProps = Omit<TippyProps & { text: string }, 'content'>;

export const Tooltip: React.FC<TooltipProps> = props => {
  const { text, ...rest } = props;
  const { background, dark, space, elevation } = React.useContext(ThemeContext);

  const tipStyle = css`
    &[data-animation='fade'][data-state='hidden'] {
      opacity: 0;
    }
    [data-tippy-root] {
      max-width: calc(100vw - 10px);
    }
    & {
      transition-property: transform, visibility, opacity;
    }
    &[data-placement^='top'] > .tippy-arrow {
      bottom: 0;
    }
    &[data-placement^='top'] > .tippy-arrow:before {
      bottom: -4px;
      left: 0;
      border-width: 8px 8px 0;
      border-top-color: initial;
      transform-origin: center top;
    }
    &[data-placement^='bottom'] > .tippy-arrow {
      top: 0;
    }
    &[data-placement^='bottom'] > .tippy-arrow:before {
      top: -4px;
      left: 0;
      border-width: 0 8px 8px;
      border-bottom-color: initial;
      transform-origin: center bottom;
    }
    &[data-placement^='left'] > .tippy-arrow {
      right: 0;
    }
    &[data-placement^='left'] > .tippy-arrow:before {
      border-width: 8px 0 8px 8px;
      border-left-color: initial;
      right: -4px;
      transform-origin: center left;
    }
    &[data-placement^='right'] > .tippy-arrow {
      left: 0;
    }
    &[data-placement^='right'] > .tippy-arrow:before {
      left: -4px;
      border-width: 8px 8px 8px 0;
      border-right-color: initial;
      transform-origin: center right;
    }
    &[data-inertia][data-state='visible'] {
      transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
    }
    .tippy-arrow {
      width: 16px;
      height: 16px;
      color: ${dark ? background.background40 : background.background};
      box-shadow: ${elevation[2]};
    }
    .tippy-arrow:before {
      content: '';
      position: absolute;
      border-color: transparent;
      border-style: solid;
    }
    .tippy-content {
      position: relative;
      padding: 5px 9px;
      background-color: ${dark ? background.background20 : background.background};
      border-radius: ${space.s};
      z-index: 1;
      box-shadow: ${elevation[2]};
    }
  `;

  return (
    <Tippy
      css={tipStyle}
      hideOnClick
      content={
        <Body
          css={css`
            margin: 0;
          `}>
          {text}
        </Body>
      }
      {...rest}
    />
  );
};
