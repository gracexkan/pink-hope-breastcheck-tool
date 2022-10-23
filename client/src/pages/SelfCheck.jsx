import React, { useEffect } from "react";

import BreastCheck from "../components/breastcheck/BreastCheck";

const SelfCheck = () => {
  let [mount, setMount] = React.useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  console.log("first");
  return (
    <div>
      <BreastCheck mount={setMount} />
    </div>
  );
};

export default SelfCheck;
