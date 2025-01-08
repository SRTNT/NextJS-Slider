import Slider from "@/src/app/Components/Slider";
import { getMainPageData } from "@/src/Business/GetMainPageData";

export default async function Home() {
  const data = await getMainPageData();

  return (
    <div className="p-2 flex flex-col gap-5" dir="rtl">
      <span>Slider Test</span>
      <div className="">
        <Slider data={data} />
      </div>
    </div>
  );
}
