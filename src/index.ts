let score = {
    passed: 0,
    failed: 0
};

export function describe(name: string, callback: () => void): void {

    score.passed = 0;
    score.failed = 0;

    console.log(`Running test suite: ${name}`);
    callback();

    const { passed, failed } = score;
    const total = passed + failed;
    const percentage = parseInt((passed / total * 100).toFixed(2));

    console.log(`Test suite completed: ${name}`);
    console.log(`Results: ${passed} / ${total} passed - ${percentage === 100 ? '✅' : '❌'} ${percentage}%`);
}

export function test(name: string, callback: () => void): void {
    console.log(`\tRunning test: ${name}`);
    callback();
}

export function expect(value: any) {
    
    return {
        not: {
            toBe(expectedValue: any): void {
                if (value != expectedValue) {
                    console.log(`\t\t✅ Passed: ${value} is not ${expectedValue}`);
                    score.passed++;
                } else {
                    console.log(`\t\t❌ Failed: Expected ${value} to not be ${expectedValue}`);
                    score.failed++;
                }
            },
            toStrictlyBe(expectedValue: any): void {
                if (value !== expectedValue) {
                    console.log(`\t\t✅ Passed: ${value} is not strictly ${expectedValue}`);
                    score.passed++;
                } else {
                    console.log(`\t\t❌ Failed: Expected ${value} to not strictly be ${expectedValue}`);
                    score.failed++;
                }
            },
            toEqual(expectedValue: any): void {
                if (JSON.stringify(value) !== JSON.stringify(expectedValue)) {
                    console.log(`\t\t✅ Passed: values are not equal`);
                    score.passed++;
                } else {
                    console.log(`\t\t❌ Failed: Expected ${JSON.stringify(value)} to not equal ${JSON.stringify(expectedValue)}`);
                    score.failed++;
                }
            },
            toBeTruthy(): void {
                if (!value) {
                    console.log(`\t\t✅ Passed: ${value} is not truthy`);
                    score.passed++;
                } else {
                    console.log(`\t\t❌ Failed: Expected ${value} to not be truthy`);
                    score.failed++;
                }
            }
        },
        toBe(expectedValue: any): void {
            if (value == expectedValue) {
                console.log(`\t\t✅ Passed: ${value} is ${expectedValue}`);
                score.passed++;
            } else {
                console.log(`\t\t❌ Failed: Expected ${value} to be ${expectedValue}`);
                score.failed++;
            }
        },
        toStrictlyBe(expectedValue: any): void {
            if (value === expectedValue) {
                console.log(`\t\t✅ Passed: ${value} strictly equals ${expectedValue}`);
                score.passed++;
            } else {
                console.log(`\t\t❌ Failed: Expected ${value} to strictly be ${expectedValue}`);
                score.failed++;
            }
        },
        toEqual(expectedValue: any): void {
            if (JSON.stringify(value) === JSON.stringify(expectedValue)) {
                console.log(`\t\t✅ Passed: values are equal`);
                score.passed++;
            } else {
                console.log(`\t\t❌ Failed: Expected ${JSON.stringify(value)} to equal ${JSON.stringify(expectedValue)}`);
                score.failed++;
            }
        },
        toBeTruthy(): void {
            if (value) {
                console.log(`\t\t✅ Passed: ${value} is truthy`);
                score.passed++;
            } else {
                console.log(`\t\t❌ Failed: Expected ${value} to be truthy`);
                score.failed++;
            }
        }
    };
}

describe('Sample Test Suite', () => {
    
    test('Sample Test 1', () => {
        const result = 5;
        expect(result).toBe(5);
    });

    test('Sample Test 2', () => {
        const result = { a: 1, b: 2 };
        expect(result).toEqual({ a: 1, b: 2 });
    });

    test('Sample Test 3', () => {
        const result = true;
        expect(result).toBeTruthy();
    });

});