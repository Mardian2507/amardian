import Layout from "@components/Layout";
import FooterVideo from "components/FooterVideo";
import HomeAbout from "components/HomeAbout";

export default function Home() {
  return (
    <Layout title="Mardian Suherman">
      <>
        <HomeAbout />
        <FooterVideo />
      </>
    </Layout>
  );
}
