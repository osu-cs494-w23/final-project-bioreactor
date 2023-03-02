export function getJar(state, jarName) {
    for (let i = 0; i < state.app["jars"].length; i++) {
        if (state.app["jars"][i]["name"] === jarName) {
            return state.app["jars"][i]
        }
    }
}