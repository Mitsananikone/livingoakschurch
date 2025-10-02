import React from "react";
import ArticleTemplate from "@/components/News/articleTemplate";

const RibbonCuttingPage = () => {
  const carouselImages = [
    "/images/OpeningDay/RC-1.jpg",
    "/images/OpeningDay/RC-2.jpg",
    "/images/OpeningDay/RC-3.jpg",
    "/images/OpeningDay/RC-4.jpg",
  ];

  return (
    <ArticleTemplate
      date="September 16th, 2025"
      paragraph="The North Brazoria County Chamber of Commerce joined us in a joyous celebration for the grand opening of Living Oaks Church in Alvin with a ribbon cutting ceremony. What began as a vision to create a welcoming space for the community has now become a reality, thanks to the tireless dedication of Pastor Cary Perrin and the Living Oaks team. Guided by our heartfelt motto, “Leading real people with real hurts to find real hope in Jesus,” the team has spent months planning, organizing, and working passionately to bring this dream to life. Friends, neighbors, and community leaders gathered to witness this milestone, sharing in the excitement and hope that Living Oaks Church promises to bring to Alvin and beyond. From heartfelt speeches to warm fellowship, the ribbon cutting marked not just the opening of a building, but the beginning of a vibrant ministry ready to impact lives."
      bannerText="Ribbon Cutting"
      bannerImage="/images/OpeningDay/RC-banner.jpg"
      carouselImages={carouselImages}
    />
  );
};

export default RibbonCuttingPage;
