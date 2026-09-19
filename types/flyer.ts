export interface Flyer {
  id: string;
  image: string;
  title: string;
  link?: string;
  linkLabel?: string;
  /**
   * "contain" (default) shows the whole image uncropped — use for a
   * designed poster/flyer graphic with its own text baked in, where
   * cropping would cut off readable content. "cover" fills the slide
   * edge-to-edge, cropping as needed — use for an ordinary photo.
   */
  fit?: "contain" | "cover";
}
