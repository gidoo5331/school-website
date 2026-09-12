// Contact and institutional details sourced from the 2026/2027 prospectus.
// Replace the email and social handles once officially confirmed.
export const site = {
  name: "Obama College",
  fullName: "Obama College, Mankessim",
  shortName: "OBACO",
  motto: "You Can",
  established: 2009,
  description:
    "Obama College, Mankessim is a mixed day and boarding Senior High School in the Central Region of Ghana, offering General Arts, General Science, Business, Home Economics, and Visual Arts under the Free SHS programme.",
  location: "Mankessim, Central Region, Ghana",
  contact: {
    address: "Obama College, Mankessim, Central Region, Ghana",
    phones: ["0540 901303"],
    // wa.me requires the full international number, no leading zero or symbols.
    whatsapp: "233540901303",
    email: "info@obamacollege.net",
    officeHours: "Monday – Friday, 8:00am – 4:00pm",
  },
  map: {
    coordinates: { lat: 5.2675599, lng: -0.9988335 },
    placeUrl:
      "https://www.google.com/maps/place/OBAMA+COLLEGE,+MANKESSIM/@5.2675599,-0.9988335,1264m/data=!3m2!1e3!4b1!4m6!3m5!1s0xfde112b6691f0b7:0x67608ec37a2d315c!8m2!3d5.2675599!4d-0.9988335!16s%2Fg%2F11zdd4rb72",
  },
  banks: [
    { bank: "ADB", accountName: "Obama College Mankessim", branch: "Mankessim", accountNumber: "3041010106647901" },
    { bank: "GCB Bank", accountName: "Obaco Ghana Limited", branch: "Mankessim", accountNumber: "3091130000613" },
  ],
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
  },
} as const;
