export const getLinkUrlCategory = (brand: string) => {
  switch (brand) {
    case "nikon":
    case "sony":
    case "canon":
      return "cameras";
    case "hp":
    case "dell":
    case "apple":
      return "laptops";
    case "samsung":
      return "monitors";
    default:
      return "";
  }
};
