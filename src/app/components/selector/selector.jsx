import React from "react";

import { Tabs, Tab } from "@nextui-org/react";
// import { LeagueIcon } from "./GalleryIcon";
// import { MusicIcon } from "./MusicIcon";
// import { VideoIcon } from "./VideoIcon";

const Selector = ({ selectedLeague, onLeagueChange }) => {
  const handleTabChange = (selectedKey) => {
    onLeagueChange(selectedKey);
  };

  return (
    <div className="flex justify-center items-center pt-4 pb-8">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        selectedKey={selectedLeague}
        onSelectionChange={handleTabChange}
        size="lg"
      >
        <Tab
          key="liga1"
          title={
            <div className="flex items-center space-x-2">
              <span>Liga Mayores</span>
            </div>
          }
        />
        <Tab
          key="liga2"
          title={
            <div className="flex items-center space-x-2">
              <span>Liga Sub-21</span>
            </div>
          }
        />
        <Tab
          key="liga3"
          title={
            <div className="flex items-center space-x-2">
              <span>Copa Sub-21</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
};

export default Selector;
