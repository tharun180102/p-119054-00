
import React from "react";
import { Categories } from "@/components/categories/Categories";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Categories Management</h1>
        <Categories />
      </div>
    </div>
  );
};

export default CategoriesPage;
