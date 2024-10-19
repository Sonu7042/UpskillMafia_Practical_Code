const services = [
    { name: "Website Design", price: 500 },
    { name: "SEO Optimization", price: 300 },
    { name: "Graphic Design", price: 200 },
    { name: "App Development", price: 1000 }
  ];
  
  // Filter out "Graphic Design" service
  const filteredServices = services.filter(service => service.name == "Graphic Design");
  
  console.log(filteredServices);
  // Output: 
  // [
  //   { name: "Website Design", price: 500 },
  //   { name: "SEO Optimization", price: 300 },
  //   { name: "App Development", price: 1000 }
  // ]
  