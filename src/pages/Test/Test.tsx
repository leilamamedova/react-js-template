import React from "react";

import useTranslate from "hooks/useTranslate";

const Test = (): React.ReactElement => {
  const { translate } = useTranslate();
  return <div>{translate("home.message")}</div>;
};

export default Test;

Test.displayName = "Test";
