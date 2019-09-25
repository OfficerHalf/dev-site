import * as React from 'react';
import { Button } from 'antd';

export const Footer: React.FC = props => (
  <div>
    Find me here:
    <Button
      icon="github"
      style={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
        marginLeft: 4
      }}
      href="https://github.com/OfficerHalf"
      target="_blank"
      rel="noreferrer"
    />
    <Button
      icon="linkedin"
      style={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none'
      }}
      href="https://www.linkedin.com/in/nathan-r-smith/"
      target="_blank"
      rel="noreferrer"
    />
    <span style={{ float: 'right' }}>© Nathan Smith 2019</span>
  </div>
);