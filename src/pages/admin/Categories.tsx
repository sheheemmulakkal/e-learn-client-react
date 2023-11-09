import CategoryList from "../../components/admin/CategoryList";
import LanguageList from "../../components/admin/LanguageList";
import LevelList from "../../components/admin/LevelList";

const Categories = () => {
  return (
    <div className="mb-10">
      <CategoryList />
      <LanguageList />
      <LevelList />
    </div>
  );
};

export default Categories;
