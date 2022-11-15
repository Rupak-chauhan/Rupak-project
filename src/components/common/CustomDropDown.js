import { useEffect, useState } from "react";

const CustomDropDown = (props) => {
  const { searchable, colors, components } = props;
  const [searchedColors, setSearchedColors] = useState([]);
  const [searchedComponents, setSearchedComponents] = useState([]);

  useEffect(() => {
    setSearchedColors(colors);
    setSearchedComponents(components);
  }, [colors, components]);

  const searchHandler = (event) => {
    if (event.target.value === "") {
      setSearchedColors(colors);
      setSearchedComponents(components);
    } else {
      const filteredColorsArr =
        colors &&
        colors.length &&
        colors.filter((color) => event.target.value === color);
      setSearchedColors(filteredColorsArr);

      const filteredComponentsArr =
        components &&
        components.length &&
        components.filter(
          (component) => event.target.value === component.title
        );
      setSearchedComponents(filteredComponentsArr);
    }
  };

  return (
    <div>

      <select className="dropdown">
      
        {searchedColors?.length &&
          searchedColors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}

        {searchedComponents?.length &&
          searchedComponents.map((component) => (
            <option key={component.id} value={component.title}>
              {component.title}
            </option>
          ))}

      </select>

      {searchable && (
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          onChange={searchHandler}
        />
      )}
    </div>
  );
};
export default CustomDropDown;
