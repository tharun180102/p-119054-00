import { BadgeManagement } from "@/components/badges/BadgeManagement";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Badge Management System</h1>
        <BadgeManagement />
      </div>
    </div>
  );
};

export default Index;
