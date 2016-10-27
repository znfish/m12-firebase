// Main.js
$(function() {

	// Setup: Initialize Firebase using the configuration of your project
	var config = {
    	apiKey: "AIzaSyADfDcs4uu_hmbda44OvLw9x3JC_aEpr5g",
    	authDomain: "mm12-2.firebaseapp.com",
    	databaseURL: "https://mm12-2.firebaseio.com",
    	storageBucket: "mm12-2.appspot.com",
    	messagingSenderId: "699360607882"
  		};
  	firebase.initializeApp(config);

	// Set a reference to a "photos" point in your database
	var pic = firebase.database.ref('pic');


	// Create a variable to store the firebase storage object
	var storage = firebase.storage();
	var fileRef = storage.ref('filename');

	// Set listener: when an child is added, render each photo
	fileRef.on('childAdded').then(function(snapshot) {
		// Get the value of the data
		var data = snapshot.val();
		// Using jQuery, create a new img element with the URL of your data
		var img = $('<img>')
		// Append your img to your element with id photos
		$('#photo').append();
	});






	// Reading Data: Form submission

		// Get the file
		var file = $()


		// Create a reference on Firebase storage using the filename


		// Put a file in the specified location, then...

			// Get the download URL from the reference, then...

				// Push the URL as a new child into your data structure

		
