import $ from 'jquery';
import session from './session';
import Message from './messages';
import renderMessages from './displayMessages.js';
import clearAPI from './delete.js';

let $loginPage = $('#login-page');
let $loginBtn = $('#login-btn');
let $loginInput = $('#login-input');

let $chatBox = $('#chatbox');
let $sendBtn = $('#send-btn');

$('#message-page').css('display', 'none');
$loginBtn.on('click', function(){
  let userName = $loginInput.val().trim();
  session.userName = userName;
  $loginPage.css('display', 'none');
  $('#message-page').css('display', 'flex');
  renderMessages();
});
$sendBtn.on('click', function(){
  let message = $chatBox.val().trim();
  let newMessage = new Message(session.userName, message);
  newMessage.save();
  console.log('newMessage created: ', newMessage);
});
