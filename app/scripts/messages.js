import $ from 'jquery';
import session from './session';
import moment from 'moment';

function Messages(sender, msgBody) {
    this.sender = sender;
    this.msgBody = msgBody;
    this.timeStamp = moment().format('MMM Do HH:MM:SS');
}

Messages.prototype.save = function() {
  console.log(this);
    $.ajax({
        url: 'https://tiny-za-server.herokuapp.com/collections/gabeChat',
        type: 'POST',
        data: JSON.stringify(this),
        contentType: 'application/json',
        success: response => {
          console.log(response);
            let $parentChatBox = $('.entire-chat-box');
            let $liMessage = $(`
            <li>
              <h3>${this.sender}</h3>
              <p class="messageBody">${this.msgBody}</p>
              <p class="timeStamP">${this.timeStamp}</p>
            </li>`);
            $parentChatBox.prepend($liMessage);
        }
    });
};

export default Messages;
