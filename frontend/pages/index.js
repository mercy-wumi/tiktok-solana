import MainView from "../components/MainView";

export default function Home() {
  let connected = true;
  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <div className="loginContainer">connect button</div>
      )}
    </div>
  );
}
