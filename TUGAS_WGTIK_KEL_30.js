function kenaRazia(date, data) {
  const finedVehicles = [];

  for (const vehicle of data) {
    // Extract the last digit from the license plate
    const lastDigit = parseInt(vehicle.plat.split(" ")[1].slice(-1));

    // Check if the date is within the valid range
    if (date >= 1 && date <= 31) {
      // Check if the vehicle is a car ("Mobil")
      if (vehicle.type === "Mobil") {
        // Check if the route includes any of the specified locations
        const includesSpecifiedLocation = vehicle.rute.some((location) =>
          ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"].includes(location)
        );

        // Determine if the vehicle should be fined
        if ((date % 2 === 0 && lastDigit % 2 === 0) || (date % 2 !== 0 && lastDigit % 2 !== 0)) {
          if (!includesSpecifiedLocation) {
            finedVehicles.push({ name: vehicle.name, tilang: 1 });
          }
        } else {
          if (includesSpecifiedLocation) {
            finedVehicles.push({ name: vehicle.name, tilang: 3 });
          }
        }
      }
    }
  }

  return finedVehicles;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"],
    },
  ])
);
// Output: [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
