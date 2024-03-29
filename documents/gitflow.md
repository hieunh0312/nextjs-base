# Git Flow

Reference flow: [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

We define here for a short guide.

## The main branches
The central repo holds two main branches with an infinite lifetime:
* `master`
* `develop`

Note:

1. We consider `origin/master` to be the main branch where the source code of HEAD always reflects a `production-ready` state.

2. We consider `origin/develop` to be the main branch where the source code of HEAD always reflects a state with the latest `delivered development changes for the next release`. This is also called `integration branch`.

## Supporting branches and branch naming rules
* Checkout from: `develop`
* Must merge back into: `develop`
* Branch naming convention:
  * Except `master`, `develop` and
  * Must be `tracker/[name/id]-of-task`, if you use another tool to manage the Tasks, use that task id for Branch Name:
    * `Tracker`:
      * `task` for normal task, feature.
      * `fix` or `hotfix` for bug fix.
      * `release` for release branch from `develop` to `master` for stable version.
	  * `[name/id]-of-task` for example: `MIS-212-Create-XXX`.
    * Example of branch name: `task/MIS-212-Create-XXX`, `fix/MIS-401-Can-not-XXX`

## Commit message rules
* Format `[ID] Type Message`
* Type:
  * **add**: Add UI(s) or feature(s).
  * **update**: Update UI(s) or feature(s).
  * **fix**: fix a normal bugs.
  * **hotfix**: For immediately bug fix.
* Message: the short and meaningful purpose of the pull request

For Example:
* `[111] add ui login`.
* `[222] update behavior when user login`.
* `[333] fix error not refresh the chat message`.

## Fix conflict error when rebasing
1. You can use `git pull origin [branch-name]`. Usually, we will pull from `develop` or `main`.

2. Or you can use `git rebase [branch-name]`.
If conflict error occurs when rebasing, it will be displayed as below (at this moment, you will be moved to anonymous branch automatically).
```sh
$ git rebase develop
First, rewinding head to replay your work on top of it...
Applying: refs #1234 Can not remove cache
Using index info to reconstruct a base tree...
Falling back to patching base and 3-way merge...
Auto-merging path/to/conflicting/file
CONFLICT (add/add): Merge conflict in path/to/conflicting/file
Failed to merge in the changes.
Patch failed at 0001 refs #1234 Can not remove cache
The copy of the patch that failed is found in:
    /path/to/working/dir/.git/rebase-apply/patch

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```

1. Fix all the conflicts manually (code which is surrounded by <<< and >>>)
Use `git rebase --abort` if you want to abort rebase process.

2. After fixing all conflicts, continue your rebase process.

    ```sh
    $ git add .
    $ git rebase --continue
    ```
