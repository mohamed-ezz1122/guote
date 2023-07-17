



var guotes=[
"“Be yourself; everyone else is already taken.”",
"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
"“So many books, so little time.”",
"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
"“You only live once, but if you do it right, once is enough.”― Mae West",
"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”― J.K. Rowling, Harry Potter and the Goblet of Fire"
    ]
 
function getPra() {

  var   randomGuotes=Math.floor(Math.random()*guotes.length)
  var   randomBack=guotes[randomGuotes]
 


 document.getElementById('demo').innerHTML=randomBack
  
  
  
}



// 