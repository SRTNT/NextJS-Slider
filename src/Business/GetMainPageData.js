import fs from "fs/promises";
import path from "path";

export async function getMainPageData() {
  try {
    const filePath = path.join(process.cwd(), "data", "mainPageData.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch {
    return [
      { id: 1, url: "/images/pic1.jpg", title: "pic1", link: "/products" },
      { id: 2, url: "/images/pic2.jpg", title: "pic2", link: "/products" },
      { id: 3, url: "/images/pic3.jpg", title: "pic3", link: "/products" },
    ];
  }
}
