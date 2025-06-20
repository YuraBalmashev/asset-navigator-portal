
export const mockVehicles = [
  {
    id: "car1",
    type: "vehicle" as const,
    title: "Audi Q7 Premium Plus",
    price: 7400000,
    imageUrl: "https://images.unsplash.com/photo-1581362508255-e4e31556f06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow",
    specs: [
      { label: "Год", value: "2021" },
      { label: "Пробег", value: "25,000 km" },
      { label: "Двигатель", value: "3.0L V6" },
      { label: "Цвет", value: "Black" },
    ],
    isFavorite: true,
  },
  {
    id: "car2",
    type: "vehicle" as const,
    title: "Mercedes-Benz E-Class",
    price: 5200000,
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "St. Petersburg",
    specs: [
      { label: "Год", value: "2020" },
      { label: "Пробег", value: "32,000 km" },
      { label: "Двигатель", value: "2.0L I4" },
      { label: "Цвет", value: "Silver" },
    ],
    isFavorite: false,
  },
  {
    id: "veh1",
    type: "vehicle" as const,
    title: "Mercedes-Benz Sprinter",
    price: 4500000,
    imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Год", value: "2023" },
      { label: "Пробег", value: "25,000 км" },
      { label: "Двигатель", value: "2.1L Дизель" },
      { label: "Цвет", value: "Белый" },
    ],
    isFavorite: false,
  },
  {
    id: "car3",
    type: "vehicle" as const,
    title: "BMW X5 xDrive",
    price: 45000000,
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Kazan",
    specs: [
      { label: "Year", value: "2022" },
      { label: "Пробег", value: "18,500 km" },
      { label: "Двигатель", value: "3.0L I6" },
      { label: "Цвет", value: "Белый" },
    ],
    isFavorite: false,
  },
];
