---
description: Command-line tool to compare configuration files.
---

# Diff Generator
___
## Overview

[Diff Generator](https://github.com/sandraLbdvTW/diff-generator) is a command-line utility that allows users to find the differences between two configuration files. This tool supports multiple file formats and output formats out of the box. 

Diff Generator supports the following file formats:
- JSON
- YAML
- INI

Diff Generator can generate reports in the following formats:
- plain
- tree
- JSON

## Getting started

:::info[Prerequisites]
- Familiarity with the command line
- Install [Node.js](https://nodejs.org/en) version 8.0 or higher
:::

### Installation

Take the following steps to install Diff Generator:
1. Clone the repository:
```bash
git clone https://github.com/sandraLbdvTW/diff-generator.git
```

2. Navigate to the project directory:
```bash
cd diff-generator
```

3. Install dependencies:
```bash
npm install
```

4. Compile the project files:
```bash
npx babel src --out-dir dist
```


### Usage
To use Diff Generator, execute the script with the required arguments.

#### Basic Syntax
```bash
npx gendiff [options] <filepath1> <filepath2>
```

#### Options
The following table contains all the possible options for the script:

| Option                               | Description                                                      |
|--------------------------------------|------------------------------------------------------------------|
| ` -h`,` --help            `          | Show the help message.                                           |
| ` -f <format>`,` --format <format> ` | Specify the output format (plain, tree, JSON). Default is plain. |
| ` -V`,` --version         `          | Show the version number.                                         |

## Examples

These examples will use the sample Diff Generator files. You can find these files in `./__fixtures__/`. 

### Compare two JSON files and generate the report in plain format

#### Command
```bash
npx gendiff ./__fixtures__/before.json ./__fixtures__/after.json
```

#### Result
```text
Property 'common.follow' was added with value: false
Property 'common.setting2' was deleted
Property 'common.setting3' was changed from true to [complex value]
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was changed from 'bas' to 'bars'
Property 'group1.nest' was changed from [complex value] to 'str'
Property 'group2' was deleted
Property 'group3' was added with value: [complex value]
```

### Compare two INI files and generate the report in tree format

#### Command
```bash
npx gendiff ./__fixtures__/before.ini ./__fixtures__/after.ini -f tree
```

#### Result
```text
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: {
            key: value
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}

```

### Compare two YAML files and generate the report in JSON format

#### Command
```bash
npx gendiff ./__fixtures__/before.yml ./__fixtures__/after.yml -f json
```

#### Result
```text
[{"name":"common","status":"hasChildren","children":[{"name":"follow","status":"added","valueNew":false},{"name":"setting1","status":"unmodified","valueOld":"Value 1","valueNew":"Value 1"},{"name":"setting2","status":"deleted","valueOld":"200"},{"name":"setting3","status":"modified","valueOld":true,"valueNew":{"key":"value"}},{"name":"setting4","status":"added","valueNew":"blah blah"},{"name":"setting5","status":"added","valueNew":{"key5":"value5"}},{"name":"setting6","status":"hasChildren","children":[{"name":"key","status":"unmodified","valueOld":"value","valueNew":"value"},{"name":"ops","status":"added","valueNew":"vops"}]}]},{"name":"group1","status":"hasChildren","children":[{"name":"baz","status":"modified","valueOld":"bas","valueNew":"bars"},{"name":"foo","status":"unmodified","valueOld":"bar","valueNew":"bar"},{"name":"nest","status":"modified","valueOld":{"key":"value"},"valueNew":"str"}]},{"name":"group2","status":"deleted","valueOld":{"abc":"12345"}},{"name":"group3","status":"added","valueNew":{"fee":"100500"}}]
```

## Support
If you encounter any issues, please file them on [GitHub](https://github.com/sandraLbdvTW/diff-generator/issues).
