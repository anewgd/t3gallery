
import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/zyRHyeDUR8B00PHs3YzLwWaEsezl47o8M5IUk0hQySJRdnA6",
  "https://utfs.io/f/zyRHyeDUR8B0W3TptgZBShVClPIG8p3Tx7Yegtwdmvz6aJZ1",
  "https://utfs.io/f/zyRHyeDUR8B0usaZf2hAk1RjVTt7lrU0ISGaHZPcOX83Cbom",
  "https://utfs.io/f/zyRHyeDUR8B0epY5ICmZmN5fWIBMEGstAoeriaRKSvuhyDp9"
]

const mockImages = mockURLs.map((url, index) => ({
  id: index,
  url,
}))
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
         {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="Image" />
          </div>
         ))}
         </div>
    </main>
  );
}
