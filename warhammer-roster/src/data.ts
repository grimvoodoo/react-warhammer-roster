
// these values should be stored in a db somewhere
export const shock_trooper: number[] = [6, 4, 4, 3, 3, 1, 1, 6, 5]
export const shock_trooper_sergeant: number[] = [6, 4, 4, 3, 3, 1, 2, 7, 5]

// I can use this function to map a variable to each value in a units stats. this means
// I can call `const trooper = stats(shock_trooper)` then it will map the values, so I can then do:
// `trooper.m` to get the movement value, and `trooper.ws` to get the weaponskill
export const stats = (unit: number[]) => {
    const { m } = { m: unit[0] }
    const { ws } = { ws: unit[1] }
    const { bs } = { bs: unit[2] }
    const { s } = { s: unit[3] }
    const { t } = { t: unit[4] }
    const { w } = { w: unit[5] }
    const { a } = { a: unit[6] }
    const { ld } = { ld: unit[7] }
    const { sv } = { sv: unit[8] }

    return { m, ws, bs, s, t, w, a, ld, sv }
}

// examples of how I can call the stats
// const trooper = stats(shock_trooper)

// console.log(trooper.m)
