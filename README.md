

- Links
    - https://git-scm.com/book/en/v2/Git-Basics-Tagging
    - http://www.w3schools.com/js/js_htmldom_eventlistener.asp
    - http://stackoverflow.com/questions/22402777/html-javascript-button-click-counter
    - http://www.w3schools.com/tags/tag_form.asp

    Checking out Tags
You can’t really check out a tag in Git, since they can’t be moved around. If you want to put a version of your repository in your working directory that looks like a specific tag, you can create a new branch at a specific tag with git checkout -b [branchname] [tagname]:

$ git checkout -b version2 v2.0.0
Switched to a new branch 'version2'
