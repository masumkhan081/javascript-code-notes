const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  featureXEnabled: process.env.FEATURE_X === "true"
}

console.log(config)

// process.env values are always STRINGS — explicit conversion is required.
// Number() coerces "3000" → 3000. parseInt() is an alternative but less safe.
// Boolean env vars: process.env.FLAG === "true" (string comparison, not truthy check).
// process.env.FLAG = true would set it to the string "true" — same pattern applies.
//
// Real-world: use a config validation library (e.g. zod, envalid) at startup
// to fail-fast with clear messages when required env vars are missing or wrong type.
// Interview: what happens if PORT is undefined and you do Number(undefined)? → NaN
