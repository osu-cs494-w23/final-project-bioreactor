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
