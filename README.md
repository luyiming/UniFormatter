# UniFormatter

### This project is inspired by [atom-beautify](https://github.com/Glavin001/atom-beautify)

## Features

> Format HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, SQL, and more in Visual Studio Code

## Language Support

Some of the supported formatters are developed for Node.js and are automatically installed when Code-Formatter is installed. However, other formatters are command-line interface (CLI) applications and require you to manually install them.

| Language      | Supported Formatters                                                                                                                          |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Bash          | **:white_check_mark: [`beautysh`][beautysh]**                                                                                                 |
| Bat           |                                                                                                                                               |
| Bibtex        |                                                                                                                                               |
| C             | **:white_check_mark: [`Uncrustify`][Uncrustify]**, :white_check_mark: [`clang-format`][clang-format]                                          |
| Clojure       | **:white_check_mark: [`cljfmt`][cljfmt]**                                                                                                     |
| CoffeeScript  | **:white_check_mark: [`coffee-fmt`][coffee-fmt]**, [`Coffee Formatter`][Coffee Formatter]                                                     |
| C++           | **:white_check_mark: [`clang-format`][clang-format]**, :white_check_mark: [`Uncrustify`][Uncrustify]                                          |
| C#            | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                             |
| CSS           | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff], [`SassConvert`][SassConvert]                               |
| Dockerfile    | **[`dockfmt`][dockfmt]**                                                                                                                      |
| ~~Erlang~~    | **[`erl_tidy`](http://erlang.org/doc/man/erl_tidy.html)**                                                                                     |
| F#            |                                                                                                                                               |
| ~~Fortran~~   | **[`Fortran Beautifier`](https://www.gnu.org/software/emacs/)**                                                                               |
| ~~GLSL~~      | **:white_check_mark: [`clang-format`][clang-format]**                                                                                         |
| Go            | **[`gofmt`](https://golang.org/cmd/gofmt/)**, [`goimports`][goimports]                                                                        |
| Groovy        |                                                                                                                                               |
| Handlebars    | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                             |
| ~~Haskell~~   | **[`stylish-haskell`](https://github.com/jaspervdj/stylish-haskell)**                                                                         |
| HTML          | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                             |
| Ini           |                                                                                                                                               |
| Jade          | **[`Pug Beautify`](https://github.com/vingorius/pug-beautify)**                                                                               |
| Java          | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                             |
| JavaScript    | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`ESLint Fixer`][ESLint Fixer], [`JSCS Fixer`][JSCS Fixer], [`Pretty Diff`][Pretty Diff] |
| JSON          | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                             |
| LaTeX         | **[`Latex Beautify`][Latex Beautify]**                                                                                                        |
| LESS          | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`CSScomb`][CSScomb]                                                                     |
| Lua           | **[`Lua beautifier`][Lua beautifier]**                                                                                                        |
| Makefile      |                                                                                                                                               |
| Markdown      | **:white_check_mark: [`Tidy Markdown`][Tidy Markdown]**, [`Remark`](https://github.com/wooorm/remark)                                         |
| Objective-C   | **:white_check_mark: [`Uncrustify`][Uncrustify]**, :white_check_mark: [`clang-format`][clang-format]                                          |
| Objective-C++ | **:white_check_mark: [`Uncrustify`][Uncrustify]**, :white_check_mark: [`clang-format`][clang-format]                                          |
| ~~OCaml~~     | **[`ocp-indent`](https://www.typerex.org/ocp-indent.html)**                                                                                   |
| ~~Pawn~~      | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                             |
| Perl          | **[`Perltidy`](http://perltidy.sourceforge.net/)**                                                                                            |
| Perl6         | **[`Perltidy`](http://perltidy.sourceforge.net/)**                                                                                            |
| PHP           | **[`PHP-CS-Fixer`][PHP-CS-Fixer]**, [`PHPCBF`][PHPCBF], [`hh_format`](http://hhvm.com/)                                                       |
| Powershell    |                                                                                                                                               |
| Python        | **:white_check_mark: [`autopep8`][autopep8]**, [`pybeautifier`][pybeautifier], [`yapf`][yapf]                                                 |
| R             | **[`formatR`](https://github.com/yihui/formatR)**                                                                                             |
| Razor         |                                                                                                                                               |
| Ruby          | **[`Rubocop`](https://github.com/bbatsov/rubocop)**, :white_check_mark: [`Ruby Beautify`][Ruby Beautify]                                      |
| Rust          | **[`rustfmt`](https://github.com/rust-lang-nursery/rustfmt)**                                                                                 |
| Sass          | **[`SassConvert`][SassConvert]**                                                                                                              |
| SCSS          | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`CSScomb`][CSScomb], [`SassConvert`][SassConvert]                                       |
| Shaderlab     |                                                                                                                                               |
| Swift         |                                                                                                                                               |
| SQL           | **[`sqlformat`][sqlformat]**                                                                                                                  |
| Tex           |                                                                                                                                               |
| TypeScript    | **[`TypeScript Formatter`][TypeScript Formatter]**                                                                                            |
| VB            |                                                                                                                                               |
| XML           | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`JS Beautify`][JS Beautify]                                                             |
| XSL           |                                                                                                                                               |
| YAML          | **:white_check_mark: [`align-yaml`][align-yaml]**                                                                                             |

| Formatter            | status                  |
|----------------------|-------------------------|
| align-yaml           | :white_check_mark: Done |
| autopep8             | :white_check_mark: Done |
| beautysh             | :white_check_mark: Done |
| clang-format         | :white_check_mark: Done |
| cljfmt               | :white_check_mark: Done |
| Coffee Formatter     | :x: TODO                |
| coffee-fmt           | :white_check_mark: Done |
| dockfmt              | :x: TODO                |
| erl_tidy             | :x: TODO                |
| ESLint Fixer         | :x: TODO                |
| formatR              | :x: TODO                |
| Fortran Beautifier   | :x: TODO                |
| gofmt                | :x: TODO                |
| goimports            | :x: TODO                |
| hh_format            | :x: TODO                |
| HTML Beautifier      | :x: TODO                |
| JS Beautify          | :white_check_mark: Done |
| JSCS Fixer           | :x: TODO                |
| Latex Beautify       | :x: TODO                |
| Lua beautifier       | :x: TODO                |
| ocp-indent           | :x: TODO                |
| Perltidy             | :x: TODO                |
| PHP-CS-Fixer         | :x: TODO                |
| PHPCBF               | :x: TODO                |
| Pretty Diff          | :x: TODO                |
| Pug Beautify         | :x: TODO                |
| pybeautifier         | :x: TODO                |
| Remark               | :x: TODO                |
| Rubocop              | :x: TODO                |
| Ruby Beautify        | :white_check_mark: Done |
| rustfmt              | :x: TODO                |
| SassConvert          | :x: TODO                |
| sqlformat            | :x: TODO                |
| stylish-haskell      | :x: TODO                |
| Tidy Markdown        | :white_check_mark: Done |
| TypeScript Formatter | :x: TODO                |
| Uncrustify           | :white_check_mark: Done |
| Vue Beautifier       | :x: TODO                |
| yapf                 | :x: TODO                |


## License

[MIT](LICENSE) © [Lu Yiming](https://github.com/luyiming)

[autopep8]: https://github.com/hhatto/autopep8
[Pretty Diff]: https://github.com/prettydiff/prettydiff
[Uncrustify]: https://github.com/uncrustify/uncrustify
[clang-format]: https://clang.llvm.org/docs/ClangFormat.html
[JS Beautify]: https://github.com/beautify-web/js-beautify
[Lua beautifier]: https://github.com/Glavin001/atom-beautify/blob/master/src/beautifiers/lua-beautifier/beautifier.coffee
[Vue Beautifier]: https://github.com/Glavin001/atom-beautify/blob/master/src/beautifiers/vue-beautifier.coffee
[SassConvert]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax
[coffee-fmt]: https://github.com/sterpe/coffee-fmt
[Ruby Beautify]: https://github.com/erniebrodeur/ruby-beautify
[PHP-CS-Fixer]: https://github.com/FriendsOfPHP/PHP-CS-Fixer
[pybeautifier]: https://github.com/guyskk/pybeautifier
[ESLint Fixer]: https://github.com/eslint/eslint
[JSCS Fixer]: https://github.com/jscs-dev/node-jscs
[Tidy Markdown]: https://github.com/slang800/tidy-markdown
[goimports]: https://godoc.org/golang.org/x/tools/cmd/goimports
[CSScomb]: https://github.com/csscomb/csscomb.js
[TypeScript Formatter]: https://github.com/vvakame/typescript-formatter
[PHPCBF]: http://php.net/manual/en/install.php
[HTML Beautifier]: https://github.com/threedaymonk/htmlbeautifier
[Coffee Formatter]: https://github.com/Glavin001/Coffee-Formatter
[Latex Beautify]: https://github.com/cmhughes/latexindent.pl
[align-yaml]: https://github.com/jonschlinkert/align-yaml
[sqlformat]: https://github.com/andialbrecht/sqlparse
[beautysh]: https://github.com/bemeurer/beautysh
[cljfmt]: https://github.com/snoe/node-cljfmt
[yapf]: https://github.com/google/yapf
[dockfmt]: https://github.com/jessfraz/dockfmt