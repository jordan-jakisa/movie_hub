import "boxicons";

function SideNav() {
  const NavItems = ["Home", "Browse", "Trending", "Saved", "Playlist"];

  return (
    <>
      <div className="flex flex-col h-screen justify-between p-8">
        <h1 className="text-red-500 font-bold text-lg">Movie Hub!</h1>

        <ul className="flex flex-col gap-8">
          {NavItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div className="flex flex-row">
          <box-icon name="cog"></box-icon>
          <p>Setting</p>
        </div>
      </div>
    </>
  );
}

export default SideNav;
