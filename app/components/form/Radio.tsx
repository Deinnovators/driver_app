import { Box } from '@app/components/box';
import React from 'react';

export interface RadioProps {
  active?: boolean;
}

const size = 14;
const innerSize = 8;

const Radio: React.FC<RadioProps> = ({ active }) => {
  return (
    <Box
      height={size}
      width={size}
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      borderWidth={1}
      borderColor={active ? 'primary' : 'grey'}
      style={{ borderRadius: size / 2 }}>
      <Box
        height={innerSize}
        width={innerSize}
        style={{ borderRadius: innerSize / 2 }}
        bg={active ? 'primary' : 'transparent'}
      />
    </Box>
  );
};

export default Radio;
