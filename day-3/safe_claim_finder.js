export default (claims_arr) => {
  // create placeholders for data
  const map = { /* '<X>,<Y>': [<ID>] */ }
  let id_map = { /* '<ID>': { duplicated: <BOOLEAN> } */ }
  //  Loop through all the claims
  for (let i = 0; i < claims_arr.length; i++) {
    const { coordinates, area, id } = claims_arr[i]
    // Add the claim id to the id_map
    id_map[id] = { duplicated: false }
    let [ x_start, y_start ] = coordinates
    let [ width, height ] = area
    // Loop through the x coordinates and fill cells by looping through the y at each iteration
    for (let x = x_start ; x < x_start + width ; x++) {
      for (let y = y_start ; y < y_start + height ; y++) {
        const map_key = `${x},${y}`
        if (!map[map_key]) { map[map_key] = [] }
        map[map_key].push(id)
        // Handle for overlapping claims
        if (map[map_key].length > 1) {
          map[map_key].forEach((claim_id) => {
            id_map[claim_id].duplicated = true
          })
        }
      }
    }
  }
  // Determine the safe claim
  for (let key in id_map) {
    if (id_map[key].duplicated === false) {
      return key
    }
  }
}
