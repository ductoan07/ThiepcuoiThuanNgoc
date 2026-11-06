import { metaData } from "../configs/ui";
import Wish from "../pages/wish";

export async function generateMetadata(props, parent) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: metaData.wish.title,
    openGraph: {
      images: [metaData.wish.graphImage, ...previousImages],
    },
  };
}

export default async function Page(props) {
  // Giải quyết Promise của params và searchParams an toàn tuyệt đối
  const params = await props.params;
  const searchParams = await props.searchParams;

  return <Wish />;
}