# How do I exit vim?

The famous StackOverflow question [how do I exit vim?](https://stackoverflow.com/questions/11828270/how-do-i-exit-vim)
inspired me to make a site that suggest ways to exit vim.

## Add a new way

Modify the [`src/data.json`](https://github.com/maggick/howdoiexitvim/blob/main/src/data.json) file.
The structure for each addition is pretty straight-forward:

```text
    {
      "id":<uniq and incremental id>,
      "safe": <0: will save the file and exit, 1: will exit without save, 2: might have side effect>,
      "safe_info": "<description of the risk linked to the command>",
      "command": "<the command>",
      "command_explained": "<the command explained>",
      "weight":<1: for unsafe way, 2 for exit without save, 3 for safe way to exit>
    },
```

Feel free to submit pull requests.


