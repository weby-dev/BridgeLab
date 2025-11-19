# Bootstrap Assignment Collection

This folder contains 10 Bootstrap 5 examples (one per question). Each question is in its own folder (`Q1`..`Q10`) and contains:

- `index.html` — the page using Bootstrap 5 via CDN
- `styles.css` — custom CSS for small tweaks and transitions

Notes:
- Bootstrap is loaded from CDN in every page. The carousel (Q10) uses Bootstrap's JS bundle which is also loaded via CDN.
- To view a page, open the folder and open `index.html` in your browser (or use a simple static server).

Git steps to push these changes to a new branch named `Bootstrap`:

```bash
# from the workspace root
git checkout -b Bootstrap
git add assignmnet
git commit -m "Add Bootstrap assignment pages (Q1..Q10)"
git push -u origin Bootstrap
```

If you want me to run these commands here, I can provide them but I cannot push to your remote from this environment.
