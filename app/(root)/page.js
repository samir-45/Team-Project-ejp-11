// homepage components
import AboutUsSection from "@/components/(root)/AboutUsSection";
import FeaturedServices from "@/components/(root)/FeaturedServices";
import Footer from "@/components/(root)/Footer";
import HeroWithNav from "@/components/(root)/HeroWithNav";
import ProjectsSection from "@/components/(root)/ProjectsSection";
import WhyChooseUsSection from "@/components/(root)/WhyChooseUsSection";

export default async function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-10xl">
      <div className=" px-4 sm:px-6 lg:px-8 mt-5 mb-30">
        <HeroWithNav />
      </div>
      {/* Middle components and elements */}
      <div>
        <AboutUsSection />
      </div>
      <div>
        <ProjectsSection />
      </div>
      <div className="mb-24">
        <FeaturedServices />
      </div>
      <div>
        <WhyChooseUsSection />
      </div>
      {/* Middle components and elements end */}
      <div className="px-4 sm:px-6 lg:px-8 py-5">
        <Footer />
      </div>
    </div>
  );
}
