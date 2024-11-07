import React from 'react';

interface ReqOptIndicatorProps {
  optional: boolean;
}

const ReqOptIndicator = ({ optional }: ReqOptIndicatorProps) => {
  return (
    <>
      {optional ? (
        <sup className="text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1">
          {'(optional)'}
        </sup>
      ) : (
        <sup className={`text-_-states-error font-bold text-xs ml-0.5`}>
          {'*'}
        </sup>
      )}
    </>
  );
};
export default ReqOptIndicator;
