// Left.tsx
import React from 'react';

interface LeftProps {
  option: string;
}

export const Left: React.FC<LeftProps> = ({ option }) => {
    return (
      <>
        {option}
      </>
    );
};
