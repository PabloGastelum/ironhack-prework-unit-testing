import { capitalize, multiply, isPalindrome, reverseString, fetchPrices } from "../functions";

test("capitalize function capitalizes the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
});

test("check if the back of the text is applied correctly", () => {
    expect(reverseString('digital@femsa')).toEqual('asmef@latigid');
    expect(reverseString('#digital')).toEqual('latigid#');
    expect(reverseString("iron-hack")).toEqual('kcah-nori');
});

const valid = ['ana', 'omo', 'Añora la roña', '¿Será lodo o dólares?', 'Yo dono rosas, oro no doy', 'Anula la luna', 'Di clases al Cid']
const invalid = ['telmo', 'palabra', 'palindromo']

describe('is palindrome', () => {

    it.each(valid)(`%s should be valid`, (word) => {
        expect(isPalindrome(word)).toBeTruthy();
    })

    it.each(invalid)(`%s should be invalid`, (word) => {
        expect(isPalindrome(word)).toBeFalsy();
    })
})


describe("Check prices with fetch", () => {
    test('Check prices correctly', async () => {
        await expect(fetchPrices("success")).resolves.toStrictEqual([13, 232, 94, 6, 17]);
    });

    test('Consulting prices with an error', async () => {
        await expect(fetchPrices("error")).rejects.toBeInstanceOf(Error);
    });
})