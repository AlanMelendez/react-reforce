/* eslint-disable @typescript-eslint/no-wrapper-object-types */
export const BasicFunctions = () => {
    const addTwoNumbers = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h2>Basic Functions</h2>
            <p>2 + 3 = {addTwoNumbers(2,3)}</p>
        </>
    )
}