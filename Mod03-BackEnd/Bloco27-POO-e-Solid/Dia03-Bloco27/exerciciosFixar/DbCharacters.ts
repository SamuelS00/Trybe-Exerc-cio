interface Character {
    name: string;
    specialMove: string;
}

interface DbCharacter extends Character {
    id: number;
}

const db: DbCharacter[] = [];

interface IModel {
    create(character: Character): void;
    getAll(): void;
    getById(id: number): void;
};

class LocalDbModel implements IModel {
    getAll(): void {
        console.log('200', db);    
    };

    getById(id: number): void {
        const character = db.find((c) => c.id === id);

        console.log('200', character);
    }

    create(character: Character): void {
        const newId = db.length + 1
        db.push({ id: newId, ...character});

        console.log('201');
    };
};