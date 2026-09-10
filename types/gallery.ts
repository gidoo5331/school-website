export type GalleryCategory =
  | "Campus"
  | "Students"
  | "Events"
  | "Sports"
  | "Classrooms"
  | "Computer Lab"
  | "Graduation"
  | "Hostel";

export interface GalleryImage {
  id: string;
  image?: string;
  imageCategory: GalleryCategory;
  caption: string;
}
