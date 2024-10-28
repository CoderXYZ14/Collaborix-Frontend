export default {
  equal(actual, expected) {
    if (actual !== expected) {
      throw new Error(`AssertionError: expected ${expected} but got ${actual}`);
    }
  },
};
