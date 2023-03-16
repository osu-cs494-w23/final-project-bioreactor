export function getJar(state, jarName) {
  for (let i = 0; i < state.jars.app["jars"].length; i++) {
    if (state.jars.app["jars"][i]["name"] === jarName) {
      return state.jars.app["jars"][i];
    }
  }
}

export function getRecipe(state) {
  return state.recipe || null;
}

export function getLocalStatus(state) {
  return state.machineStatus || null;
}

export function getJarName(state) {
  return state.jarName || null;
}

export function getIngredientNames(state) {
  return state.names || [];
}

export function getIngredientAmounts(state) {
  return state.amounts || [];
}
