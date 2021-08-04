import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '/imports/api/CommentsCollection';

const insertComment = commentText => CommentsCollection.insert({ text: commentText });