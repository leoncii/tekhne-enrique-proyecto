//mongodb+srv://proyecto:proyecto1234@cluster0-yfxun.mongodb.net/messages
const Model = require('./model')

function addMessage(message) {
  // list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}

function getMessage(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterChat !== null) {
      filter = {
        chat: filterChat,
        // user: new RegExp(filterUser, 'i') //caseSensiteve
      }
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error)
          return false
        }
        resolve(populated)
      })
  })
}

async function updateText(id, message) {
  const messageFound = await Model.findOne({ _id: id })
  messageFound.message = message
  const newMessage = await messageFound.save()
  return newMessage
}

function removeMessage(id) {
  return Model.deleteOne({ _id: id })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
  //get
  //update
  // delete
}
