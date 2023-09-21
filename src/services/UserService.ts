interface User {
    id: number;
    name: string;
}

export function getUser(): User {
    const user: User = {
        id: 1,
        name: "Vinícius"
    }

    return user;
}