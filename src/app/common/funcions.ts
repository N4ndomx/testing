export function sumaX(dataX: number[]): number {
    return dataX.reduce((acc, x) => acc + x, 0);
}


export function sumaXY(dataX: number[], dataY: number[]): number {
    return dataX.reduce((acc, x, index) => acc + x * dataY[index], 0);
}

// Función para calcular la suma de los cuadrados de los valores de Y
export function sumaYY(dataY: number[]): number {
    return dataY.reduce((acc, y) => acc + y * y, 0);
}

export function sumSquared(arr: number[]): number {
    // Esta función suma los cuadrados de los elementos de un arreglo.
    const squared = arr.map((value) => value * value);
    return sumaX(squared);
}


function gamma(x: number): number {
    let facto: number = 1;
    if (x % 1 === 0) {
        x = x - 1;
        for (let index = x; index > 1; index--) {
            facto *= index;
        }
        return facto;
    } else {
        for (let i = x - 1; i > 0; i--) {
            facto *= i;
        }
        return facto * Math.sqrt(Math.PI);
    }
}

export function distribucionT(dof: number, x: number, n_seg: number): number[] {
    const w: number = (x - 0) / n_seg;
    let anterior: number = 0;
    const arraX: number[] = [];
    const arraP2: number[] = [];

    for (let i = 0; i < n_seg + 1; i++) {
        if (i !== 0) {
            arraX[i] = anterior + w;
            anterior = arraX[i];
        } else {
            arraX[i] = 0;
        }
    }

    for (let i = 0; i < arraX.length; i++) {
        const p1 = 1 + (Math.pow(arraX[i], 2) / dof);
        arraP2[i] = Math.pow(p1, ((dof + 1) / 2) * -1);
    }

    const numerador: number = gamma((dof + 1) / 2);
    const denominador: number = (Math.pow((dof * Math.PI), 0.5)) * gamma(dof / 2);
    const cons: number = numerador / denominador;

    const fx: number[] = arraP2.map(p2 => p2 * cons);
    return fx;
}


