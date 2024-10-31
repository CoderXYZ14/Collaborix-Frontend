export default {
  equal(actual, expected) {
    if (actual !== expected) {
      throw new Error(`AssertionError: expected ${expected} but got ${actual}`);
    }
  },

  deepEqual(actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        `AssertionError: expected ${JSON.stringify(
          expected
        )} but got ${JSON.stringify(actual)}`
      );
    }
  },
};
