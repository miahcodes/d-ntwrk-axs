// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const fetchResult = input.fetchResult;

  if (!fetchResult) {
    return { errors: [] };
  }

  if (fetchResult.status !== 200) {
    throw new Error("Server response unprocessable (status)");
  }

  if (!fetchResult.body) {
    throw new Error("Server response unprocessable (body)");
  }

  const data = JSON.parse(fetchResult.body);

  // The test server is using a "snake case" representation for variables.
  const errors = data.errors.map(error => ({
    localizedMessage: error.localized_message,
    target: error.target
  }))

  return {
    errors
  };
}
