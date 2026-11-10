import Home from "./pages/home/home";
import { metaData } from "./configs/ui";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || [];
  const name = searchParams.name ? ` - ${searchParams.name}` : "";

  // Đường dẫn URL của trang web trên Vercel
  const baseUrl = metaData.main.url || "https://thiepdamcuoi-eta.vercel.app";
  const currentUrl = searchParams.name
    ? `${baseUrl}?name=${encodeURIComponent(searchParams.name)}`
    : baseUrl;

  const title = `${metaData.main.title}${name}`;
  const description =
    metaData.main.description ||
    "Trân trọng kính mời bạn đến dự buổi lễ kết hôn của chúng tôi!";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: currentUrl,
      type: "website",
      images: [metaData.main.graphImage, ...previousImages],
    },
  };
}

export default function Page({ params, searchParams }) {
  return <Home />;
}