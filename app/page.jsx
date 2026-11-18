import markup from "../lib/markup";
import Motion from "./Motion";

export default function Page() {
  return (<><div dangerouslySetInnerHTML={{ __html: markup }} /><Motion /></>);
}
