import { Template } from 'meteor/templating';
import { CommentsCollection } from "../api/CommentsCollection";
import './App.html';

Template.mainContainer.helpers({
  comments() {
    return CommentsCollection.find({}, { sort: { createdAt: -1 } });
  },
});

Template.form.events({
  "submit .comment-form"(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    // Insert a comment into the collection
    CommentsCollection.insert({
      text,
      owner: Meteor.user().emails[0].address,
      createdAt: new Date(), // current time,
      createdAtUi: new Date().toLocaleString(), // current time second format
    });

    // Clear form
    target.text.value = '';
  }
})