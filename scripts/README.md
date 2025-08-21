# Scripts

This folder contains utility scripts for maintaining and analyzing the project's internationalization (i18n) system.

## Available Scripts

### 🔍 `analyze-i18n-strings.js`

Analyzes the usage of i18n strings across the entire codebase to identify which strings are being used and which are orphaned.

**Usage:**
```bash
node scripts/analyze-i18n-strings.js
```

**Features:**
- Scans all Vue, TypeScript, and JavaScript files in the project
- Identifies used and unused i18n strings
- Provides detailed usage statistics
- Lists files where each string is used
- Outputs unused strings in JSON format for easy copying

**Output Example:**
```
🔍 Analyzing i18n string usage...

✅ USED: examples.buttons.title
   Found in: app\components\ButtonExamples.vue

❌ NOT USED: examples.unused.string

📈 SUMMARY
📊 Total strings: 344
✅ Used strings: 342
❌ Unused strings: 2
📊 Usage rate: 99.4%
```

### 🧹 `cleanup-i18n-strings.js`

Automatically removes unused i18n strings from both language files (en.json and de.json).

**Usage:**
```bash
node scripts/cleanup-i18n-strings.js
```

**Features:**
- Deletes predefined unused strings from both language files
- Removes empty objects after string deletion
- Provides detailed feedback on what was deleted
- Maintains JSON formatting with proper indentation

**⚠️ Important:** 
Before running this script, update the `STRINGS_TO_DELETE` array with the strings you want to remove. You can get this list from the `analyze-i18n-strings.js` output.

## Best Practices

1. **Regular Analysis**: Run `analyze-i18n-strings.js` regularly to maintain clean i18n files
2. **Before Cleanup**: Always run the analysis script first to identify unused strings
3. **Backup**: Consider backing up your i18n files before running the cleanup script
4. **Verification**: After cleanup, run the analysis script again to verify the results

## Configuration

Both scripts are configured to search in the following directories:
- `app/components`
- `app/pages` 
- `app/layouts`
- `app/composables`
- `app/plugins`

The scripts look for i18n string usage in `.vue`, `.ts`, and `.js` files.

## Contributing

When adding new features that use i18n strings:
1. Add your strings to both `en.json` and `de.json`
2. Run the analysis script to verify proper usage
3. Keep the i18n files clean by regularly removing unused strings
