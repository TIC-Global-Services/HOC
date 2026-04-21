import HorizontalSection from "../../../components/reusable/HorizontalScrollSections";

import MainPanel from "./panels/MainPanel";
import Panel2 from "./panels/Panel2";
import Panel3 from "./panels/Panel3";
import Panel4 from "./panels/Panel4";


export default function CourtSky() {
  return (
    <HorizontalSection
      panels={[MainPanel, Panel2, Panel3, Panel4]}
    />
  );
}