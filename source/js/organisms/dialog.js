// import PolyfillDialog from 'dialog-polyfill';

class Dialog {
	constructor(dialog) {
		this.dialog = dialog;
		this.openButton = document.querySelector('.js-dialog-open');
		this.closeButton = this.dialog.querySelector('.js-dialog-close');
		this.hash = this.dialog.getAttribute('data-hash');

		this.openDialog = this.openDialog.bind(this);
		this.closeDialogBackdrop = this.closeDialogBackdrop.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
		this.animateCloseDialog = this.animateCloseDialog.bind(this);

		// this.polyfillDialog();
		this.openDialogOnPageLoad();
        this.addEventListeners();
	}

	addEventListeners() {
		this.openButton.addEventListener('click', this.openDialog);
		this.closeButton.addEventListener('click', this.closeDialog);
		this.dialog.addEventListener('cancel', this.closeDialog);
		this.dialog.addEventListener('click', this.closeDialogBackdrop);
	}

	polyfillDialog() {
		// PolyfillDialog.registerDialog(this.dialog);
	}

	openDialogOnPageLoad() {
		// If the page url hash matches the `data-hash` attribute value of the dialog element, show the dialog
		if(window.location.hash === this.hash) {
			this.openDialog();
		}
	}

    openDialog(event) {
		// If the trigger to open the dialog has an event, prevent the default behaviour
		if(event) {
			event.preventDefault();
		}

		// Show the dialog
		this.dialog.showModal();

		// Add hash value to the URL
		window.location = this.hash;
    }

	closeDialogBackdrop() {
		const rect = this.dialog.getBoundingClientRect();
		const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

		// If the user has clicked the backdrop (not the dialog), close the dialog
		if(!isInDialog) {
			this.closeDialog();
		}
	}

    closeDialog(event) {
		// If the trigger to close the dialog has an event, prevent the default behaviour
		if(event) {
			event.preventDefault();
		}

		// Remove the hash value from the URL
		history.replaceState({}, document.title, '.');

		// Begin the close animation
		this.dialog.classList.add('is-hiding');
		this.dialog.addEventListener('animationend', this.animateCloseDialog);
    }

	animateCloseDialog() {
		// Once the CSS animation to close the dialog has finished, reset dialog state and close
		this.dialog.classList.remove('is-hiding');
		this.dialog.close();
		this.dialog.removeEventListener('animationend', this.animateCloseDialog);
	}
}

export default Dialog;