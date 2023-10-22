export function sumaX(dataX: number[]): number {
    return dataX.reduce((acc, x) => acc + x, 0);
}

export function sumaY(dataX: number[], dataY: number[]): number {
    return dataY.reduce((acc, y) => acc + y, 0);
}

export function sumaXY(dataX: number[], dataY: number[]): number {
    return dataX.reduce((acc, x, index) => acc + x * dataY[index], 0);
}

export function sumaXX(dataX: number[]): number {
    return dataX.reduce((acc, x) => acc + x * x, 0);
}