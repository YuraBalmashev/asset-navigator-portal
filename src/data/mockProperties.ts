
export const mockProperties = [
  {
    id: "prop1",
    type: "property" as const,
    title: "Modern 2-Bedroom Apartment",
    price: 125000,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow City Center",
    specs: [
      { label: "Area", value: "78 m²" },
      { label: "Rooms", value: "2" },
      { label: "Floor", value: "12/24" },
      { label: "Built", value: "2019" },
    ],
    isFavorite: false,
  },
  {
    id: "prop2",
    type: "property" as const,
    title: "Luxury Penthouse with View",
    price: 450000,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "St. Petersburg",
    specs: [
      { label: "Area", value: "210 m²" },
      { label: "Rooms", value: "4" },
      { label: "Floor", value: "15/15" },
      { label: "Built", value: "2021" },
    ],
    isFavorite: true,
  },
  {
    id: "prop3",
    type: "property" as const,
    title: "Suburban Family House",
    price: 320000,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow Oblast",
    specs: [
      { label: "Area", value: "180 m²" },
      { label: "Rooms", value: "5" },
      { label: "Land", value: "1200 m²" },
      { label: "Built", value: "2018" },
    ],
    isFavorite: false,
  },
];
