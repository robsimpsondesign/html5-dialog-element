import Dialog from './organisms/dialog';

// Check if the users browser supports these features
const enhance = 'querySelector' in document && 'addEventListener' in window && 'classList' in document.documentElement;

// If the users browser browser supports the features we need, remove the no-enhance class from the html element and execute our video JS
if(enhance) {
    document.documentElement.classList.remove('no-enhance');

    // Find all dialog organisms and create a new instance of the Dialog
    const dialogs = document.querySelectorAll('.js-dialog');
    Array.from(dialogs).forEach((dialog) => {
        const dialogEl = new Dialog(dialog);
    });
}
