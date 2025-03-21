import { faker } from '@faker-js/faker';

export class DataGenerator {
    generateFullName(): string {
        return `${this.generateName()} ${this.generateLastName()}`
    }

    generateName(): string {
        return faker.person.firstName()
    }

    generateLastName(): string {
        return faker.person.lastName()
    }

    generateEmail(name?: string): string {
        return `${name}${faker.number.int({ min: 1000, max: 9999 })}@test.com`;
    }
}
