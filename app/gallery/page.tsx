import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { GalleryFilter } from "@/components/gallery/gallery-filter";
import { seniorHighGallery } from "@/data/senior-high/gallery";

const allImages = seniorHighGallery;

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of campus life, classrooms, sports, and events at Obama College.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A look at life on campus at Obama College Senior High School."
        breadcrumb={[{ label: "Gallery" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <GalleryFilter images={allImages} />
      </div>
    </>
  );
}
