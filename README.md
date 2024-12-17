# ghq-fzf

This is a simple tool to select ghq repositories using fzf

The configuration allows users to specify a command for preview and to access non-ghq managed repositories with the same command.

- [x-motemen/ghq: Remote repository management made easy](https://github.com/x-motemen/ghq)
- [junegunn/fzf: :cherry\_blossom: A command-line fuzzy finder](https://github.com/junegunn/fzf)


## Installation

```sh
$ brew install yumafuu/tap/ghq-fzf
```

or manually download from release page.

## Usage

This tool cannot be used directly because it involves cd operations. The binary `_ghq-fzf` will be installed, so you will need to configure your own environment for cd.

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

## Configuration

First look for `GHQ_FZF_CONFIG` and if the file is not there, look for it in the following order.
- `$XDG_CONFIG_HOME/ghq-fzf/config.yaml`
- `$HOME/.config/ghq-fzf/config.yaml`

If no file was found, create it in the final hit location.

Below is the content of the YAML file:

### fzf.preview
  
This specifies what will be displayed in the fzf preview window. The string configured here will be passed to --preview.
```yaml
fzf:
  preview: "exa --tree -L 2 $(_ghq-fzf fullpath {})"
  # preview: "bat $(_ghq-fzf fullpath {})/README.md"
  # preview: "ls {}"
```

Reference: https://github.com/junegunn/fzf#preview-window


### nested
  
Nested directories under ghq-managed directories will be added to the list. This is useful for monorepos.
```yaml
root: ${ghq-repo} # github.com/yumafuu/ghq-fzf
dirs:
  - ${The directory you want to add}
```

### external
  
Directories not managed by ghq will also be added to the list.

```yaml
external:
  - ~/Downloads
  - /Applications
```


### Full example.

```yaml
fzf:
  # preview: "bat $(_ghq-fzf fullpath {})/README.md"
  preview: "exa --tree -L 2 $(_ghq-fzf fullpath {})"

nested:
  - root: github.com/yumafuu/ghq-fzf
    dirs:
      - src
      - .github

external:
  - "~/dotfiles"
  - "~/dotfiles/nvim"
  - "~/Downloads"
```

