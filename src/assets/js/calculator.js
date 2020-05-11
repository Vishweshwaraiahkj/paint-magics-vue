export const EstimationCalculator = data => {
  let errors = {
    error: false,
    messages: []
  };
  console.log("Data in JS file: ", data);
  let sqft_area = data.calculationData.areaValue
    ? data.calculationData.areaValue
    : 0;

  if (!sqft_area) {
    errors.error = true;
    errors.messages.push("Please enter a proper Area in square foot!");
  }

  let wall_paint_rate = 0;
  let ceiling_paint_rate = 0;
  let ip_walls_obj = {};
  let ip_ceiling_obj = {};
  let ip_for_walls = 0;
  let ip_for_ceiling = 0;
  let final_price_without_ceiling = 0;
  let final_price_with_ceiling = 0;

  if (data.calculationData.typeValue.code == "interior_paints") {
    if (data.calculationData.areaType.code == "carpet_area") {
      ip_walls_obj = data.increasing_prop.interior.carpet_area.walls;
      ip_ceiling_obj = data.increasing_prop.interior.carpet_area.ceiling;

      switch (data.calculationData.bhkValue.code) {
        case "1bhk":
          ip_for_walls = ip_walls_obj["1bhk"];
          ip_for_ceiling = ip_ceiling_obj["1bhk"];
          break;
        case "2bhk":
          ip_for_walls = ip_walls_obj["2bhk"];
          ip_for_ceiling = ip_ceiling_obj["2bhk"];
          break;
        case "3bhk":
          ip_for_walls = ip_walls_obj["3bhk"];
          ip_for_ceiling = ip_ceiling_obj["3bhk"];
          break;
        case "4bhk":
          ip_for_walls = ip_walls_obj["4bhk"];
          ip_for_ceiling = ip_ceiling_obj["4bhk"];
          break;
        case "villa_duplex":
          ip_for_walls = ip_walls_obj["villa_duplex"];
          ip_for_ceiling = ip_ceiling_obj["villa_duplex"];
          break;
      }
    } else {
      ip_walls_obj = data.increasing_prop.interior.buildup_area.walls;
      ip_ceiling_obj = data.increasing_prop.interior.buildup_area.ceiling;

      switch (data.calculationData.bhkValue.code) {
        case "1bhk":
          ip_for_walls = ip_walls_obj["1bhk"];
          ip_for_ceiling = ip_ceiling_obj["1bhk"];
          break;
        case "2bhk":
          ip_for_walls = ip_walls_obj["2bhk"];
          ip_for_ceiling = ip_ceiling_obj["2bhk"];
          break;
        case "3bhk":
          ip_for_walls = ip_walls_obj["3bhk"];
          ip_for_ceiling = ip_ceiling_obj["3bhk"];
          break;
        case "4bhk":
          ip_for_walls = ip_walls_obj["4bhk"];
          ip_for_ceiling = ip_ceiling_obj["4bhk"];
          break;
        case "villa_duplex":
          ip_for_walls = ip_walls_obj["villa_duplex"];
          ip_for_ceiling = ip_ceiling_obj["villa_duplex"];
          break;
      }
    }
  } else {
    if (data.calculationData.areaType.code == "buildup_area") {
      ip_walls_obj = data.increasing_prop.exterior.buildup_area.walls;

      switch (data.calculationData.floorValue.code) {
        case "f0":
          ip_for_walls = ip_walls_obj["f0"];
          break;
        case "f1":
          ip_for_walls = ip_walls_obj["f1"];
          break;
        case "f2":
          ip_for_walls = ip_walls_obj["f2"];
          break;
        case "f3":
          ip_for_walls = ip_walls_obj["f3"];
          break;
        case "f4":
          ip_for_walls = ip_walls_obj["f4"];
          break;
      }
    }
  }

  if (data.calculationData.wallsPaintProduct.rate) {
    wall_paint_rate = data.calculationData.wallsPaintProduct.rate;
  }
  if (ip_for_walls) {
    final_price_without_ceiling = sqft_area * ip_for_walls * wall_paint_rate;
  }

  if (data.calculationData.ceilingPaintProduct.rate) {
    ceiling_paint_rate = data.calculationData.ceilingPaintProduct.rate;
  }

  if (ip_for_ceiling && data.calculationData.includeCeilingPaint) {
    final_price_with_ceiling = sqft_area * ip_for_ceiling * ceiling_paint_rate;
  }

  const totalPrice = final_price_without_ceiling + final_price_with_ceiling;
  let result = {};
  if (totalPrice) {
    result = {
      error: false,
      total: totalPrice
    }
  }

  if (result && result.total) {
    return result;
  } else {
    return errors;
  }
};
