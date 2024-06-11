export const getShopCategoryBanner = (pathname: string) => {
  let category;
  let brand;

  switch (true) {
    case pathname.includes("/monitors/samsung"):
      category = "Monitor";
      brand = "Samsung";
      break;
    case pathname.includes("/laptops/dell"):
      category = "Laptop";
      brand = "Dell";
      break;
    case pathname.includes("/laptops/hp"):
      category = "Laptop";
      brand = "HP";
      break;
    case pathname.includes("/laptops/apple"):
      category = "Laptop";
      brand = "Apple";
      break;
    case pathname.includes("/cameras/nikon"):
      category = "Camera";
      brand = "Nikon";
      break;
    case pathname.includes("/cameras/canon"):
      category = "Camera";
      brand = "Canon";
      break;
    case pathname.includes("/cameras"):
      category = "Camera";
      break;
    case pathname.includes("/laptops"):
      category = "Laptop";
      break;
    case pathname.includes("/monitors"):
      category = "Monitor";
      break;
    case pathname.includes("/cameras/sony"):
      category = "Camera";
      brand = "Sony";
      break;
    default:
      category = "";
      brand = "";
  }

  const bgUrl =
    category === "Monitor"
      ? "bg-[url('https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      : category === "Laptop"
        ? "bg-[url('https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        : category === "Camera"
          ? "bg-[url('https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
          : "bg-secondary";

  return { bgUrl, brand, category };
};
