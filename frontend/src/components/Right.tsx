// Right.tsx
import React from 'react';

interface RightProps {
  option: string;
}

export const Right: React.FC<RightProps> = ({ option }) => {
    return (
      <>
        {option}
      </>
    );
};
