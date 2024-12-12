⚠️ THIS IS NOT WORK YET

# ghq-fzf

This is a simple tool to select ghq repositories using fzf

The configuration allows users to specify a command for preview and to access non-ghq managed repositories with the same command.

- [x-motemen/ghq: Remote repository management made easy](https://github.com/x-motemen/ghq)
- [junegunn/fzf: :cherry\_blossom: A command-line fuzzy finder](https://github.com/junegunn/fzf)


## Installation

```sh
$ brew install yumafuu/tap/ghq-fzf
```

## Usage

This tool cannot be used directly because it involves cd operations. The binary _ghq-fzf will be installed, so you will need to configure your own environment for cd.

```sh
# .bashrc or .zshrc

ghq-fzf(){ eval $(_ghq-fzf run) }
```
And then you can use the following command to select a repository.

```sh
$ ghq-fzf
```

Advanced
```zsh
# if zsh, ctrl-o is binded to accept-line
ghq-fzf() {
  eval $(_ghq-fzf run)
  zle accept-line
  zle reset-prompt
}

zle -N ghq-fzf
bindkey "^o" ghq-fzf
```
