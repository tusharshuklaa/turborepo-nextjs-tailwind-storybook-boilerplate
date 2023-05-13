module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-color-format",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  "rules": {
    "color-format/format": {
      "format": "rgba"
    },
    "plugin/declaration-block-no-ignored-properties": true,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends", "tailwind", "screen"]
      }
    ]
  }
};
