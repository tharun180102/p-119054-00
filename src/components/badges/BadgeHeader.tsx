import React from "react";

interface BadgeHeaderProps {
  onAddNew: () => void;
}

export const BadgeHeader: React.FC<BadgeHeaderProps> = ({ onAddNew }) => {
  return (
    <div className="flex w-full items-center gap-[40px_100px] text-lg justify-between flex-wrap pb-3 border-[rgba(248,248,248,1)] border-b max-md:max-w-full">
      <div className="text-[rgba(118,118,118,1)] font-bold self-stretch my-auto">
        Badges and Points range
      </div>
      <button
        onClick={onAddNew}
        className="self-stretch border gap-2.5 text-[rgba(86,129,239,1)] font-semibold my-auto px-5 py-3.5 rounded-md border-[rgba(86,129,239,1)] border-solid hover:bg-[rgba(86,129,239,0.1)] transition-colors"
      >
        + Add New Badge
      </button>
    </div>
  );
};
