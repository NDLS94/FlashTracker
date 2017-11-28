import React from 'react';

export default ({ listId }) => (
	<datalist id={listId}>
		<option value="Conference talk" />
		<option value="Friends meeting" />
		<option value="New Year" />
		<option value="Christmas" />
		<option value="Wedding" />
		<option value="Party" />
		<option value="Birthday" /> // NEWLY ADDED
	</datalist>
);
