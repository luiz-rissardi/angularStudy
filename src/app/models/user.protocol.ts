

export type User = {
    userName: string,
    age: number,
}

export interface BaseRepository {
    insert(user: User): Promise<User>;
    find(): Promise< User[]>;
}