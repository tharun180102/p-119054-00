import React, { useState } from "react";
import { BadgeHeader } from "./BadgeHeader";
import { BadgeRow } from "./BadgeRow";

interface Badge {
  id: string;
  title: string;
  pointsRange: string;
  badgeImage?: string;
}

const initialBadges: Badge[] = [
  { id: "1", title: "Newbie", pointsRange: "0-100" },
  { id: "2", title: "Explorer", pointsRange: "0-100" },
  { id: "3", title: "Challenger", pointsRange: "0-100" },
  { id: "4", title: "Achiever", pointsRange: "0-100" },
  { id: "5", title: "Strategist", pointsRange: "0-100" },
  { id: "6", title: "Newbie", pointsRange: "0-100" },
];

export const BadgeManagement: React.FC = () => {
  const [badges, setBadges] = useState<Badge[]>(initialBadges);
  const [selectedBadge, setSelectedBadge] = useState<string | null>("1");

  const handleAddNew = () => {
    const newBadge: Badge = {
      id: `badge-${Date.now()}`,
      title: "New Badge",
      pointsRange: "0-100",
    };
    setBadges([...badges, newBadge]);
  };

  const handleEdit = (id: string) => {
    setSelectedBadge(id);
  };

  const handleDelete = (id: string) => {
    setBadges(badges.filter((badge) => badge.id !== id));
  };

  return (
    <div className="bg-white p-5 rounded-xl">
      <BadgeHeader onAddNew={handleAddNew} />

      <div className="flex w-full gap-4 text-lg text-black font-medium flex-wrap mt-4 max-md:max-w-full">
        <div className="w-[417px]">Title</div>
        <div className="w-[370px]">Points range</div>
        <div className="w-[301px]">Badge</div>
        <div>Actions</div>
      </div>

      {badges.map((badge) => (
        <BadgeRow
          key={badge.id}
          title={badge.title}
          pointsRange={badge.pointsRange}
          badgeImage={badge.badgeImage}
          isSelected={badge.id === selectedBadge}
          onEdit={() => handleEdit(badge.id)}
          onDelete={() => handleDelete(badge.id)}
        />
      ))}
    </div>
  );
};
