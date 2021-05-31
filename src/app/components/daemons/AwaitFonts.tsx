import { FC, useMemo } from "react";
import { useQuery } from "react-query";

import { awaitFontsQuery, Font } from "app/queries";

type AwaitFontsProps = {
  fonts: Font[];
};

const AwaitFonts: FC<AwaitFontsProps> = ({ fonts }) => {
  const query = useMemo(() => awaitFontsQuery(fonts), [fonts]);
  useQuery(query);
  return null;
};

export default AwaitFonts;
