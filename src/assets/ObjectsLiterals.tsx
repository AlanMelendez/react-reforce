interface Person {
    name:string,
    lastName:string,
    age:number,
    address: Address
}

interface Address {
    street:string,
    city:string,
    state:string
}

// Object literals
export const ObjectLiteralExample = () => {
    const person: Person = {
        name: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    }
    console.log(person);

    return <>
        <h2>Object Literals</h2>
        <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
}

