export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function isPalindrome(word: string): boolean {
    const formattedWord: string = word.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[\W]/g, '');

    for (let i = 0; i < formattedWord.length / 2; i++) {
        if (formattedWord[i] !== formattedWord[formattedWord.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

export function reverseString(str: string): string {
    const letters = str.split("");
    return letters.reduce((rev, strRev) => strRev + rev, "");
}

type DataResult = { status: string; data: number[] };

export function fetchProductPrices(url: string): Promise<DataResult> {
    return new Promise<DataResult>((res, rej) => {
        setTimeout(() => {
            if (url === "error") rej("failed to fetch");
            res({ data: [10.90, 200.21, 81, 5, 14.50], status: "success" });
        }, 2000);
    });
}

export function processPricesWithTaxes(data: number[]): Promise<number[]> {
    return new Promise<number[]>((res) => {
        setTimeout(() => {
            res(data.map((num) => Math.round(num + (num * 0.16))));
        }, 1000);
    });
}

export async function fetchPrices(url: string): Promise<number[]> {
    try {
        const { data } = await fetchProductPrices(url);
        return await processPricesWithTaxes(data);
    } catch (error) {
        throw new Error("Error");
    }
}

console.log(fetchPrices("success"))