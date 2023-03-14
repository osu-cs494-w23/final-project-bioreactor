export const SELECT_RECIPE = "SELECT_RECIPE";

export function selectRecipe(recipe) {
  return { type: SELECT_RECIPE, recipe };
}
