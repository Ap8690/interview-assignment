export const ShootColor = (amount: number) => {
    if (amount === 0) return "text-gray-100"
    else if (amount > 0) return "text-aquamarine"
    else return "text-tomato"
}
