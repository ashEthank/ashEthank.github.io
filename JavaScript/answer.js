$(() => {

  $.ajax({
      url: "https://www.jservice.io/api/clues",
      type: "GET",
      data: {
        "category" : sessionStorage.getItem('categoryId'),
        "value" : sessionStorage.getItem('value'),
      }
  }).done(function(data) {
    console.log(data);
    console.log(data[0].category.title);
    console.log(data[0].question);
    console.log(data[0].answer);
    console.log(data[1].answer);
    console.log(data[2].answer);
    console.log(data[3].answer);
    $('#titleCat').text(data[0].category.title);
    $('#clue').text(data[0].question);
    $('#firstAns').text(data[0].answer);
    $('#secondAns').text(data[1].answer);
    $('#thirdAns').text(data[2].answer);
    $('#fourthAns').text(data[3].answer);
  });

$('#firstAns').on('click', () => {
  console.log('Hello')
  sessionStorage.setItem('score', (parseInt(sessionStorage.getItem('score')) + parseInt(sessionStorage.getItem('value'))))
  // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/board.html')
  window.location.replace('https://ashethank.github.io/html/board.html')
  })

  $('#secondAns').on('click', () => {
    console.log('Hello')
    sessionStorage.setItem('score', (parseInt(sessionStorage.getItem('score')) - parseInt(sessionStorage.getItem('value'))))
    // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/board.html')
    window.location.replace('https://ashethank.github.io/html/board.html')
    })

    $('#thirdAns').on('click', () => {
      console.log('Hello')
      sessionStorage.setItem('score', (parseInt(sessionStorage.getItem('score')) - parseInt(sessionStorage.getItem('value'))))
      // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/board.html')
      window.location.replace('https://ashethank.github.io/html/board.html')
      })

      $('#fourthAns').on('click', () => {
        console.log('Hello')
        sessionStorage.setItem('score', (parseInt(sessionStorage.getItem('score')) - parseInt(sessionStorage.getItem('value'))))
        // window.location.replace('file:///Users/ethan/Desktop/Projects/ashEthank.github.io/html/board.html')
        window.location.replace('https://ashethank.github.io/html/board.html')
        })


})
