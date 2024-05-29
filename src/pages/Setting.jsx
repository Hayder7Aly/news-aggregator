import React, { useState } from "react";
import { authors, categories } from "../config/config";
import DropDownCheckBoxes from "../components/sharedComponents/DropDownCheckBoxes";
import RadioButtonGroup from "../components/sharedComponents/RadioButtonGroup";
const Setting = () => {
  const [selectedCategories, setCategories] = useState(
    Object.keys(categories).map((category) => ({ [category]: false }))
  );

  const [selectedAuthors, setAuthors] = useState(
    Object.keys(authors).map((category) => ({ [category]: false }))
  );
  const [selectedSource, setSource] = useState("")

  const onSourceChangeHanlder = (e) => {
    setSource(e.target.value)
  }

  console.log(selectedCategories, selectedAuthors, selectedSource);

  return (
    <div className="user-perferences w-full mt-40 flex items-center justify-center">
      <div className="block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-white dark:border-gray-100 w-full">
        <h1 className="text-gray-400 text-xlg">User Perferences</h1>
        <DropDownCheckBoxes
          title="Categories"
          items={categories}
          initialSelectedItems={selectedCategories}
          onSelectionChange={setCategories}
        />

        <span className="mt-5 block"></span>
        <RadioButtonGroup  onInputChangeHandler={onSourceChangeHanlder} />

        <DropDownCheckBoxes
          title="Authors"
          items={authors}
          initialSelectedItems={selectedAuthors}
          onSelectionChange={setAuthors}
        />
      </div>
    </div>
  );
};

export default Setting;


