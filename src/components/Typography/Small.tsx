/** @jsx jsx */
import React from 'react';
import cx from 'classnames';
import { jsx, css } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';

type SmallProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
  muted?: boolean;
};

export const Small = React.forwardRef<HTMLParagraphElement, SmallProps>((props, ref) => {
  const { muted = false, className, ...rest } = props;
  const { typography } = React.useContext(ThemeContext);
  return (
    <p
      css={css`
        font-size: ${typography.small.size};
        font-weight: ${typography.small.weight};
      `}
      ref={ref}
      className={cx({ muted }, className)}
      {...rest}></p>
  );
});
