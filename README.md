# Scratch for Learning by Teaming Experiment

You can see the original documentation in the [original repo](https://github.com/scratchfoundation/scratch-gui). 
After building the project, add this to the `index.html`:

```html
  <script>

    window.addEventListener('message', event => {
            if (event.origin !== 'https://lksy-ea03bd92899e.herokuapp.com') {
                return;
            }

            if (event.data.command === 'saveProjectToDatabase') {
                if (typeof window.handleClickSaveToDatabase === 'function') {
                    window.handleClickSaveToDatabase(event.data.action);
                } 
            } else if (event.data.command === 'loadProjectFromDatabase') {
                window.handleLoadProjectFromDatabase(event.data.userId, event.data.taskId, event.data.saved);
            } else if (event.data.command === 'disableUnloadPrompt') {
                window.onbeforeunload = null;
            }
        });
  </script>

```