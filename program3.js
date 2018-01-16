function getShortMessages(arrayMessages) {
        let output = arrayMessages.filter(function(obj) {
                                        if(obj.message.length<50)
                                                return obj;
                                                })
        return output.map( function(element) {
                                        return element.message;
                                        })


}


let arrayObj = [ {message: "hello there!"},
                 { message: "Whats up" },
                 { message: "dfghjkfyghouxhusxhusxuosbsu xbsuxbu qwertyuiopasdfghjkl    jkokzijiohxousxhugxugwux"}
                ]


console.log("Testing the base case :", getShortMessages(arrayObj))
~
