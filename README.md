# code-formatter README

### This project is inspired by [atom-beautify](https://github.com/Glavin001/atom-beautify)

## Features

> Format HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, and more in Visual Studio Code

## Implementation status

Some of the supported formatters are developed for Node.js and are automatically installed when Code-Formatter is installed. However, other formatters are command-line interface (CLI) applications and require you to manually install them.

| Formatter            | status                  |
|----------------------|-------------------------|
| align-yaml           | :white_check_mark: Done |
| autopep8             | :white_check_mark: Done |
| beautysh             | :white_check_mark: Done |
| clang-format         | :white_check_mark: Done |
| cljfmt               | :white_check_mark: Done |
| Coffee Formatter     | :x: TODO                |
| coffee-fmt           | :white_check_mark: Done |
| Crystal              | :x: TODO                |
| CSScomb              | :white_check_mark: Done |
| dfmt                 | :x: TODO                |
| elm-format           | :x: TODO                |
| erl_tidy             | :x: TODO                |
| ESLint Fixer         | :x: TODO                |
| formatR              | :x: TODO                |
| Fortran Beautifier   | :x: TODO                |
| Gherkin formatter    | :x: TODO                |
| gofmt                | :x: TODO                |
| goimports            | :x: TODO                |
| hh_format            | :x: TODO                |
| HTML Beautifier      | :x: TODO                |
| JS Beautify          | :white_check_mark: Done |
| JSCS Fixer           | :x: TODO                |
| Latex Beautify       | :x: TODO                |
| Lua beautifier       | :x: TODO                |
| Marko Beautifier     | :x: TODO                |
| Nginx Beautify       | :x: TODO                |
| ocp-indent           | :x: TODO                |
| Perltidy             | :x: TODO                |
| PHP-CS-Fixer         | :x: TODO                |
| PHPCBF               | :x: TODO                |
| Pretty Diff          | :x: TODO                |
| Pug Beautify         | :x: TODO                |
| puppet-lint          | :x: TODO                |
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

## Language Support


| Language        | File Extensions                                                                          | Supported Formatters                                                                                                                  |
|-----------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Apex            | `.cls`, `.trigger`                                                                       | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                     |
| Arduino         | `.ino`, `.pde`                                                                           | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                     |
| Bash            | `.bash`, `.sh`                                                                           | **:white_check_mark: [`beautysh`][beautysh]**                                                                                         |
| C               | `.h`, `.c`, `.cl`                                                                        | **:white_check_mark: [`Uncrustify`][Uncrustify]**, :white_check_mark: [`clang-format`][clang-format]                                  |
| Coldfusion      | `.cfm`, `.cfml`, `.cfc`                                                                  | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Clojure         | `.clj`, `.cljs`, `.edn`                                                                  | **:white_check_mark: [`cljfmt`][cljfmt]**                                                                                             |
| CoffeeScript    | `.coffee`                                                                                | **:white_check_mark: [`coffee-fmt`][coffee-fmt]**, [`Coffee Formatter`][Coffee Formatter]                                             |
| C++             | `.h`, `.hh`, `.cc`, `.cpp`, `.cxx`, `.C`, `.cu`, `.c++`, `.hpp`, `.hxx`, `.h++`, `.cuh`  | **:white_check_mark: [`Uncrustify`][Uncrustify]**, :white_check_mark: [`clang-format`][clang-format]                                  |
| Crystal         | `.cr`                                                                                    | **[`Crystal`](http://crystal-lang.org)**                                                                                              |
| C#              | `.cs`                                                                                    | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                     |
| CSS             | `.css`                                                                                   | **:white_check_mark: [`JS Beautify`][JS Beautify]**, :white_check_mark: [`CSScomb`][CSScomb], [`Pretty Diff`][Pretty Diff], [`SassConvert`][SassConvert] |
| CSV             | `.csv`                                                                                   | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| D               | `.d`                                                                                     | **:white_check_mark: [`Uncrustify`][Uncrustify]**, [`dfmt`](https://github.com/Hackerpilot/dfmt)                                      |
| EJS             | `.ejs`                                                                                   | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                                        |
| Elm             | `.elm`                                                                                   | **[`elm-format`](https://github.com/avh4/elm-format)**                                                                                |
| ERB             | `.erb`                                                                                   | **[`Pretty Diff`][Pretty Diff]**, [`HTML Beautifier`][HTML Beautifier]                                                                |
| Erlang          | `.erl`                                                                                   | **[`erl_tidy`](http://erlang.org/doc/man/erl_tidy.html)**                                                                             |
| Fortran         | `.f90`, `.F90`, `.f95`, `.F95`, `.f03`, `.F03`, `.f08`, `.F08`                           | **[`Fortran Beautifier`](https://www.gnu.org/software/emacs/)**                                                                       |
| gherkin         | `.feature`                                                                               | **[`Gherkin formatter`][Gherkin formatter]**                                                                                          |
| GLSL            | `.vert`, `.frag`                                                                         | **:white_check_mark: [`clang-format`][clang-format]**                                                                                 |
| Go              | `.go`                                                                                    | **[`gofmt`](https://golang.org/cmd/gofmt/)**, [`goimports`][goimports]                                                                |
| Golang Template | `.gohtml`                                                                                | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Handlebars      | `.hbs`, `.handlebars`                                                                    | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                                        |
| Haskell         | `.hs`                                                                                    | **[`stylish-haskell`](https://github.com/jaspervdj/stylish-haskell)**                                                                 |
| HTML            | `.html`                                                                                  | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                                        |
| Jade            | `.jade`, `.pug`                                                                          | **[`Pug Beautify`](https://github.com/vingorius/pug-beautify)**                                                                       |
| Java            | `.java`                                                                                  | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                     |
| JavaScript      | `.js`                                                                                    | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`ESLint Fixer`][ESLint Fixer], [`JSCS Fixer`][JSCS Fixer], [`Pretty Diff`][Pretty Diff]            |
| JSON            | `.json`                                                                                  | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                                        |
| JSX             | `.jsx`, `.js`                                                                            | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`JS Beautify`][JS Beautify]                                                                        |
| LaTeX           | `.bib`, `.tex`, `.sty`, `.cls`, `.dtx`, `.ins`, `.bbx`, `.cbx`                           | **[`Latex Beautify`][Latex Beautify]**                                                                                                |
| LESS            | `.less`                                                                                  | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`CSScomb`][CSScomb]                                                             |
| Lua             | `.lua`, `.ttslua`                                                                        | **[`Lua beautifier`][Lua beautifier]**                                                                                                |
| Markdown        | `.markdown`, `.md`                                                                       | **:white_check_mark: [`Tidy Markdown`][Tidy Markdown]**, [`Remark`](https://github.com/wooorm/remark)                                 |
| Marko           | `.marko`                                                                                 | **[`Marko Beautifier`](https://github.com/marko-js/marko-prettyprint)**                                                               |
| Mustache        | `.mustache`                                                                              | **:white_check_mark: [`JS Beautify`][JS Beautify]**, [`Pretty Diff`][Pretty Diff]                                                                        |
| Nginx           | `.conf`                                                                                  | **[`Nginx Beautify`](https://github.com/denysvitali/nginxbeautify)**                                                                  |
| Nunjucks        | `.njk`, `.nunjucks`                                                                      | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Objective-C     | `.m`, `.mm`, `.h`                                                                        | **:white_check_mark: [`Uncrustify`][Uncrustify]**, :white_check_mark: [`clang-format`][clang-format]                                  |
| OCaml           | `.ml`                                                                                    | **[`ocp-indent`](https://www.typerex.org/ocp-indent.html)**                                                                           |
| Pawn            |                                                                                          | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                     |
| Perl            | `.pl`, `.PL`, `.pm`, `.pod`, `.t`                                                        | **[`Perltidy`](http://perltidy.sourceforge.net/)**                                                                                    |
| PHP             | `.php`, `.module`, `.inc`                                                                | **[`PHP-CS-Fixer`][PHP-CS-Fixer]**, [`PHPCBF`][PHPCBF], [`hh_format`](http://hhvm.com/)                                               |
| Puppet          | `.pp`                                                                                    | **[`puppet-lint`](http://puppet-lint.com/)**                                                                                          |
| Python          | `.py`                                                                                    | **:white_check_mark: [`autopep8`][autopep8]**, [`pybeautifier`][pybeautifier], [`yapf`][yapf]                                         |
| R               | `.r`, `.R`                                                                               | **[`formatR`](https://github.com/yihui/formatR)**                                                                                     |
| Riot.js         | `.tag`                                                                                   | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Ruby            | `.rb`                                                                                    | **[`Rubocop`](https://github.com/bbatsov/rubocop)**, :white_check_mark: [`Ruby Beautify`][Ruby Beautify]                              |
| Rust            | `.rs`, `.rlib`                                                                           | **[`rustfmt`](https://github.com/rust-lang-nursery/rustfmt)**                                                                         |
| Sass            | `.sass`                                                                                  | **[`SassConvert`][SassConvert]**                                                                                                      |
| SCSS            | `.scss`                                                                                  | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`CSScomb`][CSScomb], [`SassConvert`][SassConvert]                               |
| Spacebars       |                                                                                          | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| SQL             | `.sql`                                                                                   | **[`sqlformat`][sqlformat]**                                                                                                          |
| SVG             | `.svg`                                                                                   | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Swig            | `.swig`                                                                                  | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| TSS             | `.tss`                                                                                   | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Twig            | `.twig`                                                                                  | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| TypeScript      | `.ts`                                                                                    | **[`TypeScript Formatter`][TypeScript Formatter]**                                                                                    |
| UX Markup       | `.ux`                                                                                    | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Vala            | `.vala`, `.vapi`                                                                         | **:white_check_mark: [`Uncrustify`][Uncrustify]**                                                                                     |
| Visualforce     | `.page`                                                                                  | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| Vue             | `.vue`                                                                                   | **[`Vue Beautifier`][Vue Beautifier]**                                                                                                |
| XML             | `.sld`, `.xml`, `.xhtml`, `.xsd`, `.xsl`, `.jsp`, `.gsp`, `.plist`, `.recipe`, `.config` | **[`Pretty Diff`][Pretty Diff]**, :white_check_mark: [`JS Beautify`][JS Beautify]                                                                        |
| XTemplate       | `.xtemplate`                                                                             | **[`Pretty Diff`][Pretty Diff]**                                                                                                      |
| YAML            | `.yml`, `.yaml`                                                                          | **:white_check_mark: [`align-yaml`][align-yaml]**                                                                                     |

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
[Gherkin formatter]: https://github.com/Glavin001/atom-beautify/blob/master/src/beautifiers/gherkin.coffee
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