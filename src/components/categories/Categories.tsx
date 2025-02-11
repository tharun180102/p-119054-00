
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Category {
  id: string;
  name: string;
  isCustom: boolean;
}

export const Categories = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Technology", isCustom: false },
    { id: "2", name: "Soft Skills", isCustom: false },
    { id: "3", name: "Production", isCustom: false },
    { id: "4", name: "Manufacturing", isCustom: false },
  ]);
  
  const [newCategory, setNewCategory] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddCategory = () => {
    if (!isAdding) {
      setIsAdding(true);
      return;
    }

    if (newCategory.trim()) {
      const categoryExists = categories.some(
        (cat) => cat.name.toLowerCase() === newCategory.trim().toLowerCase()
      );

      if (categoryExists) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "This category already exists.",
        });
        return;
      }

      const newCategoryObj: Category = {
        id: `custom-${Date.now()}`,
        name: newCategory.trim(),
        isCustom: true,
      };

      setCategories([...categories, newCategoryObj]);
      setNewCategory("");
      setIsAdding(false);
      
      toast({
        title: "Success",
        description: "Category added successfully.",
      });
    }
  };

  const handleRemoveCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    toast({
      title: "Success",
      description: "Category removed successfully.",
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
          i
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              category.isCustom ? "bg-white border-2 border-blue-500" : "bg-blue-500 text-white"
            }`}
          >
            <span>{category.name}</span>
            {category.isCustom && (
              <button
                onClick={() => handleRemoveCategory(category.id)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}

        {isAdding ? (
          <div className="flex gap-2">
            <Input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
              className="w-40"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddCategory();
                }
              }}
            />
            <Button onClick={handleAddCategory} variant="default">
              Add
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleAddCategory}
            variant="outline"
            className="border-2 border-blue-500 text-blue-500"
          >
            + Add new
          </Button>
        )}
      </div>
    </div>
  );
};
