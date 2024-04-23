import React from "react";

import { Loading, SkeletonComponent } from "components/loading/styles";

const LoadingComponent = (): React.ReactElement => {
  return (
    <>
      <SkeletonComponent width={"100%"} height={"100%"} variant='rectangular' />
      <Loading />
    </>
  );
};

export default LoadingComponent;

LoadingComponent.displayName = "LoadingComponent";
