import Toast from "../components/base/Toast/index";


export default {
  title: "Component/Toast",
};

export const Default = () => {
  return (
    <button onClick={() => Toast.show("안녕하세요!", 3000)}>Show Toast</button>
  );
};
