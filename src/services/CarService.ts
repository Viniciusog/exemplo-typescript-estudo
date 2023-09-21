interface Car {
    id: number;
    model: string;
    plate: string;
}

export function getCar(): Car {
    const car: Car = {
        id: 1,
        model: "Ford K",
        plate: "HJU1234",
    }

    return car;
}