import CustomDropDown from "./common/CustomDropDown";
import '../App.css';

const Home = () => {
  const colors = ["red", "yellow", "green", "blue"];
  const components = [
    { title: "React", id: "react" },
    { title: "Angular", id: "angular" },
    { title: "Vue", id: "vue" },
    { title: "Ember", id: "ember" },
  ];

  return (
    <div  >
      <h1>home</h1>
      <CustomDropDown colors={colors} components={components} searchable={true}/>
    </div>
  );
};

export default Home;
