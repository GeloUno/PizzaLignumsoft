import React from 'react';

interface MarginWithPaddingProps {
  margin: number;
  padding: number;
  children: React.ReactNode;
}

function Content({ margin, padding, children }: MarginWithPaddingProps) {
  return (
    <div
      className={`d-flex justify-content-center m-${margin} p-${padding} align-content-start flex-wrap`}
    >
      {children}
    </div>
  );
}

export default Content;
