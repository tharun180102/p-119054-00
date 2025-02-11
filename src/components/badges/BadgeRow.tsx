import React from "react";

interface BadgeRowProps {
  title: string;
  pointsRange: string;
  badgeImage?: string;
  onEdit: () => void;
  onDelete: () => void;
  isSelected?: boolean;
}

export const BadgeRow: React.FC<BadgeRowProps> = ({
  title,
  pointsRange,
  badgeImage,
  onEdit,
  onDelete,
  isSelected,
}) => {
  return (
    <div className="bg-[rgba(248,248,248,1)] flex w-full items-stretch gap-10 flex-wrap p-3 rounded-xl max-md:max-w-full">
      <div className="flex min-w-60 gap-[40px_50px] text-lg text-[rgba(34,34,34,1)] font-medium whitespace-nowrap flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          <div
            className={`self-stretch flex-1 shrink bg-white min-h-[55px] w-full gap-2.5 px-3 py-[17px] rounded-lg ${isSelected ? "border-[rgba(86,129,239,1)] border-solid border" : ""}`}
          >
            {title}
          </div>
        </div>
        <div className="min-w-60 flex-1 shrink basis-[0%]">
          <div className="self-stretch flex-1 shrink bg-white min-h-[55px] w-full gap-2.5 px-3 py-[17px] rounded-lg">
            {pointsRange}
          </div>
        </div>
      </div>
      <div className="flex min-w-60 items-center gap-[40px_50px] h-full max-md:max-w-full">
        <div className="self-stretch flex min-w-60 items-center gap-1.5 text-lg text-[rgba(86,129,239,1)] font-medium my-auto">
          {badgeImage ? (
            <img
              src={badgeImage}
              alt="Badge"
              className="w-[55px] h-[55px] rounded-full object-cover"
            />
          ) : (
            <div className="bg-[rgba(227,87,77,1)] self-stretch flex w-[55px] shrink-0 h-[55px] my-auto rounded-[100px] border-[rgba(130,44,40,1)] border-solid border-2" />
          )}
          <div className="self-stretch my-auto">Upload custom badge</div>
        </div>
        <div className="self-stretch flex gap-[18px] w-[119px] my-auto">
          <button
            onClick={onEdit}
            className="bg-[rgba(86,129,239,1)] flex items-center gap-2.5 overflow-hidden justify-center w-[50px] h-[50px] flex-1 shrink basis-[0%] px-4 rounded-md hover:bg-[rgba(86,129,239,0.9)] transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d3003d8460d84960a9fec969158b8a9c/10f6c063435c5e2a12e278d45ed3d4b0d5cc030134981291d796e43f7b89912e"
              className="aspect-[1] object-contain w-[17px] self-stretch my-auto"
              alt="Edit"
            />
          </button>
          <button
            onClick={onDelete}
            className="bg-white border flex items-center gap-2.5 overflow-hidden justify-center w-[49px] h-[49px] flex-1 shrink basis-[0%] px-4 rounded-md border-[rgba(231,24,24,1)] border-solid hover:bg-red-50 transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d3003d8460d84960a9fec969158b8a9c/8b536eeb3070a365486db295aa63517a9a54848455a785299f1e22335cb8fe01"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
