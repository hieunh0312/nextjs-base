import React, { useEffect } from "react";

function NoSSR() {
  useEffect(() => {
    // EX: Call api here (dispatch, etc)
  }, []);

  return (
    <div>
      <h1>No SSR component</h1>
    </div>
  );
}

export default NoSSR;
