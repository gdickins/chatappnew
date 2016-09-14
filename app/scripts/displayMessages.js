import $ from 'jquery';

function renderMessages() {
  $.ajax({
        url: 'https://tiny-za-server.herokuapp.com/collections/gabeChat',
        type: 'GET',
        success: (response) => {
          console.log(response);
          let $parentChatBox = $('.entire-chat-box');
            response.forEach(function(msgObj) {
                let $liMessage = $(`
                  <li>
                    ${msgObj.sender}
                  </li>
                  <li>
                    ${msgObj.msgBody}
                  </li>
                  <li>
                    ${msgObj.timeStamp}
                  </li>
                  `);
                $parentChatBox.prepend($liMessage);
            });
        }
    });
  }

export default renderMessages;
