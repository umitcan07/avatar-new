function hash(str: string, p: number): number {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i) * i * i;;
    }
    return sum % p;

}

export default hash;