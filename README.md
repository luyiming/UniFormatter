# code-formatter README

### This project is inspired by [atom-beautify](https://github.com/Glavin001/atom-beautify)

## Features

> Format HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, and more in Visual Studio Code

## Implementation status

Some of the supported beautifiers are developed for Node.js and are automatically installed when Atom-Beautify is installed. However, other beautifiers are command-line interface (CLI) applications and require you to manually install them.

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
| CSScomb              | :x: TODO                |
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
| JS Beautify          | :x: TODO                |
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
| Ruby Beautify        | :x: TODO                |
| rustfmt              | :x: TODO                |
| SassConvert          | :x: TODO                |
| sqlformat            | :x: TODO                |
| stylish-haskell      | :x: TODO                |
| Tidy Markdown        | :x: TODO                |
| TypeScript Formatter | :x: TODO                |
| Uncrustify           | :x: TODO                |
| Vue Beautifier       | :x: TODO                |
| yapf                 | :x: TODO                |

## Language Support


| Language        | File Extensions                                                                          | Supported Formatters                                                            |
|-----------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Apex            | `.cls`, `.trigger`                                                                       | **[`Uncrustify`]()**                                                            |
| Arduino         | `.ino`, `.pde`                                                                           | **[`Uncrustify`]()**                                                            |
| Bash            | `.bash`, `.sh`                                                                           | **[`beautysh`]()**                                                              |
| C               | `.h`, `.c`, `.cl`                                                                        | **[`Uncrustify`]()**, [`clang-format`]()                                        |
| Coldfusion      | `.cfm`, `.cfml`, `.cfc`                                                                  | **[`Pretty Diff`]()**                                                           |
| Clojure         | `.clj`, `.cljs`, `.edn`                                                                  | **[`cljfmt`]()**                                                                |
| CoffeeScript    | `.coffee`                                                                                | **[`coffee-fmt`]()**, [`Coffee Formatter`]()                                    |
| C++             | `.h`, `.hh`, `.cc`, `.cpp`, `.cxx`, `.C`, `.cu`, `.c++`, `.hpp`, `.hxx`, `.h++`, `.cuh`  | **[`Uncrustify`]()**, [`clang-format`]()                                        |
| Crystal         | `.cr`                                                                                    | **[`Crystal`](http://crystal-lang.org)**                                        |
| C#              | `.cs`                                                                                    | **[`Uncrustify`]()**                                                            |
| CSS             | `.css`                                                                                   | **[`JS Beautify`]()**, [`CSScomb`](), [`Pretty Diff`](), [`SassConvert`]()      |
| CSV             | `.csv`                                                                                   | **[`Pretty Diff`]()**                                                           |
| D               | `.d`                                                                                     | **[`Uncrustify`]()**, [`dfmt`](https://github.com/Hackerpilot/dfmt)             |
| EJS             | `.ejs`                                                                                   | **[`JS Beautify`]()**, [`Pretty Diff`]()                                        |
| Elm             | `.elm`                                                                                   | **[`elm-format`](https://github.com/avh4/elm-format)**                          |
| ERB             | `.erb`                                                                                   | **[`Pretty Diff`]()**, [`HTML Beautifier`]()                                    |
| Erlang          | `.erl`                                                                                   | **[`erl_tidy`](http://erlang.org/doc/man/erl_tidy.html)**                       |
| Fortran         | `.f90`, `.F90`, `.f95`, `.F95`, `.f03`, `.F03`, `.f08`, `.F08`                           | **[`Fortran Beautifier`](https://www.gnu.org/software/emacs/)**                 |
| gherkin         | `.feature`                                                                               | **[`Gherkin formatter`]()**                                                     |
| GLSL            | `.vert`, `.frag`                                                                         | **[`clang-format`]()**                                                          |
| Go              | `.go`                                                                                    | **[`gofmt`](https://golang.org/cmd/gofmt/)**, [`goimports`]()                   |
| Golang Template | `.gohtml`                                                                                | **[`Pretty Diff`]()**                                                           |
| Handlebars      | `.hbs`, `.handlebars`                                                                    | **[`JS Beautify`]()**, [`Pretty Diff`]()                                        |
| Haskell         | `.hs`                                                                                    | **[`stylish-haskell`](https://github.com/jaspervdj/stylish-haskell)**           |
| HTML            | `.html`                                                                                  | **[`JS Beautify`]()**, [`Pretty Diff`]()                                        |
| Jade            | `.jade`, `.pug`                                                                          | **[`Pug Beautify`](https://github.com/vingorius/pug-beautify)**                 |
| Java            | `.java`                                                                                  | **[`Uncrustify`]()**                                                            |
| JavaScript      | `.js`                                                                                    | **[`JS Beautify`]()**, [`ESLint Fixer`](), [`JSCS Fixer`](/), [`Pretty Diff`]() |
| JSON            | `.json`                                                                                  | **[`JS Beautify`]()**, [`Pretty Diff`]()                                        |
| JSX             | `.jsx`, `.js`                                                                            | **[`Pretty Diff`]()**, [`JS Beautify`]()                                        |
| LaTeX           | `.bib`, `.tex`, `.sty`, `.cls`, `.dtx`, `.ins`, `.bbx`, `.cbx`                           | **[`Latex Beautify`]()**                                                        |
| LESS            | `.less`                                                                                  | **[`Pretty Diff`]()**, [`CSScomb`]()                                            |
| Lua             | `.lua`, `.ttslua`                                                                        | **[`Lua beautifier`]()**                                                        |
| Markdown        | `.markdown`, `.md`                                                                       | **[`Tidy Markdown`]()**, [`Remark`](https://github.com/wooorm/remark)           |
| Marko           | `.marko`                                                                                 | **[`Marko Beautifier`](https://github.com/marko-js/marko-prettyprint)**         |
| Mustache        | `.mustache`                                                                              | **[`JS Beautify`]()**, [`Pretty Diff`]()                                        |
| Nginx           | `.conf`                                                                                  | **[`Nginx Beautify`](https://github.com/denysvitali/nginxbeautify)**            |
| Nunjucks        | `.njk`, `.nunjucks`                                                                      | **[`Pretty Diff`]()**                                                           |
| Objective-C     | `.m`, `.mm`, `.h`                                                                        | **[`Uncrustify`]()**, [`clang-format`]()                                        |
| OCaml           | `.ml`                                                                                    | **[`ocp-indent`](https://www.typerex.org/ocp-indent.html)**                     |
| Pawn            |                                                                                          | **[`Uncrustify`]()**                                                            |
| Perl            | `.pl`, `.PL`, `.pm`, `.pod`, `.t`                                                        | **[`Perltidy`](http://perltidy.sourceforge.net/)**                              |
| PHP             | `.php`, `.module`, `.inc`                                                                | **[`PHP-CS-Fixer`]()**, [`PHPCBF`](), [`hh_format`](http://hhvm.com/)           |
| Puppet          | `.pp`                                                                                    | **[`puppet-lint`](http://puppet-lint.com/)**                                    |
| Python          | `.py`                                                                                    | **[`autopep8`]()**, [`pybeautifier`](), [`yapf`]()                              |
| R               | `.r`, `.R`                                                                               | **[`formatR`](https://github.com/yihui/formatR)**                               |
| Riot.js         | `.tag`                                                                                   | **[`Pretty Diff`]()**                                                           |
| Ruby            | `.rb`                                                                                    | **[`Rubocop`](https://github.com/bbatsov/rubocop)**, [`Ruby Beautify`]()        |
| Rust            | `.rs`, `.rlib`                                                                           | **[`rustfmt`](https://github.com/rust-lang-nursery/rustfmt)**                   |
| Sass            | `.sass`                                                                                  | **[`SassConvert`]()**                                                           |
| SCSS            | `.scss`                                                                                  | **[`Pretty Diff`]()**, [`CSScomb`](), [`SassConvert`]()                         |
| Spacebars       |                                                                                          | **[`Pretty Diff`]()**                                                           |
| SQL             | `.sql`                                                                                   | **[`sqlformat`]()**                                                             |
| SVG             | `.svg`                                                                                   | **[`Pretty Diff`]()**                                                           |
| Swig            | `.swig`                                                                                  | **[`Pretty Diff`]()**                                                           |
| TSS             | `.tss`                                                                                   | **[`Pretty Diff`]()**                                                           |
| Twig            | `.twig`                                                                                  | **[`Pretty Diff`]()**                                                           |
| TypeScript      | `.ts`                                                                                    | **[`TypeScript Formatter`]()**                                                  |
| UX Markup       | `.ux`                                                                                    | **[`Pretty Diff`]()**                                                           |
| Vala            | `.vala`, `.vapi`                                                                         | **[`Uncrustify`]()**                                                            |
| Visualforce     | `.page`                                                                                  | **[`Pretty Diff`]()**                                                           |
| Vue             | `.vue`                                                                                   | **[`Vue Beautifier`]()**                                                        |
| XML             | `.sld`, `.xml`, `.xhtml`, `.xsd`, `.xsl`, `.jsp`, `.gsp`, `.plist`, `.recipe`, `.config` | **[`Pretty Diff`]()**, [`JS Beautify`]()                                        |
| XTemplate       | `.xtemplate`                                                                             | **[`Pretty Diff`]()**                                                           |
| YAML            | `.yml`, `.yaml`                                                                          | **[`align-yaml`]()**                                                            |

## License

[MIT](LICENSE) © [Lu Yiming](https://github.com/luyiming)

[autopep8]: https://github.com/hhatto/autopep8
[SassConvert]:  "SassConvert"
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