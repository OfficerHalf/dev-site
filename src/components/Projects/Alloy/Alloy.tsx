/** @jsx jsx */
import * as React from 'react';
import { ImageComparison } from '../../Common/ImageComparison';
import { css, jsx } from '@emotion/core';
import { useMedia } from 'react-media';
import { ThemeContext } from '../../../store/ThemeContext';

export const Alloy: React.FC = props => {
  const { space, queries } = React.useContext(ThemeContext);
  const breakpoint = useMedia({ queries: queries.m });
  return (
    <div
      css={css`
        justify-content: center;
        display: flex;
        text-align: center;
        margin-top: ${space.l};
        margin-bottom: ${space.l};
      `}>
      <div>
        {breakpoint[12] && (
          <ImageComparison
            imageLeftSrc={`/Alloy2.png`}
            imageRightSrc={`/Monokai2.png`}
            width={1158}
            height={700}
            labelLeft="Alloy"
            labelRight="Monokai"
          />
        )}
        {!breakpoint[12] && (
          <img
            css={css`
              max-width: 100%;
            `}
            alt="Alloy"
            src="/AlloyCropped.png"
          />
        )}
        <h2
          css={css`
            margin-top: ${space.l};
          `}>
          About
        </h2>
        <p>
          Alloy is my response to the green and yellow tinted world of Monokai.
          <br />
          Alloy has more contrast and clearer color, while maintaining Monokai's vibrant palette.
        </p>
        <p>
          Get the theme for{' '}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme"
            target="_blank"
            rel="noopener noreferrer">
            VS Code
          </a>
          ,{' '}
          <a
            href="https://github.com/OfficerHalf/alloy-theme/tree/master/themes/prismjs"
            target="_blank"
            rel="noopener noreferrer">
            prismjs
          </a>
          ,{' '}
          <a
            href="https://github.com/OfficerHalf/alloy-theme/tree/master/themes/conemu"
            target="_blank"
            rel="noopener noreferrer">
            ConEmu
          </a>
          , and{' '}
          <a
            href="https://github.com/OfficerHalf/alloy-theme/tree/master/themes/windows-terminal"
            target="_blank"
            rel="noopener noreferrer">
            Windows Terminal
          </a>
          .
          <br />
          <a
            css={css`
              display: inline-block;
              margin-top: ${space.s};
            `}
            href="https://github.com/OfficerHalf/alloy-theme"
            target="_blank"
            rel="noopener noreferrer">
            See the source.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Alloy;
