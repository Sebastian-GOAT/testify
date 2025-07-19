# 🧪 Testify

**Testify** is a minimalistic unit testing framework for TypeScript.  
Perfect for small projects or scripts, with a clean syntax and zero dependencies.

---

## 🚀 Installation

Install the package by running:

```bash
npm install @sebastian-goat/testify
```

---

## 📘 Usage

Use `describe`, `test`, and `expect` to organize and run your tests.

### Example:

```typescript
import { describe, test, expect } from '@sebastian-goat/testify';

describe('Math utils', () => {
  test('adds numbers correctly', () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  test('object comparison', () => {
    const obj = { a: 1 };
    expect(obj).toEqual({ a: 1 });
  });

  test('boolean check', () => {
    expect(true).toBeTruthy();
  });

  test('strict equality', () => {
    expect(10).toStrictlyBe(10);
  });

  test('negated example', () => {
    expect(5).not.toBe(6);
  });
});
```

---

## ✅ Available Assertions

```typescript
expect(value).toBe(expected);
expect(value).toStrictlyBe(expected);
expect(value).toEqual(expected);
expect(value).toBeTruthy();

With negation:

expect(value).not.toBe(...);
expect(value).not.toStrictlyBe(...);
expect(value).not.toEqual(...);
expect(value).not.toBeTruthy();
```

---

## 🧾 Output

The test results are printed in the terminal with clear ✅ and ❌ markers, including a success percentage summary for each test suite.

### Example output:

```bash
Running test suite: Math utils  
  Running test: adds numbers correctly  
    ✅ Passed: 5 is 5  
  Running test: object comparison  
    ✅ Passed: values are equal  
  Running test: boolean check  
    ✅ Passed: true is truthy  
  Running test: strict equality  
    ✅ Passed: 10 strictly equals 10  
  Running test: negated example  
    ✅ Passed: 5 is not 6  
Test suite completed: Math utils  
Results: 5 / 5 passed - ✅ 100%
```